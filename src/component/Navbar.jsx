//Navbar.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navstyle.css'
import {FaHome, FaSearch, FaUser} from 'react-icons/fa'
export default function Navbar() {
  return (
    <>
     <nav className='navbar'>
      <div className="navbar-links">
      <ul>
        <li>
       <Link to='/' className='nav-link'> <FaHome /> Home </Link>
        </li>
        <li>
        <Link to='/courses' className='nav-link'>Courses</Link>
        </li>
        <li>
        <Link to='/feedback' className='nav-link'>Feedback</Link> 
        </li>
      </ul>
      </div>
      <div className="navbar-search">
      <FaSearch className="search-icon" size={20}/>
        <input type="text" id='search' name='search' placeholder={"search"} />
      </div>
      <div className="nav-profile">
        <ul>
          <li><Link to='/profile' className='nav-link'>Profile <FaUser size={15}/>  </Link></li>
        </ul>
      </div>
      </nav> 
    </>
  )
}
