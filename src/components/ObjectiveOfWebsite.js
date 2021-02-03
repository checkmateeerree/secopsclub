import React from 'react'
import { Container } from 'react-bootstrap'

const ObjectiveOfWebsite = () => {
    return (
        <div style={{"paddingBottom": "1vh", "paddingTop": "2vh", "backgroundImage": "url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.designbolts.com%2Fwp-content%2Fuploads%2F2012%2F12%2FWhite-wall-White-Seamless-Pattern-For-Website-Background.jpg&f=1&nofb=1)"}}>
            <Container style={{color: 'black'}}>
                <h2 className="text-center" >Club Oversight</h2>
                <p>Malicious hackers do far more damage than the conventional forms of attacks. A single bullet may kill a person, but a single security vulnerability could destroy businesses, lives, and essential systems like power grids, sewage systems, etc.</p>
                <p>The purpose of the Security Ops Club is to educate members about the history of these vulnerabilities and their applications, the government's use of these vulnerabilities, how to perform such attacks in a safe manner, and how to secure a system against them. </p>
                <p>Topics discussed within this website: Fields of study, risks of the club and our solutions, staff/leadership descriptions, funding, comparison to other “similar” clubs. </p>     
            </Container>
        </div>
    )
}

export default ObjectiveOfWebsite
