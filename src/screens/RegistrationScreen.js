import React, {useState, useEffect} from 'react'
import {Form, Button, Row, Col, Card, ListGroup, Container} from 'react-bootstrap'
import axios from 'axios'


const RegistrationScreen = () => {

    useEffect(() => { window.scrollTo(0, 0) }, [])
    let [studentID, changeID] = useState('')  
    let [firstName, changeFirstName] = useState('')  
    let [lastName, changeLastName] = useState('') 
    let [email, changeEmail] = useState('')
    let [phoneNumber, changePhoneNumber] = useState('')
    let [gradYear, changeGradYear] = useState('2021')
    let [discordID, changeDiscordID] = useState('')
    let [password, changePassword] = useState('')
    let [experience, changeExperience] = useState('')
    let [reason, changeReason] = useState('')
    let [confirmPassword, changeConfirmPassword] = useState('')


    const idListener = (e) => {
        changeID(e.target.value)
    }
    const firstNameListener = (e) => {
        changeFirstName(e.target.value)
    }
    const lastNameListener = (e) => {
        changeLastName(e.target.value)
    }
    const passwordListener = (e) => {
        changePassword(e.target.value)
    }
    const confirmPasswordListener = (e) => {
        changeConfirmPassword(e.target.value)
    }
    const discordIDListener = (e) => {
        changeDiscordID(e.target.value)
    }
    const emailListener = (e) => {
        changeEmail(e.target.value)
    }
    const phoneNumberListener = (e) => {
        changePhoneNumber(e.target.value)
    }
    const gradYearListener = (e) => {
        changeGradYear(e.target.value)
    }
    const experienceListener = (e) => {
        changeExperience(e.target.value)
    }
    const reasonListener = (e) => {
        changeReason(e.target.value)
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        if (!studentID || !firstName || !lastName || !email || !password ||!discordID || !reason){
            alert("You must fill out all fields besides Phone Number or Experience (Those may be optional)")
            return
        }
        const isnum = /^\d+$/.test(studentID);
        if (studentID.length !== 6 || !isnum){
            alert('Student ID is invalid')
            return
        }
        const isPhoneNum = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(phoneNumber)
        if ((!isPhoneNum)){
            if (phoneNumber.length !== 0){
            alert("Phone Number is invalid")
            return
            }

        }
        if (!discordID.includes("#") || discordID.split("#")[1].length !== 4){
            alert("Discord ID must be your username, followed by the # sign and 4 numbers after")
            return
        }

        if (password !== confirmPassword){
            alert("Your Password and Password Confirmation do not match")
            return
        }
        try {
            axios.post('http://173.70.190.90:7777/api/register', 
                {"studentID": studentID, 
                "firstName": firstName, 
                "lastName": lastName, 
                "email": email, 
                "phoneNumber": phoneNumber, 
                "gradYear": gradYear,
                "password": password,
                "discordID": discordID,
                "reason": reason,
                "experience": experience}
            ).then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })

            const res = await axios.post("http://173.70.190.90:7777/api/registeredpassword", {email, password})
            console.log(res)
            
            window.location.href = "/login";
            
        }

        catch (error){
            console.log(error)
        } 
    }
    const buttonHackingHandler = () => {
        window.location.href = "https://hostingtribunal.com/blog/hacking-statistics/"
    } 
    return (
        
        <div>
            <Container>
            <h2 className="text-center py-3">Register for Security Ops Club!</h2>
            <Form onSubmit={handleSubmit} >
                <Row style={{"position": "absolute", left: "51.5vw", top: "15vw"}}>
                    <Card bg="primary" text="white" style={{"width": "34.5vw"}}>
                        <Card.Header>Fun Facts About Hacking</Card.Header>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item variant="danger">A malicious hacker attack occurs once every 39 seconds.</ListGroup.Item>
                            <ListGroup.Item variant="danger">95% of cybersecurity breaches are due to human error.</ListGroup.Item>
                            <ListGroup.Item variant="danger">4 million cybersecurity jobs are currently unfilled worldwide.</ListGroup.Item>
                            <ListGroup.Item variant="danger">Since COVID-19, the FBI reported a 300% increase in cybercrimes.</ListGroup.Item>
                            <ListGroup.Item variant="danger">Human intelligence and comprehension is the best defense against phishing attacks.</ListGroup.Item>
                        </ListGroup>
                        
                        <Button onClick={buttonHackingHandler} variant="success" size="lg">40 Statistics About Hacking</Button>
            
                    </Card>
                </Row>
                <Row>
                    <Col xs={3}>
                        <Form.Group controlId="formBasicText2">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control onChange={firstNameListener} type="text" placeholder="Enter First Name" required/>
                        </Form.Group>
                    </Col>
                    <Col xs={3}>
                        <Form.Group controlId="formBasicText3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control onChange={lastNameListener}type="text" placeholder="Enter Last Name" required/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col xs={2}>
                        <Form.Group controlId="formBasicText1">
                            <Form.Label>Student ID</Form.Label>
                            <Form.Control onChange={idListener} type="text" placeholder="Enter ID" required/>
                        </Form.Group>
                    </Col>
                    <Col xs={4}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={emailListener} type="email" placeholder="Enter email" required/>
                        </Form.Group>
                    </Col>
                </Row> 
                <Row>
                    <Col xs={3}>
                        <Form.Group controlId="formBasicText5">
                            <Form.Label>Discord Tag</Form.Label>
                            <Form.Control onChange={discordIDListener} type="text" placeholder="Enter DiscordID" required/>
                        </Form.Group>
                    </Col>
                    <Col xs={3}>
                        <Form.Group controlId="formBasicText6">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control onChange={phoneNumberListener} type="text" placeholder="Enter Phone Number"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={passwordListener} type="password" placeholder="Enter Password" required/>
                        </Form.Group>
                    </Col>
                    <Col xs={3}>
                        <Form.Group controlId="formBasicPassword2">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control onChange={confirmPasswordListener} type="password" placeholder="Confirm Password" required/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs="auto">
                        <Form.Group controlId="RegistrationForm.ControlSelect1">
                            <Form.Label>Graduation Year</Form.Label>
                            <Form.Control onChange={gradYearListener} as="select">
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                
                <Row>
                    <Col xs="auto">
                        <Form.Group>
                            <Form.Label>Have you learned any Security skills? (Not Required)</Form.Label>
                            <Form.Check type="radio" name="radios" label="Yes" value="yes" id="formExperienceYes"/>         
                            <Form.Check type="radio" name="radios" label="No" value="no" id="formExperienceNo"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="RegistrationForm.ControlTextarea1" style={{"width": "100%"}}>
                            <Form.Label>If you answered yes to the previous question, please elaborate on your experience.</Form.Label>
                            <Form.Control onChange={experienceListener} as="textarea" rows={6}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="RegistrationForm.ControlTextarea2">
                            <Form.Label>Why do you want to join the Security Ops Club?</Form.Label>
                            <Form.Control onChange={reasonListener} as="textarea" rows={6} required/>
                        </Form.Group> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" size="lg" type="submit">
                            Register 
                        </Button>
                    </Col>
                </Row>
               
                
            </Form>
            </Container>
        </div>
    )
}

export default RegistrationScreen
