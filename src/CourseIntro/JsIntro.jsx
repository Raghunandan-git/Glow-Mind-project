// JsCont.jsx
import React, { useState } from 'react'
import '../styles/intro.css'
import { Link } from 'react-router-dom'
export default function JsIntro() {
  const [expandedModule,setExpandedModule]=useState(null)
    const toggleModule=(module)=>{
       setExpandedModule(expandedModule===module?null:module)
    }
  return (
    <>
    <div className="intro">
            <img src="https://files.ably.io/ghost/prod/2023/12/choosing-the-best-javascript-frameworks-for-your-next-project.png" alt="JS"  />
            <div>
            <h1>JavaScript</h1>
            <hr />
            <h3>Master the core concepts of JavaScript to build dynamic web applications.</h3>
            <h3>Intermediate</h3>
            <h3>Certificate Available</h3>
            <h3>6 Hrs</h3> 
            <h3>5 Modules</h3>
            <Link to={'/introduction-to-Js'} ><button>Go To Course</button></Link>       
            </div>
       </div> 
       <h1>Modules</h1>
      <div className="modules">
        <ul>
          
          <div className="module">
          <li onClick={()=>toggleModule('m1')}>
            Introduction and Installing JavaScript
          </li>
            {expandedModule==='m1' && (
              <div className="content">
                
                <li>Indroduction to JS</li>
                <li>Running Javascrpt Locally</li>
              </div>
            )}
          </div>

          <div className="module">
          <li onClick={()=>toggleModule('m2')}>
            Programming Contructs in JS
          </li>
          {expandedModule==='m2' && (
              <div className="content">
                
                <li>Syntax,Variables and DataTypes</li>
                <li>Operators</li>
                <li>Input/output in JS</li>
                <li>Mastering Conditional Statement</li>
                <li>Mastering Switch Statement</li>
                <li>Mastering Loops</li>
                <li>Mastering Functions</li>
                
              </div>
            )}
          </div>

          <div className="module">
          <li onClick={()=>toggleModule('m3')}>
            Scope and Arrow Functions
          </li>
          {expandedModule==='m3' && (
              <div className="content">
                <li>Scopes in Javascript</li>
                <li>Mastering Arrow Functions</li>
              </div>
            )}
          </div>

          <div className="module">
          <li onClick={()=>toggleModule('m4')}>
           Objects and Arrays in JS
          </li>
          {expandedModule==='m4' && (
              <div className="content">
                
                <li>Introduction to Objects</li>
                <li>Object Methods</li>
                <li>Introduction to Arrays</li>             
                <li>Methods of Arrays</li>             
              </div>
            )}
          </div>

          <div className="module">
          <li onClick={()=>toggleModule('m5')}>
           Javascript Methods
          </li>
          {expandedModule==='m5' && (
              <div className="content">
                <li>String Methods</li>
                <li>Number Methods</li>
                <li>Understanding errors in JavaScript</li>
              </div>
            )}
          </div>
       </ul>
      </div>
      
      <div className="features">
        <hr />
      <h2>What You Will Learn</h2>
      <ul>
      <li><strong>Understand Core JavaScript Concepts :</strong> Learn variables, data types, functions, loops, and event handling to build dynamic web applications.</li>  
      <li><strong>Manipulate the DOM Efficiently :</strong> Use JavaScript to dynamically update and modify HTML and CSS for interactive user experiences.</li>  
      <li><strong>Master Asynchronous Programming :</strong> Understand callbacks, promises, and async/await to handle API requests and background tasks smoothly.</li>  
      <li><strong>Improve Performance & Maintainability :</strong> Follow best practices like modular code structure, closures, and efficient event handling.</li>  
      </ul>
      </div>

    </>
  )
}
