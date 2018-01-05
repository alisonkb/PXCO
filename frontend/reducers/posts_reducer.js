import merge from 'lodash/merge';

import { RECEIVE_ALL_POSTS } from '../actions/post_actions.js';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
    default:
    return state;
  }
};

export default postsReducer;
