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
    <h3>DannyMartin   </h3>
    
    <h3>KatieBarrett  </h3>
    
    <h3>SamuelKnapp   </h3>
  
    <h3>DarylBishop   </h3>
    
    <h3> RyanDonaghue   </h3>
  
  </div>
  </>
    );
  }
  
  
   
  export default Home;