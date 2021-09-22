import React from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
 
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;