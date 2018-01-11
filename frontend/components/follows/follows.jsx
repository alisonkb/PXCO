import React from 'react';
import { Link } from 'react-router-dom';
import PostsIndexItem from '../posts/posts_index_item';

class Follows extends React.Component {

  componentDidMount () {
    this.props.fetchPosts();
  }

  render() {
    let hasFollows;
    if (this.props.followPosts) {
      hasFollows =
      <div className='AllPosts'>
          <h2>Recent uploads from people you follow</h2>
          <ul>
            {this.props.followPosts.reverse().map(post => {
              return (
                <li className='SinglePost'>
                  <Link to={`/posts/${post.id}`}>
                    <img src={post.imageUrl}/>
                  </Link>
                  <a href={`/#/users/${this.props.users[post.user_id]}`}>
                    <p>{this.props.users[post.user_id].username}</p>
                  </a>
                  </li>
              );

              })
            }
          </ul>
        </div>;
    } else {
      hasFollows =  <div className='error'>
         <h3 className='no-post-head'>There's nothing here.</h3>
       <a href ={`/#/explore`}>
          <p className='no-post'>Check out the explore page to find users to follow!</p>
        </a>
      </div>;
    }

  return (
    <div>
      {hasFollows}
    </div> );

  }

}

export default Follows;
