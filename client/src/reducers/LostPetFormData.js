const initialState = {
  animal_type: '',
  name: '',
  gender: '',
  breed: '',
  city: '',
  state: '',
  personality: '',
  chipped: false,
  pet_image: null,
  user_id: 1
}
const LostPetFormData = (state = initialState, action ) => {
  switch(action.type){
    case 'ADD_LOST_PET_DATA':
      return action.lostPetFormData;
    case 'RESET_LOST_PET_DATA':
      return initialState;
    default:
      return state;
  }
}

export default LostPetFormData;