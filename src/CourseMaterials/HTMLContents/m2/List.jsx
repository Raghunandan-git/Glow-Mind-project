import React from 'react'
import HtmlSidebar from '../HtmlSidebar'

export default function List() {
  return (
    <>
      <div className="bar">
        <HtmlSidebar/>
      </div>
      <h1 id='heading'>Lists</h1>


      <div className="course">
        <h2>Types</h2>
        <p>Lists are fundamental elements in web design that allow you to organize content in a clear and structured manner. HTML provides three main types of lists:</p>
        <ol>
          <li>Unordered List{"<ul>"}</li>
          <li>Ordered List{"<ol>"}</li>
          <li>Definition List(Grocery List){"<dl>"}</li>
        </ol>

        <h3>1. Unordered List</h3>
        <p>An unordered list is used when the order of the items doesn’t matter. It displays the items with bullet points by default.</p>
        <p><strong>Example</strong></p>
        <div className="code">
          <p>{"<h3>Unordered List</h3>"}</p>
          <p style={{color:"cyan"}}>{"<ul>"}</p>
          <p>{"  <li> item 1 </li>"}</p>
          <p>{"  <li> item 2 </li>"}</p>
          <p>{"  <li> item 3 </li>"}</p>
          <p style={{color:"cyan"}}>{"</ul>"}</p>

        </div>
        <h4>Output</h4>
        <div className="output">
        <h3>Unordered List</h3>
        <ul>
        <li> item 1 </li>
        <li> item 2 </li>
        <li> item 3 </li>
        </ul>
        </div>
        <p>The {"<ul>"} tag wraps the entire list.
Each list item is enclosed within an {"<li>"} (list item) tag.
By default, each {"<li>"} will be preceded by a bullet point.</p>

        <h3>2.Ordered List</h3>
        <p>An ordered list is used when the order of the items is important. It displays the items with numbers (or letters) by default.</p>
        <p><strong>Example:</strong></p>
        <div className="code">
          <p>{"<h3>Ordered List</h3>"}</p>
          <p style={{color:"orangered"}}>{"<ol>"}</p>
          <p>{"  <li> item 1 </li>"}</p>
          <p>{"  <li> item 2 </li>"}</p>
          <p>{"  <li> item 3 </li>"}</p>
          <p style={{color:"orangered"}}>{"</ol>"}</p>
        </div>
        <div className="output">
        <h3>Ordered List</h3>
        <ol>
          <li> item 1 </li>
          <li> item 2 </li>
          <li> item 3 </li>
        </ol>
        </div>
        <p>The {"<ol>"} tag wraps the list.
Each list item is enclosed within an {"<li>"} tag, just like with unordered lists.
By default, each {"<li>"} in an ordered list is numbered.</p>
        <h3>3.Definition List</h3>
        <p>A definition list is used for listing terms and their corresponding definitions or descriptions. This type of list is particularly useful for glossaries or terms and definitions.</p>
        <p><strong>Example:</strong></p>
        <div className="code">
          <p>{"<h3>Definition List</h3>"}</p>
          <p style={{color:"crimson"}}>{"<dl>"}</p>
          <p><span  style={{color:"deeppink"}}>{"  <dt>"}</span> item 1 <span style={{color:"deeppink"}} >{" </dt>"}</span>  </p>
          <p><span style={{color:"lawngreen"}}>{"  <dd>"}</span> Definition 1 <span style={{color:"lawngreen"}}>{" </dd>"}</span>  </p>
          <p><span style={{color:"deeppink"}}>{"  <dt>"}</span> item 2 <span style={{color:"deeppink"}}>{" </dt>"}</span >  </p>
          <p><span style={{color:"lawngreen"}}>{"  <dd>"}</span > Definition 2 <span style={{color:"lawngreen"}}>{" </dd>"}</span>  </p>
          <p style={{color:"crimson"}}>{"</dl>"}</p>
        </div>
        <div className="output">
        <h3>Definition List</h3>
        <dl>
        <dt> item 1 </dt>
        <dd> Definition 1 </dd>
        <dt> item 2 </dt>
        <dd> Definition 2 </dd>
        </dl>
        </div>
      </div>

      <div className="buttns">
      <button>Mark As Compleated</button>
      <button>Next</button>
    </div>
    </>
  )
}
