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
      return (
        <div className='ImageView'>
          <img src={this.props.post.imageUrl}/>
        <a href={`/#/users/${this.props.user.id}`}>
            <h1>{this.props.user.username}</h1>
          </a>

        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default PostsItem;
