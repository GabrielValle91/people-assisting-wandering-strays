import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions/UserAuthentication';
import Navigation from './Navigation';

class LogIn extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.userLogin(this.state);
  }

  render(){
    return(
      <div>
      <Navigation activeItem={'login'}/>
        {this.props.message ? <p>{this.props.message}</p> : null}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          <br />
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    message: state.userAuthentication.message
  })
}

export default connect(mapStateToProps, {userLogin})(LogIn);