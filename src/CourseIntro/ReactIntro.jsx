// ReactIntro.jsx
import React, { useState } from 'react'
import '../styles/intro.css'
import { Link } from 'react-router-dom'
export default function ReactIntro() {
 const [expandedModule,setExpandedModule]=useState(null)
       const toggleModule=(module)=>{
          setExpandedModule(expandedModule===module?null:module)
       }
     return (
       <>
       <div className="intro">
               <img src="https://media.licdn.com/dms/image/D4D12AQHSqD6l1fdonQ/article-cover_image-shrink_720_1280/0/1715857869245?e=2147483647&v=beta&t=6PjhaN7nmzi4C1c3JqXKLjlxUe50VDBj2pHRqyCftV0" alt="React"  />
               <div>
               <h1>React Basics</h1>
               <hr />
               <h3>Learn the fundamentals of React, including components, props, and state.</h3>
               <h3>Beginner</h3>
               <h3>Certificate Available</h3>
               <h3>9 Hrs</h3> 
               <h3>4 Modules</h3>
               <Link to={'/introduction-to-React'} ><button>Go To Course</button></Link>       
               </div>
          </div> 
          <h1>Modules</h1>
         <div className="modules">
           <ul>
             
             <div className="module">
             <li onClick={()=>toggleModule('m1')}>
               Introduction To React 
             </li>
               {expandedModule==='m1' && (
                 <div className="content">
                   
                   <li>React Introduction</li>
                   <li>Setting up with Java</li>
                   <li>Understanding JSX</li>

                 </div>
               )}
             </div>
   
             <div className="module">
             <li onClick={()=>toggleModule('m2')}>
               Components and Props
             </li>
             {expandedModule==='m2' && (
                 <div className="content">
                   
                   <li>Functional and Class Components</li>
                   <li>Props </li>
                   <li>React events</li>
                   <li>Conditional rendering</li>
                   <li>Rendering arrays</li>
                 </div>
               )}
             </div>
   
             <div className="module">
             <li onClick={()=>toggleModule('m3')}>
               React Router and Styling
             </li>
             {expandedModule==='m3' && (
                 <div className="content">
                   <li>Introduction to React router</li>
                   <li>Setting up react router</li>
                   <li>Route and Link</li>
                   <li>React CSS Styling</li>
                 </div>
               )}
             </div>
   
             <div className="module">
             <li onClick={()=>toggleModule('m4')}>
              State management and Hooks
             </li>
             {expandedModule==='m4' && (
                 <div className="content">
                   
                   <li>Understanding State and UseState Hook</li>
                   <li>useEffect Hook</li>
                   <li>Some more Hooks</li>                          
                  </div>
               )}
             </div>
   
             
            
          </ul>
         </div>
         
         <div className="features">
           <hr />
         <h2>What You Will Learn</h2>
         <ul>  
         <li><strong>Getting Started with React :</strong> Learn about React basics, JSX, functional components, and props.</li>  
         <li><strong>React Router & Navigation :</strong> Understand React Router, creating multiple pages, and using Route, Link, and useNavigate for navigation.</li>  
         <li><strong>Styling in React :</strong> Explore different styling methods like CSS Modules, Styled Components, and Tailwind CSS for better UI design.</li>  
         <li><strong>State Management & Hooks :</strong> Learn about useState for managing state, useEffect for side effects, and useContext for global state management.</li>  
         </ul>

         </div>
   
       </>
     )
}
