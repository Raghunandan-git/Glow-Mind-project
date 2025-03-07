import React from 'react';
import '../styles/card.css';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Bootstrap({ buttontext }) {
  return (
    <div className="card">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpJ8b0YetRguNf2XoU6OiyKoTzoFON6971A&s" 
        alt="Bootstrap" 
        height={150} 
        width={200} 
      />
      <h3>Bootstrap for Web Design</h3>
      <p>Learn to build responsive websites using Bootstrap 5.</p>
      <p>4.7 <FaStar className='rating' /> Ratings</p>
      
      <Link to='/courses/bootstrapintro'>
        <button>{buttontext}</button>
      </Link>
    </div>
  );
}
