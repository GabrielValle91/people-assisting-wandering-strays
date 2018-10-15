// action creators
export const updateFoundPetFormData = foundPetFormData => {
  return {
    type: 'ADD_FOUND_PET_DATA',
    foundPetFormData
  }
}

export const resetFoundPetForm = () => {
  return{
    type: 'RESET_FOUND_PET_DATA'
  }
}