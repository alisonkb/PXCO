import React from 'react';
import { Redirect } from 'react-router';

class PostsItem extends React.Component {

  constructor (props) {
    super(props);
  }

  componentWillMount() {
    debugger
    this.props.fetchPost(parseInt(this.props.match.params.id));
  }

  componenetDidMount() {
    debugger
    this.props.fetchUser(this.props.post.user_id);
  }



  render () {

    if (this.props.post && this.props.user) {

      return (
        <div>

          <img src={this.props.post.imageUrl}/>
          {/* <a href={`/#/users/${this.props.user.id}`}>
            <p>{this.props.user.username}</p>
          </a> */}
          <h1>{this.props.user.username}</h1>

          {/* <p>{this.props.post.} */}
        </div>
      );

    } else {
      return <div></div>;
    }
  }
}

export default PostsItem;
