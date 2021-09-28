import {useState, useEffect} from 'react'
import {useParams} from "react-router"
import axios from 'axios'
import Map from './Map'

const MapView = () => {

    const params = useParams()
    const reg = params.reg
    const [profileData,setData]= useState("")
    
    useEffect(() => {

        const getProfileData = () => {
            axios.get(`http://54.76.136.203/getVehicleRegByPlate/${reg}`)
            .then(res => {
            const profileJSON = res.data
            console.log(profileJSON)
            setData(profileJSON)
            })
          .catch(err => console.log(err))
        }
        getProfileData()
        }, [])

    return (
        <div>
            {profileData && 
                <Map profileData={profileData}/>
            }
        </div>
    )
}

export default MapView;