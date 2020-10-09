import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
import { mapStateToProps, mapDispatchToProps } from './actions';
import CompetitionRoute from './routes/competition';
import RankingRoute from './routes/ranking';
import Home from './components/home';
import { connect } from 'react-redux';
import Header from './components/header';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       isLoaded: false,
//     }

    // this.apikey = process.env.REACT_APP_API_KEY;
  // }

//   render() {

//     let { isLoaded, items } = this.state;

//     if (!isLoaded) {
//       return <div>Loading...</div>
//     }
//     else {
//     return (
//       <div className="App">
//         <Header />
//         {/* <Competitions items={items}/> */}
      
//         <Route exact path={routes.competitions} component={Competitions} />
//         <Route exact path={routes.rankings} component={Rankings} />
//         <Route exact path={routes.upcomingEvents} component={UpcomingEvents} />
   
//       </div>
//     );
//     }
//   }
// }

function app() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Header />
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/competitions">
            <CompetitionRoute />
          </Route>
          <Route path="/rankings">
            <RankingRoute />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const App = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(app)
);

export default App;
