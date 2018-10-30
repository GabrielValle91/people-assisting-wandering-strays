import React, { Component } from 'react';
import { Button, Card, Header, Modal, Divider, Image } from 'semantic-ui-react';
import FoundPetComments from './FoundPetComments';
import { connect } from 'react-redux';
import { updateFoundPet } from '../../actions/FoundPets';

class FoundPet extends Component{
  dateCreator = dateValue => {
    let formattedDate = new Date(dateValue).toLocaleString("en-US");
    return formattedDate;
  }

  handleChange = (e) => {
    const currentFoundPet = {
      id: this.props.foundPet.id,
      status: e.target.value
    }
    this.props.updateFoundPet(currentFoundPet);
  }

  render(){
    const {foundPet} = this.props;
    const foundPetStatus = <select onChange={this.handleChange} value={this.props.foundPet.status}><option value="Open">Open</option><option value="At Shelter">At Shelter</option><option value="Found Home">Found Home</option></select>
    return (
      <Card>
        <Card.Content>
          <Card.Header>Found {foundPet.animal_type}
            <Image src={foundPet.pet_image} />
          </Card.Header>
          <Card.Meta>{foundPet.city}, {foundPet.state}</Card.Meta>
          <Card.Description>
            Reported {this.dateCreator(foundPet.created_at)}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Modal trigger={<Button>More info</Button>} closeIcon>
            <Modal.Header>Found {foundPet.animal_type}</Modal.Header>
            <Modal.Content text>
              <Modal.Description>
                <Header>{foundPet.city}, {foundPet.state}</Header>
                <Image src={foundPet.pet_image} />
                <p>Area found: {foundPet.area}</p>
                <p>Gender: {foundPet.gender}</p>
                {foundPet.user_id == this.props.userDetails.id ? <p>Status: {foundPetStatus}</p> : <p>Status: {foundPet.status}</p>}
                <Divider section />
                <FoundPetComments petId={foundPet.id}/>
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

export default connect(mapStateToProps, {updateFoundPet})(FoundPet);