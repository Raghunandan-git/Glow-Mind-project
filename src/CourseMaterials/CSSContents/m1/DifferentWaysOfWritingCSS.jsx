import React from 'react'
import CssSidebar from '../CssSidebar'
import { Link } from 'react-router-dom'

export default function DifferentWaysOfWritingCSS() {
  return (
    <>
    <div className="bar">
      <CssSidebar/>
    </div>
      <h1 id='heading'>Different ways of writing CSS</h1>
      <div className="course">
        <p>In the previous lesson, we explored the basics of CSS and how it can be used to style HTML elements directly within the element itself. This method, where styles are applied directly within the HTML tag, is known as inline CSS. While inline CSS is useful for quick, specific changes, there are more powerful and flexible ways to apply CSS to your web projects. In this lesson, we will explore the different methods of including CSS, understand when to use each method, and introduce the concept of how CSS rules interact with one another.</p>
        <h2>Three Ways to Include CSS</h2>
        <p>CSS can be applied to your HTML documents in three primary ways: Inline CSS, Internal CSS, and External CSS. Each method serves different purposes and can be used depending on your project's needs.</p>
        <h3>1.Inline</h3>
        <p>Inline CSS is applied directly within an HTML element using the style attribute. This method is useful for quick, specific changes but is generally not recommended for large projects due to its limitations in reusability and maintenance.</p>
        <h3>Example</h3>
        <div className="code">
          <p>{"<h1 style=color: red;>Welcome to My Website</h1>"}</p>
        </div>
        <div className="output">
        <h1 style={{color:"red"}}>Welcome to My Website</h1>
        </div>
        <h3>2. Internal CSS</h3>
        <p>Internal CSS is defined within a {"<style>"} tag inside the {"<head>"} section of your HTML document. This method is particularly useful when you need to apply styles to a single HTML page without affecting other pages.</p>
        <h4>Example</h4>
        <div className="code"> 
          <p>{`<html>`}</p> 
          <p>{`<head>`}</p> 
          <p>{` <title>Text Alignment Example</title>`}</p> 
          <p>{` <style>`}</p> 
          <p>{` h1 { text-align: center; color: blue; }`}</p> 
          <p>{` p { text-align: justify; }`}</p> 
          <p>{` </style>`}</p> 
          <p>{`</head>`}</p> 
          <p>{`<body>`}</p> 
          <p>{` <h1>Welcome to CSS Alignment</h1>`}</p> 
          <p>{` <p>This paragraph is justified. Justified text ensures that both left and right edges are aligned.</p>`}</p> 
          <p>{`</body>`}</p> 
          <p>{`</html>`}</p> 
          </div> 
          
        <h3>3. External CSS</h3>
        <p>External CSS involves writing all your styles in a separate .css file, which is then linked to your HTML document using a {"<link>"} tag. This is the preferred method for larger projects, as it allows you to apply consistent styles across multiple pages and maintain a clean separation between your HTML content and CSS styling.</p>
       <h2>Which Method to Use and When?</h2>
       <ul><li>Inline CSS is best for small, specific changes or when you need to override other styles. However, it should be used sparingly due to its lack of reusability and maintainability.</li>
       <li>Internal CSS is suitable for single-page applications or when experimenting with styles on a single page during development.</li>
       <li>External CSS is preferred for larger projects as it allows for centralized management of styles, reusability across multiple pages, and cleaner code structure.</li>
       </ul>


      </div>
      <div className="buttns">
      <button>Mark As Compleated</button>
      <Link to={"/courses/css/m1/Css-selectors"}><button>Next</button></Link>
    </div>
    </>
  )
}
