import React from 'react'
import Footer from '../component/Footer'
import '../styles/About.css'
export default function AboutUs() {
  return (
    <>
    
     <div className='about'>
     <h1>About Us</h1>
     <h2>Learn Now</h2>
      <p>
      At Learn Now, we believe in "Empowering Education for Everyone, Everywhere." Our platform is designed to make learning accessible, interactive, and effective for students and professionals alike. With high-quality courses and a collaborative environment, we help learners enhance their skills at their own pace.
      </p>
      <h2>Who Are we?</h2>
      <p>
Learn Now is a passionate team of educators, developers, and learners committed to making education accessible to everyone, everywhere. Our platform is built to provide a seamless and engaging learning experience, helping students gain knowledge, improve skills, and achieve their goals. We believe in the power of interactive learning and a strong community, where users can explore courses, engage in discussions, and grow together.
      </p>
      <h2>What we offer</h2>
      <ul>
        <li>A wide range of courses across different domains.</li>
        <li>A seamless and engaging user experience.</li>
        <li>Learn at your own pace with structured content.</li>
      </ul>
     </div>

      <Footer/>
    </>
  )
}
