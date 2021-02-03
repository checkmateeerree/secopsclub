import React, {useState} from 'react'
import {Container, Card, Row, Col, Button, Form, Toast} from 'react-bootstrap'
import axios from 'axios'

const LoggedInProfile = ({firstName, lastName, email, gradYear, meetingsAttended, yearsInClub, studentID, leadershipPosition}) => {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [showA, setShowA] = useState(false)

    const toggleShowA = () => {
        setShowA(!showA)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        axios.put("http://173.70.190.90:7777/api/changepassword", {password: oldPassword, studentID, newPassword}).then((res) => {
            if (res.data.result === "Successful Authentication"){
                toggleShowA()
            }else {
                alert("Invalid Password")
            }
            setTimeout(() => {window.location.reload()}, 1000)
          
        }
        )
    }
    return (
        <div className="py-3" style={{"minHeight": "80vh"}}>
            <Toast show={showA} onClose={toggleShowA} style={{"z-index": "3", "margin-left": "50vw"}}>
                <Toast.Header>
                    <strong className="mr-auto">Security Ops Club</strong>
                    <small>1 min ago</small>
                </Toast.Header>
                <Toast.Body>You have successfully changed your password!</Toast.Body>
            </Toast>
            <Container>
                <Row>
                    <Col xs="auto">
                        <Card style={{ width: '40vw'}}>
                            <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.vanasconstruction.com%2Fwp-content%2Fuploads%2F2014%2F10%2FPicture-1-LHS-NIGHT_ENTRANCE.jpg&f=1&nofb=1" />
                            <Card.Body>
                                <Card.Title>Name: {firstName} {lastName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Student ID: {studentID}</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">Email: {email}</Card.Subtitle>
                                <Card.Text>
                                    Graduating in {gradYear}!<br />
                                    Total meetings attended: {meetingsAttended}<br />
                                    Years in club: {yearsInClub} <br />
                                    {leadershipPosition ? "Leadership position: " + leadershipPosition : ""}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <div style={{padding: "6vw", border: "1px solid gray", position: "absolute", "top": "8%", width: "90%"}}>
                            <h4><strong>Change Password</strong></h4>
                            <Form onSubmit={submitHandler} style={{width: "100%",  height: "100%"}}>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Previous Password</Form.Label>
                                    <Form.Control onChange={(e) => setOldPassword(e.target.value)} type="password" placeholder="Enter Previous Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword1">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control onChange={(e) => setNewPassword(e.target.value)} type="password" placeholder="Enter New Password" />
                                </Form.Group>
                                
                                <Button size="lg" variant="primary" type="submit">
                                    Change Password
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}


export default LoggedInProfile
