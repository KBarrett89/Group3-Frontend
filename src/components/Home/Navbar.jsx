import {Navbar, Nav} from 'react-bootstrap'
import './Home.css'



const Navigation = () => {

    return (
        <div id = "nav">
        <Navbar className="navbar" fixed="bottom">

          
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link> 
              <br/>
              <br/>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>      
        </div>
    

    )
}

export default Navigation;