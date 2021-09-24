const LocationData = ({location}) => {
    return (
        <tr>
            <td>{location.timestamp}</td>
            <td>{location.streetName}</td>
            <td>{location.latitude}</td>
            <td>{location.longitude}</td>
        </tr>
    )
}

export default LocationData