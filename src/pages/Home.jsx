//Home.jsx
import React from 'react'
import '../styles/homestyle.css'
import logo from '../Glow mind logo.png';
import { Link } from 'react-router-dom'
import Footer from '../component/Footer'
import { FaBook, FaBullseye, FaChalkboardTeacher, FaClipboardList, FaClock, FaGift, FaGraduationCap } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="logoimg">
          <img src={logo} alt="logo" width={150} height={150} />
        </div>
        <div className="home-tags">
          <h1>Welcome to Glow Mind</h1>
          <h2>Empovering Education for everyone,everywhere</h2>
          <h4>Login to Glow Mind portal</h4>
        </div>
        <div className='btns'>
          <Link to='/login'> <button>Login</button> </Link>
          <Link to='/signup' ><button>Sign-up</button></Link>
        </div>
      </div>
      <div className="cta-banner">
        <h3>Start your learning journey today!</h3>
        <Link to="/courses"><button className="cta-btn">Explore Courses</button></Link>
      </div>
      <br />
      <hr width='90%' color='black' />

      <div className="popular-courses">
        <h1>Popular Courses</h1>
        <div className="popular-list">
          <Link to='/courses' className='popular-card-link'>
            <div className="popular-card">
              <h3>Web development</h3>
              <p>Learn HTML,CSS,JavaScript</p>
            </div>
          </Link>
          <Link to='/courses' className='popular-card-link'>
            <div className="popular-card" >
              <h3>React Mastery</h3>
              <p>Build Dynamic web apps with react</p>
            </div>
          </Link>
        </div>
      </div>
      <br />
      <hr width='90%' color='black' />

      <div className="why-choose">
        <h1>Why Choose GlowMind?</h1>
        <div className="why-grid">
          <div className="why-card">
            <h3><FaBook className='icon' color='indigo' /> Certified Courses</h3>
            <p>Get certifications for free.</p>
          </div>
          <div className="why-card">
            <h3><FaChalkboardTeacher className='icon' color='indigo' /> Expert Mentors</h3>
            <p>Learn from experienced professionals.</p>
          </div>
          <div className="why-card">
            <h3><FaClock color='indigo' className='icon' /> Flexible Learning</h3>
            <p>Access courses anytime, anywhere.</p>
          </div>
          <div className="why-card">
            <h3><FaGift className='icon' color='indigo' /> Free Access</h3>
            <p>Access high-quality courses without any cost.</p>
          </div>
          <div className="why-card">
            <h3><FaClipboardList className='icon' color='indigo' /> Interactive Quizzes</h3>
            <p>Test your knowledge with fun and engaging quizzes.</p>
          </div>
          <div className="why-card">
            <h3><FaBullseye className='icon' color='indigo' /> Career Guidance</h3>
            <p>Get expert career advice and job placement support.</p>
          </div>
        </div>
      </div>
      <hr width='90%' color='black' />
      <div className="reviews-section">
        <h2>🌟 What Our Students Say</h2>
        <div className="reviews-container">
          <div className="review-card">
            <p>"GlowMind helped me master React with ease! 🚀"</p>
            <h4>— Arun P.</h4>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>

          <div className="review-card">
            <p>"The courses are structured well and easy to follow. Highly recommend!"</p>
            <h4>— Shree K.</h4>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>
      <div className="cta-banner">
        <h2><FaGraduationCap className='icon' /> Elevate Your Skills with Glow Mind!</h2>
        <p>Join thousands of learners and start mastering new skills today.</p>
        <Link to="/courses"><button className="cta-btn">Join Now</button></Link>
      </div>


      <Footer />
    </>
  )
}
