//Home.jsx
import React from 'react'
import '../styles/homestyle.css'
import logo from '../Glow mind logo.png';
import { Link } from 'react-router-dom'
import Footer from '../component/Footer'

export default function Home() {
  return (
    <>
     <div className="home-container">
        <div className="logoimg">
                  <img src={logo} alt="logo" width={150} height={150}/>
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
        <hr width='90%' color='black'  />
      
      <div className="popular-courses">
        <h1>Popular Courses</h1>
        <div className="popular-list">
          <div className="popular-card">
            <h3>Web development</h3>
            <p>Learn HTML,CSS,JavaScript</p>
          </div>
          <div className="popular-card">
            <h3>React Mastery</h3>
            <p>Build Dynamic web apps with react</p>
          </div>
        </div>
      </div>
        <br />
        <hr width='90%' color='black'  />
      <div className="cta-banner">
    <h2>🎓 Elevate Your Skills with Glow Mind!</h2>
    <p>Join thousands of learners and start mastering new skills today.</p>
    <Link to="/courses"><button className="cta-btn">Join Now</button></Link>
</div>


        <Footer/>
    </>
  )
}
