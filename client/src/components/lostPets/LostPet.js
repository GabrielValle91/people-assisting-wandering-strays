import React, { Component } from 'react';
import { Button, Card, Header, Modal, Divider, Image } from 'semantic-ui-react';
import LostPetComments from './LostPetComments';
import { connect } from 'react-redux';
import { updateLostPet } from '../../actions/LostPets';

class LostPet extends Component{
  constructor(){
    super();
    this.state={}
  }

  componentDidMount = () => {
    this.setState({
      status: this.props.lostPet.status
    })
  }

  dateCreator = dateValue => {
    let formattedDate = new Date(dateValue).toLocaleString("en-US");
    return formattedDate;
  }

  handleChange = (e) => {
    this.setState({
      status: e.target.value
    })
    const currentLostPet = {
      id: this.props.lostPet.id,
      status: e.target.value
    }
    this.props.updateLostPet(currentLostPet);
  }

  render(){
    const {lostPet} = this.props;
    const lostPetStatus = <select onChange={this.handleChange} value={this.state.status}><option value="Open">Open</option><option value="Found Home">Found Home</option></select>
    return (
      <Card>
        <Card.Content>
          <Card.Header>Lost {lostPet.animal_type}
            <Image src={lostPet.pet_image} />
          </Card.Header>
          <Card.Meta>{lostPet.city}, {lostPet.state}</Card.Meta>
          <Card.Description>
            Reported {this.dateCreator(lostPet.created_at)}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Modal trigger={<Button>More info</Button>} closeIcon>
            <Modal.Header>Lost {lostPet.animal_type} - Name: {lostPet.name}</Modal.Header>
            <Modal.Content text>
              <Modal.Description>
                <Header>{lostPet.city}, {lostPet.state}</Header>
                <Image src={lostPet.pet_image} />
                <p>Personality: {lostPet.personality}</p>
                <p>Gender: {lostPet.gender}</p>
                <p>Breed: {lostPet.breed}</p>
                <p>Chipped?: {lostPet.chipped ? 'Yes' : 'No'}</p>
                {lostPet.user_id == this.props.userDetails.id ? <p>Status: {lostPetStatus}</p> : <p>Status: {lostPet.status}</p>}
                <Divider section />
                <LostPetComments petId={lostPet.id}/>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return({
    userDetails: state.userAuthentication
  })
}

export default connect(mapStateToProps, {updateLostPet})(LostPet);