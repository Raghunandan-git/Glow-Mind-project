import React from "react";
import "../styles/student.css"; // Create this CSS file
import Java from "../CourseCard/Java";
import ReactBasics from "../CourseCard/ReactBasics";
import Python from "../CourseCard/Python";
import Bootstrap from "../CourseCard/Bootstrap";
import MongoDB from "../CourseCard/Mongodb";
import Tailwind from "../CourseCard/Tailwind";
import NodeExpress from "../CourseCard/ExpressCard";

const enrolledCourses = [
  {
    id: 1,
    title: "Javascript Essentials",
    progress: 40,
    icon: "https://files.ably.io/ghost/prod/2023/12/choosing-the-best-javascript-frameworks-for-your-next-project.png" , // Replace with actual icon
  },
  {
    id: 2,
    title: "Mastering in C++",
    progress: 20,
    icon: "https://miro.medium.com/v2/resize:fit:1400/0*ZpjhBs0gR5oSd3Il",
  },
  {
    id: 3,
    title: "MySQL for beginners to advanced",
    progress: 10,
    icon: "https://www.zend.com/sites/default/files/image/2020-04/image-blog-mysql-php.jpg",
  },
];

const completedCourses = [
  {
    id: 4,
    title: "HTML:Beginner to Advanced",
    progress:100,
    icon: "https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg",
  },
  {
    id: 5,
    title: "CSS:Beginner to Advanced",
    progress:100,
    icon: "https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png",
  },
];

const Student = () => {
  return (
    <>
    <div className="enrolled-courses">
      <h1>Continue Your Journey</h1>
      {enrolledCourses.map((course) => (
        <div className="course-card" key={course.id}>
          <img src={course.icon} alt={course.title} className="course-icon" />
          <div className="course-info">
            <h3>{course.title} </h3>
            <h3>Progress:{course.progress}%</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${course.progress}%` }}></div>
            </div>
          </div>
          <button>Resume Course</button>
        </div>
      ))}
    </div>
    <div className="enrolled-courses">
        <h1>Completed Courses</h1>
        {completedCourses.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.icon} alt={course.title} className="course-icon" />
            <div className="course-info">
              <h3>{course.title}</h3>
              <h3>Progress:{course.progress}%</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${course.progress}%` }}></div>
            </div>
            </div>
            <button className="view-certificate">View Certificate</button>
          </div>
        ))}
      </div>

      <h1>Courses You Would Like </h1>
      
          <div className="course-container">
            <Java buttontext={"Enroll Now"}/>
            <ReactBasics buttontext={"Enroll Now"}/>
            <Python buttontext={"Enroll Now"}/>
            <Bootstrap buttontext={"Enroll Now"}/>
            <MongoDB buttontext={"Enroll Now"}/>
            <Tailwind buttontext={"Enroll Now"}/>
            <NodeExpress buttontext={"Enroll Now"}/>
      
          </div>
    </>
    
  );
};

export default Student;
