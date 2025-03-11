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
import Python from '../CourseCard/Python'
import MySQL from '../CourseCard/MySQL'
import Bootstrap from '../CourseCard/Bootstrap'
import MongoDB from '../CourseCard/Mongodb'
import Tailwind from '../CourseCard/Tailwind'
import Express from '../CourseCard/ExpressCard'
export default function Courses() {
  return (
    <>
      <h1>Available Courses</h1>

      <div className="course-container">
        <Html buttontext={"Enroll Now"} />
        <CascadSS buttontext={"Enroll Now"} />
        <Javascript buttontext={"Enroll Now"} />
        <Cpplus buttontext={"Enroll Now"} />
        <Java buttontext={"Enroll Now"} />
        <ReactBasics buttontext={"Enroll Now"} />
        <Python buttontext={"Enroll Now"} />
        <MySQL buttontext={"Enroll Now"} />
        <Bootstrap buttontext={"Enroll Now"} />
        <MongoDB buttontext={"Enroll Now"} />
        <Tailwind buttontext={"Enroll Now"} />
        <Express buttontext={"Enroll Now"} />

      </div>
      <h1>Categories</h1>
      <div className="categories">
        <div className='card'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd4khJx-_3XlrOBA4_H6x_tiWqp1BiamZRcw&s" alt="webdevp" height={150} width={200} />
          <h3>Web Devolpment</h3>
          <p>Various Web development courses form beginner to advanced level </p>
          <p>HTML,CSS,JS</p>
          <Link to='/courses'><button>Explore Courses</button> </Link>
        </div>
        <div className='card'>
          <img src="https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2024-09/programming-languages.jpg" alt="pl" height={150} width={200} />
          <h3>Programming Languages</h3>
          <p>Learn fundamentals of programming languages inculuding problem solving</p>
          <p>C++,Java</p>
          <button >Explore Courses</button>
        </div>
        <div className='card'>
          <img src="https://www.droptica.com/sites/droptica.com/files/inline-images/Full%20stack%20developer%20infographics.png" alt="full stack" height={150} width={200} />
          <h3>Full Stack </h3>
          <p>Build an interactive and dynamic full stack web appication</p>
          <p>React</p>
          <button>Explore Courses</button>
        </div>
      </div>
      <br />
      <hr width='90%' color='black' />

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
      <Footer />
    </>
  )
}
