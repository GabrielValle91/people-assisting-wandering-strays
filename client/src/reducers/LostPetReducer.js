const LostPetReducer = (state = [], action) => {
  switch(action.type){
    case 'GET_LOST_PETS':
      return action.lostPets;
    case 'CREATE_LOST_PET':
      return state.concat(action.lostPet);
    default:
      return state;
  }
}

export default LostPetReducer;