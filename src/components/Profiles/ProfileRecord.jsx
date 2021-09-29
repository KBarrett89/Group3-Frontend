import { Accordion, Card, ListGroup, Table } from 'react-bootstrap'
import LocationData from '../Location/LocationData.jsx'
import '../Dashboard/Dashboard.css';


const ProfileRecord = ({ profileData, buttonClick }) => {

    const locationData = profileData.sightingList.map((location, index) => {
        return (
            <LocationData
                key={index}
                location={location} />
        )
    })

    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Card id = "vinfo">
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <h3>Vehicle Information</h3>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item><b>Registration Number:</b> {profileData.vehicle.vehicleRegistrationNO}</ListGroup.Item>
                                <ListGroup.Item><b>Registration Date:</b> {profileData.vehicle.registrationDate}</ListGroup.Item>
                                <ListGroup.Item><b>Make:</b> {profileData.vehicle.make}</ListGroup.Item>
                                <ListGroup.Item><b>Model:</b> {profileData.vehicle.model}</ListGroup.Item>
                                <ListGroup.Item><b>Colour:</b> {profileData.vehicle.colour}</ListGroup.Item>

                            </ListGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <br/>
                <Card id = "pinfo">
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <h3>Person Information</h3>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item><b>Forename(s):</b> {profileData.person.forename}</ListGroup.Item>
                                <ListGroup.Item><b>Surname: </b>{profileData.person.surname}</ListGroup.Item>
                                <ListGroup.Item><b>Address:</b> {profileData.person.address}</ListGroup.Item>
                                <ListGroup.Item><b>Date of Birth:</b> {profileData.person.dateOfBirth}</ListGroup.Item>
                                <ListGroup.Item><b>Place of Birth:</b> {profileData.person.placeOfBirth}</ListGroup.Item>
                                <ListGroup.Item><b>Citizen ID:</b> {profileData.person.citizenID}</ListGroup.Item>
                                <ListGroup.Item><b>Driving Licence ID:</b> {profileData.person.driverLicenceID}</ListGroup.Item>
                                <ListGroup.Item><b>Phone Number:</b> {profileData.person.phoneNumber}</ListGroup.Item>
                            
                            </ListGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                 <Card id = "timeloc">

                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            <h3>Location Data</h3>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Time</th>
                                        <th>Location</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {locationData}
                                </tbody>
                            </Table>
                            
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                   </Accordion>
        </div>
    )
}




export default ProfileRecord