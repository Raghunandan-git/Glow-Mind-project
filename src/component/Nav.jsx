// Nav.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove the Router import
import Student from '../pages/Student';
import Login from '../pages/Login';
import Admin from '../pages/Admin';
import Instructor from '../pages/Instructor';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Courses from '../pages/Courses';
// import CssContent from '../CourseIntro/CssIntro';
// import HtmlCont from '../CourseIntro/HtmlIntro';
// import Cppcont from '../CourseIntro/CppIntro';
// import JavaCont from '../CourseIntro/JavaIntro';
// import JsCont from '../CourseIntro/JsIntro';
// import ReactCont from '../CourseIntro/ReactIntro';
// import Htmlcont from '../Coursecontent/Htmlcont';
// import CssCont from '../Coursecontent/CssCont';
import InttoductionToHTML from '../CourseMaterials/HTMLContents/InttoductionToHTML';
import HtmlIntro from '../CourseIntro/HtmlIntro';
import CssIntro from '../CourseIntro/CssIntro';
import JavaIntro from '../CourseIntro/JavaIntro';
import JsIntro from '../CourseIntro/JsIntro';
import ReactIntro from '../CourseIntro/ReactIntro';
import CppIntro from '../CourseIntro/CppIntro';
import IntroductionToCss from '../CourseMaterials/CSSContents/IntroductionToCss';
import IntroductionToJs from '../CourseMaterials/JSContents/IntroductionToJs';
import IntroductionToCpp from '../CourseMaterials/CppContents/IntroductionToCpp';
import IntroductionToJava from '../CourseMaterials/JavaContents/IntroductionToJava';
import IntroductionToReact from '../CourseMaterials/ReactContents/IntroductionToReact';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Profile from '../pages/Profile';

export default function Nav() {
  return (
    <>
      <nav>
        {/* <ul>
          <div className="navbar">
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/student">Student</Link></li>
            <li><Link to="/instructor">Instructor</Link></li>
          </div>
        </ul> */}
      </nav>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<Student />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/contactUs' element={<ContactUs/>} />
        <Route path='/courses/cssintro' element={<CssIntro/>} />
        <Route path='/courses/htmlintro' element={<HtmlIntro/>} />
        <Route path='/courses/cppintro'  element={<CppIntro/>} />
        <Route path='/courses/javaintro' element={<JavaIntro/>} />
        <Route path='/courses/jsintro' element={<JsIntro/>} />
        <Route path='/courses/reactintro' element={<ReactIntro/>} />
        <Route path='/courses/html/introduction-to-html' element={<InttoductionToHTML/>} />
        <Route path='/courses/css/Introduction-to-Css' element={<IntroductionToCss/>} />
        <Route path='/courses/js/Introduction-to-Js' element={<IntroductionToJs/>} />
        <Route path='/courses/c++/Introduction-to-C++' element={<IntroductionToCpp/>}  />
        <Route path='/courses/java/Introduction-yo-Java' element={<IntroductionToJava/>}  />
        <Route path='/courses/react-basics/Introduction-to-react' element={<IntroductionToReact/>} />
      </Routes>
    </>
  );
}
