import React from 'react'
import HtmlSidebar from '../HtmlSidebar'

export default function TextFormattingTags() {
  return (
    <>
      <div className="bar">
        <HtmlSidebar/>
      </div>
      <h1 id='heading'>Text Formatting tags</h1>
      <div className="course">
        <h2>1. Heading Tags: {"<h1> to <h6>"}</h2>
        <p>Heading tags are used to define headings on a webpage, ranging from{" <h1>"} (the largest) to {"<h6> "}(the smallest). These tags are crucial for both readability and SEO.</p>
        <div className="code">
          <p > <span style={{color:"green"}}>{"<h1>"}</span>Heading 1 <span style={{color:"green"}}>{"</h1>"}</span></p>
          <p > <span style={{color:"green"}}>{"<h2>"}</span>Heading 2 <span style={{color:"green"}}>{"</h2>"}</span></p>
          <p > <span style={{color:"green"}}>{"<h3>"}</span>Heading 3 <span style={{color:"green"}}>{"</h3>"}</span></p>
          <p > <span style={{color:"green"}}>{"<h4>"}</span>Heading 4 <span style={{color:"green"}}>{"</h4>"}</span></p>
          <p > <span style={{color:"green"}}>{"<h5>"}</span>Heading 5 <span style={{color:"green"}}>{"</h5>"}</span></p>
          <p > <span style={{color:"green"}}>{"<h6>"}</span>Heading 6 <span style={{color:"green"}}>{"</h6>"}</span></p>
          
        </div>
        <div className="output">
        <h1 id='output-head'>Heading 1 </h1>
        <h2 id='output-head'>Heading 2 </h2>
        <h3>Heading 3 </h3>
        <h4>Heading 4 </h4>
        <h5>Heading 5 </h5>
        <h6>Heading 6 </h6>
        </div>
       
        <h2>2. Paragraph Tag: {"<p>"}</h2>
        <p>The {"<p>"} tag is used for creating paragraphs of text. It’s a block-level element, meaning it automatically adds space above and below the text.</p>
        <div className="code">
          <p><span style={{color:"yellow"}}>{"<p>"}</span>It is para tag<span style={{color:"yellow"}}>{"</p>"}</span></p>
        </div>
        <div className="output">
        <p>It is para tag</p>
        </div>

        <h2>3. Line Break Tag: {"<br>"}</h2>
        <p>The {"<br> "}tag inserts a line break within the text. It’s an empty tag, meaning it doesn’t have a closing tag.</p>
        <div className="code">
        <p><span style={{color:"yellow"}}>{"<p>"}</span>It is para1 <span style={{color:"red"}}>{"<br>"}</span>It is para 2<span style={{color:"yellow"}}>{"</p>"}</span></p>
        </div>
        <div className="output">
        <p>It is para1 </p> 
        <p>It is para 2</p>
        </div>

        <h2>4. Horizontal Rule Tag: {"<hr>"}</h2>
        The {"<hr>"} tag creates a horizontal line, typically used to separate sections of content.
        <div className="code">
        <p> <span style={{color:"lightblue"}}>{"<hr>"}</span> <span style={{color:"yellow"}}>{"<p>"}</span>It creates a line <span style={{color:"yellow"}}>{"</p>"}</span></p>
        </div>
        <div className="output">
        <hr/ ><p>It creates a line </p>
        </div>

        <h2>Some more tags</h2>
        <div className="table-cont">
        <table border={2}>
          <th>Tag</th>
          <th>description</th>
          <tr>
            <td>{"<b>"}</td>
            <td>	Defines bold text</td>
          </tr>
          <tr>
            <td>{"<em>"}</td>
            <td>Defines emphasized text </td>
          </tr>
          <tr>
            <td>{"<i>"}</td>
            <td>Defines a part of text in an alternate voice or mood</td>
          </tr>
          <tr>
            <td>{"<small>"}</td>
            <td>Defines smaller text</td>
          </tr>
          <tr>
            <td>{"<strong>"}</td>
            <td>Defines important text</td>
          </tr>
          <tr>
            <td>{"<sub>"}</td>
            <td>Defines subscripted text</td>
          </tr>
          <tr>
            <td>{"<sup>"}</td>
            <td>Defines supersripted text</td>
          </tr>
        </table>
        </div>


      </div>

      <div className="buttns">
      <button>Mark As Compleated</button>
      <button>Next</button>
    </div>
    </>
  )
}
