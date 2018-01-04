import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import  MainPage from './main_page';
import Footer from './footer';

const App = () => (
  <div>
    <GreetingContainer />
    <Switch>



      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route path='/' component={MainPage} />

  </Switch>
  <Footer />
  </div>
);

export default App;
