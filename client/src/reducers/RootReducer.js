import {combineReducers} from 'redux';
import FoundPetReducer from './FoundPetReducer';
import FoundPetComment from './FoundPetComment';
import FoundPetCommentsReducer from './FoundPetComments';
import FoundPetFormData from './FoundPetFormData';
import UserAuthentication from './UserAuthentication';
import LostPetReducer from './LostPetReducer';
import LostPetFormData from './LostPetFormData';
import LostPetComment from './LostPetComment';
import LostPetCommentsReducer from './LostPetComments';

const RootReducer = combineReducers({
  foundPets: FoundPetReducer,
  foundPetFormData: FoundPetFormData,
  foundPetComment: FoundPetComment,
  foundPetComments: FoundPetCommentsReducer,
  userAuthentication: UserAuthentication,
  lostPets: LostPetReducer,
  lostPetFormData: LostPetFormData,
  lostPetComment: LostPetComment,
  lostPetComments: LostPetCommentsReducer,
})

export default RootReducer;