import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './Dashboard.css';
import Results from './Results';


 
function Dashboard(props) {
   
  
    
    const [numberPlateSearch, setNumberPlateSearch] = useState("")
    const history = useHistory()

    const handleSearch = (e) => {
        e.preventDefault()
        setNumberPlateSearch(e.target.value) 
    }
    const handleConfirm = () => {
    history.push(/results/ + numberPlateSearch)

  }

  // handle click event of logout button
  const handleLogout = () => {    
    props.history.push('/');
  }
 
  return (

    <div id='searchBar'>
      Search <br /><br />
      
      <div id= 'searchReg'>
        Vehicle Registration<br />
        <input type="text" value= {numberPlateSearch} onChange={e=>setNumberPlateSearch(e.target.value)} />
        <button type="submit" onClick={handleConfirm}>Search</button>
        <br />
        <p id = "eg"> E.G - AB12 3CD</p>
      </div>
      <br></br>
      <input id='logOff' type="button" onClick={handleLogout} value="Logout" />
    </div>

  
  );
  }
 
 
export default Dashboard;