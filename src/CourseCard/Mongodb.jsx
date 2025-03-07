import React from 'react';
import '../styles/card.css';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function MongoDB({ buttontext }) {
  return (
    <div className="card">
      <img src="https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fyrikqesprn85cp3rjsw7.png" alt="MongoDB" height={150} width={200}      />
      <h3>MongoDB for Beginners</h3>
      <p>Learn NoSQL database concepts and build scalable applications.</p>
      <p>4.6 <FaStar className='rating' /> Ratings</p>
      
      <Link to='/courses/mongodbintro'>
        <button>{buttontext}</button>
      </Link>
    </div>
  );
}
