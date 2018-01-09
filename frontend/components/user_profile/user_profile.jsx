import React from 'react';
import PostsIndexItem from '../posts/posts_index_item';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {

  componentWillMount() {
    let userId = parseInt(this.props.location.pathname.slice(7));
    this.props.fetchUser(userId);
  }


  render () {

    let profileFeed;
    if (this.props.userpage !== undefined && this.props.userpage.posts) {
      const pics = Object.entries(this.props.userpage.posts);
      profileFeed =   <ul className="profile-feed"> {pics.reverse().map(post => {
          return (<li className='SinglePost'>
            <Link to={`/posts/${post[1].id}`}>
              <img src={post[1].imageUrl}/>
          </Link>

            </li>);
        })}
      </ul>;
    } else  {
      profileFeed = <p className='no-post'>This user has no posts.</p>;
    }

    let editPage;
    if (this.props.userpage && this.props.currentUser) {
      if (this.props.currentUser.id === this.props.userpage.id){

      editPage = <Link className='edit-button-profile' to={`/users/${this.props.currentUser.id}/edit`}>Edit Your Profile</Link>;
      }
    } else {
      editPage = <div></div>;
    }

    if (this.props.userpage !== undefined ) {
    return (

      <div className="profile-page">
        <img className="profile-avatar"src={this.props.userpage.image_url} />
        <h1 className="profile-username"> {this.props.userpage.username}</h1>
        <h2 className="profile-bio"> {this.props.userpage.description} </h2>
        {editPage}
        {profileFeed}
      </div>

    );
  } else {
    return <div></div>;
  }
  }

}

export default UserProfile;
