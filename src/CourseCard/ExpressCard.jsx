import React from 'react';
import '../styles/card.css';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NodeExpress({ buttontext }) {
  return (
    <div className="card">
      <img 
        src="https://miro.medium.com/v2/resize:fit:1400/0*-VVwL0nee9RgEhJB.png" 
        alt="Node.js & Express.js" 
        height={150} 
        width={200} 
      />
      <h3>Node.js & Express.js Mastery</h3>
      <p>Learn to build scalable backend applications with Node.js and Express.js.</p>
      <p>4.8 <FaStar className='rating' /> Ratings</p>
      
      <Link to='/courses/node-expressintro'>
        <button>{buttontext}</button>
      </Link>
    </div>
  );
}
