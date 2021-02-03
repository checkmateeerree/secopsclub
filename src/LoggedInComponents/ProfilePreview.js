import React from 'react'
import {Container, Card, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const ProfilePreview = () => {
    return (
        <Container>
            <div className="py-3" style={{color: "black", "text-align": "center"}}>
            <Card style={{ width: '100%'}}>
                        <Card.Header><h1>Profile Preview</h1></Card.Header>
                        <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.vanasconstruction.com%2Fwp-content%2Fuploads%2F2014%2F10%2FPicture-1-LHS-NIGHT_ENTRANCE.jpg&f=1&nofb=1" />
                            <Card.Body>
                                <Card.Title>Name: John Doe</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Student ID: 000000</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">Email: john.doe@lps-students.org</Card.Subtitle>
                                <Card.Text>
                                    Graduating in 2024!<br />
                                    Total meetings attended: 0<br />
                                    Years in club: 0 <br />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                        <div>
                            <LinkContainer to="/profile">
                                <Button size="lg" variant="dark">Click here to go to your Profile Page!</Button>
                            </LinkContainer>
                        </div>
                        
                
            </div>
        </Container>
    )
}

export default ProfilePreview
