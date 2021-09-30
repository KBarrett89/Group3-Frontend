import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './Dashboard.css';
import axios from 'axios'



  const RegSearch = () => {
  const [data, setData] = useState("")
  const [regSearch, setRegSearch] = useState("")
  const history = useHistory()
  const authToken = sessionStorage.getItem('token')
  const userToken = JSON.parse(authToken)
  const config = require('../../config/default.json');


    const handleSubmit = (value) => {
        setRegSearch(value) 
        console.log(regSearch);
    }

    const handleClick = () => {
        //history.push(/GetProfile/ + regSearch)

        const request = () => {
          axios.get(`${config.baseUrl}/getVehicleRegByPlate/${regSearch}`, {
          headers: {"Authorization" : `Bearer ${userToken?.token}`},
          withCredentials:true 
        })  
        .then(res => {
        const profileJSON = res.data
        console.log(profileJSON)
        setData(profileJSON)
        
        })
        .catch(err => {
          console.log(err)
          history.push("/page-not-found")
        })}
        request().then(res=>{


        console.log(data)
      if(res.sightingList && res.sightingList.length !== 0){

        history.push(/GetProfile/ + regSearch)
      
      }else { 
        
      }
    }

  }
  
 
  return (

    <div id='searchBar'>
       <br /><br />
      <div id= 'searchReg'>
        Vehicle Registration<br />
        <input type="text" value= {regSearch} onChange={e=>handleSubmit(e.target.value)} />
        <button type="submit" onClick={handleClick}>Search</button>
        <br />
        <p id = "eg"> E.G - AB12 3CD</p>
      </div>
      <br></br>
      
    </div>
   
  
  );
 
  }

  export default RegSearch;

  