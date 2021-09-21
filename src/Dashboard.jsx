import React, { useState } from 'react';
import './Dashboard.css';
 
function Dashboard(props) {
   const registration = useSearchInput('');
  
   
   

 
  // handle click event of logout button
  const handleLogout = () => {    
    props.history.push('/login');
  }
 
  return (
    <div id='searchBar'>
      Search Crims<br /><br />
      
      <div id= 'searchReg'>
        Vehicle Registration<br />
        <input type="text" {...registration} autoComplete="registration" />
        <button type="submit">Search</button>
      </div>
      <br></br>
      <input id='logOff' type="button" onClick={handleLogout} value="Logout" />
    </div>


  );
}

const useSearchInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const handleChange = e => {
        setValue(e.target.value);
      }
    }
 
export default Dashboard;