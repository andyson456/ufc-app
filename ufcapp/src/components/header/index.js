import { Card } from "@material-ui/core";
import React, { Component } from 'react';
import Tab from '@material-ui/core/Tab';
import { NavLink, Route } from 'react-router-dom';
import Home from "../home";
import CompetitionRoute from "../../routes/competition";
import RankingRoute from "../../routes/ranking";

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
            to={<Home />}><Tab label="Home" /></NavLink>
          
            <NavLink className={'nav-link'} activeClassName={'active'}
            to={<CompetitionRoute />}><Tab label="Competitions" /></NavLink>

            <NavLink className={'nav-link'} activeClassName={'active'}
            to={<RankingRoute />}><Tab label="Rankings" /></NavLink>

            {/* <NavLink className={'nav-link'} activeClassName={'active'}
            to={routes.upcomingEvents}><Tab label="Upcoming Events" /></NavLink> */}
          
        </Card>
        )
    }
}