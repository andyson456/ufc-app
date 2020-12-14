import React, { Component } from 'react';
// import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/esm/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';

export default class Jiujitsu extends Component {
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
                <ListGroup.Item>Kimura</ListGroup.Item>
                <ListGroup.Item>Armbar</ListGroup.Item>
                <ListGroup.Item>Kneebar</ListGroup.Item>
                <ListGroup.Item>Guillotine</ListGroup.Item>
                <ListGroup.Item>Back Take</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Header>Defense</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Bridging</ListGroup.Item>
                <ListGroup.Item>Hip Escape</ListGroup.Item>
                <ListGroup.Item>Bobbing</ListGroup.Item>
                <ListGroup.Item>Guard</ListGroup.Item>
                <ListGroup.Item>Technical Standup</ListGroup.Item>
              </ListGroup>
            </Card>
            </CardGroup>
          </div>

          <br /><br />

            <h2>Notable Jiu Jitsu practitioners in the UFC</h2>
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
                    <td>Mackenzie</td>
                    <td>Dern</td>
                    <td>Strawweight</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Royce</td>
                    <td>Gracie</td>
                    <td>Welterweight</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Demian</td>
                    <td>Maia</td>
                    <td>Welterweight</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>BJ</td>
                    <td>Penn</td>
                    <td>Lightweight</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Ronaldo</td>
                    <td>Souza</td>
                    <td>Middleweight</td>
                  </tr>
                </tbody>
            </Table>
            </>
        )
    }
}