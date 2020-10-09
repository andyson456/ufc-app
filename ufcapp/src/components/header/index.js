import { Card } from "@material-ui/core";
import React, { Component } from 'react';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props){
      super(props)
      this.state = {
      }
    }
    
      render() {
        return(
          <Card>
            <Link className={'nav-link'} activeClassName={'active'} to="/"><Tab label="Home" /></Link>
            <Link className={'nav-link'} activeClassName={'active'} to="/competitions"><Tab label="Competitions" /></Link>
            <Link className={'nav-link'} activeClassName={'active'} to="/rankings"><Tab label="Rankings" /></Link>
          </Card>
        )
    }
}