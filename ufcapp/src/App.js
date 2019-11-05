import React, { Component } from 'react';
import CompetitionItem from './components/competition/competitionItem';
import Header from './components/header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }

    this.apikey = process.env.REACT_APP_API_KEY;
  }

  componentDidMount() {
    fetch(`http://localhost:3333/api/competitions/`)
      .then(response => response.text())
        .then(text => {
          try {
              const data = JSON.parse(text);
              return data;
              // Do your JSON handling here
          } catch(err) {
            console.log(err)
          }
        })
      .then(data => {
        console.log(data);
        this.setState({
          isLoaded: true,
          items: data
        })
      })
      .catch(error => {
        alert('There was a problem getting info!');
      })
  }

  render() {

    let { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {
    return (
      <div className="App">
        <Header />
        <CompetitionItem />
      </div>
    );
    }
  }
}

export default App;
