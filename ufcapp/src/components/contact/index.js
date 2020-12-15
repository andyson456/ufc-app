import React, { Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

export default class Contact extends Component {
    constructor(props){
      super(props)
      this.state = {

      }
    }
      render() {
        function sendEmail(e) {
            e.preventDefault();
        
            emailjs.sendForm('service_nbd115g', 'template_314n7sw', e.target, 'user_LJsRQSYUo0WqgJS5wcv8C')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset();
          }
        return(
            <div>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                    <br></br>
                </form>
            </div>
        </div>
        )
    }
}