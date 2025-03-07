// IntroductionToCss.jsx
import React from 'react'
import CssSidebar from '../CssSidebar'
import { Link } from 'react-router-dom'

export default function IntroductionToCss() {
  return (
    <>
      <div className="bar">
        <CssSidebar/>
      </div>
      <h1>Introduction to CSS</h1>
 
      <div className="course">
        <h2>CSS</h2>
        <p>CSS, or Cascading Style Sheets, is the language used to style and design web pages. While HTML provides the structure and content of a webpage, CSS controls its appearance. Think of HTML as the blueprint of a house and CSS as the paint, decor, and furnishings that make the house visually appealing. CSS is what makes the web visually delightful and user-friendly.</p>
        <p>With CSS, you can change colors, adjust fonts, create layouts, and even add animations to your website. It’s the tool that transforms a plain, unstyled webpage into something attractive and engaging.</p>

        <h2>Why is CSS Important?</h2>
        <p>CSS is essential for creating visually appealing and user-friendly websites. Here's why:</p>
        <ul>
          <li>Design Consistency: CSS ensures that your website’s look and feel are consistent across all pages.</li>
          <li>
         Ease of Maintenance: By keeping the design separate from the content, CSS allows you to update your site's appearance without altering its HTML structure.
          </li>
          <li>
Enhanced User Experience: Well-designed CSS makes websites easier to navigate and more enjoyable to use.
          </li>
          <li>
Performance: Efficient CSS helps websites load faster, which improves user satisfaction.
          </li>
          <li>
Responsive Design: CSS enables websites to adapt seamlessly to various screen sizes and devices, ensuring optimal user experience on desktops, tablets, and smartphones.</li>
        </ul>
        <h2>Adding CSS with the Style Attribute</h2>
        <p>CSS is composed of rules that define how HTML elements should be displayed. Each rule consists of a property and a value, written in the following format:</p>
        <div className="code">
        property: value;
        </div>
        <ul>
          <li>Property: Specifies what you want to change, such as color, font-size, or text-align.</li>
          <li>Value: Indicates how you want to change it, such as setting the color to blue or the font size to 24px.</li>
        </ul>
        <h4>Example</h4>
        <div className="code">
          <p>{"<h1 style=color: red;>Welcome to My Website</h1>"}</p>
        </div>
        <div className="output">
        <h1 style={{color:"red"}}>Welcome to My Website</h1>
        </div>

        <h2>Understanding CSS Syntax</h2>
        To apply CSS effectively, it’s important to understand its syntax. CSS rules are composed of a selector and a declaration block.
        <h3>Syntax</h3>
        <div className="code">
          <p>selector{"{"}</p>
          <p>  property: value;</p>
          <p>{"}"}</p>
          </div>
        <h3>Example</h3>
          <div className="code">
          <p>h1{"{"}</p>
          <p>  color: green;</p>
          <p>{"}"}</p>
          </div>
        </div>

      
        <div className="buttns">
      <button>Mark As Compleated</button>
      <Link to={"/courses/css/m1/different-ways-of-writing-css"}><button>Next</button></Link>
    </div>

    

    </>
  )
}
