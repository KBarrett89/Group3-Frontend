import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Results from './components/Location/Results'; 
 


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
}

function App() {
  const token = getToken();

  if(!token) {
    return <Login setToken={setToken} />
  }


  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
      <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/results/:search" component={Results} />
            </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;