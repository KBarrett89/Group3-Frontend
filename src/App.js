import React from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
 

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