import React, { Component } from 'react';
import { Container, Header, Icon, Dimmer, Loader, Divider, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getFoundPets } from '../actions/FoundPets';
import FoundPets from '../components/foundPets/FoundPets';
import FoundPetInput from '../components/foundPets/FoundPetInput';

class FoundPetContainer extends Component {

  componentDidMount() {
    this.props.getFoundPets();
  }

  render() {
    let {foundPets} = this.props;
    return (foundPets ? 
      <Container>
        <Header as='h2' icon textAlign='center' color='teal'>
          <Icon name='paw' circular />
          <Header.Content>
            Found Pets
          </Header.Content>
        </Header>
        <FoundPetInput />
        <Divider hidden section />
        {foundPets && foundPets.length ?
          <FoundPets foundPets={foundPets} />
          : <Container textAlign='center'>No found pets.</Container>
        }
        <Divider section />
      </Container>
      : <Container>
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