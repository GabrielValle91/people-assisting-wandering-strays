import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import { connect } from 'react-redux';
import FoundPetContainer from './containers/FoundPetContainer';
import About from './containers/About';
import LogOut from './containers/LogOut';
import LogIn from './containers/LogIn';
import SignUp from './containers/SignUp';

class App extends Component {
  componentDidMount(){
    document.title = "PAWS"
  }
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route path='/home' exact component={Home} />
            <Route exact path="/login" render={()=> (this.props.userDetails.id ? <Redirect to="/home"/> : <LogIn/>)} />
            <Route exact path="/signup" render={()=> (this.props.userDetails.id ? <Redirect to="/home"/> : <SignUp/>)} />
            <Route exact path="/logout" render={()=> (this.props.userDetails.id ? <LogOut/> : <Redirect to="/login"/>)} />
            <Route exact path="/found_pets"  render={() => (this.props.userDetails.id ? <FoundPetContainer/> : <Redirect to="/login" />)} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return({
    userDetails: state.userAuthentication
  })
}

export default connect(mapStateToProps)(App)