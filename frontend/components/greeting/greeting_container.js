import { connect } from 'react-redux';

import { logout } from '../../actions/sessions_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities }) => {
  let userNow;

  if (session.currentUser) {
    userNow = entities.users[session.currentUser.id]
    return {
      currentUser_A: userNow
    };
  } else {
    return {
      currentUser_A: null
    }
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
