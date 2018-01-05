import React from 'react';

class PostsIndexItem extends React.Component {
  render () {
    return (
      <li>
        <img src={this.props.post.imageUrl}/>
        <p>{this.props.post.caption}</p>
      </li>
    );
  }

}

export default PostsIndexItem;
