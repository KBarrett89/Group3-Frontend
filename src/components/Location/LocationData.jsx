const LocationData = ({location}) => {
    return (
        <tr>
            <td>{location.timeStamp}</td>
            <td>{location.streetName}</td>
            <td>{location.latitude}</td>
            <td>{location.longitude}</td>
        </tr>
    )
}

export default LocationData