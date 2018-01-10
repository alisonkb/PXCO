import React from 'react';
import PostsIndexItem from './posts_index_item';

class PostsIndex extends React.Component {

  componentDidMount () {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className='AllPosts'>
        <h2>Explore creativity from PXCO users </h2>
        <ul>
          {this.props.posts.reverse().map(post => {
            return ( <PostsIndexItem
              post={post}
              key={post.id}
              user={this.props.users[post.user_id]} />);

            })
          }
        </ul>
      </div>

    );
  }
}

export default PostsIndex;
