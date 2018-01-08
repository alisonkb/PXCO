import React from 'react';
import { Link } from 'react-router-dom';
import PostsItemContainer from './posts_item_container';

class PostsIndexItem extends React.Component {


  render () {

    return (
      <li className='SinglePost'>
        <Link to={`/posts/${this.props.post.id}`}>
          <img src={this.props.post.imageUrl}/>
        </Link>
        <a href={`/#/users/${this.props.user.id}`}>
          <p>{this.props.user.username}</p>
        </a>
      </li>
    );
  }

}

export default PostsIndexItem;
