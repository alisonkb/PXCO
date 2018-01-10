import { connect } from 'react-redux';
import { values } from 'lodash';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import Follows from './follows';

const mapStateToProps = (state, ownProps) => {
  let followPosts = [];
  let followCheck = [];
  state.session.currentUser.followed_id.map(id => {
    followCheck.push(id);
  });
  let loadedCheck = Object.keys(state.entities.posts);


  if (loadedCheck.length > 0) {

    loadedCheck.map(id => {
      if (followCheck.includes(state.entities.posts[id].user_id)) {

        followPosts.push(state.entities.posts[id]);
        }
      });
    }
  
  return {
    followPosts
  };


};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Follows);
