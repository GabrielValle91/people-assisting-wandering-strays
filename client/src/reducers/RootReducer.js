import {combineReducers} from 'redux';
import FoundPetReducer from './FoundPetReducer';
import FoundPetComment from './FoundPetComment';
import FoundPetCommentsReducer from './FoundPetComments';

const RootReducer = combineReducers({
  foundPets: FoundPetReducer,
  foundPetComment: FoundPetComment,
  foundPetComments: FoundPetCommentsReducer,
})

export default RootReducer;