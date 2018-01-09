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

  componenetDidMount() {
    this.props.fetchUser(this.props.post.user_id);
  }

  handleLike() {
    this.props.likePost(this.props.post.id);
  }


  render () {


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
          <a href={`/#/users/${this.props.user.id}`}>
            <h1>{this.props.user.username}</h1>
          </a>
          {captionDiv}
          <LikeButton
          photoId={this.props.post.id}/>
        </div>
      );
    } else {
      return <div className='error'></div>;
    }
  }
}

export default PostsItem;
