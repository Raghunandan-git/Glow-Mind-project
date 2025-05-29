import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/loginstyle.css';
import logo from '../Glow mind logo.png';
import Footer from '../component/Footer';
import { FaAsterisk } from 'react-icons/fa';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <>
    <div className="box">
      <div className="container">
        <div className="logoimg">
          <img src={logo} alt="logo" width={120} height={120} />
        </div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Full Name<FaAsterisk className="asterisk" /></label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email Address<FaAsterisk className="asterisk" /></label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password<FaAsterisk className="asterisk" /></label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password<FaAsterisk className="asterisk" /></label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">SIGN UP</button>
        </form>

       

        <div className="links">
          <Link to="/login">Already have an account? Sign in</Link>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  );
}
