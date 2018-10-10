import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class Home extends Component {
  constructor(){
    super();
    this.state = {}
  }

  componentDidMount() {
    this.getFoundPets();
  }

  fetch (endpoint){
    return window.fetch(endpoint)
    .then(response => response.json())
    .catch(error => console.log(error))
  }

  getFoundPets = () => {
    this.fetch('/api/found_pets')
    .then(foundPets => {
      if (foundPets.length){
        this.setState({foundPets: foundPets})
        this.getFoundPet(foundPets[0].id)
      } else {
        this.setState({foundPets: []})
      }
    })
  }

  getFoundPet = id => {
    this.fetch(`/api/found_pets/${id}`)
    .then(foundPet => this.setState({foundPet: foundPet}))
  }

  render() {
    let {foundPets, foundPet} = this.state;
    return foundPets ? 
      <Container text>
      <Header as='h2' icon textAlign='center' color='teal'>
        <Icon name='unordered list' circular />
        <Header.Content>
          List of Found Pets
        </Header.Content>
      </Header>
      <Divider hidden section />
      {foundPets && foundPets.length ?
        <Button.Group color='teal' fluid widths={foundPets.length}>
        {Object.keys(foundPets).map((key) => {
          return <Button active={foundPet && foundPet.id === foundPets[key].id} fluid key={key} onClick={() => this.getFoundPet(foundPets[key].id)}>
          {foundPets[key].title}
          </Button>
        })}
        </Button.Group>
        : <Container textAlign='center'>No found pets.</Container>
      }
    <Divider section />
    {foundPet && 
      <Container>
        <Header as='h2'>{foundPet.animal_type} - {foundPet.city}, {foundPet.state}</Header>
      </Container>
    }
    </Container>
    : <Container text>
      <Dimmer active inverted>
        <Loader content='Loading' />
      </Dimmer>
    </Container>
  }
}

export default Home;
