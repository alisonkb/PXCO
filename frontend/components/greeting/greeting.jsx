import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router'


const strangerGreeting = () => (
  <div className='greeting-links'>
    <div className='left-side'>
      <Link to='/'><h1> PXCO </h1></Link>
      <Link to='/feed'><h1> Explore </h1></Link>
    </div>
    <div className="right-side">

      <Link to='/login'>Log In</Link>
      <Link className="signup" to='/signup'>Sign Up</Link>
    </div>


  </div>
);



const userGreeting = (currentUser, logout) => (

  <div className='greeting-links'>
        <div className='left-side'>
        <Link to='/'><h1> PXCO </h1></Link>
      <Link to='/feed'><h1> Explore </h1></Link>
    </div>
    <div className="right-side-in">
      <Link className='username-link' to={`/users/${currentUser.id}`}><h1> {currentUser.username} </h1></Link>
    <Link className='username-link' to="/upload"><h1>Upload</h1></Link>
  <button className='logout-button' onClick={logout}><a href='/'>Log Out</a></button>
    </div>
  </div>
);

const Greeting = ({currentUser, logout}) => (
  currentUser ? userGreeting(currentUser, logout) : strangerGreeting()
);

export default Greeting;
