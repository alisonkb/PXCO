import React from 'react';

class PostsIndexItem extends React.Component {
  render () {
    return (
      <li className='SinglePost'>
        <img src={this.props.post.imageUrl}/>
      <a href={`/#/users/${this.props.user.id}`}>
      <p>{this.props.user.username}</p>
  </a>

      </li>
    );
  }

}

export default PostsIndexItem;
