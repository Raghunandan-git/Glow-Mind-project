//IntroductionToHTML.jsx
import React from 'react'
import '../../../styles/contStyle.css'
import HtmlSidebar from '../HtmlSidebar'
export default function InttoductionToHTML() {
  return (
    <>
      <div className="bar">
        <HtmlSidebar/>
      </div>
      <h1 id='heading'>Introduction to html</h1>
    <div className="course">

      <h2>
        What is HTML?
      </h2>
      <p>
      HTML (HyperText Markup Language) is the foundation of web development, used to create the structure of web pages and applications.It defines elements using tags, which tell the browser how to display content. HTML is not a programming language but a markup language, meaning it structures content rather than executing logic.
      </p>
      <p>
      HyperText refers to the way in which Web pages (HTML documents) are linked together. Thus, the link available on a webpage is called "HyperText".Markup Language, which means you use HTML to simply "mark up" a text document with tags that tell a Web browser how to structure it to display.
      </p>
      <h2>Key Features of HTML</h2>
      <ol>
        <li><strong>Markup Language –</strong> Uses elements enclosed in tags to define content</li>
        <li><strong>Platform Independent –</strong> Works on all devices and browsers.</li>
        <li><strong>Easy to Learn & Use –</strong> Has a simple and readable syntax.</li>
        <li><strong>Multimedia Support –</strong> Allows embedding images, audio, and video.</li>
        <li><strong>Forms & User Input –</strong> Supports forms for data collection and interaction.</li>
        <li><strong>SEO Friendly –</strong> Helps search engines understand web page content.</li>
      </ol>
      <h2>Why learning HTML is important?</h2>
      <p>
      HTML is probably the first building block that every Web developer needs to learn to enter in the world of Web development.
       It is essential because it tells your browser (like Chrome, Firefox, or Safari) how to display content. Without HTML, the web 
       would just be a jumbled mess of text and images with no organization or structure. HTML provides the foundation that other 
       technologies like CSS and JavaScript build upon. HTML is your ticket to building cool things on the web. From blogs to e-commerce 
       sites, every webpage starts with HTML—it’s the secret sauce of the internet!
      </p>
    </div>

    
    <div className="buttns">
      
      <button>Mark As Compleated</button>
      <button>Next</button>
    </div>

    
    </>
  )
}
