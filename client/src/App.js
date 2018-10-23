import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import { connect } from 'react-redux';
import FoundPetContainer from './containers/FoundPetContainer';
import LostPetContainer from './containers/LostPetContainer';
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
            <Route path='/' exact component={Home} />
            <Route exact path="/login" render={()=> (this.props.userDetails.id ? <Redirect to="/"/> : <LogIn/>)} />
            <Route exact path="/signup" render={()=> (this.props.userDetails.id ? <Redirect to="/"/> : <SignUp/>)} />
            <Route exact path="/logout" render={()=> (this.props.userDetails.id ? <LogOut/> : <Redirect to="/login"/>)} />
            <Route exact path="/found_pets"  render={() => (this.props.userDetails.id ? <FoundPetContainer/> : <Redirect to="/login" />)} />
            <Route exact path="/lost_pets"  render={() => (this.props.userDetails.id ? <LostPetContainer/> : <Redirect to="/login" />)} />
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