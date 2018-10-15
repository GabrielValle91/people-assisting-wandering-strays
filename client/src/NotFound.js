import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

class NotFound extends Component {
  render() {
    return <Container text textAlign='center'>
      <h1>404: Not found</h1>
    </Container>
  }
}

export default NotFound