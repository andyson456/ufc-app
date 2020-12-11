import React, { Component } from 'react';
// import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/esm/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';

export default class Karate extends Component {
    constructor(props){
      super(props)
      this.state = {
      }
    }
    
      render() {
        return(
          <>
          <Nav
            activeKey="/karate"
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
                <ListGroup.Item>Ude Uchi</ListGroup.Item>
                <ListGroup.Item>Ura Ken</ListGroup.Item>
                <ListGroup.Item>Ashi Barai</ListGroup.Item>
                <ListGroup.Item>Gyaku Mawashi Geri</ListGroup.Item>
                <ListGroup.Item>Hook Kick</ListGroup.Item>
                <ListGroup.Item>Mae Geri</ListGroup.Item>
                <ListGroup.Item>Mawashi Geri</ListGroup.Item>
                <ListGroup.Item>Kansetsu Geri</ListGroup.Item>
                <ListGroup.Item>Hiji Ate</ListGroup.Item>
                <ListGroup.Item>Morote Zuki</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Header>Defense</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Age-Uke</ListGroup.Item>
                <ListGroup.Item>Chudan-Uke</ListGroup.Item>
                <ListGroup.Item>Gedan-Barai</ListGroup.Item>
                <ListGroup.Item>Juji-Uke</ListGroup.Item>
                <ListGroup.Item>Morote-Uke</ListGroup.Item>
                <ListGroup.Item>Shuto-Uke</ListGroup.Item>
                <ListGroup.Item>Soto-Uke</ListGroup.Item>
                <ListGroup.Item>Sukui-Uke</ListGroup.Item>
                <ListGroup.Item>Sune-Uke</ListGroup.Item>
                <ListGroup.Item>Teisho-Uke</ListGroup.Item>
                <ListGroup.Item>Uchi-Uke</ListGroup.Item>
              </ListGroup>
            </Card>
            </CardGroup>
          </div>

          <br /><br />

            <h2>Notable Karatekas in the UFC</h2>
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
                    <td>Guy</td>
                    <td>Mezger</td>
                    <td>Light Heavyweight/Heavyweight</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Lyoto</td>
                    <td>Machida</td>
                    <td>Light Heavyweight</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Bas</td>
                    <td>Rutten</td>
                    <td>Heavyweight</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>George</td>
                    <td>St. Pierre</td>
                    <td>Welterweight/Middleweight</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Stephen</td>
                    <td>Thompson</td>
                    <td>Welterweight</td>
                  </tr>
                </tbody>
            </Table>
            </>
        )
    }
}