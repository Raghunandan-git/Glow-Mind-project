//Signup.jsx
import React from 'react'

import logo from '../ln logo.jpg';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <>
     <div className="box">
        <div className="container">
            <div className="icon">
          <img src={logo} alt="logo" width={90} height={90}/>
        </div>
        <h2>Sign-up</h2>
        <form >
        <div className="input-group">
            <label htmlFor="name">Username *</label>
            <input type="text" id="name" placeholder="Username" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" placeholder="Email Address" />
          </div>
          <div className="role-group">
            <label >Role*</label>
            <div>
            <input type="radio" id='student' name='role' value="student" />
            <label htmlFor="student">Student</label>
            </div>
            <div>
            <input type="radio" name="role" id="instructor" value="instructor"  />
            <label htmlFor="instructor">Instructor</label>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password *</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="input-group">
            <label htmlFor="cpassword">Confirm Password *</label>
            <input type="password" id="cpassword" placeholder="Enter Password again" />
          </div>
          <button type="submit" className="btn">SIGN UP</button>
          </form>
          <div className="links">
            <Link to="/login" >Already have an account?Sign-in</Link>
          </div>
        </div>
        </div> 
    </>
  )
}
