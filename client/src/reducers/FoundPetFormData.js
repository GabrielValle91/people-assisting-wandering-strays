const initialState = {
  animal_type: '',
  city: '',
  state: '',
  area: '',
  gender: '',
  pet_image: null,
  user_id: 1
}
const FoundPetFormData = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_FOUND_PET_DATA':
      return action.foundPetFormData;
    case 'RESET_FOUND_PET_DATA':
      return initialState;
    default:
      return state
  }
}

export default FoundPetFormData;