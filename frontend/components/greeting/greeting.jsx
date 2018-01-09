import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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

  const userGreeting = (currentUser_A, logout, history) => (
    <div className='greeting-links'>
      <div className='left-side'>
        <Link to='/'><h1> PXCO </h1></Link>
        <Link to='/feed'><h1> Explore </h1></Link>
      </div>
      <div className="right-side-in">
        <Link className='username-link' to={`/users/${currentUser_A.id}`}><h1> {currentUser_A.username} </h1></Link>
        <Link className='username-link' to="/upload"><h1>Upload</h1></Link>
        <button className='logout-button' onClick={specialLogout(logout, history)}>Log Out</button>
      </div>
    </div>
  );

  const specialLogout = (logout, history) => {
    return () => {
      logout().then(() => {
        history.push('/')
      });
    }
  }


  const Greeting = ({currentUser_A, logout, history}) => {
    return currentUser_A ? userGreeting(currentUser_A, logout, history) : strangerGreeting()
  };


export default withRouter(Greeting);
