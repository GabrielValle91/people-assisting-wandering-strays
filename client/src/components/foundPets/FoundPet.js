import React, { Component } from 'react';
import { Button, Card } from 'semantic-ui-react';

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
          <Button>
            More info
          </Button>
        </Card.Content>
      </Card>
    )
  }
}

export default FoundPet;