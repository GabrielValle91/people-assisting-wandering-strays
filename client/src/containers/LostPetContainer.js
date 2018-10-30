import React, { Component } from 'react';
import { Container, Header, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getLostPets } from '../actions/LostPets';
import LostPets from '../components/lostPets/LostPets';
import LostPetInput from '../components/lostPets/LostPetInput';
import Navigation from './Navigation';

class LostPetContainer extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  componentDidMount() {
    this.setState({
      statusFilter: "Open"
    })
    this.props.getLostPets();
  }

  handleChange = e => {
    this.setState({
      statusFilter: e.target.value
    })
  }

  handleStatusFilter = (lostPets, statusFilter) => {
    let newLostPets = []
    for (let i = 0; i < lostPets.length; i++){
      if(lostPets[i].status == statusFilter){
        newLostPets = [...newLostPets, lostPets[i]]
      } 
    }
    this.setState({
      filteredLostPets: newLostPets
    })
  }

  render() {
    let {lostPets} = this.props;
    const lostPetStatusFilter = <div>Filter Lost Pets by Status: <select value={this.state.statusFilter} onChange={this.handleChange}><option value="Open">Open</option><option value="Found Home">Found Home</option></select><button onClick={() => this.handleStatusFilter(lostPets, this.state.statusFilter)}>Filter</button></div>
    
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
        { lostPetStatusFilter }
        {this.state.filteredLostPets ? <LostPets lostPets={this.state.filteredLostPets} /> : lostPets && lostPets.length ?
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