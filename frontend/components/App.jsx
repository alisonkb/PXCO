import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import  MainPage from './main_page';

const App = () => (
  <div>
    <GreetingContainer />
    <Switch>



      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path='/' component={MainPage} />

  </Switch>
  </div>
);

export default App;
