import React, { Component } from 'react';
import Competitions from './components/competition/index';
import Header from './components/header';
import routes from './routes';
import {Route} from 'react-router-dom';
import Rankings from './components/rankings';
import UpcomingEvents from './components/Events';

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
        <Competitions items={items}/>
      
        <Route exact path={routes.competitions} component={Competitions} />
        <Route exact path={routes.rankings} component={Rankings} />
        <Route exact path={routes.upcomingEvents} component={UpcomingEvents} />
   
      </div>
    );
    }
  }
}

export default App;
