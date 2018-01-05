import React from 'react';
import ReactDOM from 'react-dom';
// import { signup, login, logout} from './util/session_api_util';
import configureStore  from './store/store';
import Root from './components/root';
import { signup, login, logout } from './actions/sessions_actions.js';
// import { fetchUsers } from './actions/user_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser } };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store = { store }/>, root);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  // window.fetchUsers = fetchUsers;


});
