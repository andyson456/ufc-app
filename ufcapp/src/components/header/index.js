import { Card } from "@material-ui/core";
import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props){
      super(props)
      this.state = {
      }
    }
    
      render() {
        return(
            <Card>
                <p>UFC Statistics</p>
            </Card>
        )
      }
    }