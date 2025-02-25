import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navstyle.css";
import { FaHome, FaSearch, FaUser, FaBook, FaBell, FaAngleDown, FaPen, } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              <FaHome className="icon" /> Home
            </Link>
          </li>
          <li>
            <Link to="/courses" className="nav-link">
              <FaBook className="icon" /> Courses
            </Link>
          </li>
          <li>
            <Link to="/assignments" className="nav-link">
            <FaPen className="icon" />
            Assignments
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-search">
        <FaSearch className="search-icon" size={15} />
        <input type="text" id="search" name="search" placeholder="Search" />
      </div>

      <div className="nav-profile" ref={dropdownRef}>
        <ul>
          <li className="nav-link">
            <FaBell size={20} className="icon" color="orange" />
          </li>
          <li>
            <FaAngleDown color="black" />
            <FaUser size={20} className="profile" onClick={toggleDropdown} />
            {isOpen && (
              <div className="dropdown-menu">
                <li><Link to="/profile" className="dropdown-li">My Profile</Link></li>
                <li><Link to="/student" className="dropdown-li">Dashboard</Link></li>
                <li><Link to="/settings" className="dropdown-li">Settings</Link></li>
                <li><Link to="/courses" className="dropdown-li">My Courses</Link></li>
                <li><Link to="/Settings" className="dropdown-li">Settings</Link></li>
                <li> <Link to="/logout" className="dropdown-li">Log Out</Link></li>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
