//HtmlElements.jsx
import React from 'react'
import HtmlSidebar from '../HtmlSidebar'

export default function HtmlElements() {
  return (
    <>
      <div className="bar">
        <HtmlSidebar/>
      </div>
      <h1 id='heading'>HTML elements</h1>
      <div className="course">
        <p>An HTML Element consists of a start tag, content, and an end tag, which together define the element’s structure and functionality. Elements are the basic building blocks of a webpage and can represent different types of content, such as text, links, images, or headings.</p>
        <h4>Example:</h4>
        <div className="code">
          <p><span style={{color:"green"}}>{"<p>It is an element</p>"}</span></p>
        </div>
        <h2>Some Key Points About HTML Elements</h2>
        <ol>
          <li>
            <h3>Syntax</h3>
          <ul>
            <li>An opening tag indicates where the content begins</li>
            <li>A closing tag indicates where the content ends</li>
            <li>The actual content resides between the opening and closing tags</li>
          </ul>
          </li>
          <li>
            <h3>Case sensitivity</h3>
            <ul>
              <li>HTML tags are not case-sensitive</li>
              <li>However, it’s a best practice to use lowercase tags for consistency and readability.</li>
            </ul>
          </li>
        </ol>
        <h2>Block-Level Elements and Inline Elements</h2>
        <h3>Block-Level Elements</h3>
        <p>Block-level elements typically start on a new line and take up the full width available to them, regardless of their actual content width. This means they stack vertically and can contain other block-level elements as well as inline elements.<strong>Example:{"<div>,<h1>-<h6>,<p>"}</strong> </p>
        <h3>Inline Elements</h3>
        <p>Inline elements do not start on a new line; they appear on the same line as adjacent content, as long as there is space. They only take up as much width as their content requires. Inline elements are typically used within block-level elements to add content or style.<strong>Example:{"<span>,<a>,<img>"}</strong></p>
      </div>
      <div className="buttns">
      
      <button>Mark As Compleated</button>
      <button>Next</button>
    </div>
    </>
  )
}
