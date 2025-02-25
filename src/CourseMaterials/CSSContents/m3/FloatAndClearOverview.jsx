import React from 'react'
import CssSidebar from '../CssSidebar'

export default function FloatAndClearOverview() {
  return (
    <>
    <div className="bar">
      <CssSidebar/>
    </div>
      <h1>Understanding Float, Clear, and Overflow in CSS</h1>
      <div className="course">
          <h2>Float property</h2>
          <p>The float property in CSS allows elements to "float" to the left or right, letting other elements wrap around them. It’s commonly used for things like floating images next to text.</p>
          <p>When you apply float, the element moves to the left or right within its container, and the content that follows wraps around it.</p>
          <p>Float is great for wrapping text around elements like images or for creating layouts with columns, but it can be tricky to manage at times.</p>
          <div className="code">
            <pre>
              {`
<div class="float-left">I float to the left!</div>
<div class="float-right">I float to the right!</div>
<p>This is a paragraph </p>
`}
            </pre>
          </div>
          <div className="code">
            <pre>
              {`.float-left {
  float: left;
  width: 200px;
  margin: 10px;
  background-color: lightgoldenrodyellow;
  border: 2px solid black;
}
.float-right {
  float: right;
  width: 200px;
  margin: 2px;
  background-color: lightsteelblue;
  border: 2px solid black;
}
`}
            </pre>
          </div>
          <div className="output">
            <div style={{float:"left",width:"200px",margin:"10px",backgroundColor:"lightgoldenrodyellow",border:"2px solid black",color:"black"}}>I float to the left!</div>
            <div style={{float:"right",width:"200px",margin:"10px",backgroundColor:"lightsteelblue",border:"2px solid black",color:"black"}}>I float to the right!</div>
            <p>This is a paragraph </p>
          </div>

          <h2>Clear</h2>
          <p>When you use float, sometimes other elements behave unpredictably, especially if you're working with multiple floated elements. This is where the clear property comes in—it "clears" the float and ensures elements don’t wrap around it.</p>
          <p>The clear property tells the browser not to allow floated elements to be placed on the left, right, or both sides of an element.</p>
          <div className="code">
            <pre>
              {`
<div class="float-left">I float to the left!</div>
<div class="float-right">I float to the right!</div>
<div class="clear-both"></div>
`}
            </pre>
          </div>
          <div className="code">
            <pre>
              {`.float-left {
  float: left;
  width: 200px;
  margin: 10px;
  background-color: lightblue;
  border: 2px solid black;
}

.float-right {
  float: right;
  width: 200px;
  margin: 10px;
  background-color: lightgreen;
  border: 2px solid black;
}

.clear-both {
  clear: both;
}
`}
            </pre>
          </div>
          <div className="output">
            <div style={{float:"left",width:"200px",margin:"10px",backgroundColor:"lightgoldenrodyellow",border:"2px solid black",color:"black"}}>I float to the left!</div>
            <div style={{float:"right",width:"200px",margin:"10px",backgroundColor:"lightsteelblue",border:"2px solid black",color:"black"}}>I float to the right!</div>
            <div style={{clear:"both"}}></div>
            <p>This is a paragraph </p>
          </div>

          <h2>Overflow</h2>
          <p>The overflow property controls what happens to content that overflows its container. When an element’s content is too big for the box, overflow decides whether to clip the content, add scrollbars, or allow the content to flow outside the container.</p>


          <div className="code">
             <pre>
              {`<div class="overflow-scroll">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam libero iste, similique, dicta cumque voluptatibus ullam sunt magni deserunt, fugit sapiente. Est adipisci animi necessitatibus labore sunt, eveniet rem sint voluptatibus eum expedita fugiat? Quisquam sapiente deleniti magni blanditiis aut exercitationem, ullam nobis laboriosam alias quos! Praesentium dicta nesciunt excepturi ut? Ex libero velit et praesentium? At qui vitae dolorum placeat iusto, voluptates praesentium deleniti odit in nisi est cum voluptatibus nemo minima reprehenderit ad quo. Corporis placeat itaque laborum! Consectetur neque, ex at nostrum repudiandae quidem fuga assumenda aut debitis. Eos similique accusantium, quos et molestias labore explicabo ipsam!</div>`}
             </pre>
          </div>
          <div className="code">
            <pre>
              {`.overflow-scroll {
  width: 250px;
  height: 50px;
  background-color: lightblue;
  border: 2px solid black;
  overflow: scroll;
}
`}
            </pre>
          </div>
          <div className="output">
          <div style={{width:"300px",height:"250px",backgroundColor:"lightblue",border:"2px solid black",overflow:"scroll"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam libero iste, similique, dicta cumque voluptatibus ullam sunt magni deserunt, fugit sapiente. Est adipisci animi necessitatibus labore sunt, eveniet rem sint voluptatibus eum expedita fugiat? Quisquam sapiente deleniti magni blanditiis aut exercitationem, ullam nobis laboriosam alias quos! Praesentium dicta nesciunt excepturi ut? Ex libero velit et praesentium? At qui vitae dolorum placeat iusto, voluptates praesentium deleniti odit in nisi est cum voluptatibus nemo minima reprehenderit ad quo. Corporis placeat itaque laborum! Consectetur neque, ex at nostrum repudiandae quidem fuga assumenda aut debitis. Eos similique accusantium, quos et molestias labore explicabo ipsam!</div>
          </div>

      </div>
      <div className="buttns">
      <button>Mark As Compleated</button>
      <button>Next</button>
    </div>
    </>
  )
}
