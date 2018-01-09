import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/sessions_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/post_actions';

const defaultState = {currentUser: null};

const sessionReducer = (state = {currentUser: null}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, {currentUser: action.currentUser});
    case RECEIVE_LIKE:
      const newLikes = state.currentUser.liked_id.slice();
      newLikes.push(action.like.post_id);
      const newState = merge({}, state, { currentUser: { liked_id: newLikes }});

      return newState;
    case REMOVE_LIKE:
      const noLikes = state.currentUser.liked_id.slice();
      const badIndex = noLikes.indexOf(action.like.post_id);
      delete(noLikes[badIndex]);
      return Object.assign({}, state, {  liked_id: noLikes });
    default:
      return state;
  }
};

export default sessionReducer;
