import React from 'react'
import OurMission from '../components/OurMission'
import InterestedInJoining from '../components/InterestedInJoining'
import ObjectiveOfWebsite from '../components/ObjectiveOfWebsite'
const Homescreen = () => {
    return (
        <div style={{"backgroundImage": "linear-gradient(rgb(240,240,240), gray)"}}>
            <ObjectiveOfWebsite/>
            <OurMission/>
            <InterestedInJoining/>
        </div>
    )
}

export default Homescreen
