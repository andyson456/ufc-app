import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

export default class Categories extends Component {
    constructor(props){
      super(props)
      this.state = {
      }
    }
    
      render() {
        return(
            <>
            <CardColumns>
            <Card.Link href="/boxing">
                <Card>
                    <Card.Img variant="top" 
                        src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"  
                        width="100"
                        height="300"/>
                    <Card.Body>
                    <Card.Title><h3 style={{fontFamily:'verdana'}}>BOXING</h3></Card.Title>
                    </Card.Body>
                </Card>
            </Card.Link>

            <Card.Link href="www.google.com">
                <Card>
                    <Card.Img variant="top" 
                        src="https://www.tutorialspoint.com/brazilian_jiu_jitsu/images/bjj.jpg"  
                        width="100"
                        height="300"/>
                    <Card.Body>
                    <Card.Title><h3 style={{fontFamily:'verdana'}}>JUI JITSU</h3></Card.Title>
                    </Card.Body>
                </Card>
            </Card.Link>

            <Card.Link href="www.google.com">
                <Card>
                <Card.Img variant="top" 
                        src="https://www.amakella.com/wp-content/uploads/2020/08/Judo-throw-1024x683.jpg"  
                        width="100"
                        height="300"/>
                    <Card.Body>
                    <Card.Title><h3 style={{fontFamily:'verdana'}}>JUDO</h3></Card.Title>
                    </Card.Body>
                </Card>
            </Card.Link>

            <Card.Link href="www.google.com">
                <Card>
                <Card.Img variant="top" 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/FreestyleWrestling2.jpg/1200px-FreestyleWrestling2.jpg"  
                        width="100"
                        height="300"/>
                    <Card.Body>
                    <Card.Title><h3 style={{fontFamily:'verdana'}}>WRESTLING</h3></Card.Title>
                    </Card.Body>
                </Card>
            </Card.Link>

            <Card.Link href="www.google.com">
                <Card>
                <Card.Img variant="top" 
                        src="https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"  
                        width="100"
                        height="300"/>
                    <Card.Body>
                    <Card.Title><h3 style={{fontFamily:'verdana'}}>KARATE</h3></Card.Title>
                    </Card.Body>
                </Card>
            </Card.Link>

            <Card.Link href="www.google.com">
                <Card>
                <Card.Img variant="top" 
                        src="https://cdn.theculturetrip.com/wp-content/uploads/2017/08/shutterstock_680671831.jpg"  
                        width="100"
                        height="300"/>
                    <Card.Body>
                    <Card.Title><h3 style={{fontFamily:'verdana'}}>MUAY THAI/KICKBOXING</h3></Card.Title>
                    </Card.Body>
                </Card>
                </Card.Link>
            </CardColumns>
            </>

        )
    }
}