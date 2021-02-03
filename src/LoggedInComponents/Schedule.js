import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Container } from 'react-bootstrap'

const Schedule = () => {
    return (
        <Container>
            <div className="text-center" style={{"border": "1px solid black", "padding": "6vh"}}>
                <h1>Club Meeting Schedule</h1>
                
                    <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"

                    events={[
                        {title: "Club Meeting", date: "2021-02-03"},
                        {title: "Club Meeting", date: "2021-02-04"}
                    ]}
                    />
            </div>
        </Container>
        
      )
}

export default Schedule
