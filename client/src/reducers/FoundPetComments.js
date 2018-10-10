const FoundPetCommentsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_FOUND_PET_COMMENTS':
      return action.foundPetComments;
    case 'CREATE_FOUND_PET_COMMENT':
      return state.concat(action.foundPetComment);
    default:
      return state;
  }
}

export default FoundPetCommentsReducer;