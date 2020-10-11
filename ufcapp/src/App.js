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

function app() {
  return (
    <Router>
      <div>
        <nav>
          <Header />
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
