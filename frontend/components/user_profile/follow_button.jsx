import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { followUser, unfollowUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps ) => {

  let followStatus = false;
  let buttonText = 'Follow';
  let userId = parseInt(ownProps.match.params.id);

  if (state.session.currentUser.followed_id.includes(userId)) {
    followStatus = true;
    buttonText = 'Unfollow';
  } else {
    followStatus = false;
  }
  return ({
    followStatus, buttonText
  });

};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    followUser: (userId) => dispatch(followUser(userId)),
    unfollowUser: (userId) => dispatch(unfollowUser(userId))
  };
};

const followButton = (props) => {
  if (props.followStatus) {
    return (
      <button className='follow-button' onClick={() => props.unfollowUser(props.followId)}>{props.buttonText}</button>
    );
  } else {
    return (
      <button className='follow-button' onClick={() => props.followUser(props.followId)}>{props.buttonText}</button>
    );
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(followButton));
