import React from 'react';
import './Home.css';
 
function Home(props) {

    const moveToSearch = () => {
        props.history.push('/dashboard');
    }


  return (
    <div id = 'welcome'>
      Lets Catch Some Bad Guys!
      <br />
      <button id= "logPage" onClick={moveToSearch}>Go To Secure Search</button>
  
    </div>
  );
}

export default Home