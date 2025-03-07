import React from 'react'
import CssSidebar from '../CssSidebar'
import { Link } from 'react-router-dom'

export default function FlexBox() {
  return (
    <>
    <div className="bar">
      <CssSidebar/>
    </div>
      <h1>Introduction to Flexbox</h1>
      <div className="course">
      <h2>Introduction</h2>
      <p>Flexbox is one of the most powerful and flexible layout models in CSS. It provides a way to design complex layouts with minimal effort, solving many common layout problems with ease. But like any tool, it’s best learned in steps. In this article, we’ll cover the basics of Flexbox and focus on the properties you can apply to the flex container (the parent element). In the next article, we’ll dive into the properties you can apply to the flex items (the children inside the container).</p>
      <p>The CSS Flexible Box Layout Module, or Flexbox for short, is designed to distribute space between items in a container and align them more predictably across various screen sizes. It’s a one-dimensional layout model, meaning it works either in a row (horizontal axis) or column (vertical axis), not both at once.</p>
      <p>The first step to working with Flexbox is turning an element into a flex container, which gives us control over the positioning and spacing of its children, known as flex items. Let’s see this in action!</p>
      <div className="code">
        <pre>
          {`<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
`}
        </pre>
      </div>
      <div className="code">
        <pre>
          {`.container {
          backgroundColor:lightskyblue;
  display: flex; 
  border: 2px solid teal;
}

.item {
  padding: 20px;
  background-color: lightcoral;
  margin: 5px;
}

`}
        </pre>
      </div>
      <div className="output">
      <div style={{backgroundColor:"lightskyblue",display:"flex",border:"2px solid black"}}>
  <div style={{padding:"20px",backgroundColor:"lightcoral",margin:"5px"}}>Item 1</div>
  <div style={{padding:"20px",backgroundColor:"lightcoral",margin:"5px"}}>Item 2</div>
  <div style={{padding:"20px",backgroundColor:"lightcoral",margin:"5px"}}>Item 3</div>
</div>
      </div>
      <h2>Flex properties</h2>
      <h3>1. flex-direction</h3>
      <p>This property defines the direction in which the flex items are placed inside the container. The two most common options are row (default) and column.</p>
      <div className="code">
        <pre>
          {`.container {
  display: flex;
  flex-direction: column; 
}
`}
        </pre>
      </div>
      <div className="output">
      <div style={{backgroundColor:"lightskyblue",display:"flex",border:"2px solid black",flexDirection:"column"}}>
  <div style={{padding:"20px",backgroundColor:"lightcoral",margin:"5px"}}>Item 1</div>
  <div style={{padding:"20px",backgroundColor:"lightcoral",margin:"5px"}}>Item 2</div>
  <div style={{padding:"20px",backgroundColor:"lightcoral",margin:"5px"}}>Item 3</div>
</div>
      </div>
     <h3>2.justify content</h3>
     <p>This property aligns items along the main axis (horizontal if flex-direction: row, vertical if flex-direction: column).</p>
     <div className="code">
      <pre>
        {`.container {
  display: flex;
  justify-content: center; /* Center items horizontally */
}

`}
      </pre>
     </div>
     <div className="output">
      <div style={{backgroundColor:"lightskyblue",display:"flex",border:"2px solid black",justifyContent:"center"}}>
  <div style={{padding:"20px",backgroundColor:"lightcoral",margin:"5px"}}>Item 1</div>
  <div style={{padding:"20px",backgroundColor:"lightcoral",margin:"5px"}}>Item 2</div>
  <div style={{padding:"20px",backgroundColor:"lightcoral",margin:"5px"}}>Item 3</div>
</div>
      </div>
      <h3>3. align-items</h3>
      <p>Aligns items along the cross axis (perpendicular to the main axis). If flex-direction is row, the cross axis is vertical.</p>
      <div className="code">
        <pre>
          {`.container {
  display: flex;
  align-items: center; 
}
`}
        </pre>
      </div>
      <div className="output">
      <div style={{backgroundColor:"lightskyblue",display:"flex",border:"2px solid black",alignItems:"center"}}>
  <div style={{padding:"20px",backgroundColor:"lightcoral",margin:"5px"}}>Item 1</div>
  <div style={{padding:"20px",backgroundColor:"lightcoral",margin:"5px"}}>Item 2</div>
  <div style={{padding:"20px",backgroundColor:"lightcoral",margin:"5px"}}>Item 3</div>
</div>
      </div>
      <h3>4.flex-wrap</h3>
      <p>By default, flex items try to fit onto one line. This property allows them to wrap onto multiple lines if necessary.</p>
      <div className="code">
      <pre>
          {`.container {
  display: flex;
  flex-wrap: wrap; 
}
`}
        </pre>
      </div>
      <div className="output">
      <div style={{backgroundColor:"lightskyblue",display:"flex",border:"2px solid black",flexWrap:"wrap"}}>
  <div style={{padding:"20px",backgroundColor:"lightcoral",margin:"5px"}}>Item 1</div>
  <div style={{padding:"20px",backgroundColor:"lightcoral",margin:"5px"}}>Item 2</div>
  <div style={{padding:"20px",backgroundColor:"lightcoral",margin:"5px"}}>Item 3</div>
  <div style={{padding:"20px",backgroundColor:"lightcoral",margin:"5px"}}>Item 4</div>
  <div style={{padding:"20px",backgroundColor:"lightcoral",margin:"5px"}}>Item 5</div>
  <div style={{padding:"20px",backgroundColor:"lightcoral",margin:"5px"}}>Item 6</div>
  <div style={{padding:"20px",backgroundColor:"lightcoral",margin:"5px"}}>Item 7</div>
  <div style={{padding:"20px",backgroundColor:"lightcoral",margin:"5px"}}>Item 8</div>
  <div style={{padding:"20px",backgroundColor:"lightcoral",margin:"5px"}}>Item 9</div>
  <div style={{padding:"20px",backgroundColor:"lightcoral",margin:"5px"}}>Item 10</div>
</div>
      </div>
      </div>
      <div className="buttns">
      <button>Mark As Compleated</button>
      <Link to={'/courses/css/m4/Introduction-to-Grid'}><button>Next</button></Link>
    </div>
    </>
  )
}
