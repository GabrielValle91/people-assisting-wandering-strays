// Action Creators
const setFoundPets = foundPets => {
  return {
    type: 'GET_FOUND_PETS',
    foundPets
  }
}

// Async Actions
export const getFoundPets = () => {
  return dispatch => {
    return fetch('/api/found_pets')
    .then(response => response.json())
    .then(foundPets => dispatch(setFoundPets(foundPets)))
  }
}