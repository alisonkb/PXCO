import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/sessions_actions';

const defaultState = {currentUser: null};

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, action.currentUser);
    default:
      return state;
  }
};

export default sessionReducer;
