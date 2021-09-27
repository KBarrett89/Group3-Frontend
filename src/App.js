import React from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
 
import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Results from './components/Results';
import Navigation from './components/Navbar';



 
function App() {
  return (
    <div className="App">
      <Navigation/>
      <BrowserRouter>
        <div>
          <div className="header">
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/results/:search" component={Results} />
              
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;