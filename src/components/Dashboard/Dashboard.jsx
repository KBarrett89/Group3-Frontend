import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './Dashboard.css';






  const RegSearch = () => {

    const [regSearch, setRegSearch] = useState("")
    const history = useHistory()

    const handleSubmit = (value) => {
        setRegSearch(value) 
        console.log(regSearch);
    }

    const handleClick = () => {
        history.push(/GetProfile/ + regSearch)
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

  