import { useHistory } from 'react-router-dom'
import ProfileRecord from './ProfileRecord'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import regSearch from '../Dashboard/Dashboard'


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
        {profileData && 
          <ProfileRecord profileData={profileData} buttonClick={buttonClick}/>
        }
      </>
  );
}


export default GetProfile