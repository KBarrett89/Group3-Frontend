import {Navbar, Nav} from 'react-bootstrap'
import './Home.css'



const Navigation = () => {

    return (
        <div id = "nav">
        <Navbar className="navbar" fixed="bottom">

          
          
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link id = "hyper" href="/">Home</Nav.Link> 
              <br/>
              <br/>
              <Nav.Link id = "hyper" href="/dashboard">Search Vehicles</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>      
        </div>
    

    )
}

export default Navigation;