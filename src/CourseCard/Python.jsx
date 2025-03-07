//python.jsx
import React from 'react'
import '../styles/card.css'
import { FaStar } from 'react-icons/fa'

import { Link } from 'react-router-dom'
export default function Python({buttontext}) {
  return (
    <>
    <div className="card">

     <img src="https://abctrainings.in/media/thumbnails/Python-01_2_1.png"  alt="python" height={150} width={200}/>
     <h3>Python for beginners</h3>
     <p>Learn the basics of Python with real-world applications.</p> 
     <p>4.6<FaStar className='rating'/> Ratings</p>
     
    <Link to='/courses/pythonintro' ><button>{buttontext}</button></Link>
      </div>
    </>
  )
}
