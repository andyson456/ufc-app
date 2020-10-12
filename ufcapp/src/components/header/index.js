import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { Component } from 'react';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Header extends Component {
    constructor(props){
      super(props)
      this.state = {
      }
    }
    
      render() {
        return(
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/#home">UFCNerd</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Link className={'nav-link'} activeClassName={'active'} to="/competitions"><Tab label="Competitions" /></Link>
            <Link className={'nav-link'} activeClassName={'active'} to="/rankings"><Tab label="Rankings" /></Link>
              <NavDropdown className={'nav-link'} activeClassName={'active'} title="Merchandise" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
        )
    }
}