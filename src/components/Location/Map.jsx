import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './map.css'

const Map= ({profileData}) => {
  const arrayOfLocations = profileData.locations



const getLatLngBounds = () => {
  const boundingArray = [];
  {arrayOfLocations.map(singleLoc => (
          boundingArray.push([singleLoc.latitude, singleLoc.longitude])
      )
  )}
  return  [boundingArray];
}
return(
  <>
  <MapContainer id= "mapbox" bounds={getLatLngBounds()} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

    />
    {arrayOfLocations.map(singleLoc => (
    <Marker position={[singleLoc.latitude, singleLoc.longitude]}>
      <Popup position={[singleLoc.latitude, singleLoc.longitude]}>
        <div>
            <h4><b>Address:</b> <br></br> {singleLoc.streetName}</h4>
            <br></br>
            <h5><b>Timestamp:</b> <br></br> {singleLoc.timestamp}</h5>
        </div>
      </Popup>
    </Marker>
    )
    )
    }

  </MapContainer>
  </>
)
}

export default Map;