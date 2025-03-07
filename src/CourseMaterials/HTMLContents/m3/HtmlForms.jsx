import React from 'react'
import HtmlSidebar from '../HtmlSidebar'
import { Link } from 'react-router-dom'

export default function HtmlForms() {
  return (
    <>
    <div className="bar">
      <HtmlSidebar/>
    </div>
      <h1 id='heading'>Html forms</h1>
      <div className="course">
        <p>Forms are one of the most powerful and commonly used features of HTML. They enable user interaction on websites by allowing users to enter and submit data. Whether you're signing up for a newsletter, submitting a contact form, or making an online purchase, forms are the backbone of data collection on the web.

We'll explore the key elements and tags that make up an HTML form, how they work, and how to use them effectively.</p>
      <h2>Form tags:</h2>
      <h3>1. Text Input </h3>
      <p>The text input is the most basic form element. It allows users to enter a single line of text, such as their name or email address.</p>
      <div className="code">
        <p>{"<label for=name>Name:</label>"}</p>
        <p>{"<input type=text id=name name=name required>"}</p>
      </div>
      <h4>Output</h4>
      <div className="output">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required/>
      </div>
      <h4>Attributes</h4>
      <li>label tag: The {"<label>"} tag is used to associate a label with a form element. It improves accessibility by making it clear what information the user should enter.</li>
      <li>id attribute: This links the input field to its label.</li>
      <li>name attribute: This identifies the form data after submission.</li>
      <li>required attribute: This ensures that the user cannot submit the form without filling out this field.</li>
      <h3>2.Radio Buttons</h3>
      <p>Radio buttons allow users to select one option from a set.</p>
      <div className="code">
        <p>{"<p>Select your Gender:</p>"}</p>
        <p>{"<label for=Male>Male</label>"}</p>
        <p>{"<input type=radio id=male name=male value=male>"}</p>
        <p>{"<label for=Female>Female</label>"}</p>
        <p>{"<input type=radio id=female name=female value=female>"}</p>
      </div>
      <h4>Output</h4>
      <div className="code">
      <p>Select your Gender:</p>
      <label for="Male">Male</label>
      <input type="radio" id="male" name="gender" value="male"/>
      <label for="Female">Female</label>
      <input type="radio" id="female" name="gender" value="female"></input>
      </div>
      <h3>3.Checkboxes</h3>
      <p>Checkboxes allow users to select one or more options from a set.</p>
      <div className="code">
        <p>{"<input type=checkbox id=check name=check value=yes>"}Agree</p>
      </div>
      <h4>output</h4>
      <div className="output">
      <input type="checkbox" id="check" name="check" value="yes"/>Agree
      </div>
      <h3>4.Text Area</h3>
      <p>Text areas allow users to enter multiple lines of text.</p> 
      <div className="code"> 
        <p>{"<textarea id=textarea name=textarea rows=4 cols=30></textarea>"}</p>
      </div> 
      <h4>Output</h4> 
      <div className="output"> 
        <textarea id="textarea" name="textarea" rows="4" cols="30"></textarea> 
      </div>
      <h3>5.Button</h3>
      <p>Buttons trigger actions when clicked.</p> 
      <div className="code"> 
        <p>{"<button type=button onclick=alert('Button Clicked!')>Click Me</button>"}</p> 
        </div> <h4>Output</h4> 
        <div className="output"> 
          <button type="button" id='ex-button'>Click Me</button> 
          </div>
      </div>
      <div className="buttns">
      <button>Mark As Compleated</button>
      <Link to={'/Courses/html/m3/Semantic-Tags'}><button>Next</button></Link>
    </div>
    </>
  )
}
