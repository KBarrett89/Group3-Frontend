import {useState, useEffect} from 'react'
import {useParams} from "react-router"
import axios from 'axios'
import Map from './Map'



const Results = ({profileData}) => {

    console.log(profileData)

    const params = useParams()
    const reg = params.reg
    
    const authToken = sessionStorage.getItem('token')
    const userToken = JSON.parse(authToken)
    const config = require('../../config/default.json');
     
 
    console.log(userToken?.token)
    

        
    return (
        <div>
            {profileData && 
                <Map profileData={profileData}/>
            }
        </div>
    )
}

export default Results;