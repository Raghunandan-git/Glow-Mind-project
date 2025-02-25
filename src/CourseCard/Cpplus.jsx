//Cpplus.jsx
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Cpplus({buttontext}) {
  return (
    <>
     <div className="card">

<img src="https://miro.medium.com/v2/resize:fit:1400/0*ZpjhBs0gR5oSd3Il" alt="c++" height={150} width={200}/>
<h3>Martering in C++.-Beginner</h3>
<p>Understanding the core concepts in programming with c++</p> 
<p>4.2<FaStar className='rating'/> Ratings</p>
<Link to='/courses/cppintro' >
<button>{buttontext}</button>
</Link>

</div> 
    </>
  )
}
