import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { followUser, unfollowUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps ) => {};

const mapDispatchToProps = (dispatch, ownProps) => {};

const followButton = (props) => {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(followButton));
