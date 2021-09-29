import { useHistory } from 'react-router-dom'
import ProfileRecord from './ProfileRecord'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import '../Dashboard/Dashboard.css';
import regSearch from '../Dashboard/Dashboard'
import MapView from '../Location/MapView'



const GetProfile = () => {

  const [profileData,setData]= useState("")
  const params = useParams()
  const reg = params.reg
  const history = useHistory()


  useEffect(() => {
    

    const getProfileData = () => {
    axios.get(`http://54.76.136.203/getVehicleRegByPlate/${reg}`)
      .then(res => {
      const profileJSON = res.data
      console.log(profileJSON)
      setData(profileJSON)
      })
      .catch(err => {
        console.log(err)
        history.push("/page-not-found")
      })
    }
    getProfileData()
    }, [])

    const buttonClick = () => {
      history.push("/render-me-a-crim's-position/" + reg)
    }
    
    return (
      <>
      <div id = "nameDisplay">
        {profileData && 
          <ProfileRecord profileData={profileData} buttonClick={buttonClick}/>
        }
        </div>
        <MapView/>
      </>
  );
}


export default GetProfile