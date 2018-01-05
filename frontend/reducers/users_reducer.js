import merge from 'lodash/merge';

import { RECEIVE_ALL_USERS } from '../actions/user_actions';
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_ALL_POSTS:
      return action.users;
    default:
      return state;
  }
};

export default usersReducer;
