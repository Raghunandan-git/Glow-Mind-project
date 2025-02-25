//Courses.jsx

import React from 'react'
import Html from '../CourseCard/Html'
import '../styles/coursestyle.css'
import CascadSS from '../CourseCard/CascadSS'
import Javascript from '../CourseCard/Javascript'
import Cpplus from '../CourseCard/Cpplus'
import Java from '../CourseCard/Java'
import ReactBasics from '../CourseCard/ReactBasics'
import Footer from '../component/Footer'
import { Link } from 'react-router-dom'
export default function Courses() {
  return (
    <>
    <h1>Available Courses</h1>

    <div className="course-container">
      <Html buttontext={"Enroll Now"}/>
      <CascadSS buttontext={"Enroll Now"}/>
      <Javascript buttontext={"Enroll Now"}/>
      <Cpplus buttontext={"Enroll Now"}/>
      <Java buttontext={"Enroll Now"}/>
      <ReactBasics buttontext={"Enroll Now"}/>
    </div>
      <h1>Categories</h1>
    <div className="categories">
      <div className='card'>
        <img src="https://media.licdn.com/dms/image/v2/D5612AQHyLFkv9YBcGA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1715058774193?e=2147483647&v=beta&t=7yqv62DbvJWPvycGiDX4FGb79GOPsVB_dreB-SHh36E" alt="webdevp" height={150} width={200}/>
      <p>Various Web development courses form beginner to advanced level </p>
      <p>HTML,CSS,JS</p>
      <Link to='/courses'><button>Web Developments</button> </Link>
      </div>      
      <div className='card'>
        <img src="https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2024-09/programming-languages.jpg" alt="pl" height={150} width={200}/>
        <p>Learn fundamentals of programming languages inculuding problem solving</p>
        <p>C++,Java</p>
      <button >Programming languages</button> 
      </div> 
      <div className='card'>
        <img src="https://www.droptica.com/sites/droptica.com/files/inline-images/Full%20stack%20developer%20infographics.png" alt="full stack" height={150} width={200}/>
        <p>Build an interactive and dynamic full stack web appication</p>
        <p>React</p>
      <button>Full Stack Development</button> 
      </div> 
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
    <Footer/>
    </>
  )
}
