export const fetchPosts = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/posts'
  });
};

export const createPost = (formData) => {
    return $.ajax({
    url: '/api/posts',
    type: 'POST',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};

export const fetchPost = id => {
  return $.ajax({
    url: `/api/posts/${id}`,
    type: 'GET'
  });
};

// export const likePost = (postId) => {
//   return $.ajax({
//     url:`/api/posts/${postId}/like`,
//     type: 'POST'
//   });
// };
//
// export const unlikePost = (postId) => {
//   return $.ajax({
//     url: `/api/posts/${postId}/unlike`,
//     type: 'DELETE'
//   });
// };
