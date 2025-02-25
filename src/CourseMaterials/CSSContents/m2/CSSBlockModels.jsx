import React from 'react'
import CssSidebar from '../CssSidebar'

export default function CSSBlockModels() {
  return (
    <>
    <div className="bar">
      <CssSidebar/>
    </div>
      <h1>CSS Block Models</h1>
      <div className="course">
         <p>In this article, we’re going to dive into the CSS Box Model, which is the foundation of how elements are laid out on a webpage. Then, we’ll explore different units of size in CSS that let us control how big (or small) elements appear. By the end, you’ll know how to style and size elements with confidence, using fun examples along the way!</p>
         <h2>What is the CSS Box Model?</h2>
         <p>In CSS, every element on a webpage is treated as a box. This includes not only text or images, but also divs, paragraphs, buttons—everything! The CSS Box Model is the concept that helps define the size and layout of these boxes.</p>
         <h3>Here’s how the box model works:</h3>
         <ul>
          <li><strong>Content:</strong> The actual content of the element, like text or an image.</li>
          <li><strong>Padding:</strong> The space between the content and the border. It makes the content breathe!</li>
          <li><strong>Border:</strong> A line surrounding the padding (if any) and the content.</li>
          <li><strong>Margin:</strong> The space outside the border, separating the element from others around it.</li>
         </ul>
         <div className="image-cont">
          <img src="https://www.itonlinelearning.com/wp-content/uploads/2024/06/Diagram-1-Basics-of-CSS-Layout.png" alt="css block model" width={400} height={200}/>
         </div>
         <h2>1. Content</h2>
         <p>The content area is where your actual content (text, images, etc.) lives. The size of this area depends on the height and width of the element.</p>
         <div className="code">
         <pre>
      {`<div class="content-box">Hello, World!</div>`}
      </pre>
      </div>
      <div className="code">
        <pre>
      {`.content-box {
    width: 200px;
    height: 100px;
    background-color: #1a3b5d;
    color:white;
}`}
    </pre>
      </div>
    <div className="output">
    <div class="content-box" style={{width:"200px",color:"white",height:"100px",backgroundColor:" #1a3b5d"}}>Hello, World!</div>
    </div>
    <h2>2. Padding</h2>
    <p>Padding is the space between the content and the element’s border. It’s like giving your content some breathing room.</p>         
    <div className="code">
        <pre>
      {`.content-box {
    width: 200px;
    color:white;
    padding: 20px;
    height: 100px;
    background-color: #1a3b5d;
}`}
    </pre>
      </div>
      <div className="output">
    <div class="content-box" style={{width:"200px",color:"white",height:"100px",backgroundColor:" #1a3b5d",padding:"20px"}}>Hello, World!</div>
    </div>
    <h2>3.Border</h2>
    <p>Borders are visible lines around your element. You can customize the thickness, style, and color of borders.</p>         
    <div className="code">
        <pre>
      {`.content-box {
    width: 200px;
    color:white;
    padding: 20px;
    height: 100px;
    background-color: #1a3b5d;
    border:5px solid yellow;
}`}
    </pre>
      </div>
      <div className="output">
    <div class="content-box" style={{width:"200px",color:"white",height:"100px",backgroundColor:" #1a3b5d",padding:"20px",border:"5px solid yellow"}}>Hello, World!</div>
    </div>
    <h2>4. Margin</h2>
    <p>Margins create space between the element and other elements around it. It’s like social distancing for boxes!</p>         
    <div className="code">
        <pre>
      {`.content-box {
    width: 200px;
    color:white;
    padding: 20px;
    height: 100px;
    background-color: #1a3b5d;
    border:5px solid yellow;
    margin:20px;
}`}
    </pre>
      </div>
      <div className="output">
    <div class="content-box" style={{width:"200px",color:"white",height:"100px",backgroundColor:" #1a3b5d",padding:"20px",border:"5px solid yellow",margin:"20px"}}>Hello, World!</div>
    </div>

         </div>
    <div className="buttns">
      <button>Mark As Compleated</button>
      <button>Next</button>
    </div>

    </>
  )
}
