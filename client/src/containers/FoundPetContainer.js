import React, { Component } from 'react';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getFoundPets } from '../actions/FoundPets';

class FoundPetContainer extends Component {

  componentDidMount() {
    this.props.getFoundPets();
  }

  render() {
    let {foundPets, foundPet} = this.props;
    return (foundPets ? 
      <Container text>
      <Header as='h2' icon textAlign='center' color='teal'>
        <Icon name='unordered list' circular />
        <Header.Content>
          List of Found Pets
        </Header.Content>
      </Header>
      <Divider hidden section />
      {foundPets && foundPets.length ?
        <Card.Group>
        {Object.keys(foundPets).map((key) => {
          return (
            <Card>
              <Card.Content>
                <Card.Header>Found {foundPets[key].animal_type}</Card.Header>
                <Card.Meta>{foundPets[key].city}, {foundPets[key].state}</Card.Meta>
                <Card.Description>
                  Reported {foundPets[key].created_at}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button>
                  More info
                </Button>
              </Card.Content>
            </Card>
          )
        })}
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