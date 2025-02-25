import React from 'react'
import CssSidebar from '../CssSidebar'

export default function StylingListsAndLinks() {
  return (
    <>
    <div className="bar">
      <CssSidebar/>
    </div>
      <h1>Styling links and lists</h1>
    <div className="course">
         <h2>Styling Links</h2>
         <p>Links play a vital role in web development by guiding users to other parts of your site or external sources. By default, browsers style links in a functional, albeit basic, way. In this guide, we’ll explore how to customize links using CSS to make them stand out and improve user experience.</p>
         <h3>Default link styles</h3>
         <ul>
          <li>Unvisited links are blue and underlined.</li>
          <li>Visited links are purple.</li>
          <li>Hovered links show a pointer cursor.</li>
          <li>Active links flash red as you click them.</li>
         </ul>
         <h3>Link pseudo Classes</h3>
         <h3>1. :link</h3>
         <p>Styles unvisited links. It targets links that haven’t been clicked yet.</p>
         <div className="code">
        <pre>
      {`a:link {
  color: blue;
}`}
    </pre>
      </div>
         <h3>2. :visited</h3>
         <p> Targets links that the user has already visited.</p>
         <div className="code">
        <pre>
      {`a:visited{
  color: purple;
}`}
    </pre>
      </div>
         <h3>3. :hover</h3>
         <p>Applies styles when the user hovers over a link. This is a great way to give feedback on interaction.</p>
         <div className="code">
        <pre>
      {`a:hover{
  color: yellow;
}`}
    </pre>
      </div>
         <h3>4. :active</h3>
         <p>Styles a link during the moment it is clicked (active state).</p>
         <div className="code">
        <pre>
      {`a:active{
  color: orange;
}`}
    </pre>
      </div>
         <h3>5. :focus</h3>
         <p> Applies styles when the link is focused, often when navigated using the keyboard (e.g., pressing the Tab key). Focus states improve accessibility.</p>
         <div className="code">
        <pre>
      {`a:focus{
  color: grey;
}`}
    </pre>
 </div>
    <h2>Styling Lists</h2>
    <p>When it comes to web design, lists play a key role in organizing content. With CSS, you can turn basic lists into beautifully styled components that elevate user experience.</p>
    <h3>1. list-style-type</h3>
    <p>This property allows you to choose the style of bullets or numbers for your list. For unordered lists, you can switch between circle, square, or none. Ordered lists can be styled with numbers, letters, or even Roman numerals!</p>
    <div className="code">
    <pre>
      {`ul {
    list-style-type: circle;
}
`}
    </pre>
    </div>
     <div className="output">
      <ul style={{listStyleType:"circle"}}>
        <li>item1</li>
        <li>item 2</li>
      </ul>
      </div>    
    <div className="code">
    <pre>
      {`ol {
    list-style-type: square;
}
`}
    </pre>
    </div>
     <div className="output">
      <ol style={{listStyleType:"upper-roman"}}>
        <li>item1</li>
        <li>item 2</li>
      </ol>
      </div>  

      <h3>2. list-style-position</h3>
      <p>You can control whether the bullet or number appears inside or outside the content box of your list item.

inside: Bullets will appear aligned with the text.
outside: Bullets will appear outside the list item box.</p>
<div className="code">
    <pre>
      {`ul {
    list-style-position: inside;
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
