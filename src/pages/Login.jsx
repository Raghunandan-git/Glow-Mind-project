//Login.jsx
import React, { useState } from 'react'
import '../styles/loginstyle.css'
import logo from '../ln logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
export default function Login() {
  const [role,SetRole]=useState('')
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(role==="student"){
      navigate('/student');
    }
    else if(role==='instructor'){
      navigate('/instructor');
    }
    else{
      alert("select any role")
    }
  }
  
  return (
    <>
     <div className='box'>
      <div className="container">
        <div className="icon">
          <img src={logo} alt="logo" width={90} height={90}/>
        </div>
        <h2>Sign-in</h2>
          <form onSubmit={handleSubmit} >
          <div className="input-group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" placeholder="Email Address" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password *</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="role-group">
            <label >Role*</label>
            <div>
            <input type="radio" id='student' name='role' value="student" onChange={(e)=>SetRole(e.target.value)} />
            <label htmlFor="student">Student</label>
            </div>
            <div>
            <input type="radio" name="role" id="instructor" value="instructor" onChange={(e)=>SetRole(e.target.value)} />
            <label htmlFor="instructor">Instructor</label>
            </div>
          </div>
          <div className="options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </div>
          <button type="submit" className="btn">SIGN IN</button>
          </form>
          <div className="links">
          <Link to='/signup' >Don't have an account?Sign-up</Link>
        </div>
      </div>
     </div>
    </>
  )
}
