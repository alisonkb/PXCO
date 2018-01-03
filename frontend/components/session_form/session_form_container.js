import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/sessions_actions';
import SessionForm from './session_form';


const mapStateToProps = (state, ownProps) => {
  
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType: (ownProps.location.pathname === '/login') ? 'Log In' : 'Sign Up'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.location.pathname === '/login') {
    return {
      processForm: user => dispatch(login(user))

    };
  } else {
    return {
      processForm: user => dispatch(signup(user))
    };
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
