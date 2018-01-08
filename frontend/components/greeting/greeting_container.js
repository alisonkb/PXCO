import { connect } from 'react-redux';

import { logout } from '../../actions/sessions_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities }) => {
  const userid = session.currentUser.id;
  return {
    currentUser: entities.users[userid]

  };



};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
