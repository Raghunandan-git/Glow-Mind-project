import React from 'react'
import HtmlSidebar from '../HtmlSidebar'


export default function Tables() {
  return (
    <>
      <div className="bar">
        <HtmlSidebar/>
      </div>
      <h1 id='heading'>Tables</h1>

      <div className="course">
        <h2>Tables</h2>
        <p>HTML tables are used to organize data into rows and columns. They are commonly used to display structured information, such as schedules, pricing tables, or reports.</p>
        <h2>Basic table structure</h2>
        <div className="code">
          <p>{"<table border=1>"}</p>
          <p>{"<tr>"}</p>
          <p>{"<th> head 1 </th>"}</p>
          <p>{"<th> head 2 </th>"}</p>
          <p>{"</tr>"}</p>
          <p>{"<td> Data 1 </td>"}</p>
          <p>{"<td> Data 2 </td>"}</p>
          <p>{"<tr>"}</p>
          <p>{"<td> Data 3 </td>"}</p>
          <p>{"<td> Data 4 </td>"}</p>
          <p>{"</tr>"}</p>
          <p>{"</table>"}</p>
        </div>
        <h4>Output:</h4>
        <div className="output">
        <table border="1">
        <tr>
        <th> head 1 </th>
        <th> head 2 </th>
        </tr>
        <tr>
        <td> Data 1 </td>
        <td> Data 2 </td>
        </tr>
        <tr>
        <td> Data 3 </td>
        <td> Data 4 </td>
        </tr>
        </table>
        </div>
        <h2>Table Elements:</h2>
        <ul>
          <li><strong>{"<table>:"}</strong>Defines the table.</li>
          <li><strong>{"<tr>:"}</strong>Represents a table row.</li>
          <li><strong>{"<th>:"}</strong>Defines a header cell (bold and centered by default).</li>
          <li><strong>{"<td>:"}</strong>Represents a standard data cell.</li>
        </ul>
        <h2>Merging Cells:</h2>
        <p>
        Sometimes, you may need to merge multiple columns or rows to create a better layout. This can be done using:</p>
        <ul>
        <li><strong>colspan:</strong> Merges multiple columns into a single cell.</li>
        <li><strong>rowspan:</strong> Merges multiple rows into a single cell.</li>
        </ul>
        <h4>Example:</h4>
        <div className="code">
        <p>{"<table border=1>"}</p>
          <p>{"<tr>"}</p>
          <p>{"<th colspan=2>Merged Header</th>"}</p>
          <p>{"</tr>"}</p>
          <p>{"<tr>"}</p>
          <p>{"<td rowspan=2>Merged Row</td>"}</p>
          <p>{"<td>Data2</td>"}</p>
          <p>{"</tr>"}</p>
          <p>{"<tr>"}</p>
          <p>{"<td> Data 4 </td>"}</p>
          <p>{"</tr>"}</p>
          <p>{"</table>"}</p>
        </div>
        <div className="output">
        <table border="1">
        <tr>
        <th colspan="2">Merged Header</th>
        </tr>
        <tr>
        <td rowspan="2">Merged Row</td>
        <td>Data 2</td>
        </tr>
        <tr>
        <td>Data 4</td>
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
