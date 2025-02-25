import React from 'react';
import CssSidebar from '../CssSidebar';

export default function Grid() {
  return (
    <>
      <div className="bar">
        <CssSidebar />
      </div>
      <h1 id='heading'>Introduction to Grid</h1>
      <div className="course">
        
        <h2>Introduction</h2>
        <p>CSS Grid is a powerful two-dimensional layout system that allows you to create complex, responsive layouts with ease.</p>
        
        <h2>Grid Container</h2>
        <p>The first step in using CSS Grid is to define a grid container using <code>display: grid</code>.</p>
        <div className="code">
          <pre>
            {`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: lightsalmon;
}
.item {
  background-color: lightcoral;
  margin: 10px;
  border: 3px solid black;
}`}
          </pre>
        </div>
        <div className="output">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", backgroundColor: 'lightsalmon' }}>
            <div style={{ backgroundColor: "lightseagreen", margin: "10px", border: "3px solid black" }}>Item 1</div>
            <div style={{ backgroundColor: "lightseagreen", margin: "10px", border: "3px solid black" }}>Item 2</div>
            <div style={{ backgroundColor: "lightseagreen", margin: "10px", border: "3px solid black" }}>Item 3</div>
          </div>
        </div>
        
        <h2>Grid Items</h2>
        <p>Grid items are the direct children of a grid container and can be positioned within the grid.</p>
        <div className="code">
          <pre>
            {`.item:nth-child(1) {
  grid-column: span 2;
  background-color: lightblue;
}`}
          </pre>
        </div>
        
        <h2>Grid Lines</h2>
        <p>Grid lines define the structure of the grid, allowing items to span across specific rows and columns.</p>
        <div className="code">
          <pre>
            {`.item:nth-child(2) {
  grid-row: 1 / 3;
}`}
          </pre>
        </div>
        
        <h2>Grid Gaps</h2>
        <p>Grid gaps are the spaces between rows and columns.</p>
        <div className="code">
          <pre>
            {`.container {
  grid-gap: 10px;
}`}
          </pre>
        </div>
        
        <h2>Grid Template Areas</h2>
        <p>You can define named grid areas to organize your layout easily.</p>
        <div className="code">
          <pre>
            {`.container {
  grid-template-areas:
    "header header"
    "sidebar content";
}`}
          </pre>
        </div>
      </div>
    </>
  );
}