import React from 'react'
import CssSidebar from '../CssSidebar'
import { Link } from 'react-router-dom'

export default function CssSelectors() {
  return (
    <>
    <div className="bar">
      <CssSidebar/>
    </div>
      <div className="course">
      <h1>Css Selectors</h1>
      <p>In previous lessons, we explored the basics of CSS and learned how to style HTML elements using element selectors. The element selector allows us to style all occurrences of a particular HTML tag, like {"<p>, <h1>, or <div>."} While this is a useful way to style elements, CSS provides even more powerful methods for targeting specific elements—by using IDs, Classes, and various other types of selectors.</p>
      <h2>Id and Class Attribute</h2>
      <h3>Id attribute</h3>
      <p>The id attribute in HTML is used to uniquely identify a single element on the page. No two elements on the same page should have the same id. This makes IDs perfect for targeting very specific elements.</p>
      <div className="code">
      <p>{"<p id=intro>This is an introduction paragraph.</p>"}</p>
      </div>
      <h3>Class Attribute</h3>
      <p>The class attribute is different from id because it can be applied to multiple elements. Classes are a great way to apply the same styling to multiple elements that share similar roles or design.</p>
      <div className="code">
        <p>{"<p class=highlight>This paragraph will be highlighted.</p>"}</p>
      </div>
      <h2>Types of Selectors</h2>
      <ol>
        <li>element selectors</li>
        <li>Id selectors</li>
        <li>Class Selector</li>
        <li>Group selector</li>
        <li>Universal selectors</li>
      </ol>
      <h3>1. Element Selector</h3>
      The element selector targets all elements of a specific type, like all {"<p>, <h1>, or <div> "}tags.
      <div className="code">
      <p>h1{"{"}</p>
          <p>  color: green;</p>
          <p>{"}"}</p>
      </div>
      <h3>2. Id selector</h3>
      <p>The ID selector targets a specific element that has a unique id attribute. It is written with a hash symbol (#), followed by the id name.</p>
      <div className="code">
      <p># id-name{"{"}</p>
          <p>  color: green;</p>
          <p>{"}"}</p>
      </div>
      <h3>3. Class selector</h3>
      <p>The class selector targets all elements that have a specific class attribute. It is written with a period (.), followed by the class name.</p>
      <div className="code">
      <p>. class-name{"{"}</p>
          <p>  color: green;</p>
          <p>{"}"}</p>
      </div>
      <h3>4. Group Selector</h3>
      <p>The grouping selector allows you to target multiple elements and apply the same styles to them. You can list the selectors, separated by commas.</p>
      <div className="code">
      <p>h1,h2,p{"{"}</p>
          <p>  color: green;</p>
          <p>{"}"}</p>
      </div>
      <h3>5. Universal Selector</h3>
      <p>The universal selector (*) targets every element on the page. It’s useful when you want to apply a general style to everything, such as resetting margins or padding.</p>
      <div className="code">
      <p>*{"{"}</p>
          <p>  color: green;</p>
          <p>{"}"}</p>
      </div>
      </div>
      <div className="buttns">
      <button>Mark As Compleated</button>
      <Link to={"/courses/css/m1/Styling-text"} ><button>Next</button></Link>
    </div>
    </>
  )
}
