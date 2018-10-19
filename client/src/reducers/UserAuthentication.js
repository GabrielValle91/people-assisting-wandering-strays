const initialState = [];
const UserAuthentication = (state = initialState, action) => {
  switch(action.type){
    case 'SET_USER_DETAILS':
      return action.userDetails;
    case 'CLEAR_USER_DETAILS':
      return initialState;
    default:
      return state;
  }
}

export default UserAuthentication;