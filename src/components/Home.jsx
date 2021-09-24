import React from 'react';
import './home.css';
 
function Home(props) {

    const moveToLogin = () => {
        props.history.push('/login');
    }


  return (
    <>
    <div id = 'welcome'>
      BAE12 Final Project
      <br />
      
      <button id= "logPage" onClick={moveToLogin}>Go To Secure Login</button>
  </div>
    
<div id = 'teamname'>
  <p id = 'team'> Team Three </p>
  </div>
  <div id ='names'>
  Danny Martin 
  <br />
  Katie Barrett 
  <br />
  Samuel Knapp 
  <br />
  Daryl Bishop 
  <br />
  Ryan Donaghue 
  <br /> 
  
</div>
</>
  );
}


 
export default Home;