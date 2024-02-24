import React from 'react';
import './User.css';
import Landing_Nav from '../landing/Landing_Nav';



function AddUser() {
  return (
    <>
    <body>
      
      <Landing_Nav/>
      <section className="container">
        <div className="login-container">
          <div className="circle circle-one"></div>
          <div className="form-container">
            
            {/* <img
              src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
              alt="illustration"
              className="illustration"
            /> */}
            <h1 className="opacity">ADD USER</h1>
            <form>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="EMAIL" />
              <input type="password" placeholder="PASSWORD" />
              <button className="opacity">SUBMIT</button>
            </form>
            
          </div>
          <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
      </section>
    </body>
    </>
  );
}

export default AddUser;
