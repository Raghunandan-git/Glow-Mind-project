// AboutUs.jsx
import React from "react";
import logo from '../Glow mind logo.png';
import Footer from "../component/Footer";
import { FaAsterisk } from "react-icons/fa";

export default function AboutUs() {
  return (
    <>
      <div className="box">
        <div className="container">
          <div className="logoimg">
            <img src={logo} alt="logo" width={90} height={90} />
          </div>
          <h1>Contact Us</h1>
          <p className="description">
          Glow mind is an online learning platform committed to providing quality education to everyone, everywhere. Have questions? Reach out to us!
          </p>
          <form>
            <div className="input-group">
              <label htmlFor="name">Name <FaAsterisk className='asterisk'/></label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email <FaAsterisk className='asterisk'/></label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="input-group">
              <label htmlFor="message">Message <FaAsterisk className='asterisk'/></label>
              <textarea id="message" placeholder="Your Message" rows="4" ></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}
