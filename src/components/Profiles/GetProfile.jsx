import { useHistory } from 'react-router-dom'
import ProfileRecord from './ProfileRecord'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

const GetProfile = () => {

  const [profileData,setData]= useState("")
  const history = useHistory()
  const params = useParams()
  const reg = params.reg


  useEffect(() => {

    const getProfileData = () => {
    axios.get(`HTTP/getSuspect/${reg}`)
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
      history.push("/map-view/" + reg)
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