import React from 'react';
import PostsIndexItem from '../posts/posts_index_item';
import { Link } from 'react-router-dom';
import FollowButton from './follow_button';

class UserLikes extends React.Component {

  componentDidMount() {
    let userId = parseInt(this.props.location.pathname.slice(7));
    this.props.fetchUser(userId);
  }

  componentWillReceiveProps(nextProps) {
    if (parseInt(this.props.match.params.id) !== parseInt(nextProps.match.params.id)) {
      this.props.fetchUser(parseInt(nextProps.match.params.id));
    }
  }

  render() {
    let likeFeed;
    if (this.props.liked_posts.length > 0) {
      likeFeed = (
        <ul className="profile-feed">
          {this.props.liked_posts.reverse().map(post => {
            return (
              <a href={`/#/posts/${post.id}`}>
                <li className='SinglePost'>
                  <img src ={post.imageUrl}/>
                </li>
              </a>
            );
          })}
        </ul>
        );
      } else  {
        likeFeed = <p className='no-post'>This user has nothing in their collection.</p>;
           }

    let editPage;
    if (this.props.userpage && this.props.currentUser) {
      if (this.props.currentUser.id === this.props.userpage.id){

      editPage = <Link className='edit-button-profile' to={`/users/${this.props.currentUser.id}/edit`}>Edit Your Profile</Link>;
      }
    } else {
      editPage = <div></div>;
    }

    let followButtonRender;
    if (this.props.currentUser && this.props.userpage) {
      if (this.props.currentUser.id !== this.props.userpage.id) {
        followButtonRender = <FollowButton className='followbut' followId={this.props.userpage.id}/>;
      }
    } else {
      followButtonRender = <div className='nofollow'></div>;
    }

    if (this.props.userpage !== undefined ) {
    return (

      <div className="profile-page">
        <img className="profile-avatar"src={this.props.userpage.image_url} />
        <h1 className="profile-username"> {this.props.userpage.username}</h1>
        <h2 className="profile-bio"> {this.props.userpage.description} </h2>
        {editPage}
        {followButtonRender}
        <div className="profile-links">
          <Link className='p-links-select' to={`/users/${this.props.userpage.id}`}>Images</Link>Collection
        </div>
        {likeFeed}
      </div>

    );
  } else {
    return <div></div>;
  }
  }


}

export default UserLikes;
