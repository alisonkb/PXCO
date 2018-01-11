import { connect } from 'react-redux';
import { updatePost, fetchPost } from '../../actions/post_actions';
import PostEdit from './post_edit';

const mapStateToProps = (state, ownProps) => {
  let postId = parseInt(ownProps.location.pathname.slice(7));
  return {
    post: state.entities.posts[postId],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updatePost: (post, id) => dispatch(updatePost(post, id)),
    fetchPost: id => dispatch(fetchPost(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
