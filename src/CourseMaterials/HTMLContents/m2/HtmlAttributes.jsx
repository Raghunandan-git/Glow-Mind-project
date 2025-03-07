import React from 'react'
import HtmlSidebar from '../HtmlSidebar'
import { Link } from 'react-router-dom'

export default function HtmlAttributes() {
  return (
    <>
      <div className="bar">
        <HtmlSidebar/>
        
      </div>
    <h1 id='heading'>HTML Attributes</h1>
      <div className="course">
        <h2>HTML Attributes</h2>
        <p>HTML Attributes are special words used within the opening tag of an HTML element. They provide additional information about HTML elements. HTML attributes are used to configure and adjust the element’s behavior, appearance, or functionality in a variety of ways.</p>
        <div className="code">
        <h3>Syntax</h3>
          <p> 
            <span style={{color:"red"}}>
            {"<tagname attribute_name = “attribute_value”> content… </tagname>"}
            </span>
          </p>
        </div>
        <h2>Components of Attribute</h2>
        <ol>
          <li>
            <h3>attribute_name:</h3>
            <p>This is the name of the attribute, which specifies what kind of additional information or property you are defining for the element. Common attribute names include href, src, class, id, etc.</p>
          </li>
          <li>
            <h3>attribute_value</h3>
            <p>The value is assigned to the attribute to define the specific setting or behavior. It is always placed in quotes.</p>
          </li>
        </ol>
      </div>
      
      <div className="buttns">
      <button>Mark As Compleated</button>
      <Link to={'/Courses/html/m2/Document-Structure-Tags'}><button>Next</button></Link>
    </div>
    </>
  )
}
