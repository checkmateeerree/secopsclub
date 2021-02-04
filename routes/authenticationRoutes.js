const express = require('express')
const bcryptjs = require('bcryptjs')
const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')
const requireLogin = require('../middleware/auth')
const nodemailer = require('nodemailer')

const router = express.Router()

router.post('/api/register', (req, res) => {
    const studentID = req.body.studentID
    const firstName = req.body.firstName.toLowerCase()
    const lastName = req.body.lastName.toLowerCase()
    const email = req.body.email.toLowerCase()
    const phoneNumber = req.body.phoneNumber
    const gradYear = req.body.gradYear
    const password = req.body.password
    const discordID = req.body.discordID
    const reason = req.body.reason
    const experience = req.body.experience
    const hashedPassword = bcryptjs.hashSync(password, 10)

    User.find({
        email
    }, (err, previousUsers) => {
        if (err) {
            return res.json({success: false, message: "Servor error"})
        } else if (previousUsers.length > 0){
            return res.json({success: false, message: "Account already exists"})
        }
    })

    const new_user = new User({
        studentID,
        firstName,
        lastName,
        email,
        phoneNumber,
        gradYear,
        password: hashedPassword,
        discordID,
        reason,
        experience
    })

    new_user.save((err, new_user_) => {
        if (err) return res.json({success: false, message:"Error: Duplicate values"})
        return res.json({success: true, message:`${new_user_.firstName} ${lastName} saved to User Database!`})
    })
})

router.post('/api/login', (req, res) => {
    const studentID = req.body.studentID
    const password = req.body.password

    if (!studentID || !password){
        return res.json({success: false, message: "You must fill out all of the required fields."})
    } 
    User.find({
        studentID
    }, (err, users) => {
        if (err){
            return res.json({
                success: false,
                message: "Server Error"
            })
        }
        if (users.length !== 1){
            return res.json({
                success: false,
                message: "Invalid Account"
            })
        }
        const user = users[0]
        bcryptjs.compare(password, user.password, function(err, result) {
            if (err){
                return res.json({
                    success: false,
                    message: "Invalid ID or Password"
                })
            }
            if (result){
                const token = jwt.sign(
                    {studentID: user.studentID, userId: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email, gradYear: user.gradYear, admin: user.admin, leadershipPosition: user.leadershipPosition, yearsInClub: user.yearsInClub, meetingsAttended: user.meetingsAttended},
                    process.env.JWT_SECRET,
                    { expiresIn: "1h" }
                  );
                return res.status(200).json({
                    token: token,
                    expiresIn: 3600,
                    userId: user._id
                  });
                }
            else {
              return res.json({
                  success: false, 
                  message: 'Invalid ID or Password'});
            }
          });
    })
})

router.get('/api/auth', requireLogin, async (req,res) => {
    try {
        const user = await User.findById(req.user._id).select("-password")
        return res.json(user);
    }catch (err) {
        console.log(err)
    }
})

router.put('/api/changepassword', async(req, res) => {
    const password = req.body.password
    const studentID = req.body.studentID
    const newPassword = req.body.newPassword
    if (!password || !studentID){
        return res.json({message: "invalid"})
    }
    const users = await User.find({studentID})
    if (users.length !== 1){
        return res.json({message: "invalid"})
    }
    const user = users[0]
    const correctPassword = await bcryptjs.compare(password, user.password)
    if (correctPassword){
        const newHashedPassword = await new Promise((resolve, reject) => {
            bcryptjs.hash(newPassword, 10, function(err, hash) {
              if (err) reject(err)
              resolve(hash)
            });
          })
          console.log(newHashedPassword)
        User.updateOne({studentID}, {$set: {password: newHashedPassword}}, (err, result) => {
            if (err){
                return res.json({err})
            }
            return result
        })
          
        return res.json({result: "Successful Authentication"})
    } else {
        return res.json({result: "invalid"})
    }
})

router.post('/api/forgotpassword', (req, res) => {
    const email = req.body.email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SECOPSEMAIL,
            pass: process.env.SECOPSPASSWORD
        }
    });
    
    const mailOptions = {
        from: 'secopslhs@gmail.com',
        to: email,
        subject: 'SecOps Password',
        html: '<p>Your password was sent to you upon registration. If you search our email in the Gmail search bar, you should be able to find it.</p>'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        return console.log(error);
        } else {
        return res.json({message:'Email sent: ' + info.response});
        }
    });
}) 

router.post('/api/registeredpassword', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.SECOPSEMAIL,
        pass: process.env.SECOPSPASSWORD
        }
    });
    
    const mailOptions = {
        from: 'secopslhs@gmail.com',
        to: email,
        subject: 'SecOps Password',
        text: 'Your SecOps password is ' + password + "." 
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        return console.log(error);
        } else {
        return res.json({message:'Email sent: ' + info.response});
        }
    });
}) 

router.get('/api/users', requireLogin, async(req, res) => {
    const users = await User.find()
    return res.json({message: users})
})

router.put('/api/changetotalmeetings', requireLogin, async(req, res) => {
    
    const totalMeetingsAttended = req.body.meetingsAttended_
    const result = await User.updateMany({}, {$set: {"meetingsAttended": totalMeetingsAttended}})
    return res.json({result})
})



module.exports = router

