import * as APIUserUtil from '../util/users_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

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
