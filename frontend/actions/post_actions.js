import * as APIPostUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

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

export const fetchPost = id => dispatch => (
  APIPostUtil.fetchPosts(id).then(post => {
    dispatch(receivePost(post));
    return post;
  })
);

export const createPost = post => dispatch => (
  APIPostUtil.fetchPosts(post).then(post => {
    dispatch(receivePost(post));
    return post;
  })
);

const receivePost = post => ({
  type: RECEIVE_POST,
  post
})
