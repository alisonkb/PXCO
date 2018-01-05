import merge from 'lodash/merge';

import { RECEIVE_ALL_USERS } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    default:
      return state;
  }
};

export default usersReducer;
