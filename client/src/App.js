import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
// import { connect } from 'react-redux';
import Navigation from './containers/Navigation';
import FoundPetContainer from './containers/FoundPetContainer';
import About from './containers/About';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navigation />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/found_pets' exact component={FoundPetContainer} />
            <Route path='/about' exact component={About} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default App