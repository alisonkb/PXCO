import * as APIUserUtil from '../util/users_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const fetchUsers = () => dispatch => (
  APIUserUtil.fetchUsers().then(users => (
    dispatch(receiveAllUsers(users)))
    // return users;
  )
);

const receiveAllUsers = users => {
  return {
  type: RECEIVE_ALL_USERS,
  users};
};

export const fetchUser = id => dispatch => (
  APIUserUtil.fetchUser(id).then(user =>
  dispatch(receiveUser(user)))
);

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const updateUser = (user, id) => dispatch => (
  APIUserUtil.updateUser(user, id).then(user =>
  dispatch(receiveUser(user)))
);
