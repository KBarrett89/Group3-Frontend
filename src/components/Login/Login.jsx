import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    const config = require('../../config/default.json');
    return fetch(`${config.baseUrl}/authenticate`, {
      method: 'POST',
      credentials:'include',
      mode:'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

   export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
  
    const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({
        username,
        password
      });
      setToken(token);
      window.location.href = '/';
    }


    return (
      <div id='LoginBar'>
      Secure Login<br /><br />
      <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          
          </label>
          <div>
            <button type="submit" >Submit</button>
          </div>
        </form>
        </div>
    );
  }
   
  
        
  
  
  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };