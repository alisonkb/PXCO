import React from 'react';
import { Link } from 'react-router-dom';


const strangerGreeting = () => (
  <div className='stranger-greeting-links'>
    <Link to='/login'>Log In</Link>
    <Link to='/signup'>Sign Up</Link>


  </div>
);

const userGreeting = (currentUser, logout) => (
  <div className='user-greeting-links'>
    <button onClick={logout}>Log Out</button>
  </div>
);

const Greeting = ({currentUser, logout}) => (
  currentUser ? userGreeting(currentUser, logout) : strangerGreeting()
);

export default Greeting;
