import React from "react";
import "../styles/Instructor.css";
import { FaFacebook, FaGithub,  FaLinkedin } from "react-icons/fa";
const Instructor = () => {
  return (
    <>
    <div className="instructor-container">
      <div className="instructor-header">
        <img src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-26093.jpg?semt=ais_hybrid" alt="Instructor" className="instructor-photo"/>
        <div className="instructor-info">
          <h1>Elizabeth</h1>
          <p>Senior WebDeveloper|Instructor</p>
        </div>
      </div>
      <div className="about-section">
        <div className="about-instructor">
        <h2>About the Instructor</h2>
        <p>
        Professional software engineer with over 10 years of experience in full stack web development </p>
        <p> 
          Taught 1,000+ students online.
        </p>
        </div>
        <div className="instructor-profile">
          <p><FaLinkedin className="icon" color="indigo"/>Elizabeth</p>
          <p><FaGithub className="icon" color="indigo"/>Elizabeth</p>
          <p><FaFacebook className="icon" color="indigo"/>Elizabeth</p>
          </div>

      </div>
<hr />
      <div className="courses-section">
        <div className="instructor-course">
          <h2>Courses</h2>
          <button>   Add Course</button>
        </div>
        <div className="courses-grid">
          <div className="instructor-course-card">
            <div className="course-head">
            <img src="https://imic.edu.vn/Contents/images/news/khoa-hoc-phat-trien-web-react-js-10-loi-the-hang-dau-cua-viec-su-dung-react-js-hoc-tai-imic.png" alt="Course" className="course-icon"/>
            <h3>React basics</h3>
            <p>⭐ 4.6 Ratings|800+ students</p>
            </div>
            <button >Manage Course</button>
          </div>
          <div className="instructor-course-card">
          <div className="course-head">
            <img src="https://miro.medium.com/v2/resize:fit:1400/0*-VVwL0nee9RgEhJB.png" alt="Course" className="course-icon"/>
            <h3>Node.js & Express.js Mastery</h3>
            <p>⭐ 4.8 Ratings|500+ students</p>
            </div>
            <button >Manage Course</button>
          </div>
        </div>
      </div>
    </div>
      <div className="instructor-container">
  <h2>Clear your student's Doubt</h2>
  <div className="question-box">
    <h3> Arun: Can you explain useEffect in React again?  </h3>
    <div className="answer-box">
    <textarea placeholder="Type your answer here" className="input-answer" />
    <button className="answer-btn">Submit Answer</button>
    </div>
  </div>
  <div className="question-box">
    <h3> Priya: What is the best way to structure a Node.js project? </h3>
    <div className="answer-box">
    <textarea placeholder="Type your answer here" className="input-answer" />
    <button className="answer-btn">Submit Answer</button>
    </div>
  </div>
</div>
         </>

  );
};

export default Instructor;
