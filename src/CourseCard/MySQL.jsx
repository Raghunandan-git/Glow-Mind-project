
import React from 'react'
import '../styles/card.css'
import { FaStar } from 'react-icons/fa'

import { Link } from 'react-router-dom'
export default function MySQL({buttontext}) {
  return (
    <>
    <div className="card">

     <img src="https://www.zend.com/sites/default/files/image/2020-04/image-blog-mysql-php.jpg"  alt="mysql" height={150} width={200}/>
     <h3>MySQL for Beginners to Advanced</h3>
     <p>Master SQL queries, database design, and real-world applications.</p> 
     <p>4.3<FaStar className='rating'/> Ratings</p>
     
    <Link to='/courses/mysqlintro' ><button>{buttontext}</button></Link>
      </div>
    </>
  )
}
