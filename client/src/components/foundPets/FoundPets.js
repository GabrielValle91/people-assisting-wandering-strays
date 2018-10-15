import React from 'react';
import FoundPet from './FoundPet';
import { Card } from 'semantic-ui-react'

const FoundPets = ({foundPets}) => {
  const foundPetList = foundPets.map(foundPet => {
    return (
        <FoundPet
          key={foundPet.id}
          foundPet={foundPet}
        />
    )
  })
  return <Card.Group>{foundPetList}</Card.Group>
}

export default FoundPets