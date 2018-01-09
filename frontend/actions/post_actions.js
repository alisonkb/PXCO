import * as APIPostUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';

export const fetchPosts = () => dispatch => (
  APIPostUtil.fetchPosts().then(payload => {
    dispatch(receiveAllPosts(payload));
    return payload.posts;
  })
);

export const fetchPost = id => dispatch => (
  APIPostUtil.fetchPost(id).then(post => {
    dispatch(receivePost(post));
    return post;
  })
);

export const createPost = post => dispatch => (
  APIPostUtil.fetchPost(post).then(post => {
    dispatch(receivePost(post));
    return post;
  })
);

export const likePost = (postId) => (
  APIPostUtil.likePost(postId).then(like => {
    dispatch(receiveLike(like));
  })
);

export const unlikePost = (postId) => (
  APIPostUtil.unlikePost(postId).then(like => {
    dispatch(removeLike(like))
  })
);

const receiveAllPosts = ({posts, users}) => ({
  type: RECEIVE_ALL_POSTS,
  posts,
  users
});

const receivePost = post => ({
  type: RECEIVE_POST,
  post
});


const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});
