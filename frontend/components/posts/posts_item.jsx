import React from 'react';
import { Redirect } from 'react-router';

class PostsItem extends React.Component {

  constructor (props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPost(parseInt(this.props.match.params.id));
  }

  componenetDidMount() {
    this.props.fetchUser(this.props.post.user_id);
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

        </div>
      );
    } else {
      return <div className='error'></div>;
    }
  }
}

export default PostsItem;
