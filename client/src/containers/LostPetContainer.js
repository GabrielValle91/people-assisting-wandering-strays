import React, { Component } from 'react';
import { Container, Header, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getLostPets } from '../actions/LostPets';
import LostPets from '../components/lostPets/LostPets';
import LostPetInput from '../components/lostPets/LostPetInput';
import Navigation from './Navigation';

class LostPetContainer extends Component {

  componentDidMount() {
    this.props.getLostPets();
  }

  render() {
    let {lostPets} = this.props;
    return (lostPets ? 
      <React.Fragment>
      <Navigation activeItem={'lostPets'}/>
      <Container>
        <Header as='h2' icon textAlign='center' color='teal'>
          <Icon name='paw' circular />
          <Header.Content>
            Lost Pets
          </Header.Content>
        </Header>
        <LostPetInput />
        <Divider hidden section />
        {lostPets && lostPets.length ?
          <LostPets lostPets={lostPets} />
          : <Container textAlign='center'>No lost pets.</Container>
        }
        <Divider section />
      </Container>
      </React.Fragment>
      : <Container>
        <Dimmer active inverted>
          <Loader content='Loading' />
        </Dimmer>
      </Container>
  )}
}

const mapStateToProps = state => {
  return ({
    lostPets: state.lostPets,
  })
}

const mapDispatchToProps = dispatch => {
  return{
    getLostPets: () => {dispatch(getLostPets())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LostPetContainer);