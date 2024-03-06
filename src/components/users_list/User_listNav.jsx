import React from 'react';
import { Link } from 'react-router-dom';
// import Display from '../display/Display';
import './UserList.css'

function AddUserNav() {
  return (
    <div >

      
      <nav>
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
          <li><a href='#'>Profile</a></li>
          <li><a href='#'>Settings</a></li>
          <li><a href='#'>Contact Us</a></li>
          
          <li>
            <Link to={'/login'}><button className="login-button">Login</button></Link></li>
          
        </ul>
      </nav>
    
    
    </div>
  );
};

export default AddUserNav;
