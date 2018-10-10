const FoundPetReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_FOUND_PETS':
      return action.foundPets;
    case 'CREATE_FOUND_PET':
      return state.concat(action.foundPet);
    default:
      return state;
  }
}

export default FoundPetReducer;