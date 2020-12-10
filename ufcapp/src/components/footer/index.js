import React, { Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
    constructor(props){
      super(props)
      this.state = {
      }
    }
    
      render() {
        return(
            <footer className="site-footer">
                <div class="container">
                    <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p class="text-justify"><i>UFCNerd</i> is a website with the goal to continue growth and knowledge in the world of MMA. <i>UFCNerd</i> focuses on providing information on UFC fighters, events, as well as knowledge about the art of combat itself.</p>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul class="footer-links">
                        <li><a href="https://en.wikipedia.org/wiki/Mixed_martial_arts#Boxing">Boxing</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Mixed_martial_arts#Muay_Thai/Kickboxing">Muay Thai/Kickboxing</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Mixed_martial_arts#Brazilian_jiu-jitsu/grappling">Jui-Jitsu</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Mixed_martial_arts#Judo">Judo</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Mixed_martial_arts#Wrestling">Wrestling</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Mixed_martial_arts#Karate">Karate</a></li>
                        </ul>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                            <ul class="footer-links">
                            <li><a href="/competitions">Events</a></li>
                            <li><a href="/rankings">Rankings</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                        </ul>
                    </div>
                    </div>
                    <hr />
                </div>
                <div class="container">
                    <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
                    <a href="/#home"> UFCNerd</a>.
                        </p>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="social-icons">
                            <div className="social-container">
                                <a href="https://www.youtube.com/c/jamesqquick"
                                    className="youtube">
                                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                                    </a>
                                    <a href="https://www.facebook.com/learnbuildteach/"
                                    className="facebook">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                    </a>
                                    <a href="https://www.twitter.com/jamesqquick" className="twitter">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                                    </a>
                                    <a href="https://www.instagram.com/learnbuildteach"
                                    className="instagram">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

        )
    }
}