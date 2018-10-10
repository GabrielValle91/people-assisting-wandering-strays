import React, { Component } from 'react';
import FoundPet from './FoundPet';

const FoundPets = ({foundPets}) => {
  const foundPetList = foundPets.map(foundPet => {
    return (
      <FoundPet
        key={foundPet.id}
        foundPet={foundPet}
      />
    )
  })
  return <div>{foundPetList}</div>
}

export default FoundPets