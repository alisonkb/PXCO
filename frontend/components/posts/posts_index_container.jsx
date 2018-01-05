import { connect } from 'react-redux';
import { values } from 'lodash';
import { fetchPosts } from '../../actions/post_actions';
import PostsIndex from './posts_index';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: values(state.entities.posts)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
