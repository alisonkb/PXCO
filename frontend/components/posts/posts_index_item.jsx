import React from 'react';

class PostsIndexItem extends React.Component {
  render () {
    return (
      <li className='SinglePost'>
        <img src={this.props.post.imageUrl}/>
      <p>{this.props.user.username}</p> 

      </li>
    );
  }

}

export default PostsIndexItem;
