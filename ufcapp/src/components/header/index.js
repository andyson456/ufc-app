import { Card } from "@material-ui/core";
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { NavLink, Route } from 'react-router-dom';
import routes from "../../routes";

export default class Header extends Component {
    constructor(props){
      super(props)
      this.state = {
      }
    }
    
      render() {
        
        return(
          <Card>
          
            <NavLink className={'nav-link'} activeClassName={'active'}
            to={routes.competitions}><Tab label="Competitions" /></NavLink>

            <NavLink className={'nav-link'} activeClassName={'active'}
            to={routes.rankings}><Tab label="Rankings" /></NavLink>

            <NavLink className={'nav-link'} activeClassName={'active'}
            to={routes.upcomingEvents}><Tab label="Upcoming Events" /></NavLink>
          
        </Card>
        )
    }
}