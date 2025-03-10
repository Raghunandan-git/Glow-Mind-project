//React.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

export default function ReactBasics({buttontext}) {
  return (
    <>
    <div className="card">

<img src="https://imic.edu.vn/Contents/images/news/khoa-hoc-phat-trien-web-react-js-10-loi-the-hang-dau-cua-viec-su-dung-react-js-hoc-tai-imic.png" alt="react" height={150} width={200}/>
<h3>React basics </h3>
<p>Learn the fundamentals of React, components, props, and state.</p> 
<p>4.4<FaStar className='rating'/> Ratings</p>

<Link to='/courses/reactintro' >
<button>{buttontext}</button>
</Link>

</div>
      
    </>
  )
}
