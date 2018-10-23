import React, { Component } from 'react';
import { Button, Card, Header, Modal, Divider, Image } from 'semantic-ui-react';
import LostPetComments from './LostPetComments';

class LostPet extends Component{
  dateCreator = dateValue => {
    let formattedDate = new Date(dateValue).toLocaleString("en-US");
    return formattedDate;
  }

  render(){
    const {lostPet} = this.props;
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
                <p>Status: {lostPet.status}</p>
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

export default LostPet;