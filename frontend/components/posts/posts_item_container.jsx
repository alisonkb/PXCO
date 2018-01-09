import { connect } from 'react-redux';
import { values } from 'lodash';
import { fetchPost, likePost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
import PostsItem from './posts_item';

const mapStateToProps = (state, ownProps) => {
  let postId = parseInt(ownProps.match.params.id);
  let user;
  if (state.entities.posts[postId]) {
    user = state.entities.users[state.entities.posts[postId].user_id];
  } else {
    user = null;
  }
  return {
    post: state.entities.posts[postId],
    user: user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchPost: (post) => dispatch(fetchPost(post)),
    fetchUser: (user) => dispatch(fetchUser(user)),
    likePost: (postId) => dispatch(likePost(postId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsItem);
