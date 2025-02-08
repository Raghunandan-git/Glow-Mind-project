//React.jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function ReactBasics() {
  return (
    <>
    <div className="card">

<img src="https://media.licdn.com/dms/image/D4D12AQHSqD6l1fdonQ/article-cover_image-shrink_720_1280/0/1715857869245?e=2147483647&v=beta&t=6PjhaN7nmzi4C1c3JqXKLjlxUe50VDBj2pHRqyCftV0" alt="react" height={150} width={200}/>
<h3>React basics</h3>
<p>Learn the fundamentals of React, including components, props, and state.</p> 

<Link to='/reactintro' >
<button>Enroll now</button>
</Link>

</div>
      
    </>
  )
}
