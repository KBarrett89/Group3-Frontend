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

    var cameras = {};

    arrayOfLocations.forEach(singleLoc => {
        if(cameras[[singleLoc.latitude, singleLoc.longitude]] == null){
            cameras[[singleLoc.latitude, singleLoc.longitude]] = singleLoc;
        }else {
            cameras[[singleLoc.latitude, singleLoc.longitude]].timeStamp += '\n' + singleLoc.timeStamp;
        }
    });

    console.log(cameras);
  
    return (
        <>
        
        <MapContainer id="mapbox" bounds={getLatLngBounds()} scrollWheelZoom={true}>
        
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                {Object.values(cameras).map(singleLoc => (
                  
                    <Marker key={uuid()} riseOnHover={true} position={[singleLoc.latitude, singleLoc.longitude]}>
                        <Popup autoClose={false} position={[singleLoc.latitude, singleLoc.longitude]}>                      
                        <div>
                            <h4><b>Address:</b> <br></br> {singleLoc.streetName}</h4>
                            <br></br>
                            <b>Timestamps:</b>
                            <div id="TS"> {singleLoc.timeStamp.split("\n").map(str => <p>{str}</p>)}</div>
                        </div>

                        </Popup>
                    </Marker>
                ))}

        </MapContainer>
        </>
    )
}

export default Map