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
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router';
import axios from 'axios';

 
function App() {

  const history = useHistory()
  const config = require('./config/default.json');

  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }
    
  const handleLogout = () => {
    sessionStorage.removeItem('token');

    axios.get(`${config.baseUrl}/logout`
    )
    .then(res => {
    const loggingOut = res.data
    console.log(loggingOut)
    })
    .catch(err => {
      console.log(err)
      history.push("/page-not-found")
    })

    window.location.href = '/login';
    
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
              <Route path="/page-not-found" component={PageNotFound} />
              <Route path="/render-me-a-crim's-position/:reg">
                        <Results/>
                        </Route>
                       
                    
            </Switch>
      </BrowserRouter>

      <Button id="logout" variant="primary" size="lg" block onClick={handleLogout}>Logout</Button>{' '}

    </div>
  );
}

export default App;