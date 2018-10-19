import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearUserDetails } from '../actions/UserAuthentication';

class Logout extends Component {
  render(){
    return(
      <div>
        {this.props.clearUserDetails()}
      </div>
    )
  }
}

export default connect(null, {clearUserDetails})(Logout);