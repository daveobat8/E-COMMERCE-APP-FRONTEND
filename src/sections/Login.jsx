import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios'; 

function Login() {

    const[isActive, setIsActive]= useState(false)
    const[email,setEmail]= useState("")
    const[username,setUsername]= useState("")
    const[password, setPassword]= useState("")
    const[first_name, setFirstName]= useState("")
    const[last_name, setLastName]= useState("")

    const handleRegister = () => {
        setIsActive(true)
    }
    const handleLogin = () => {
        setIsActive(false)
    }
    // handle sign-up form submission
    const handleSignUp = async (e) => {
      e.preventDefault()
      try{
        const response= await axios.post("http://127.0.0.1:5000/signup",{
          email,
          password,
          username,
          first_name,
          last_name
        })
        console.log('Sign up success:', response.data)
      }catch (error) {
        console.error('Sign up error:', error);
      }
    }

    // handle sign in form submission
    const handleSignIn = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://127.0.0.1:5000/login', {
          email,
          password
        });
        console.log('Login success:', response.data);
      } catch (error) {
        console.error('Login error:', error);
      }
    };


  return (
    <div className="large-container">
    <div className={`container1 ${isActive ? "active" : ""}`} id="container1">
      <div className="form-container sign-up">
        <form onSubmit={handleSignUp}>
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
          <input type="first_name" placeholder="First Name" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
          <input type="last_name" placeholder="Last Name" value={last_name} onChange={(e) => setLastName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleSignIn}>
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
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <a href="#">Forgot Your Password</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
            <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all features of the Nunua App</p>
                <button className="hidden" id="login" onClick={handleLogin}>Sign In</button>
                <NavLink to='/home' className="continue">Continue Without Signing In?</NavLink>
            </div>
            <div className="toggle-panel toggle-right">
                <h1>Welcome To Nunua!</h1>
                <p>Register with your personal details to use all features of the Nunua App</p>
                <button className="hidden" id="register" onClick={handleRegister}>Sign Up</button>
                <NavLink to='/home' className="continue">Continue Without Signing Up?</NavLink>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
