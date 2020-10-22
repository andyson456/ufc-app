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
                <NavDropdown.Item href="/clothing">Clothing</NavDropdown.Item>
                <NavDropdown.Item href="/stickers">Stickers</NavDropdown.Item>
                <NavDropdown.Item href="/mugs">Mugs</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
        )
    }
}