import React, { Component } from "react";
import Card from '@material-ui/core/Card'

export default class CompetitionItem extends Component {
    constructor(props){
      super(props)
      this.state = {
      }
    }
    
      render() {
        return(
            <Card>
                <p>competition item</p>
            </Card>
        )
      }
    }