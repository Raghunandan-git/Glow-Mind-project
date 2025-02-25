import React from 'react'
import HtmlSidebar from '../HtmlSidebar'

export default function UnderstandingDOM() {
  return (
    <>
    <div className="bar">
      <HtmlSidebar/>
    </div>
      <h1>Understanding DOM</h1>
      <div className="course">
        <p>The Document Object Model, or DOM, is a crucial concept when working with HTML, as it represents the structure of a web page in a way that both programming languages and humans can interact with. While the DOM is a more comprehensive concept that is often discussed in relation to JavaScript, understanding it from an HTML perspective is fundamental, as it helps in grasping how web pages are structured and manipulated.

</p>
      <h2>What is the DOM?</h2>
      <p>The DOM is a hierarchical, tree-like structure that represents the elements, attributes, and content of an HTML document. When a web page is loaded, the browser parses the HTML code and creates this DOM, which can then be accessed and manipulated using scripting languages like JavaScript.</p>
      <p>Think of the DOM as the browser's internal representation of the HTML file. It allows the browser to interpret and render the page correctly, and it provides a way for scripts to access and update the content, structure, and styles of the document dynamically.</p>
      <h2>The DOM as a Tree Structure</h2>
      <p>Imagine your HTML document as a family tree. At the top, you have the root element, usually the {"<html>"} tag. Beneath it, you have child elements like {"<head>"} and{" <body>"}, and these elements might have their own children, like {"<title>, <p>, <h1>,"} etc. This hierarchical structure forms a tree, where each element in the HTML document is a node in the DOM tree.</p>
      <div className="image-cont">
      <img src="https://designshack.net/wp-content/uploads/dom-tree-graphic.jpg" alt="basic structure" />
      </div>
      <h2>Why is the DOM Important?</h2>
      <p>From an HTML perspective, the DOM is important because:</p>
      <ol>
        <li><strong>Accessibility:</strong> The DOM structure allows screen readers and other assistive technologies to understand and navigate the web page's content.</li>
        <li><strong>Interactivity:</strong> Although you’re focusing on HTML without JavaScript, understanding the DOM sets the foundation for learning how to make web pages interactive in the future. JavaScript interacts with the DOM to change content, styles, and structure dynamically.</li>
        <li><strong>Document Structure:</strong> Knowing the DOM helps you create well-structured HTML documents. Understanding how elements relate to each other in the DOM ensures that you write HTML that is organized, maintainable, and accessible.</li>
      </ol>
      <h2>Conclusion</h2>
      <p>HTML (HyperText Markup Language) is the foundation of web development, used to structure web pages with elements like headings, paragraphs, images, links, and forms. It works alongside CSS (for styling) and JavaScript (for interactivity) to create dynamic and visually appealing websites. Understanding HTML is essential for building web applications, ensuring accessibility, and improving user experience.</p>
      </div>
      <div className="buttns">
      <button>Previous</button>
      <button>Mark As Compleated</button>
    </div>
    </>
  )
}
