import React from 'react'
import CssSidebar from '../CssSidebar'

export default function DisplayAndPositionProperty() {
  return (
    <>
    <div className="bar">
      <CssSidebar/>
    </div>
      <h1 id='heading'>Display, Position Property</h1>

      <div className="course">
        <h2>Display properties</h2>
        <p>The display property in CSS is one of the most important properties used to control the layout and visibility of HTML elements. It determines how an element is rendered on a webpage, whether it appears as a block, inline, flex, grid, or is hidden from view.

By using the display property effectively, developers can create structured and responsive designs. It plays a crucial role in modern layout techniques, including Flexbox and CSS Grid.</p>
      <h3>1. display:inline</h3>
      <p>The inline display value makes elements behave as inline elements, meaning they flow along with the text and other inline elements. Inline elements don’t start on a new line, and they only take up as much width as their content requires.</p>
      <h4>Key Points:</h4>
      <ul>
        <li>Width and Height: You cannot set width and height directly on inline elements. They only stretch to the size of their content.</li>
        <li>Padding and Margin: You can apply padding and margin, but only horizontal padding/margin will affect the layout. Vertical padding and margin will not push other elements down.</li>
      </ul>
      <div className="code">
        <pre>
      {`span {
    display: inline;
    background-color: lightblue;
    border: 1px solid black;
}`}
    </pre>
      </div>
      <div className="output">
        <p>This is example of <span style={{display:"inline",backgroundColor:"lightblue",border:"1px solid black"}}>Inline property</span> in CSS</p>
      </div>
      <h3>2. display:block</h3>
       <p>Elements with display: block are block-level elements. Block elements take up the full width available, meaning they always start on a new line and take as much horizontal space as they can.</p>
       <h4>key points:</h4>
       <ul>
        <li>Width and Height: You can set both width and height on block elements.</li>
        <li>Padding and Margin: Both horizontal and vertical padding and margin work as expected.</li>
       </ul>
       <div className="code">
        <pre>
      {`div {
    display: block; 
    background-color: lightcyan;
    border: 2px solid black; 
    width: 200px; 
    color:black;
    padding: 10px; 
    margin: 20px;
}`}
    </pre>
      </div>
      <div className="code">
        <div style={{display:"block",backgroundColor:"lightcyan",color:"black",border:"2px solid black",width:"200px",padding:"10px",margin:"20px"}}>this is display block</div>
      <p>hello world</p>
      </div>

      <h3>3. display:inline-block</h3>
       <p>inline-block behaves like a combination of inline and block. Inline-block elements are inline (they sit in a line like inline elements), but they also behave like block elements, meaning you can set width, height, padding, and margins.</p>
       <h4>key points:</h4>
       <ul>
        <li>Width and Height: You can set width and height on inline-block elements.</li>
        <li>Padding and Margin: Both horizontal and vertical padding and margin work as expected.</li>
       </ul>
       <div className="code">
        <pre>
      {`.box {
      display: inline-block;
      width: 100px;
      height: 50px;
      background-color: lightseagreen;
      text-align: center;
      line-height: 50px;
      margin: 5px;
      color:black;
      border: 1px solid black;
    }`}
    </pre>
      </div>
       <div className="code">
        <pre>
      {`<div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>`}
    </pre>
      </div>
      <div className="output">
        <div style={{display:"inline-block",width:"100px",height:"50px",backgroundColor:"lightseagreen",textAlign:"center",color:"black",lineHeight:"50px",margin:"5px",border:"1px solid black"}}>box 1</div>        
        <div style={{display:"inline-block",width:"100px",height:"50px",backgroundColor:"lightseagreen",textAlign:"center",color:"black",lineHeight:"50px",margin:"5px",border:"1px solid black"}} >box 2</div>        
        <div style={{display:"inline-block",width:"100px",height:"50px",backgroundColor:"lightseagreen",textAlign:"center",color:"black",lineHeight:"50px",margin:"5px",border:"1px solid black"}} >box 3</div>        
      </div>
      <h2>Position property</h2>
      <p>The position property in CSS is a powerful tool that allows us to control the layout of elements on a web page. By default, elements in HTML follow a natural flow (stacking on top of each other). But sometimes, we want more control over where elements appear on the page. That’s where the position property comes in.

In this article, we’ll break down the different types of positioning in CSS, how they work, and when to use each one. By the end, you’ll be able to control the layout of your elements like a pro!</p>
       <h3>Types</h3>
       <ul>
        <li>static</li>
        <li>relative</li>
        <li>absolute</li>
        <li>fixed</li>
        <li>sticky</li>
       </ul>
       <h3>1.Static</h3>
       <p>By default, all HTML elements are positioned statically. This means that elements appear in the natural flow of the document, one after the other. The position: static; is the default and does not require any additional CSS.</p>
       <div className="code">
        <pre>
      {`<div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>`}
    </pre>
      </div>
       <div className="code">
        <pre>
      {`.box {
  width: 100px;
  height: 50px;
  background-color: lightgreen;
  border: 2px solid black;
  margin: 10px;
}`}
    </pre>
      </div>
      <div className="output">
      <div style={{width:"100px",height:"50px",backgroundColor:"lightgreen",border:"2px solid black",margin:"10px"}}>Box 1</div>
  <div style={{width:"100px",height:"50px",backgroundColor:"lightgreen",border:"2px solid black",margin:"10px"}}>Box 2</div>
  <div style={{width:"100px",height:"50px",backgroundColor:"lightgreen",border:"2px solid black",margin:"10px"}}>Box 3</div>
      </div>
       <h3>2.Relative</h3>
       <p>With position: relative;, the element is positioned relative to its original (static) position. You can shift the element using top, right, bottom, or left properties, but the space it originally occupied is still reserved in the document flow.</p>
       <div className="code">
        <pre>
      {`<div class="box">Box 1</div>
<div class="box relative">Box 2 (Relative)</div>
<div class="box">Box 3</div>`}
    </pre>
      </div>
       <div className="code">
        <pre>
      {`.box {
  width: 100px;
  height: 50px;
  background-color: lightgreen;
  border: 2px solid black;
  margin: 10px;
}
.box-relative{
   position:relative;
   top:20px;
   left:30px;
}
    `}
    </pre>
      </div>
      <div className="output">
      <div style={{width:"100px",height:"50px",backgroundColor:"lightgreen",border:"2px solid black",margin:"10px"}}>Box 1</div>
  <div style={{position:"relative",top:"20px",left:"30px",width:"100px",height:"50px",backgroundColor:"lightpink",border:"2px solid black",margin:"10px"}}>Box 2</div>
  <div style={{width:"100px",height:"50px",backgroundColor:"lightgreen",border:"2px solid black",margin:"10px"}}>Box 3</div>
      </div>
       <h3>3. Absolute</h3>
       <p>An element with position: absolute; is removed from the normal document flow. It is positioned relative to its closest positioned ancestor (i.e., an ancestor with position: relative, absolute, fixed, or sticky). If no positioned ancestor exists, it is positioned relative to the {"<html>"} element (i.e., the viewport).</p>
       <div className="code">
        <pre>
      {`<div class="container">
  <div class="box">Box </div>
</div>`}
    </pre>
      </div>
       <div className="code">
        <pre>
      {`.container {
      position: relative;
      width: 300px;
      height: 200px;
      background-color: lightgray;
      border: 2px solid black;
    }

    .box {
      position: absolute;
      top: 50px;
      left: 50px;
      width: 100px;
      height: 50px;
      background-color: lightblue;
      text-align: center;
      line-height: 50px;
      border: 1px solid black;
    }
    `}
    </pre>
      </div>
      <div className="output">
      <div style={{position:"relative",width:"300px",height:"200px",backgroundColor:"lightgray",border:"2px solid black"}}>
  <div style={{position:"absolute",top:"50px",left:"50px",width:"100px",height:"50px",backgroundColor:"lightblue",textAlign:"center",lineHeight:"50px",border:"1px solid black"}}>Box </div>
</div>
      </div>
       <h3>4. Fixed</h3>
       <p>An element with position: fixed; is removed from the normal flow and is positioned relative to the viewport. This means it stays in the same position, even when you scroll the page. This is great for things like sticky headers or floating buttons.</p>
       <div className="code">
        <pre>
      {`<div class="box">Box </div>`}
    </pre>
      </div>
       <div className="code">
        <pre>
      {`.box {
      position: fixed;
      top:10px
      right: 10px;
      background-color: lightblue;
    }
    `}
    </pre>
      </div>

      <div className="output">
      <div>
      <div style={{position:"relative",bottom:"10px",right:"10px",backgroundColor:"lightblue",margin:"10px"}}>Box </div>
      </div>
      </div>
       <h3>5. sticky</h3>
       <p>With position: sticky;, an element acts like relative until it reaches a specified point (using top, bottom, etc.), at which point it becomes fixed and stays in place as you scroll. This is useful for elements like sticky headers that remain visible as you scroll past them.</p>
       <div className="code">
        <pre>
      {`<div class="box">Box </div>`}
    </pre>
      </div>
       <div className="code">
        <pre>
      {`<div class="box">Box 1</div>
<div class="box sticky">Box 2 (Sticky)</div>
<div class="box">Box 3</div>
<div class="spacer"></div>
    `}
    </pre>
      </div>
       <div className="code">
        <pre>
      {`.box {
  width: 150px;
  height: 100px;
  background-color: yellow;
  border: 2px solid black;
  margin: 10px;
}

.box.sticky {
  position: sticky;
  top: 0;
  background-color: lightgreen;
}

.spacer {
  height: 800px;
  background-color: lightgray;
}
    `}
    </pre>
      </div>

     
      </div>

      <div className="buttns">
      <button>Mark As Compleated</button>
      <button>Next</button>
    </div>
    </>
  )
}
