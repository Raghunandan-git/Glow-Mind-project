// Javascript.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

export default function Javascript() {
  return (
    <>
     <div className="card">

<img src="https://files.ably.io/ghost/prod/2023/12/choosing-the-best-javascript-frameworks-for-your-next-project.png" alt="js" height={150} width={200}/>
<h3>JavaScript Essentials. Intermediate</h3>
<p>Master the core concepts of JavaScript to build dynamic web applications.</p> 
<p>4.4<FaStar  className='rating'/> Ratings</p>

<Link to='/courses/jsintro'>
<button>Enroll now</button>
</Link>

</div> 
    </>
  )
}
