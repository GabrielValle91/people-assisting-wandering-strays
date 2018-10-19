import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignup } from '../actions/UserAuthentication';
import Navigation from './Navigation';

class SignUp extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      password_confirmation: '',
      email: ''
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
    this.props.userSignup(this.state);
  }

  render(){
    return(
      <div>
      <Navigation activeItem={'signup'}/>
        {this.props.message ? <p>{this.props.message}</p> : null}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          <br />
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          <br />
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          <br />
          <label htmlFor="password_confirmation">Retype Password: </label>
          <input type="password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange} />
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

export default connect(mapStateToProps, {userSignup})(SignUp);