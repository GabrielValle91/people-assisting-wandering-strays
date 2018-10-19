import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearUserDetails } from '../actions/UserAuthentication';

class LogOut extends Component {
  clearDetail = () => {
      {this.props.clearUserDetails()}
  }
  render(){
    return(
      <div>
        {this.clearDetail()}
      </div>
    )
  }
}

export default connect(null, {clearUserDetails})(LogOut);