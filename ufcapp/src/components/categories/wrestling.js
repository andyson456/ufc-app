import React, { Component } from 'react';
// import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/esm/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';

export default class Wrestling extends Component {
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
              <Nav.Link href="/juijitsu">Jui Jitsu</Nav.Link>
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
                <ListGroup.Item>Single Leg</ListGroup.Item>
                <ListGroup.Item>Double Leg</ListGroup.Item>
                <ListGroup.Item>Hip Heist</ListGroup.Item>
                <ListGroup.Item>Ankle Pick</ListGroup.Item>
                <ListGroup.Item>Snap Down</ListGroup.Item>
                <ListGroup.Item>Bulldog Choke</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Header>Defense</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Sprawling</ListGroup.Item>
                <ListGroup.Item>Stance Technique</ListGroup.Item>
                <ListGroup.Item>Side Roll</ListGroup.Item>
                <ListGroup.Item>Huddle Up</ListGroup.Item>
              </ListGroup>
            </Card>
            </CardGroup>
          </div>

          <br /><br />

            <h2>Notable Wrestlers in the UFC</h2>
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
                    <td>Henry</td>
                    <td>Cejudo</td>
                    <td>Flyweight</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Daniel</td>
                    <td>Cormier</td>
                    <td>Light Heavyweight/Heavyweight</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Chad</td>
                    <td>Mendes</td>
                    <td>Featherweight</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Khabib</td>
                    <td>Nurmagomedov</td>
                    <td>Lightweight</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Yoel</td>
                    <td>Romero</td>
                    <td>Middleweight</td>
                  </tr>
                </tbody>
            </Table>
            </>
        )
    }
}