//CascadSS.jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function CascadSS() {
  return (
    <>
      <div className="card">

<img src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png" alt="css" height={150} width={200}/>
<h3>CSS:Beginner to advanced</h3>
<p>Styling the HTML page using CSS,Beginner to Advanced </p> 
<Link to="/cssintro" ><button>Enroll now</button></Link>
</div>
    </>
  )
}
