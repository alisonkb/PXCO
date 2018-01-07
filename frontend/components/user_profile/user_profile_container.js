import { connect } from 'react-redux';

import { fetchUser } from '../../actions/user_actions';

import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {

  let userId = parseInt(ownProps.location.pathname.slice(7));
  return {
    user: state.entities.users[userId],
    // posts: state.entities.users[userId].posts

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    fetchUser: user => dispatch(fetchUser(user))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
