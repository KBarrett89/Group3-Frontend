import React from 'react';
import './Home.css';
 
function Home(props) {

    const moveToSearch = () => {
        props.history.push('/dashboard');
    }


    return (
      <>
      <div id = 'welcome'>
        BAE12 Final Project
        <br />
        
        <button id= "logPage" onClick={moveToSearch}>Go To Secure Search</button>
    </div>
      
  <div id = 'teamname'>
    <p id = 'team'> Team Three </p>
    </div>
  
    <div id ='names'>
    <h>DannyMartin   </h>
    
    <h>KatieBarrett  </h>
    
    <h>SamuelKnapp   </h>
  
    <h>DarylBishop   </h>
    
    <h>RyanDonaghue   </h>
  
  </div>
  </>
    );
  }
  
  
   
  export default Home;