import React, { Component } from 'react';
// import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/esm/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';

export default class Boxing extends Component {
    constructor(props){
      super(props)
      this.state = {
      }
    }
    
      render() {
        return(
          <>
          <Nav
            activeKey="/boxing"
          >
            <Nav.Item>
              <Nav.Link href="/boxing">Boxing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/judo">Judo</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/karate">Karate</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/jiujitsu">Jiu Jitsu</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/wrestling">Wrestling</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/muaythai">Muay Thai</Nav.Link>
            </Nav.Item>            
          </Nav>

          <br />

          <div class="flex-container">
            <CardGroup>
            <Card style={{ width: '18rem' }}>
              <Card.Header>Offense</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Jab</ListGroup.Item>
                <ListGroup.Item>Cross</ListGroup.Item>
                <ListGroup.Item>Hook</ListGroup.Item>
                <ListGroup.Item>Uppercut</ListGroup.Item>
                <ListGroup.Item>Stockton Slap</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Header>Defense</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Blocking</ListGroup.Item>
                <ListGroup.Item>Slipping</ListGroup.Item>
                <ListGroup.Item>Bobbing</ListGroup.Item>
                <ListGroup.Item>Clinching</ListGroup.Item>
                <ListGroup.Item>Footwork</ListGroup.Item>
              </ListGroup>
            </Card>
            </CardGroup>
          </div>

          <br /><br />

            <h2>Notable Boxers in the UFC</h2>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Division</th>
                </tr>
              </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Max</td>
                    <td>Holloway</td>
                    <td>Featherweight</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Holly</td>
                    <td>Holm</td>
                    <td>Bantamweight</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jorge</td>
                    <td>Masvidal</td>
                    <td>Welterweight</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Conor</td>
                    <td>McGregor</td>
                    <td>Lightweight</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Stipe</td>
                    <td>Miocic</td>
                    <td>Heavyweight</td>
                  </tr>
                </tbody>
            </Table>
            </>
        )
    }
}