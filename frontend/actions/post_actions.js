import * as APIPostUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';

const receiveAllPosts = ({posts, users}) => ({
  type: RECEIVE_ALL_POSTS,
  posts,
  users
});

const receivePost = ({post, user}) => {
  // debugger
  return {
  type: RECEIVE_POST,
  post,
  user }
};


const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});

const receiveLike = like => {
  return {
    type: RECEIVE_LIKE,
    like
  }
};

export const fetchPosts = () => dispatch => (
  APIPostUtil.fetchPosts().then(payload => {
    dispatch(receiveAllPosts(payload));
    return payload.posts;
  })
);

export const fetchPost = id => dispatch => (
  APIPostUtil.fetchPost(id).then(payload => {
    return dispatch(receivePost(payload));
    // return payload.post;
  })
);

export const createPost = post => dispatch => (
  APIPostUtil.fetchPost(post).then(post => {
    dispatch(receivePost(post));
    return post;
  })
);

export const updatePost = (post, id) => dispatch => (
  APIPostUtil.updatePost(post, id).then(post => {
    return dispatch(receivePost(post));
  })
)

export const likePost = (postId) => dispatch => {
  return APIPostUtil.likePost(postId).then(like => {
    return dispatch(receiveLike(like));
  })
};

export const unlikePost = (postId) => dispatch => (
  APIPostUtil.unlikePost(postId).then(like => {
    dispatch(removeLike(like))
  })
);
