import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Header extends Component {
    constructor(props){
      super(props)
      this.state = {
      }
    }
    
      render() {
        return(
          <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/#home">UFCNerd</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/competitions">Competitions</Nav.Link>
            <Nav.Link href="/rankings">Rankings</Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <NavDropdown className={'nav-link'} activeClassName={'active'} title="Merchandise" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/clothing">Clothing</NavDropdown.Item>
                <NavDropdown.Item href="/stickers">Stickers</NavDropdown.Item>
                <NavDropdown.Item href="/mugs">Mugs</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              </NavDropdown>
            <Nav>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar>
        )
    }
}