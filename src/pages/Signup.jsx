//Signup.jsx
import React from 'react'

import logo from '../Glow mind logo.png';
import { Link } from 'react-router-dom';
import { FaAsterisk } from 'react-icons/fa';

export default function Signup() {
  return (
    <>
     <div className="box">
        <div className="container">
            <div className="logoimg">
          <img src={logo} alt="logo" width={150} height={150}/>
        </div>
        <h2>Sign-up</h2>
        <form >
        <div className="input-group">
            <label htmlFor="name">Username <FaAsterisk className='asterisk'/></label>
            <input type="text" id="name" placeholder="Username" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email Address <FaAsterisk className='asterisk'/></label>
            <input type="email" id="email" placeholder="Email Address" />
          </div>
          <div className="role-group">
            <label >Role <FaAsterisk className='asterisk'/></label>
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
            <label htmlFor="password">Password <FaAsterisk className='asterisk'/></label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="input-group">
            <label htmlFor="cpassword">Confirm Password <FaAsterisk className='asterisk'/></label>
            <input type="password" id="cpassword" placeholder="Enter Password again" />
          </div>
          <Link to="/login" >
          <button type="submit" className="btn">SIGN UP</button>
          </Link>
          </form>
          <div className="links">
            <Link to="/login" >Already have an account?Sign-in</Link>
          </div>
        </div>
        </div> 
    </>
  )
}
