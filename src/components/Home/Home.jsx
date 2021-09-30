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
    <h3 id ="dm"> Danny Martin   </h3>
    
    <h3 id ="kb"> Katie Barrett  </h3>
    
    <h3 id ="sk"> Samuel Knapp   </h3>
  
    <h3 id ="db"> Daryl Bishop   </h3>
    
    <h3 id ="rd"> Ryan Donaghue   </h3>
  
  </div>
  </>
    );
  }
  
  
   
  export default Home;