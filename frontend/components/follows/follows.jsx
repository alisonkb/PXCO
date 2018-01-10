import React from 'react';
import { Link } from 'react-router-dom';

class Follows extends React.Component {

  componentDidMount () {
    this.props.fetchPosts();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (!this.props.posts) {
  //     this.props.fetchPosts();
  //   }
  // }

  render() {
    let hasFollows;
    if (this.props.followPosts) {
      hasFollows =   <div className='AllPosts'>
          <h2>Recent uploads from people you follow</h2>
          <ul>
            {this.props.followPosts.reverse().map(post => {
              return ( <img src={post.imageUrl} /> );
            })
            }
          </ul>
        </div>;
    } else {
      hasFollows =  (<div className='error'></div>);
    }
  return ( <div>
    {hasFollows}
  </div> );
  }

}

export default Follows;
