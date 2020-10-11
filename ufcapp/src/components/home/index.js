import React, { Component } from 'react';
import Media from 'react-bootstrap/Media';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';


export default class Home extends Component {
    constructor(props){
      super(props)
      this.state = {
      }
    }
    
      render() {
        return(
          <React.Fragment>
            <Jumbotron>
              <div style={{textAlign:'center'}}>
                <h1>Welcome to UFCNerds</h1>
                <p>
                  Keep up on the latest events, rankings, trends and merchandise in an evergrowing community of combat sports!
                </p>
                <p>
                  <Button variant="primary">Learn more</Button>
                </p>
              </div>
            </Jumbotron>

            <div className="slider-container">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block mx-auto"
                    src="https://nypost.com/wp-content/uploads/sites/2/2020/02/200228-ufc-feature.jpg?quality=80&strip=all"
                    alt="First slide"
                    width="800"
                    height="600"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block mx-auto"
                    src="https://specials-images.forbesimg.com/imageserve/1211088094/960x0.jpg?fit=scale"
                    alt="Third slide"
                    width="800"
                    height="600"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block mx-auto"
                    src="https://i.insider.com/5ed7d311f34d05033b113008?width=1100&format=jpeg&auto=webp"
                    alt="Third slide"
                    width="800"
                    height="600"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>

            <h1>HENLO FWEN</h1>
          </React.Fragment>
        )
    }
}

// src="https://images.indianexpress.com/2020/05/ufc-249-gaethje-ferguson-fb.jpg"