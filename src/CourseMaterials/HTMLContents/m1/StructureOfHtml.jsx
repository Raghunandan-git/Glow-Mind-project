// StructureOfHtml.jsx
import React from 'react'
import HtmlSidebar from '../HtmlSidebar'
import '../../../styles/contStyle.css'


export default function StructureOfHtml() {
  return (
    <>
      <div className="bar">
        <HtmlSidebar/>
      </div>
      <h1 id='heading'>Basic Structure of HTML</h1>
      <div className="course">
      <div className="code">
        <p><span style={{color:"red"}}>{"<!DOCTYPE html>"}</span></p>
        <p><span style={{color:"green"}}>{"<html>"}</span></p>
        <p><span style={{color:"yellow"}}>{"<head>"}</span></p>
        <p><span style={{color:"white"}}>{"<title>My First Webpage</title>"}</span></p>
        <p><span style={{color:"yellow"}}>{"</head>"}</span></p>
        <p><span style={{color:"lightblue"}}>{"<body>"}</span></p>
        <p><span style={{color:"white"}}>{"<h1>Hello, World!</h1>"}</span></p>
        <p><span style={{color:"white"}}>{"<p>This is my first webpage using HTML.</p>"}</span></p>
        <p><span style={{color:"lightblue"}}>{"</body>"}</span></p>
        <p><span style={{color:"green"}}>{"</html>"}</span></p>
      </div>
      <div className="image-cont">
      <img src="https://designshack.net/wp-content/uploads/dom-tree-graphic.jpg" alt="basic structure" />
      </div>
     
        <p>
        When you're starting with HTML, it’s essential to understand the basic structure of an HTML document. This structure acts like the blueprint for any webpage, ensuring that everything is organized and works correctly. Let’s break down the most basic and necessary elements that make up an HTML document.
        </p>
        <ol>
          <li>
          <h3>{"<!DOCTYPE html>"}</h3>
            <p>The Document Type Declaration</p>
            <p>At the very top of every HTML document, you'll find the {"<!DOCTYPE html>"} declaration. This tells the web browser that the document is written in HTML5, which is the latest version of HTML. It’s not technically an HTML tag, but it ensures that your webpage is rendered correctly.</p>
          </li>
          <li>
            <h3>{"<head>...</head>"}</h3>
            <p>The Document's Metadata</p>
            <p>The {"<head>"} tag contains meta-information about the webpage, such as its title, character set, and links to external files like CSS stylesheets. Although the {"<head>"} section doesn’t display content directly on the webpage, it is crucial for setting up the document.</p>
          </li>
          <li>
            <h3>{"<title> ... </title>"}</h3>
            <p>The page title</p>
            <p>This tag, inside the {"<head>"}, defines the title of the webpage that appears on the browser tab. It’s a small but important detail that helps users understand what the page is about.</p>
          </li>
          <li>
            <h3>{"<body> ... </body>"}</h3>
            <p>The Content Area</p>
            <p>The {"<body>"} tag contains all the visible content on the webpage, such as text, images, links, and more. Anything placed inside the {"<body>"} tag will be rendered on the screen when someone visits your webpage.</p>
          </li>
        </ol>
      </div>
      <div className="buttns">
      <button>Mark As Compleated</button>
      <button>Next</button>
    </div>
      
    </>
  )
}
