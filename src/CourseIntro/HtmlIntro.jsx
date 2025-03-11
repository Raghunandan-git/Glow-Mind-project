// HtmlIntro.jsx

import React, { useState, useRef } from 'react';
import '../styles/intro.css';
import { Link } from 'react-router-dom';
import {  FaAngleDown, FaAngleUp, FaStar } from 'react-icons/fa'


export default function HtmlIntro() {
  const [expandedModule, setExpandedModule] = useState(null);
  const contentRefs = useRef({}); 

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const modules = [
    {
      id: 'm1',
      title: 'Introduction to HTML',
      content:[
        {name:"Introduction to HTML",path:'/courses/html/m1/introduction-to-html'},
        {name:"HTML Editors",path:'/courses/html/m1/HTML-editors'},
        {name:"Basic Structure of HTML",path:'/courses/html/m1/Basic-Structure-of-HTML'},
        {name:"Assignment 1",path:'/Courses/htm/m1/quiz1'}
      ]
      
    },
    {
      id: 'm2',
      title: 'HTML Tags',
      content:[
        {name:"HTML elements",path:'/Courses/html/m2/HTML-Elements'},
        {name:"HTML Attributes",path:'/Courses/html/m2/HTML-Attributes'},
        {name:"Document Structure Tags",path:'/Courses/html/m2/Document-Structure-Tags'},
        {name:"Text Formatting tags",path:'/Courses/html/m2/Text-Formatting-Tags'},
        {name:"Lists",path:'/Courses/html/m2/List'},
        {name:"Tables",path:'/Courses/html/m2/Tables'},
        {name:"Assignment 2",path:'/Courses/html/m2/quiz2'},

      ]
    },
    {
      id: 'm3',
      title: 'More HTML Tags',
      content:[
        {name:"Links and Media",path:'/Courses/html/m3/Links-and-Media'},
        {name:"HTML Forms",path:'/Courses/html/m3/HTML-Forms'},
        {name:"Semantic tags",path:'/Courses/html/m3/Semantic-Tags'},
        {name:"Assignment 3",path:'/Courses/html/m3/quiz3'},
      ]
    },
    {
      id: 'm4',
      title: 'Understanding Styling and DOM',
      content:[
        {name:"Container Elements",path:'/Courses/html/m4/Moving-towards-Styling'},
        {name:"Understanding DOM",path:'/Courses/html/m4/Understanding-DOM'},
        {name:"Assignment 4",path:'/Courses/html/m4/quiz4'}
      ]
    },
  ];

  return (
    <>
      <div className="intro">
        <img src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg" alt="html" />
        <div>
          <h1>HTML</h1>
          <hr />
          <h3>Learn and practice HTML, from beginner level to advanced</h3>
          <h3>Advanced</h3>
          <h3>Certificate Available</h3>
          <h3>6 Hrs</h3>
          <h3>4 Modules</h3>
          <h3>4.6<FaStar className='rating'/> Ratings</h3>
          
          <Link to='/courses/html/m1/introduction-to-html'>
            <button>Go To Course</button>
          </Link>
        </div>
      </div>

      <h1>Modules</h1>
      <div className="modules">
        <ul>
          {modules.map((module) => (
            <div className="module" key={module.id}>
              <li onClick={() => toggleModule(module.id)}>
              {expandedModule === module.id ? <FaAngleUp className="arrow-icon" /> : <FaAngleDown className="arrow-icon" />}
                 {module.title}
              </li>
              <div ref={(el) => (contentRefs.current[module.id] = el)} className="content"
                style={{
                  maxHeight: expandedModule === module.id ? `${contentRefs.current[module.id]?.scrollHeight}px` : '0px',
                }}
              >
                <ul>
                  {module.content.map((item, index) => (
                      <Link to={item.path} className='contname'>
                    <li key={index}>
                      {item.name}
                    </li>
                      </Link>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </ul>
      </div>

      

      <div className="features">
        <hr />
        <h2>What You Will Learn</h2>
        <ul>
          <li><strong>Build Structured and Accessible Webpages :</strong> Learn how to create well-structured and accessible web pages using semantic HTML elements.</li>
          <li><strong>Enhance Web Content with Multimedia :</strong> Embed images, audio, and video elements to enrich user experience.</li>
          <li><strong>Work with Forms and User Inputs :</strong> Design and implement forms with various input types, validation, and accessibility considerations.</li>
          <li><strong>Use Modern HTML5 Features :</strong> Utilize new input types, semantic tags, and improved multimedia handling.</li>
          <li><strong>Optimize for SEO and Performance :</strong> Learn best practices for writing clean, SEO-friendly, and efficient HTML code.</li>
        </ul>
      </div>
    </>
  );
}
