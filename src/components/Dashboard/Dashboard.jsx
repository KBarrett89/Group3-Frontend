import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './Dashboard.css';



 
function Dashboard(props) {
   
  
    const handleLogout = () => {    
     props.history.push('/login');
   }
   const RegSearch = () => {
 
     const [regSearch, setRegSearch] = useState("")
     const history = useHistory()
   
     const handleSubmit = (e) => {
         e.preventDefault()
         setRegSearch(e.target.value)
         history.push(/get-profile/ + RegSearch)
     }
 
 
 
  return (

    <div id='searchBar'>
      Search <br /><br />
      
      <div id= 'searchReg'>
        Vehicle Registration<br />
        <input type="text" value= {regSearch} onChange={e=>setRegSearch(e.target.value)} />
        <button type="submit" onClick={handleSubmit}>Search</button>
        <br />
        <p id = "eg"> E.G - AB12 3CD</p>
      </div>
      <br></br>
      <input id='logOff' type="button" onClick={handleLogout} value="Logout" />
    </div>

  
  );
  }
}
 
export default Dashboard;
  