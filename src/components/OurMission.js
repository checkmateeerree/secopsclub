import React from 'react'
import { Container, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const OurMission = () => {
    return (
        <div style={{"paddingTop": "3vh", "paddingBottom": "4vh", "backgroundImage": "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F09%2FFree-Download-All-White-Background.jpg&f=1&nofb=1)", "background-size": "cover"}}>
            <Container style={{color: 'black'}}>
                <h2 className="text-center">Our Mission</h2>
                <p>We strive to raise awareness and knowledge of the field of security within the Lancer community through a friendly and safe learning environment.</p>
                <p> Malicious hackers are causing irreversible yet preventable damage everyday and few people know what these hackers are doing and how to protect themselves.</p>
                <p>This club will teach members the theory and applications of hacking and ethics/laws surrounding the fields of hacking.
                Alongside helping our members learn essential skills, they'll be able to make friends with each other, get to know each other, and have fun. This isn't just an academic/educational club; it's also meant to be a social one.</p>      
                <div className="text-center">
                    <LinkContainer to="/doc/0">
                        <Button variant="dark" size="lg">Learn More</Button>  
                    </LinkContainer>
                </div>
            </Container>
        </div>
    )
}

export default OurMission
