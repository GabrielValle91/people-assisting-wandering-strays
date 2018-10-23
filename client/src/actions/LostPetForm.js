export const updateLostPetFormData = lostPetFormData => {
  return  {
    type: 'ADD_LOST_PET_DATA',
    lostPetFormData
  }
}

export const resetLostPetForm = () => {
  return {
    type: 'RESET_LOST_PET_DATA'
  }
}