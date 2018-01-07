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

export const updateUser = user => {
  return $.ajax({

    url: `/api/users/${id}`,
    method: 'PATCH',
    data: { user }
  });
};
