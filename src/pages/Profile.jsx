import React from 'react'
import '../styles/profile.css'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import ReactBasics from '../CourseCard/ReactBasics'
import Cpplus from '../CourseCard/Cpplus'
import Java from '../CourseCard/Java'
import Html from '../CourseCard/Html'
export default function Profile() {
  return (
    <>
     <h1>Profile</h1> 
    <div className="about-profile">
         <h2>About</h2>
         <div className="profile-cont">
         <div className="profile-left">
         <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile-img" />
         </div>
         <div className="profile-right">
         <h2>Jhon Wilson</h2>
        <h4>Jhon_145</h4>
        <h4>Jhon@gmail.com</h4>
        <h3>Karpagam College of Engineering</h3>
         </div>
         <hr />
         <div className="profiles">
            <button>Edit Profile</button>
            <ul>
            <li><h3><FaLinkedin className='icon' color='indigo'/>:Jhon Wilson</h3></li>
            <li><h3><FaGithub className='icon' color='indigo'/>:Jhon-wilson-145</h3></li>
            <li><h3><FaFacebook className='icon' color='indigo'/>:Jhon wilson</h3></li>
            </ul>

         </div>
         </div>

    </div>
    <h1>Completed Courses</h1>
                <div className="course-container">
                    <Html buttontext={"Compleated"}/>
                </div>
    <h1>Enrolled Courses</h1>
                <div className="course-container">
                   <ReactBasics buttontext={"Resume"}/>
                   <Cpplus buttontext={"Resume"}/>
                   <Java buttontext={"Resume"}/>
                </div>
    
    
    
               
    </>
  )
}
