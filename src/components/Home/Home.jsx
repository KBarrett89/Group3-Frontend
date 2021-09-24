import React from 'react';
import './Home.css';
 
function Home(props) {

    const moveToLogin = () => {
        props.history.push('/login');
    }


  return (
    <div id = 'welcome'>
      Lets Catch Some Bad Guys!
      <br />
      <button id= "logPage" onClick={moveToLogin}>Go To Secure Login</button>
  
    </div>
  );
}