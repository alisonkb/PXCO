export const fetchPosts = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/posts'
  });
};

export const createPost = (formData) => {
    return $.ajax({
    url: '/api/posts',
    method: 'POST',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};

export const fetchPost = id => {
  return $.ajax({
    url: `/api/posts/${id}`,
    method: 'GET'
  });
};

export const updatePost = (post, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/posts/${id}`,
    data: post
  });
};

export const likePost = postId => {
  return $.ajax({
    url:`/api/posts/${postId}/like`,
    method: 'POST'
  });
};

export const unlikePost = (postId) => {
  return $.ajax({
    url: `/api/posts/${postId}/unlike`,
    method: 'DELETE'
  });
};
