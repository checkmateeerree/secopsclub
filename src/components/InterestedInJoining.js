import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Container, Button } from 'react-bootstrap'
const InterestedInJoining = () => {
    return (
        <div className="text-center" style={{"paddingBottom": "5vh", "paddingTop": "2vh", "backgroundImage": "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finspirationhut.net%2Fwp-content%2Fuploads%2F2013%2F05%2F11.png&f=1&nofb=1)"}}>
            <Container style={{color: 'black'}}>
                <h2 style={{"paddingBottom": "1vh","paddingTop": "1vh"}}>Do you want to learn the art of Security Operations?</h2>
                <LinkContainer to="/registration">
                    <Button variant="secondary" size="lg">Register Now!</Button>
                </LinkContainer>
            </Container>
        </div>
    )
}

export default InterestedInJoining
