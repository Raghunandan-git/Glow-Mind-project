//Cpplus.jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function Cpplus() {
  return (
    <>
     <div className="card">

<img src="https://miro.medium.com/v2/resize:fit:1400/0*ZpjhBs0gR5oSd3Il" alt="c++" height={150} width={200}/>
<h3>Martering in C++</h3>
<p>Understanding the core concepts in programming with c++</p> 
<Link to={'/cppintro'} >
<button>Enroll now</button>
</Link>

</div> 
    </>
  )
}
