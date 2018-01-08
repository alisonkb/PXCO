import { connect } from 'react-redux';

import { logout } from '../../actions/sessions_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities }) => {
  let userid;
  if (session.currentUser) {
    userid = session.currentUser.id
    return {
      currentUser: entities.users[userid]

    };
  } else {
    return {
      currentUser: null
    }
  }



};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
