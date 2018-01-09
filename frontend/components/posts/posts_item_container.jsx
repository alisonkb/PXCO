import { connect } from 'react-redux';
import { values } from 'lodash';
import { fetchPost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
import PostsItem from './posts_item';

const mapStateToProps = (state, ownProps) => {
  let postId = parseInt(ownProps.match.params.id);
  
  let user;
  // let weirdUser = state.entities.users[state.entities.posts[postId].user_id];
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
    fetchUser: (user) => dispatch(fetchUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsItem);
