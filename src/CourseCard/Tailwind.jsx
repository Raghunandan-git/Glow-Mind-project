import React from 'react';
import '../styles/card.css';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Tailwind({ buttontext }) {
  return (
    <div className="card">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" 
        alt="Tailwind CSS" 
        height={150} 
        width={200} 
      />
      <h3>Tailwind CSS Essentials</h3>
      <p>Learn to style websites faster with utility-first CSS.</p>
      <p>4.8 <FaStar className='rating' /> Ratings</p>
      
      <Link to='/courses/tailwindintro'>
        <button>{buttontext}</button>
      </Link>
    </div>
  );
}
