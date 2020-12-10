import React, { Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

export default class Contact extends Component {
    constructor(props){
      super(props)
      this.state = {

      }
    }
    
      render() {
        return(
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="email@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Let us know your thoughts!</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button type="submit" className="mb-2">
                    Submit
                </Button>
            </Form>
        )
    }
}