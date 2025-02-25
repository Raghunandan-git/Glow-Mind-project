//Java.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

export default function Java({buttontext}) {
  return (
    <>
       <div className="card">

<img src="https://miro.medium.com/v2/resize:fit:700/0*gtY-llyEbkeoS1Sp.png" alt="java" height={150} width={200}/>
<h3>Programming with Java</h3>
<p>Problem solving and learning core concepts of Java Programming</p> 
<p>4.0<FaStar className='rating'/> Ratings</p>

<Link to='/courses/javaintro'>
<button>{buttontext}</button>
</Link>

</div>
    </>
  )
}
