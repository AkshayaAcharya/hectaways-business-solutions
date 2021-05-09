import React from 'react'
import {
    // BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
//   import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
  import { Navbar,Nav} from 'react-bootstrap'


class Header extends React.Component{

    render(){
        return(
                <div className="row">
                    <div className="col-md-12 sticky-top">
                        {/* <Router basename={'/hectaways-business-solutions/'}> */}
                            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                                <Navbar.Brand href="#">Hectaways Business Solutions</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto">
                                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                                    <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            
                        {/* </Router> */}
                    </div>
                </div>
         )  
    }
}

export default Header;