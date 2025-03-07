// HTMLeditors.jsx
import React from 'react'
import HtmlSidebar from '../HtmlSidebar'
import '../../../styles/contStyle.css'
import { Link } from 'react-router-dom'


export default function HTMLeditors() {
  return (
    <>
      <div className="bar">
        <HtmlSidebar/>
      </div>
      <h1 id='heading'>HTML Editors</h1>
      <div className="course">
        <h2>
          Introduction
        </h2>
        <p>An HTML editor is a software application used for creating and editing HTML code. These editors provide various features to simplify the process of writing HTML, such as syntax highlighting, auto-completion, and error checking.</p>
        <h2>Types of HTML Editors</h2>
        <p>HTML editors can be broadly categorized into two types:</p>
        <ol>
          <li>
            <h3>Text-Based Code Editors (Manual Coding)</h3>
            <p>These editors require developers to write HTML code manually. They are preferred by professionals for full control over the code.</p>
            <ul>
              <li>Notepad (Windows) - Simple and lightweight, best for beginners.</li>
              <li>Notepad++ - Free, supports syntax highlighting, and has plugin support.</li>
              <li>Sublime Text - Fast, feature-rich, and allows multi-line editing.</li>
              <li>Visual Studio Code (VS Code) - Most popular editor with extension support.</li>
              <li>Atom - Open-source, customizable, and built by GitHub.</li>
            </ul>
          </li>
          <li>
          <h3>WYSIWYG Editors (What You See Is What You Get)</h3>
          <p>These editors allow users to create webpages visually without writing raw HTML code.</p>
          <ul>
            <li>Adobe Dreamweaver - Paid editor with drag-and-drop features.</li>
            <li>WordPress - Used for website building with themes and plugins.</li>
            <li>Wix - A cloud-based website builder with easy design tools.</li>
          </ul>
          </li>
        </ol>
        <h2>Setting Up an HTML Editor</h2>
        <ol>
          <li>
            <h4>Notepad/Notepad++</h4>
            <ol>
              <li>Open Notepad</li>
              <li>Write code</li>
              <li>Save file as .html</li>
              <li>Open HTML file in Web browser</li>
            </ol>            
          </li>
          <li>
            <h4>VS Code</h4>
            <ol>
              <li>Open VS Code</li>
              <li>Create a file with .html extension</li>
              <li>Write your HTML code</li>
              <li>Open file in web browser or live server</li>
            </ol>
          </li>
        </ol>
      </div>
      <div className="buttns">
      
      <button>Mark As Compleated</button>
      <Link to={'/courses/html/m1/Basic-Structure-of-HTML'}><button>Next</button></Link>
     </div>
    </>
  )
}
