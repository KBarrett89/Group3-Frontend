const LocationData = ({location}) => {
    return (
        <tr>
            <td>{location.timeStamp}</td>
            <td>{location.streetName}</td>
            
        </tr>
    )
}

export default LocationData