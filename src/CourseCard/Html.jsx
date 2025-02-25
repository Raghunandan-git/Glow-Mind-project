//Html.jsx
import React from 'react'
import '../styles/card.css'
import { FaStar } from 'react-icons/fa'

import { Link } from 'react-router-dom'
export default function Html({buttontext}) {
  return (
    <>
    <div className="card">

     <img src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg" alt="html" height={150} width={200}/>
     <h3>HTML:Beginner to advanced</h3>
     <p>Learn and practice HTML,from beginner level to avanced</p> 
     <p>4.6<FaStar className='rating'/> Ratings</p>
     
    <Link to='/courses/htmlintro' ><button>{buttontext}</button></Link>
      </div>
    </>
  )
}
