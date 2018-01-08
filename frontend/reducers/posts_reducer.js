import merge from 'lodash/merge';

import { RECEIVE_ALL_POSTS, RECEIVE_POST } from '../actions/post_actions.js';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case RECEIVE_POST:
      return merge({}, state, {[action.post.id]: action.post});
    default:
    return state;
  }
};

export default postsReducer;
