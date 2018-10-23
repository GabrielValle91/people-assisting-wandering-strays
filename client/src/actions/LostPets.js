import { resetLostPetForm } from './LostPetForm'
//Action Creators
const setLostPets = lostPets => {
  return {
    type: 'GET_LOST_PETS',
    lostPets
  }
}

const addLostPet = lostPet => {
  return {
    type: 'CREATE_LOST_PET',
    lostPet
  }
}

const setLostPetComments = lostPetComments => {
  return {
    type: 'GET_LOST_PET_COMMENTS',
    lostPetComments
  }
}

const addLostPetComment = lostPetComment => {
  return{
    type: 'CREATE_LOST_PET_COMMENT',
    lostPetComment
  }
}

export const updateLostPetComment = lostPetComment => {
  return {
    type: 'UPDATE_LOST_PET_COMMENT',
    lostPetComment
  }
}

const resetLostPetComment = () => {
  return{
    type: 'RESET_LOST_PET_COMMENT'
  }
}

// Async Actions
export const getLostPets = () => {
  return dispatch => {
    return fetch('/api/lost_pets')
    .then(response => response.json())
    .then(lostPets => {dispatch(setLostPets(lostPets))})
  }
}

export const getLostPetComments = (petId) => {
  return dispatch => {
    return fetch(`/api/lost_pets/${petId}` )
    .then(response => response.json())
    .then(lostPet => dispatch(setLostPetComments(lostPet.lost_pet_comments)))
  }
}

export const createLostPet = lostPet => {
  return dispatch => {

    var data = new FormData();
    data.append("lost_pet[animal_type]", lostPet["animal_type"]);
    data.append("lost_pet[name]", lostPet["name"]);
    data.append("lost_pet[gender]", lostPet["gender"]);
    data.append("lost_pet[breed]", lostPet["breed"]);
    data.append("lost_pet[city]", lostPet["city"]);
    data.append("lost_pet[state]", lostPet["state"]);
    data.append("lost_pet[personality]", lostPet["personality"]);
    data.append("lost_pet[chipped]", lostPet["chipped"]);
    data.append("lost_pet[user_id]", lostPet["user_id"]);
    data.append("lost_pet[pet_image]", lostPet["pet_image"], lostPet["pet_image"].name);

    return fetch('/api/lost_pets', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      body: data
    })
      .then(response => response.json())
      .then(lostPet => {
        dispatch(addLostPet(lostPet))
        dispatch(resetLostPetForm())
      })
      .catch(error => console.log(error))
  }
}

export const createLostPetComment = lostPetComment => {
  return dispatch => {
    return fetch('/api/lost_pet_comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({lost_pet_comment: lostPetComment})
    })
      .then(response => response.json())
      .then(lostPetComment => {
        dispatch(addLostPetComment(lostPetComment))
        dispatch(resetLostPetComment())
      })
      .catch(error => console.log(error))
  }
}