import * as Actions from '../actions/session_actions';

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case Actions.RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser };
    default: 
      return state;
  }
}

export default sessionReducer;