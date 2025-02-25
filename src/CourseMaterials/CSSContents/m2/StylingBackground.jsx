import React from 'react'
import CssSidebar from '../CssSidebar'

export default function StylingBackground() {
  return (
    <>
    <div className="bar">
      <CssSidebar/>
    </div>
      <h1 id='heading'>Styling Background</h1>
      <div className="course">
         <p>Background images can enhance the look and feel of your website by adding visual interest or complementing the content. To add background images, CSS offers the background-image property.

</p>
       <h3>Example</h3>
       <div className="code">
        <pre>
      {`body {
  background-image: url('background.jpg');
}`}
 </pre>
 </div>
<p>Here, url('background.jpg') points to the image you want as the background.</p>
    <h2>Styling background</h2>
    <h3>1. Background Size</h3>
    <p>You can resize images using background-size.</p>
    <div className="code">
        <pre>
      {`body {
  background-image: url('background.jpg');
  background-size: cover;
}
`}
 </pre>
 </div>
    <h3>2.Background Position</h3>
    <p>Set where the image appears.</p>
    <div className="code">
        <pre>
      {`body {
   background-image: url('background.jpg');
  background-position: center;
}
`}
 </pre>
 </div>
    <h3>3.Background repeat</h3>
    <p>Control whether the image repeats.</p>
    <div className="code">
        <pre>
      {`body {
  background-image: url('background.jpg');
  background-repeat: no-repeat;
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
