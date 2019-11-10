import React, { Component } from 'react';


export default class Rankings extends Component {
    constructor(props){
      super(props)
      this.state = {
        items: [],
        isLoaded: false
      }
    }

    componentDidMount() {
      fetch(`http://localhost:3333/api/rankings/`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({
            items: data,
            isLoaded: true
          })
        })
    }
    
      render() {

        return(
          <div>
            <h1>Rankings</h1>
          </div>
        )
    }
}