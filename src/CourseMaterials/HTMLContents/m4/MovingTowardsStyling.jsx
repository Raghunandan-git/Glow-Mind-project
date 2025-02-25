import React from 'react'
import HtmlSidebar from '../HtmlSidebar'

export default function MovingTowardsStyling() {
  return (
    <>
    <div className="bar">
      <HtmlSidebar/>
    </div>
      <h1 id='heading'>Container Elements</h1>

      <div className="course">
        <p>Now that you have gained the basic understanding of important HTML elements, you are ready to create well structured documents. But we don't just want to make them well-structured, we also want them to look good.

In this article, we'll dive into some essential tools for structuring your HTML in a way that sets you up for success when it comes time to style your pages with CSS. Let’s talk about the versatile {"<div>"} and {"<span>"} elements, as well as the powerful id and class attributes, which are fundamental for styling and organizing content.

But before that, let’s understand what inline and block elements are</p>
       <h2>Inline vs Block Elements</h2>
         <p>Before starting with semantic tags in HTML, it is important to understand the two types of elements:</p>
         <ol>
          <li>Inline</li>
          <li>Block</li>
         </ol>
         <h3>Block Elements</h3>
         <p>Block elements are designed to take up the full width available in their container, starting on a new line and stacking vertically. They create a "block" on the page, which usually causes the content that follows to appear below the block.</p>
         <h4>Characteristics of Block Elements:</h4>
         <ul>
          <li>Always start on a new line.</li>
          <li>Occupy the full width of their parent container, unless a width is specified.</li>
          <li>Can contain other block elements and inline elements.</li>
          <li>Examples include {"<div>, <p>, <h1> - <h6>, <ul>, <ol>, <li>, <section>, <article>,"} and more.</li>
         </ul>
         <h3>Inline Elements</h3>
         <p>Inline elements, on the other hand, do not start on a new line. They flow within the text and only take up as much width as necessary. Inline elements are commonly used for styling small pieces of content within a block of text.</p>
         <h4>Characteristics of Inline Elements:</h4>
         <ul>
          <li>Do not start on a new line; they flow within the content.</li>
          <li>Take up only as much width as their content requires.</li>
          <li>Cannot contain block elements, but can contain other inline elements.</li>
          <li>Examples include {"<span>, <a>, <strong>, <em>, <img>, and <br>"}.</li>
         </ul>
         <h2>Div and Span Tag</h2>
         <h3>Div tag</h3>
         <p>The {"<div>"} tag is a block-level element used to group other elements together. It doesn’t add any visual styling by itself, but it’s invaluable when you want to apply CSS styles to a group of elements or control the layout of your content.</p>
         <h4>When to use:</h4>
         <ul>
          <li>When you need to group multiple elements together to apply common styling or structure.</li>
          <li>When you want to structure your content for easy styling or JavaScript manipulation.</li>
         </ul>
         <h4>Example:</h4>
         <div className="code">
          <p>{"<div class=box >"}</p>
          <p>{"<h1>Hello</h1>"}</p>
          <p>{"<p>Welocme</p>"}</p>
         </div>
         <h3>Span tag</h3>
         <p>The {"<span>"} tag is an inline element used to group a section of text or other inline elements. Like {"<div>"}, it doesn’t apply any styling by itself but is perfect for when you need to apply styles to a specific piece of content within a block.</p>
         <h4>When to use:</h4>
         <ul>
          <li>When you need to style a small portion of text or inline elements within a larger block.</li>
          <li>When you want to apply CSS or JavaScript to specific text or inline elements without disrupting the flow of your document.</li>
         </ul>
         <div className="code">
          <p>{"<p>My favorite color is <span style=color:blue;>blue</span>.</p>"}</p>
         </div>
      </div>
      <div className="buttns">
      <button>Mark As Compleated</button>
      <button>Next</button>
    </div>
    </>
  )
}
