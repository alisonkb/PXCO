import React from 'react';
import ReactDOM from 'react-dom';
// import { signup, login, logout} from './util/session_api_util';
import configureStore  from './store/store';
import Root from './components/root';
import { signup, login, logout } from './actions/sessions_actions.js';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store = { store }/>, root);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
});
