import React from 'react'
import '../styles/profile.css'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'


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
              <li><h3><FaLinkedin className='icon' color='indigo' />:Jhon Wilson</h3></li>
              <li><h3><FaGithub className='icon' color='indigo' />:Jhon-wilson-145</h3></li>
              <li><h3><FaFacebook className='icon' color='indigo' />:Jhon wilson</h3></li>
            </ul>

          </div>
        </div>

      </div>
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




    </>
  )
}
