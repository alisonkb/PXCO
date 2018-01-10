import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import  MainPage from './main_page';
import Footer from './footer';
import PostsIndex from './posts/posts_index_container';
import PostForm from './post_form/post_form_container';
import UserProfileContainer from './user_profile/user_profile_container';
import UserEditContainer from './user_edit/user_edit_container';
import PostsItemContainer from './posts/posts_item_container';
import UserLikesContainer from './user_likes/user_likes_container';
import FollowsContainer from './follows/follows_container';

const App = () => (
  <div>
    <GreetingContainer />
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route path='/feed' component={PostsIndex} />
      <ProtectedRoute path='/upload' component={PostForm} />
      <Route path='/follows' component={FollowsContainer} />
      <Route path='/posts/:id' component={PostsItemContainer} />
      <ProtectedRoute path='/users/:id/edit' component={UserEditContainer} />
      <Route path='/users/:id/likes' component={UserLikesContainer} />
      <Route path='/users/:id' component={UserProfileContainer} />
      <Route path='/' component={MainPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
