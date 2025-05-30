//Footer.jsx
import React from 'react'
import logo from '../Glow mind logo.png';
import '../styles/footerstyle.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <>
     <footer className='footer'>
        <div className="footer-container">
            <div className="footer-section">
                <h4>Glow mind</h4>
                <ul>
                    <Link to={'/about'}> <li>About Us</li>  </Link>
                    <Link to={'/contactUs'} > <li>Contact Us</li> </Link>
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/courses'}><li>Courses</li></Link>
                    <Link to={'/feedback'} > <li>Feedback</li> </Link>
                    <li>Privacy Policy</li>
                    <li>Terms and Condition</li>
                </ul>
            </div>
            
            <div className='footer-section-middle'>
                 <div className="logoimg">
                                  <img src={logo} alt="logo" width={100} height={100}/>
                                </div>
                <h1>Glow mind</h1>
                <h3>Empovering Education for everyone,everywhere</h3>
                <h3>Email:glowmind@gmail.com</h3>
                <h3>Mobile:9750750040</h3>
            </div>
            <div className="footer-section">
                <h4>Follow us on</h4>
                <ul className='social-links'>
                    <li> <FaInstagram className='icon' color='indigo'/> Instagram</li>
                    <li> <FaYoutube color='indigo' className='icon' /> Youtube</li>
                    <li> <FaLinkedin color='indigo' className='icon' /> LinkedIn</li>
                    <li> <FaFacebook color='indigo' className='icon'/> facebook</li>

                </ul>
            </div>
        </div>
        <div className="footer-bottom">
        <p>© 2025 Glow mind. All Rights Reserved.</p>
      </div>
    </footer> 
    </>
  )
}
