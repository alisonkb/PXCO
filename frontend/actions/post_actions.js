import * as APIPostUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';

export const fetchPosts = () => dispatch => (
  APIPostUtil.fetchPosts().then(payload => {
    dispatch(receiveAllPosts(payload));
    return payload.posts;
  })
);

const receiveAllPosts = ({posts, users}) => ({
  type: RECEIVE_ALL_POSTS,
  posts,
  users
});
