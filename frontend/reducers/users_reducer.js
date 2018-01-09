import merge from 'lodash/merge';

import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';
import { RECEIVE_CURRENT_USER } from '../actions/sessions_actions.js';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_CURRENT_USER:
      if (action.currentUser) {
        return merge({}, state, {[action.currentUser.id]: action.currentUser});
      }
      return state;
    case RECEIVE_ALL_POSTS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]: action.user});
    default:
      return state;
  }
};

export default usersReducer;
