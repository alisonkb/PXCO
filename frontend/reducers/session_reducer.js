import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/sessions_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/post_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW, RECEIVE_USER } from '../actions/user_actions';

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
      let noLikes = state.currentUser.liked_id.slice();
      const badIndex = noLikes.indexOf(action.like.post_id);
      noLikes.splice(badIndex, 1);
      let newCurrentUser = merge({}, state.currentUser);
      newCurrentUser.liked_id = noLikes;
      return { currentUser: newCurrentUser };
    case RECEIVE_FOLLOW:
      const newFollows = state.currentUser.followed_id.slice();
      newFollows.push(action.follow.follower_id);
      return merge({}, state, { currentUser: { followed_id: newFollows }});

    case REMOVE_FOLLOW:
      let newFollowState = Object.assign({}, state);
      let noFollows = newFollowState.currentUser.followed_id;
      const badFollow = noFollows.indexOf(action.follow.follower_id);
      noFollows.splice(badFollow, 1);
      return newFollowState;
  
    default:
      return state;
  }
};

export default sessionReducer;
