import React from 'react'
import {Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const NotFoundPage = () => {
    return (
        <div className="text-center" style={{"backgroundImage": "linear-gradient(rgb(240,240,240), gray)", "minHeight": "80vh"}}>
            <div style={{position: "absolute", "width": "100%", "top": "40%"}}>
                <h1>404: Page not found</h1>
                <LinkContainer to="/">
                    <Button variant="secondary">Go Home</Button>
                </LinkContainer>
            </div>
        </div>
    )
}
// ok well i don't eitehr pogg ive no clue how react.js works relaly
export default NotFoundPage
