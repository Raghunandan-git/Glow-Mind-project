// AboutUs.jsx
import React from "react";
import logo from "../ln logo.jpg";

export default function AboutUs() {
  return (
    <>
      <div className="box">
        <div className="container">
          <div className="icon">
            <img src={logo} alt="logo" width={90} height={90} />
          </div>
          <h1>About Us</h1>
          <p className="description">
            Learn Now is an online learning platform committed to providing quality education to everyone, everywhere. Have questions? Reach out to us!
          </p>
          <form>
            <div className="input-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="input-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" placeholder="Your Message" rows="4" ></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}
