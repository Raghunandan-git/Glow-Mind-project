//CascadSS.jsx
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function CascadSS({buttontext}) {
  return (
    <>
      <div className="card">

<img src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png" alt="css" height={150} width={200}/>
<h3>CSS:Beginner to advanced</h3>
<p>Styling the HTML page using CSS,Beginner to Advanced </p> 
<p>4.5<FaStar className='rating'/> Ratings</p>
<Link to="/courses/cssintro" ><button>{buttontext}</button></Link>
</div>
    </>
  )
}
