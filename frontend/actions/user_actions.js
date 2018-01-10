import * as APIUserUtil from '../util/users_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveAllUsers = users => {
  return {
  type: RECEIVE_ALL_USERS,
  users};
};

const receiveFollow = follow =>( {
  type: RECEIVE_FOLLOW,
  follow
})

const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
})

const receiveUser = ({user, posts}) => {
  return {
  type: RECEIVE_USER,
  user,
  posts}
};

export const fetchUser = id => dispatch => (
  APIUserUtil.fetchUser(id).then(payload =>
    dispatch(receiveUser(payload)))
  );

export const fetchUsers = () => dispatch => (
  APIUserUtil.fetchUsers().then(users => (
    dispatch(receiveAllUsers(users)))
    // return users;
  )
);

export const updateUser = (user, id) => dispatch => (
  APIUserUtil.updateUser(user, id).then(user => {
    return dispatch(receiveUser(user))
  })
);

export const followUser = userId => dispatch (
  APIUserUtil.followUser(userId).then(follow => {
    dispatch(receiveFollow(follow))
  })
);

export const unfollowUser = userId => dispatch => (
  APIUserUtil.unfollowUser(userId).then(follow => {
    dispatch(removeFollow(follow))
  })
);
