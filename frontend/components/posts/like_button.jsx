import React from 'react';
import { likePost, unlikePost } from '../../actions/post_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let likeStatus = false;
  let buttonText = 'Add to Collection';
  let postId = parseInt(ownProps.match.params.id);

  if (state.session.currentUser.liked_id.includes(postId)) {
    likeStatus = true;
    buttonText = 'Remove from Collection';
  } else {
    likeStatus = false;
  }
  return ({
    buttonText, likeStatus
  });
} ;

const mapDispatchToProps = (dispatch, ownProps) =>{
  return {
    likePost: (postId) => dispatch(likePost(postId)),
    unlikePost: (postId) => dispatch(unlikePost(postId))
  };
};

const likeButton = (props) => {
  if (props.likeStatus) {
    return (
      <button className='ImageView-button' onClick={() => props.unlikePost(props.photoId)}>{props.buttonText}</button>
    );

  } else {
    return (
      <button className='ImageView-button' onClick={() => props.likePost(props.photoId)}>{props.buttonText}</button>
    );
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(likeButton));
