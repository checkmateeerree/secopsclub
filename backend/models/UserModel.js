const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    studentID: {
        type:String,
        unique:true,
    },
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    phoneNumber: String,
    gradYear: String,
    password: String,
    discordID: String,
    reason: String,
    experience: String,
    meetingsAttended: {
        type: Number, 
        default: 0
    },
    yearsInClub: {
        type: Number,
        default: 0
    },
    leadershipPosition: {
        type: String,
        default: ""
    },
    admin: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model("UserModel", UserSchema)

module.exports = User