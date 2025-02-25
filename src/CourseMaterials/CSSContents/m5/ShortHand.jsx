import React from 'react'
import CssSidebar from '../CssSidebar'

export default function ShortHand() {
  return (
    <>
    <div className="bar">
        <CssSidebar/>
    </div>
      <h1>Short hand Properties</h1>
      <div className="course">
      <p>CSS shorthand properties allow you to define multiple related properties in a single line, making your CSS more concise and readable.</p>
      <h2>Why Use Shorthand Properties?</h2>
      <ul>
        <li>Reduces the amount of code.</li>
        <li>Improves readability and maintainability.</li>
        <li>Groups related properties together for easier styling.</li>
      </ul>
      <h2>1. Margin & Padding</h2>
      <p>Shorthand for setting all four sides (top, right, bottom, left) in a single declaration.</p>
      <div className="code">
        <pre>
            {`.box{
              padding:10px 15px 20px 25px;//top right bottom left
              margin:10px 15px 20px 25px;//top right bottom left
            }`}
        </pre>
      </div>
      <div className="output">
        <div style={{backgroundColor:"lightgreen"}}>
           <div style={{padding:"10px 15px 20px 25px",margin:"10px 15px 20px 25px"}}>
            shorthand
           </div>
        </div>
      </div>
      <h2>2. Border</h2>
      <p>Combines border-width, border-style, and border-color.</p>
      <div className="code">
         <pre>
            {`border: 2px solid red;`}
         </pre>
      </div>
      <h2>3. Background</h2>
      <p>Shorthand for background-color, background-image, background-repeat, background-position, and background-size.</p>
      <div className="code">
        <pre>
            {`background: #f0f0f0 url('image.jpg') no-repeat center/cover;
`}
        </pre>
      </div>
      <h2>4. Font</h2>
      <p>Combines font-style, font-variant, font-weight, font-size, line-height, and font-family.</p>
      <div className="code">
        <pre>
            {`font: italic small-caps bold 16px/1.5 Arial, sans-serif;
`}
        </pre>
      </div>
      <h2>5. List Style</h2>
      <p>Shorthand for list-style-type, list-style-position, and list-style-image.</p>
      <div className="code">
        <pre>
            {`list-style: square inside url('bullet.png');
`}
        </pre>
      </div>
      <h2>6. Animation</h2>
      <p>Shorthand for animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, and animation-play-state.</p>
      <div className="code">
        <pre>
            {`animation: fadeIn 2s ease-in-out 1s infinite alternate forwards;
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
