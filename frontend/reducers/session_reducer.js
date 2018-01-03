import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/sessions_actions';

const defaultState = {currentUser: null};

const sessionReducer = (state = {currentUser: null}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, {currentUser: action.currentUser});
    default:
      return {currentUser: null};
  }
};

export default sessionReducer;
