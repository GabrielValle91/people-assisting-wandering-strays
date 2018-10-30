import React, { Component } from 'react';
import { Container, Header, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getFoundPets } from '../actions/FoundPets';
import FoundPets from '../components/foundPets/FoundPets';
import FoundPetInput from '../components/foundPets/FoundPetInput';
import Navigation from './Navigation';

class FoundPetContainer extends Component {
  constructor(props){
    super(props);
    this.state={};
  }
  componentDidMount() {
    this.setState({
      statusFilter: "Open"
    })
    this.props.getFoundPets();
  }

  handleChange = e => {
    this.setState({
      statusFilter: e.target.value
    })
  }

  handleStatusFilter = (foundPets, statusFilter) => {
    let newFoundPets = [];
    for (let i = 0; i < foundPets.length; i++){
      if(foundPets[i].status == statusFilter){
        newFoundPets = [...newFoundPets, foundPets[i]]
      }
    }
    this.setState({
      filteredFoundPets: newFoundPets
    })
  }

  render() {
    let {foundPets} = this.props;
    const foundPetStatusFilter = <div>Filter Found Pets by Status: <select value={this.state.statusFilter} onChange={this.handleChange}><option value="Open">Open</option><option value="At Shelter">At Shelter</option><option value="Found Home">Found Home</option></select><button onClick={() => this.handleStatusFilter(foundPets, this.state.statusFilter)}>Filter</button></div>

    return (foundPets ? 
      <React.Fragment>
      <Navigation activeItem={'foundPets'}/>
      <Container>
        <Header as='h2' icon textAlign='center' color='teal'>
          <Icon name='paw' circular />
          <Header.Content>
            Found Pets
          </Header.Content>
        </Header>
        <FoundPetInput />
        <Divider hidden section />
        { foundPetStatusFilter }
        {this.state.filteredFoundPets ? <FoundPets foundPets={this.state.filteredFoundPets} /> : foundPets && foundPets.length ?
          <FoundPets foundPets={foundPets} />
          : <Container textAlign='center'>No found pets.</Container>
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
    foundPets: state.foundPets,
  })
}

const mapDispatchToProps = dispatch => {
  return{
    getFoundPets: () => {dispatch(getFoundPets())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoundPetContainer);