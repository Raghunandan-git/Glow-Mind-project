import React from 'react'
import HtmlSidebar from '../HtmlSidebar'

export default function SemanticTags() {
  return (
    <>
    <div className="bar">
      <HtmlSidebar/>
    </div>
      <h1 id='heading'>Semantic Tags</h1>
      <div className="course">
        <p>Semantic HTML tags provide meaning to the content they wrap, making it easier for both developers and browsers to understand the structure and purpose of the webpage. These tags are crucial for accessibility, SEO, and maintainable code.

Semantic HTML tags help search engines understand the content and structure of your website. By using tags like {"<article>, <section>, <header>, and <footer>,"} you improve the chances of your content being indexed correctly. These tags also help with content discoverability, as search engines can more easily determine the relevance of your content to specific queries.</p>
       <h2>1.Header</h2>
       <p>The {"<header>" }element represents the introductory content or a set of navigational links. It typically contains the website’s logo, main navigation, and other introductory elements.</p>
        <div className="code"> 
          <p>{`<header>`}</p> 
          <p>{` <h1>My Website</h1>`}</p> 
          <p>{` <nav>`}</p> 
          <p>{` <ul>`}</p> 
          <p>{` <li><a href="#home">Home</a></li>`}</p> 
          <p>{` <li><a href="#about">About</a></li>`}</p> 
          <p>{` <li><a href="#contact">Contact</a></li>`}</p> <p>{` </ul>`}</p> 
          <p>{` </nav>`}</p> 
          <p>{`</header>`}</p> 
          </div>
          <h4>Output</h4> <div className="output"> <header> <h1>My Website</h1> <nav> <ul> <li><a href="#home">Home</a></li> <li><a href="#about">About</a></li> <li><a href="#contact">Contact</a></li> </ul> </nav> </header> </div>
          <h2>2.Nav</h2>
          <p>The{" <nav> "}element is used to define a block of navigation links, typically a menu that helps users navigate the website.</p>
          <div className="code"> 
            <p>{`<nav>`}</p> 
            <p>{` <ul>`}</p> 
            <p>{` <li><a href="#home">Home</a></li>`}</p> 
            <p>{` <li><a href="#services">Services</a></li>`}</p> 
            <p>{` <li><a href="#portfolio">Portfolio</a></li>`}</p> 
            <p>{` <li><a href="#contact">Contact</a></li>`}</p> 
            <p>{` </ul>`}</p> 
            <p>{`</nav>`}</p> 
            </div> 
            <h4>Output</h4> 
            <div className="output"> 
              <nav> 
                <ul> 
                  <li><a href="#home">Home</a></li> 
                  <li><a href="#services">Services</a></li> <li><a href="#portfolio">Portfolio</a></li> <li><a href="#contact">Contact</a></li> 
                  </ul> 
                  </nav> 
              </div>
              <h2>{"3. <article> Tag"}</h2>
              <p>The {"<article>"} element represents a self-contained piece of content that could be independently distributed or reused, such as a blog post, news article, or forum post.</p> 
              <div className="code"> 
                <p>{`<article>`}</p> 
                <p>{` <h2>The Importance of Web Standards</h2>`}</p> 
                <p>{` <p>Web standards ensure that websites work consistently across all browsers and devices.</p>`}</p> 
                <p>{`</article>`}</p> 
                </div> <h4>Output</h4> 
                <div className="output"> 
                  <article> 
                    <h2>The Importance of Web Standards</h2> <p>Web standards ensure that websites work consistently across all browsers and devices.</p> 
                  </article> 
              </div>
              <h2>4. section Tag</h2>
              <p>The {`<section>`} element defines a section within a document, used to group related content together.</p> 
              <div className="code"> 
                <p>{`<section>`}</p> 
                <p>{` <h2>Our Services</h2>`}</p> <p>{` <p>We offer a wide range of web development services, including design, development, and SEO.</p>`}</p> 
                <p>{`</section>`}</p> 
                </div> <h4>Output</h4> 
                <div className="output"> 
                  <section> 
                    <h2>Our Services</h2> 
                    <p>We offer a wide range of web development services, including design, development, and SEO.</p> 
                  </section> 
                </div>
              <h2>Footer</h2>
              <p>The {"`<footer>`"} element represents the footer of a document or section, usually containing copyright information and additional links.</p> 
              <div className="code"> 
                <p>{`<footer>`}</p> 
                <p>{` <p>&copy; 2024 My Website. All rights reserved.</p>`}</p> 
                <p>{` <nav>`}</p> 
                <p>{` <ul>`}</p> 
                <p>{` <li><a href="#privacy">Privacy Policy</a></li>`}</p> 
                <p>{` <li><a href="#terms">Terms of Service</a></li>`}</p> 
                <p>{` </ul>`}</p> 
                <p>{` </nav>`}</p> 
                <p>{`</footer>`}</p> 
                </div> <h4>Output</h4> 
                <div className="output"> 
                  <footer> <p>&copy; 2024 My Website. All rights reserved.</p> 
                  <nav> 
                    <ul> 
                      <li>
                        <a href="#privacy">Privacy Policy</a></li> 
                        <li><a href="#terms">Terms of Service</a></li> 
                        </ul> 
                      </nav> 
                      
                      </footer> 
                </div>
                <h2>Some more Tags</h2>
                <ul>
                  <li><strong>{"<aside>:"}</strong>
                    The {"<aside>"} element contains content that is tangentially related to the main content, such as sidebars, pull quotes, or advertisements.
                  </li>
                  <li>
                  <strong>{"<figure> and <figcaption>:"}</strong>
                  The {"<figure>"} element is used to encapsulate media content like images, diagrams, or charts, along with their associated caption, provided by the {"<figcaption>"} element.
                  </li>
                  <li>
                  <strong>{"<main>:"}</strong>
                  The {"<main>"} element represents the dominant content of the {"<body>"} of a document. It should be unique and contain the primary content related to the central topic of the page.
                  </li>
                </ul>
      </div>
    </>
  )
}
