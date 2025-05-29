//Home.jsx
import React from 'react'
import '../styles/homestyle.css'
import logo from '../Glow mind logo.png';
import { Link } from 'react-router-dom'
import Footer from '../component/Footer'
import { FaBook, FaBullseye, FaChalkboardTeacher, FaClipboardList, FaClock, FaGift, FaGraduationCap, FaUser, } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home-top">
      <div className="home-container">
        <div className="home-container-left">
        <div className="home-tags">
          <h1>
            <span className="bold">Empowering </span>
            <span className="highlight">Education</span> <br />
            <span className="bold">and </span>
            <span className="bold">boosting </span>
            <span className="highlight">Skills </span>
            <span className="bold">for</span> <br />
            <span className="highlight">Everyone, Everywhere</span>
          </h1>
          <p className="subtext">
          Unlock your potential with Glow Mind – a smarter way to learn. Gain in-demand skills through expert-led courses, hands-on resources for your growth.
          </p>
          
        </div>
        <div className="btns">
          <Link to="/login">
            <button className="btn-1">Get Started</button>
          </Link>
          <Link to="/courses">
            <button className="btn-1">Explore Courses</button>
          </Link>
        </div>
        </div>
        <div className="home-container-right">
        <div className="logoimg">
          <img src={logo} alt="logo" width={350} height={350} />
        </div>
        </div>
        </div>
      </div>
      </div>
      <div className="home-box">
      <div className="stat-box ">
          <FaUser className="icon" color='indigo'/>
          <p><span className="bold">2K+</span>  Students</p>
        </div>
        <div className="stat-box ">
          <FaBook className="icon" color='indigo' />
          <p><span className="bold">5K+</span> Online Courses</p>
        </div>
        <div className="stat-box ">
          <FaChalkboardTeacher className="icon" color='indigo'/>
          <p><span className="bold">250+</span> Expert Mentors</p>
        </div>
      </div>
      <div className="cta-banner">
        <h3>Start your learning journey today!</h3>
        <Link to="/courses"><button className="cta-btn">Explore Courses</button></Link>
      </div>
      <br />
       <h2 id='companies-head'>Shaping the Future with <span style={{color:"indigo"}}>Industry Giants</span>.</h2>
      <div className="logo-banner">
      <div className="logo-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1024px-Walmart_logo.svg.png" alt="Walmart" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png" alt="tcs" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBm7I10LHTbly2Y9ouAnsoYlN-Sp3vHNMewg&s" alt="flipcart" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2560px-Infosys_logo.svg.png" alt="infosys" />
      </div>
    </div>

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
      <h2>🌟 Hear from Our Happy Students</h2>
      <p className="subtitle">Real stories from learners who transformed their skills with GlowMind.</p>

      <div className="reviews-container">
        <div className="review-card">
          <p className="review-text">
            "GlowMind made React so easy to learn! The hands-on approach kept me engaged. 🚀"
          </p>
          <div className="reviewer">
          <h4>— Arun P.</h4>
          <img src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png" alt="Arun P." className="user-image" />
          </div>
        </div>

        <div className="review-card">
          <p className="review-text">
            "Well-structured courses with real-world projects! Highly recommend to anyone looking to upskill."
          </p>
          <div className="reviewer">
          <h4>— Shree K.</h4>
          <img src="https://cdn-icons-png.freepik.com/256/3135/3135823.png?semt=ais_hybrid" alt="Shree K." className="user-image" />
          </div>
        </div>

        <div className="review-card">
          <p className="review-text">
            "The best learning experience ever! The explanations were clear, and the interactive lessons helped a lot."
          </p>
          <div className="reviewer">
          <h4>— Neha R.</h4>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKb5B_aLbXOpeHLmqaP8jOqMOfwVal7TXQsQ&s" alt="Neha R." className="user-image" />
       
          </div>
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
