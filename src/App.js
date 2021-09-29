import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Results from './components/Location/Results'; 
import useToken from './useToken';
import SiteNavbar from './components/Home/Navbar';
import GetProfile from './components/Profiles/GetProfile';
import PageNotFound from './components/Dashboard/PageNotFound';
 
function App() {

  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }


  return (
    <div className="wrapper">
      <SiteNavbar />
      <BrowserRouter>
      <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/GetProfile/:reg">
                        <GetProfile/> </Route>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/render-me-a-crim's-position/:reg">
                        <Results/>
                        </Route>
                 <Route path="/page-not-found" component={PageNotFound} />      
                    
            </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;