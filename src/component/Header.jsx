//Header.jsx
import React from 'react'
import logo from '../glow mind.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <div className='header'>
        <img src={logo} alt="logo" height={40} width={40} />
        <h1>Glow  Mind</h1>
        <div className="login-btn">
            <Link to='/login'>
            <button>Login/Signup</button>
            </Link>
        </div>
      </div>

    </>
  )
}
