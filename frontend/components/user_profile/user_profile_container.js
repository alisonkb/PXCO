import { connect } from 'react-redux';

import { fetchUser } from '../../actions/user_actions';

import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {

  let userId = parseInt(ownProps.location.pathname.slice(7));
  let posts = [];
  let userpage = state.entities.users[userId];
  if (userpage) {
    userpage.post_ids.forEach(post_id => {
      if (state.entities.posts[post_id]) {
        posts.push(state.entities.posts[post_id]);
      }
    });
  }

    return {
      userpage,
      currentUser: state.session.currentUser,
      posts

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    fetchUser: user => dispatch(fetchUser(user))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
