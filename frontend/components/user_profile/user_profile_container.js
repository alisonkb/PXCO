import { connect } from 'react-redux';

import { fetchUser } from '../../actions/user_actions';

import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {

  let userId = parseInt(ownProps.location.pathname.slice(7));

      let posts;
      if (state.entities.users[userId]) {
        posts = state.entities.users[userId].posts;
      } else {
        posts = null;
      }
    return {
      userpage: state.entities.users[userId],
      currentUser: state.session.currentUser,
      posts: posts
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    fetchUser: user => dispatch(fetchUser(user))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
