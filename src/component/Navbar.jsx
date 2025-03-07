import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navstyle.css";
import { FaHome, FaSearch, FaUser, FaBook, FaBell, FaAngleDown, FaPen, FaSignOutAlt, FaCog, } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isboxopen, setIsBoxopen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);
  const [filteredCourses, setFilteredCourses] = useState([]);

  const courses = [
    { name: "HTML", path: '/courses/htmlintro' },
    { name: "CSS", path: '/courses/cssintro' },
    { name: "Java", path: '/courses/javaintro' },
    { name: "JavaScript", path: '/courses/jsintro' },
    { name: "C++", path: '/courses/cppintro' },
    { name: "React", path: '/courses/reactintro' },
    { name: "Python", path: '/courses/pythonintro' },
    { name: "MySQL", path: '/courses/mysqlintro' },
    { name: "Bootstrap", path: '/courses/bootstrapintro' },
    { name: "MongoDB", path: '/courses/mongodbintro' },
    { name: "Tailwind CSS", path: '/courses/tailwindintro' },
    { name: "Node & Express ", path: '/courses/node-expressintro' },
  ];


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const notificationBox = () => {
    setIsBoxopen(!isboxopen);
  }
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }

      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchQuery("");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const filtered = courses.filter(course => course.name.toLowerCase().includes(query));
      filtered.sort((a, b) => {
        const aStartsWith = a.name.toLowerCase().startsWith(query);
        const bStartsWith = b.name.toLowerCase().startsWith(query);
        return bStartsWith - aStartsWith;
      });

      setFilteredCourses(filtered);
    } else {
      setFilteredCourses([]);
    }
  };

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

      <div className="navbar-search" ref={searchRef}>
        <FaSearch className="search-icon" size={15} />
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={handleSearch}
        />
        {searchQuery && (
          <div className="search-results">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <Link key={index} to={course.path} className="search-item">
                  {course.name}
                </Link>
              ))
            ) : (
              <p className="no-results">No courses found</p>
            )}
          </div>
        )}
      </div>

      <div className="nav-profile" ref={dropdownRef}>
        <ul>
          <li className="nav-link">
            <FaBell size={20} className="icon" color="orange" onClick={notificationBox} />
            {isboxopen && (
              <div className="notification-box">
                <h3>No messages right now </h3>
              </div>
            )}
          </li>
          <li>
            <FaAngleDown color="black" />
            <FaUser size={20} className="profile" onClick={toggleDropdown} />
            {isOpen && (
              <div className="dropdown-menu">
                <li><Link to="/profile" className="dropdown-li"><FaUser className="icon" color="indigo" size={15} />My Profile</Link></li>
                <li><Link to="/courses" className="dropdown-li"><FaBook className="icon" color="indigo" size={15} />My Courses</Link></li>
                <li><Link to="/Settings" className="dropdown-li"><FaCog className="icon" color="indigo" size={15} />Settings</Link></li>
                <li> <Link to="/logout" className="dropdown-li"><FaSignOutAlt className="icon" color="indigo" size={15} />Log Out</Link></li>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
