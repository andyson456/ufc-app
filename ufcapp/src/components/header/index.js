import { Card } from "@material-ui/core";
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default class Header extends Component {
    constructor(props){
      super(props)
      this.state = {
      }
    }
    
      render() {
        
        return(
          <Card>
          
            <Tab label="Competitions" />
            <Tab label="Rankings" />
            <Tab label="Upcoming Events" />
          
        </Card>
        )
    }
}