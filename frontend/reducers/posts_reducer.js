import merge from 'lodash/merge';

import { RECEIVE_ALL_POSTS, RECEIVE_POST, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/post_actions.js';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case RECEIVE_POST:
      return merge({}, state, {[action.post.id]: action.post});
    case RECEIVE_LIKE:
      return merge({}, state, {[action.like.id]: action.like});
    case REMOVE_LIKE:
      newstate = state;
      delete(newstate[action.like.id]);
      return newstate;
    default:
    return state;
  }
};

export default postsReducer;
