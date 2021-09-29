import {useState, useEffect} from 'react'
import {useParams} from "react-router"
import axios from 'axios'
import Map from './Map'

const Results = () => {

    const params = useParams()
    const reg = params.reg
    const [profileData,setData]= useState("")
    const authToken = sessionStorage.getItem('token')
    const userToken = JSON.parse(authToken)
    const config = require('../../config/default.json');

    console.log(userToken?.token)
    
    useEffect(() => {

        const getProfileData = () => {
            axios.get(`http://${config.baseUrl}/getVehicleRegByPlate/${reg}`, {
                headers: {"Authorization" : `Bearer ${userToken?.token}`} 
              })
          .then(res => {
          const profileJSON = res.data
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

export default Results;