import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export function signup(user) {
  return function (dispatch) {
    return APIUtil.signup(user).then(
      function (user) {
        dispatch(receiveCurrentUser(user))
      },
      function (err) {
        dispatch(receiveErrors(err.responseJSON))
      }
    );
  };
};