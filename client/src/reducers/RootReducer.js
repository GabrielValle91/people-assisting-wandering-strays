import {combineReducers} from 'redux';
import FoundPetReducer from './FoundPetReducer';
import FoundPetComment from './FoundPetComment';
import FoundPetCommentsReducer from './FoundPetComments';
import FoundPetFormData from './FoundPetFormData';

const RootReducer = combineReducers({
  foundPets: FoundPetReducer,
  foundPetFormData: FoundPetFormData,
  foundPetComment: FoundPetComment,
  foundPetComments: FoundPetCommentsReducer,
})

export default RootReducer;