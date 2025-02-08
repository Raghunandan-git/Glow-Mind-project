//Csscontent
import React, { useState } from 'react'
import '../styles/intro.css'
import { Link } from 'react-router-dom'
export default function CssIntro() {
  const [expandedModule,setExpandedModule]=useState(null)
    const toggleModule=(module)=>{
       setExpandedModule(expandedModule===module?null:module)
    }
  return (
    <>
    <div className="intro">
            <img src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png" alt="html"  />
            <div>
            <h1>CSS</h1>
            <hr />
            <h3>Styling the HTML page using CSS,Beginner to Advanced</h3>
            <h3>Intermediate</h3>
            <h3>Certificate Available</h3>
            <h3>7 Hrs</h3> 
            <h3>5 modules</h3>
            <Link to={'/introduction-to-Css'} ><button>Go To Course</button></Link>       
            </div>
       </div> 
       <h1>Modules</h1>
      <div className="modules">
        <ul>
          
          <div className="module">
          <li onClick={()=>toggleModule('m1')}>
            Introduction to CSS
          </li>
            {expandedModule==='m1' && (
              <div className="content">
                
                <li>Indroduction to CSS</li>
                <li>Different ways of writing CSS</li>
                <li>CSS Selectors</li>
                <li>Styling text with CSS</li>
              </div>
            )}
          </div>

          <div className="module">
          <li onClick={()=>toggleModule('m2')}>
            CSS Block models,Links,Lists and Background images
          </li>
          {expandedModule==='m2' && (
              <div className="content">
                
                <li>CSS Block Modals</li>
                <li>Styling Link,List</li>
                <li>Styling Background</li>
                
              </div>
            )}
          </div>

          <div className="module">
          <li onClick={()=>toggleModule('m3')}>
            CSS Display Properties
          </li>
          {expandedModule==='m3' && (
              <div className="content">
                <li>Display,Position Property</li>
                <li>Understanding Float,clear nad overview in CSS</li>
              </div>
            )}
          </div>

          <div className="module">
          <li onClick={()=>toggleModule('m4')}>
           FlexBox and Grid
          </li>
          {expandedModule==='m4' && (
              <div className="content">
                
                <li>Introduction to FlexBox</li>
                <li>More About Flex</li>
                <li>Introduction to Grid</li>             
                <li>More about Grid</li>             
              </div>
            )}
          </div>

          <div className="module">
          <li onClick={()=>toggleModule('m5')}>
           CSS Animations
          </li>
          {expandedModule==='m5' && (
              <div className="content">
                <li>Introduction to Animations</li>
                <li>Shorthand property</li>
              </div>
            )}
          </div>
       </ul>
      </div>
      
      <div className="features">
        <hr />
      <h2>What You Will Learn</h2>
      <ul>
        <li><strong>Style Webpages with Precision :</strong> Learn how to use CSS to control colors, fonts, spacing, and layout for a visually appealing design.</li>
        <li><strong>Master CSS Layout Techniques :</strong> Understand Flexbox, Grid, and positioning properties to create responsive and adaptive layouts.</li>
        <li><strong>Enhance User Experience with Animations & Transitions :</strong> Apply animations, transitions, and keyframe effects for smooth interactions.</li>
        <li><strong>Improve Performance & Maintainability :</strong>Learn best practices like CSS variables, BEM methodology, and modular CSS for scalable code.</li>
        <li><strong>Work with Responsive Design :</strong>Use media queries and relative units to make websites adapt to different screen sizes.</li>
      </ul>
      </div>

    </>
  )
}
