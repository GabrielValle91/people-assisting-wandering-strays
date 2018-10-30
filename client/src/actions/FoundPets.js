import { resetFoundPetForm } from './FoundPetForm';
// Action Creators
const setFoundPets = foundPets => {
  return {
    type: 'GET_FOUND_PETS',
    foundPets
  }
}

const addFoundPet = foundPet => {
  return{
    type: 'CREATE_FOUND_PET',
    foundPet
  }
}

const setFoundPetComments = foundPetComments => {
  return {
    type: 'GET_FOUND_PET_COMMENTS',
    foundPetComments
  }
}

const addFoundPetComment = foundPetComment => {
  return{
    type: 'CREATE_FOUND_PET_COMMENT',
    foundPetComment
  }
}

export const updateFoundPetComment = foundPetComment => {
  return {
    type: 'UPDATE_FOUND_PET_COMMENT',
    foundPetComment
  }
}

const resetFoundPetComment = () => {
  return {
    type: 'RESET_FOUND_PET_COMMENT'
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

export const getFoundPetComments = (petId) => {
  return dispatch => {
    return fetch(`/api/found_pets/${petId}`)
    .then(response => response.json())
    .then(foundPet => dispatch(setFoundPetComments(foundPet.found_pet_comments)))
  }
}

export const createFoundPet = foundPet => {
  return dispatch => {
    
    var data = new FormData();
    data.append("found_pet[animal_type]", foundPet["animal_type"]);
    data.append("found_pet[gender]", foundPet["gender"]);
    data.append("found_pet[city]", foundPet["city"]);
    data.append("found_pet[state]", foundPet["state"]);
    data.append("found_pet[area]", foundPet["area"]);
    data.append("found_pet[user_id]", foundPet["user_id"]);
    data.append("found_pet[pet_image]", foundPet["pet_image"], foundPet["pet_image"].name);
    
    return fetch(`/api/found_pets`, {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      body: data
    })
      .then(response => response.json())
      .then(foundPet => {
        dispatch(addFoundPet(foundPet))
        dispatch(resetFoundPetForm())
      })
      .catch(error => console.log(error))
  }
}

export const updateFoundPet = foundPet => {
  return dispatch => {
    return fetch(`/api/found_pets/${foundPet.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({found_pet: foundPet})
    })
  }
}

export const createFoundPetComment = foundPetComment => {
  return dispatch => {
    return fetch('/api/found_pet_comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({found_pet_comment: foundPetComment})
    })
      .then(response => response.json())
      .then(foundPetComment => {
        dispatch(addFoundPetComment(foundPetComment))
        dispatch(resetFoundPetComment())
      })
      .catch(error => console.log(error))
  }
}