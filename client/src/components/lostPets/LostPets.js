import React from 'react';
import LostPet from './LostPet';
import { Card } from 'semantic-ui-react'

const LostPets = ({lostPets}) => {
  const lostPetList = lostPets.map(lostPet => {
    return (
        <LostPet
          key={lostPet.id}
          lostPet={lostPet}
        />
    )
  })
  return <Card.Group>{lostPetList}</Card.Group>
}

export default LostPets