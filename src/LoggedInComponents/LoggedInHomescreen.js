import React from 'react'
import ProfilePreview from './ProfilePreview'
import Schedule from './Schedule'

const LoggedInHomescreen = ({name}) => {
    return (
        <>
            <div className="py-3" style={{"minHeight": "82vh", "backgroundColor": "rgb(244, 244, 244)"}}>
                <Schedule />
                <ProfilePreview />
            </div>
        </>
    )
}

export default LoggedInHomescreen
