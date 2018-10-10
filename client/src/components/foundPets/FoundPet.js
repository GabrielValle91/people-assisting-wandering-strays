import React, { Component } from 'react';
import { Button, Card, Header, Modal } from 'semantic-ui-react';

class FoundPet extends Component{
  dateCreator = dateValue => {
    let formattedDate = new Date(dateValue).toLocaleString("en-US");
    return formattedDate;
  }
  render(){
    const {foundPet} = this.props;
    return (
      <Card>
        <Card.Content>
          <Card.Header>Found {foundPet.animal_type}</Card.Header>
          <Card.Meta>{foundPet.city}, {foundPet.state}</Card.Meta>
          <Card.Description>
            Reported {this.dateCreator(foundPet.created_at)}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Modal trigger={<Button>More info</Button>}>
            <Modal.Header>Found {foundPet.animal_type}</Modal.Header>
            <Modal.Content text>
              <Modal.Description>
                <Header>{foundPet.city}, {foundPet.state}</Header>
                <p>Area found: {foundPet.area}</p>
                <p>Gender: {foundPet.gender}</p>
                <p>Status: {foundPet.status}</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Card.Content>
      </Card>
    )
  }
}

export default FoundPet;