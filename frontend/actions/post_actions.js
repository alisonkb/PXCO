import * as APIPostUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';

export const fetchPosts = () => dispatch => (
  APIPostUtil.fetchPosts().then(posts => {
    dispatch(receiveAllPosts(posts));
    return posts;
  })
);

const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
});
