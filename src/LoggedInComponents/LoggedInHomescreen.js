import React from 'react'
import {Container} from 'react-bootstrap'

const LoggedInHomescreen = ({name}) => {
    return (
        <div className="py-3" style={{"minHeight": "82vh"}}>
            <Container>
                Welcome, {name}!
            </Container>
        </div>
    )
}

export default LoggedInHomescreen
