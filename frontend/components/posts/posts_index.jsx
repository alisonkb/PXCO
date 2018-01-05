import React from 'react';
import PostsIndexItem from './posts_index_item';

class PostsIndex extends React.Component {

  componentDidMount () {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className='AllPosts'>
        <ul>
          {this.props.posts.map(post => {
            return ( <PostsIndexItem
              post={post}
              key={post.id} />);
            })
          }
        </ul>
      </div>

    );
  }
}

export default PostsIndex;
