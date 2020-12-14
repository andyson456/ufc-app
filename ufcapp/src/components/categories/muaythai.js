import React, { Component } from 'react';
// import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/esm/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';

export default class Muaythai extends Component {
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
                <ListGroup.Item>Spinning Backfist</ListGroup.Item>
                <ListGroup.Item>Superman Punch</ListGroup.Item>
                <ListGroup.Item>Elbow Slashes</ListGroup.Item>
                <ListGroup.Item>Knee Attacks</ListGroup.Item>
                <ListGroup.Item>Roundhouse Kick</ListGroup.Item>
                <ListGroup.Item>Axe Heel Kick</ListGroup.Item>
                <ListGroup.Item>Foot Thrust</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Header>Defense</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Clinch</ListGroup.Item>
                <ListGroup.Item>Parries</ListGroup.Item>
                <ListGroup.Item>Evasion</ListGroup.Item>
                <ListGroup.Item>Disruption</ListGroup.Item>
                <ListGroup.Item>Checks</ListGroup.Item>
              </ListGroup>
            </Card>
            </CardGroup>
          </div>

          <br /><br />

            <h2>Notable Muay Thai practitioners in the UFC</h2>
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
                    <td>Edson</td>
                    <td>Barboza</td>
                    <td>Lightweight</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Donald</td>
                    <td>Cerrone</td>
                    <td>Lightweight/Welterweight</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jon</td>
                    <td>Jones</td>
                    <td>Light Heavyweight/Heavyweight*</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Valentina</td>
                    <td>Shevchenko</td>
                    <td>Strawweight</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Anderson</td>
                    <td>Silva</td>
                    <td>Middleweight</td>
                  </tr>
                </tbody>
            </Table>
            </>
        )
    }
}