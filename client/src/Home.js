import React, { Component } from 'react';
import './App.css';
import Navigation from './containers/Navigation';

class Home extends Component {
  render(){
    return (
      <div className="homePage">
        <Navigation activeItem={'home'}/>
        <p className="homePageHeader">Welcome to <strong>PAWS</strong></p>
      </div>
    )
  }
}

export default Home;
