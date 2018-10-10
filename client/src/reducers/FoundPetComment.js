const initialState = {
  comment: '',
  found_pet_id: 0,
  user_id: 1
}

const FoundPetComment = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_FOUND_PET_COMMENT':
      return action.foundPetComment;
    case 'RESET_FOUND_PET_COMMENT':
      return initialState;
    default:
      return state;
  }
}

export default FoundPetComment;