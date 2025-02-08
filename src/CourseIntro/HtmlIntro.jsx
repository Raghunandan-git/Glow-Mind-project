//HtmlCont.jsx
import React, { useState } from 'react'
import '../styles/intro.css'
import { Link } from 'react-router-dom'
export default function HtmlIntro() {
  const [expandedModule,setExpandedModule]=useState(null)
  const toggleModule=(module)=>{
     setExpandedModule(expandedModule===module?null:module)
  }
  return (
    <>
      <div className="intro">
        <img src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg" alt="html"  />
        <div>
        <h1>HTML</h1>
        <hr />
        <h3>Learn and practice HTML,from beginner level to avanced</h3>
        <h3>Intermediate</h3>
        <h3>Certificate Available</h3>
        <h3>6 Hrs</h3> 
        <h3>4 Modules</h3>
        <Link to={'/introduction-to-html'} ><button>Go To Course</button></Link>       
        </div>
      </div>
      
        <h1>Modules</h1>
      <div className="modules">
        <ul>
          
          <div className="module">
          <li onClick={()=>toggleModule('m1')}>
            Introduction to HTML
          </li>
            {expandedModule==='m1' && (
              <div className="content">
                
                <li>Indroduction to HTML</li>
                <li>HTML Editors</li>
                <li>Basic Structure of HTML</li>
              
              </div>
            )}
          </div>

          <div className="module">
          <li onClick={()=>toggleModule('m2')}>
            HTML Tags
          </li>
          {expandedModule==='m2' && (
              <div className="content">
                
                <li>HTML elements</li>
                <li>HTML Attributes</li>
                <li>Document Structure Tags</li>
                <li>Text Formatting tags</li>
                <li>Lists</li>
                <li>Tables</li>
              
              </div>
            )}
          </div>

          <div className="module">
          <li onClick={()=>toggleModule('m3')}>
           More HTML Tags
          </li>
          {expandedModule==='m3' && (
              <div className="content">
                
                <li>Links and Media</li>
                <li>HTML Forms</li>
                <li>Semantic Tags</li>             
              </div>
            )}
          </div>

          <div className="module">
          <li onClick={()=>toggleModule('m4')}>
           Understanding styling and DOM
          </li>
          {expandedModule==='m4' && (
              <div className="content">
                <li>Moving towards Styling</li>
                <li>Understanding DOM</li>
              </div>
            )}
          </div>

        </ul>
      </div>
      <div className="features">
        <hr />
      <h2>What You Will Learn</h2>
      <ul>
        <li><strong>Build Structured and Accessible Webpages :</strong> Learn how to create well-structured and accessible web pages using semantic HTML elements.</li>
        <li><strong>Enhance Web Content with Multimedia :</strong> Embed images, audio, and video elements to enrich user experience.</li>
        <li><strong>Work with Forms and User Inputs :</strong> Design and implement forms with various input types, validation, and accessibility considerations.</li>
        <li><strong>Use Modern HTML5 Features :</strong> Utilize new input types, semantic tags, and improved multimedia handling.</li>
        <li><strong>Optimize for SEO and Performance :</strong> Learn best practices for writing clean, SEO-friendly, and efficient HTML code.</li>
      </ul>
      </div>
    </>
  )
}
