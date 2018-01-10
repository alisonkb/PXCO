import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserLikes from './user_likes';

const mapStateToProps = (state, ownProps) => {

  let userId = parseInt(ownProps.location.pathname.slice(7));
  let liked_posts = [];
  let userpage = state.entities.users[userId];
  if (userpage) {
    userpage.liked_id.forEach(liked => {
      if (state.entities.posts[liked]) {
        liked_posts.push(state.entities.posts[liked]);
      }
    });
  }
    return {
      userpage,
      currentUser: state.session.currentUser,
      liked_posts
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    fetchUser: user => dispatch(fetchUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLikes);
