import React from 'react';
import { Link } from 'react-router-dom';


const strangerGreeting = () => (
  <div className='greeting-links'>

      <Link to='/'><h1> PXCO </h1></Link>
    <div className="right-side">

      <Link to='/login'>Log In</Link>
    <Link className="signup" to='/signup'>Sign Up</Link>
    </div>


  </div>
);

const userGreeting = (currentUser, logout) => (
  <div className='greeting-links'>
      <Link to='/'><h1> PXCO </h1></Link>
    <div className="right-side">
      <button onClick={logout}>Log Out</button>
    </div>
  </div>
);

const Greeting = ({currentUser, logout}) => (
  currentUser ? userGreeting(currentUser, logout) : strangerGreeting()
);

export default Greeting;
