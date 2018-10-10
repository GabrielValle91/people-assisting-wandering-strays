import React, { Component } from 'react';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getFoundPets } from '../actions/FoundPets';
import FoundPets from '../components/foundPets/FoundPets';

class FoundPetContainer extends Component {

  componentDidMount() {
    this.props.getFoundPets();
  }

  render() {
    let {foundPets, foundPet} = this.props;
    return (foundPets ? 
      <Container text>
      <Header as='h2' icon textAlign='center' color='teal'>
        <Icon name='paw' circular />
        <Header.Content>
          Found Pets
        </Header.Content>
      </Header>
      <Divider hidden section />
      {foundPets && foundPets.length ?
        <Card.Group>
          <FoundPets foundPets={this.props.foundPets}/>
        </Card.Group>
        : <Container textAlign='center'>No found pets.</Container>
      }
    <Divider section />
    </Container>
    : <Container text>
      <Dimmer active inverted>
        <Loader content='Loading' />
      </Dimmer>
    </Container>
  )}
}

const mapStateToProps = state => {
  return ({
    foundPets: state.foundPets,
  })
}

const mapDispatchToProps = dispatch => {
  return{
    getFoundPets: () => {dispatch(getFoundPets())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoundPetContainer);