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
import Footer from './components/footer';
import Contact from './components/contact';
import Categories from './components/categories';
import Boxing from './components/categories/boxing';
import Judo from './components/categories/judo';
import Karate from './components/categories/karate';
import Juijitsu from './components/categories/juijitsu';
import Wrestling from './components/categories/wrestling';
import Muaythai from './components/categories/muaythai';

function app() {
  return (
    <Router>
      <div>
        <nav>
          <Header />
        </nav>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div>
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
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/boxing">
              <Boxing />
            </Route>
            <Route path="/judo">
              <Judo />
            </Route>
            <Route path="/karate">
              <Karate />
            </Route>
            <Route path="/juijitsu">
              <Juijitsu />
            </Route>
            <Route path="/wrestling">
              <Wrestling />
            </Route>
            <Route path="/muaythai">
              <Muaythai />
            </Route>
          </Switch>
        </div>
        <div>
          <Footer />
        </div>
    </Router>
  );
}

const App = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(app)
);

export default App;
