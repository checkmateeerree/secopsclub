import React from 'react'
import {Container, Table, Button} from 'react-bootstrap'
const DonationScreen = () => {
    const redirectToPaypal = () => {
        window.location = "https://paypal.me/DiscordConcord"
    }
    return (
        <div className="py-3" style={{"backgroundColor": "rgb(244,244,244)"}}>
            <Container>
                <h2 className="text-center"><strong>Please Consider Donating to Our Club</strong></h2>

                <div  className="text-center">
                    <Button variant="success" size="lg" onClick={redirectToPaypal}>Donate Using Paypal!</Button>
                </div>
          
                <h3 className="text-center py-3"><strong>Our Club is not able to run for free.</strong></h3>
                <p>Some expenses that are necessary for our club's success and mission of providing students with an easy to learn environment include Raspberry Pis, USBs and SD cards, Cables, and Arduinos. </p>
                <p>We have created an expense table below to demonstrate the necessary prices we must pay to run this club.</p>
                
           
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Resource</th>
                    <th>Resource Use</th>
                    <th>Expense For One</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Raspberry Pi B+</td>
                    <td>The Security Ops club will need computers that run Linux, since school laptops may not be able to boot up Linux. One is a must, but a greater supply of them would immensely benefit our club’s learning experience.</td>
                    <td>$35</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>USBs and SD cards</td>
                    <td>In order to transfer files and explain how to install a new operating system (not for school laptops), USBs are required. <br/> 1 USB: Kali Linux 1 SD Card: Kali Linux
</td>
                    <td>$20</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Cables</td>
                    <td>Ethernet, USB, etc</td>
                    <td>$15</td>
                    </tr>
                    <tr>
                    <td>4</td>
                    <td>Arduino</td>
                    <td>Hardware hacking basics</td>
                    <td>$40</td>
                    </tr>
                    <tr>
                    <td>5</td>
                    <td>General Items</td>
                    <td>Items that may be desirable to the club but not absolutely necessary (cheap old routers, locks, wireless adapters, tshirts, organizers, anything at all)
</td>
                    <td>TBD</td>
                    </tr>
                </tbody>
            </Table>
            </Container>
        </div>
    )
}

export default DonationScreen
