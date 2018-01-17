import * as Actions from '../actions/session_actions';

const defaultState = {
  currentUser: undefined,
  isFirstRender: true,
};

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Actions.RECEIVE_CURRENT_USER:
      return { isFirstRender: false, currentUser: action.currentUser };
    default:
      return state;
  }
};

export default sessionReducer;
