import merge from 'lodash/merge';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_ALL_POSTS, RECEIVE_POST, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/post_actions.js';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POST:
    debugger
      return merge({}, state, {[action.post.id]: action.post});
    case RECEIVE_ALL_POSTS:
    case RECEIVE_USER:
      return merge({}, state, action.posts);
    default:
      return state;
  }
};

export default postsReducer;
