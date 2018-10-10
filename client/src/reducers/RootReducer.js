import {combineReducers} from 'redux';
import FoundPetReducer from './FoundPetReducer';

const RootReducer = combineReducers({
  foundPets: FoundPetReducer,
})

export default RootReducer;