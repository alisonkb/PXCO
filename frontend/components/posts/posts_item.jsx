import React from 'react';
import { Redirect } from 'react-router';
import LikeButton from './like_button';

class PostsItem extends React.Component {

  constructor (props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
  }

  componentWillMount() {
    this.props.fetchPost(parseInt(this.props.match.params.id));
  }

  componentWillReceiveProps(nextProps) {
      if (parseInt(this.props.match.params.id) !== parseInt(nextProps.match.params.id)) {
      this.props.fetchPost(parseInt(nextProps.match.params.id));
    }
  }

  componenetDidMount() {
    this.props.fetchUser(this.props.post.user_id);
  }

  handleLike() {
    this.props.likePost(this.props.post.id);
  }


  render () {
    debugger
    let likeButtonRender;
    if (this.props.post && this.props.currentUser ) {

      likeButtonRender = <LikeButton
      photoId={this.props.post.id}/> ;
    } else {
      likeButtonRender = <div></div> ;
    }


    if (this.props.post && this.props.user) {
      let captionDiv;
      if (!this.props.post.caption) {
        captionDiv  = <div></div>;
        } else {
        captionDiv = <p>{this.props.post.caption}</p>;
        }
      return (
        <div className='ImageView'>
          <img src={this.props.post.imageUrl}/>
          <div className='ImageView-text'>
            <a href={`/#/users/${this.props.user.id}`}>
              <h1>{this.props.user.username}</h1>
            </a>
            {captionDiv}
            {likeButtonRender}

          </div>
        </div>
      );
    } else {
      return <div className='error'></div>;
    }
  }
}

export default PostsItem;
