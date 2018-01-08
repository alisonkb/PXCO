import { connect } from 'react-redux';

import { updateUser, fetchUser } from '../../actions/user_actions';

import UserEdit from './user_edit';

const mapStateToProps = (state, ownProps) => {

  let userId = parseInt(ownProps.location.pathname.slice(7));
  return {
    user: state.entities.users[userId],
    currentUser: state.session.currentUser


  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateUser: (user, id) => dispatch(updateUser(user, id)),
    fetchUser: user => dispatch(fetchUser(user))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
