import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/sessions_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return null;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
