import { useHistory } from 'react-router-dom'
import ProfileRecord from './ProfileRecord'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import '../Dashboard/Dashboard.css';
import Results from '../Location/Results.jsx'



const GetProfile = () => {

  const [profileData,setData]= useState("")
  const params = useParams()
  const reg = params.reg
  const history = useHistory()
  const authToken = sessionStorage.getItem('token')
    const userToken = JSON.parse(authToken)


  useEffect(() => {
    

    const getProfileData = () => {
      axios.get(`http://localhost:8080/getVehicleRegByPlate/${reg}`, {
        headers: {"Authorization" : `Bearer ${userToken?.token}`},
        withCredentials:true
      })  
      .then(res => {
        debugger
      const profileJSON = res.data
      console.log(profileJSON)
      setData(profileJSON)
      })
      .catch(err => {
        debugger
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
        <Results/>
      </>
  );
}


export default GetProfile