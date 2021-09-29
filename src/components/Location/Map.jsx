import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Map.css'
import uuid from 'react-uuid'



const Map = ({profileData}) => {
    const arrayOfLocations = profileData.sightingList

    const getLatLngBounds = () => {
        const boundingArray = [];
        {arrayOfLocations.map(singleLoc => (
                boundingArray.push([singleLoc.latitude, singleLoc.longitude])
            )
        )}
        return  [boundingArray];

      } 

  
    return (
        <>
        
        
        <MapContainer id="mapbox" bounds={getLatLngBounds()} scrollWheelZoom={true}>
        
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {arrayOfLocations.map(singleLoc => (
                    <Marker key={uuid()} position={[singleLoc.latitude, singleLoc.longitude]}>
                    
                        <Popup position={[singleLoc.latitude, singleLoc.longitude]}>
                      
                        <div>
                            <h4><b>Address:</b> <br></br> {singleLoc.streetName}</h4>
                            <br></br>
                            <h5><b>Timestamp:</b> <br></br> {singleLoc.timeStamp}</h5>
                        </div>

                        </Popup>
                    </Marker>
                ))}

        </MapContainer>
        </>
    )
}

export default Map