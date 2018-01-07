import React from 'react';
import PostsIndexItem from '../posts/posts_index_item';

class UserProfile extends React.Component {

  componentDidMount() {
    let userId = parseInt(this.props.location.pathname.slice(7));
    this.props.fetchUser(userId);
  }


  render () {
    if (this.props.user) {
      const pics = Object.entries(this.props.user.posts);
    return (

      <div>

      <h1 className="profile-username"> {this.props.user.username}</h1>
      <img className="profile-username"src={this.props.user.image_url} />
      <h2 className="profile-username"> {this.props.user.description} </h2>
    <ul className="profile-username"> {pics.map(post => {
          return (<li className='SinglePost'>
            <img src={post[1].imageUrl}/>



        </li>);


      })}
    </ul>
    {console.log(Object.entries(this.props.user.posts))}

    </div>


    );
  } else {
    return <div></div>;
  }
  }

}

export default UserProfile;
