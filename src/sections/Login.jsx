import React, { useState } from "react";

function Login() {

    const[isActive, setIsActive]= useState(false)

    const handleRegister = () => {
        setIsActive(true)
    }
    const handleLogin = () => {
        setIsActive(false)
    }


  return (
    <div className="large-container">
    <div className={`container1 ${isActive ? "active" : ""}`} id="container1">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <img src="google.png" alt="Cart" className=" logo_icon" />
            </a>
            <a href="#" className="icon">
              <img src="facebook.png" alt="Cart" className=" logo_icon" />
            </a>
            <a href="#" className="icon">
              <img src="linkedin.png" alt="Cart" className=" logo_icon" />
            </a>
            <a href="#" className="icon">
              <img src="twitter.png" alt="Cart" className=" logo_icon" />
            </a>
          </div>
          <span>Use Email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <img src="google.png" alt="Cart" className=" logo_icon" />
            </a>
            <a href="#" className="icon">
              <img src="facebook.png" alt="Cart" className=" logo_icon" />
            </a>
            <a href="#" className="icon">
              <img src="linkedin.png" alt="Cart" className=" logo_icon" />
            </a>
            <a href="#" className="icon">
              <img src="twitter.png" alt="Cart" className=" logo_icon" />
            </a>
          </div>
          <span>Use Email and Password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot Your Password</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
            <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all features of the Nunua App</p>
                <button className="hidden" id="login" onClick={handleLogin}>Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
                <h1>Welcome To Nunua!</h1>
                <p>Register with your personal details to use all features of the Nunua App</p>
                <button className="hidden" id="register" onClick={handleRegister}>Sign Up</button>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
