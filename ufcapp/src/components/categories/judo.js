import React, { Component } from 'react';
// import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/esm/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';


export default class Judo extends Component {
    constructor(props){
      super(props)
      this.state = {
      }
    }
    
      render() {
        return(
          <>
          <Nav
            activeKey="/judo"
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
                <ListGroup.Item>Nage-waza</ListGroup.Item>
                <ListGroup.Item>Koshi-waza</ListGroup.Item>
                <ListGroup.Item>Ashi-waza</ListGroup.Item>
                <ListGroup.Item>Sutemi-waza</ListGroup.Item>
                <ListGroup.Item>Katame-waza</ListGroup.Item>
                <ListGroup.Item>Atemi-waza</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Header>Defense</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Uke-waza</ListGroup.Item>
                <ListGroup.Item>Ukemi</ListGroup.Item>
                <ListGroup.Item>Kappo</ListGroup.Item>
              </ListGroup>
            </Card>
            </CardGroup>
          </div>

          <br /><br />

            <h2>Notable Judokas in the UFC</h2>
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
                    <td>Yoshihiro</td>
                    <td>Akiyama</td>
                    <td>Welterweight/Middleweight</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Dong</td>
                    <td>Hyun Kim</td>
                    <td>Welterweight</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Hector</td>
                    <td>Lombard</td>
                    <td>Middleweight</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Karo</td>
                    <td>Parisyan</td>
                    <td>Welterweight</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Ronda</td>
                    <td>Rousey</td>
                    <td>Bantamweight</td>
                  </tr>
                </tbody>
            </Table>
            </>
        )
    }
}