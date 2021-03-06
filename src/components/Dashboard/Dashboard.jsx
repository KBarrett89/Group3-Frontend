import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './Dashboard.css';
import axios from 'axios'
import swal from 'sweetalert';


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

    const handleClick = async () => {
        //history.push(/GetProfile/ + regSearch)

        const res = async () => {await axios.get(`${config.baseUrl}/getVehicleRegByPlate/${regSearch}`, {
          headers: {"Authorization" : `Bearer ${userToken?.token}`},
          withCredentials:true 
        })  
        .then(res => {
        const profileJSON = res.data
        console.log(profileJSON)
        setData(profileJSON)
        
        if(profileJSON.person.forename !== null){

          history.push(/GetProfile/ + regSearch)
          
        }
        else { 
          swal({
            title: "Invalid Search",
            text: "Your query does not match a license plate on record.",
            type: "warning"
        })
          console.log("failed")
        }
        
        })
        .catch(err => {
          console.log(err)
          history.push("/page-not-found")
        })
        }
       
        await res();

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

  