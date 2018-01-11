export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users'
  });
};

export const fetchUser = id => {
  return $.ajax({

    url: `/api/users/${id}`,
    method: 'GET'
  });
};

export const updateUser = (user, id) => {
  return $.ajax({

    url: `/api/users/${id}`,
    method: 'PATCH',
    data: user ,
    processData: false,
    contentType: false,
  });
};

export const followUser = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}/follow`,
    method: 'POST'
  });
};

export const unfollowUser = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}/unfollow`,
    method: 'DELETE'
  });
};
