import React, { useState, useRef } from 'react';
import '../styles/intro.css';
import { Link } from 'react-router-dom';
import {  FaAngleDown, FaAngleUp, FaStar } from 'react-icons/fa'


export default function CssIntro() {
  const [expandedModule, setExpandedModule] = useState(null);
  const contentRefs = useRef({});

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const modules = [
    {
      id: 'm1',
      title: 'Introduction to CSS',
      // content: ['Introduction to CSS', 'Different ways of writing CSS', 'CSS Selectors', 'Styling text with CSS'],
      content:[
        {name:"Introduction to CSS",path:"/courses/css/m1/Introduction-to-Css"},
        {name:"Different ways of writing CSS",path:"/courses/css/m1/different-ways-of-writing-css"},
        {name:"CSS Selectors",path:"/courses/css/m1/Css-selectors"},
        {name:"Styling text with CSS",path:"/courses/css/m1/Styling-text"},
        {name:"Assignment 1",path:"/courses/css/m1/assigment1"},
      ]
    },
    {
      id: 'm2',
      title: 'CSS Block Models, Links, Lists, and Background Images',
      content:[
        {name:"CSS Block Models",path:'/courses/css/m2/CSS-Block-Models'},
        {name:"Styling Lists and Links",path:'/courses/css/m2/Styling-lists-links'},
        {name:"Styling Background",path:'/courses/css/m2/Styling-Background'},
        {name:"Assignment 2",path:'/courses/css/m2/assigment2'},
      ]
    },
    {
      id: 'm3',
      title: 'CSS Display Properties',
      content:[
        {name:"Display, Position Property",path:'/courses/css/m3/Display,Position-Property'},
        {name:"Understanding Float, Clear, and Overview in CSS",path:'/courses/css/m3/Float-clear-overview'},
        {name:"Assignment 3",path:'/courses/css/m3/assigment3'},
      ]
    },
    {
      id: 'm4',
      title: 'FlexBox and Grid',
      content:[
        {name:"Introduction to FlexBox",path:'/courses/css/m4/Introduction-to-flexbox'},
        {name:"Introduction to Grid",path:'/courses/css/m4/Introduction-to-Grid'},
        {name:"Assignment 4",path:'/courses/css/m4/assigment4'},
      ]
    },
    {
      id: 'm5',
      title: 'CSS Animations',
      // content: ['Introduction to Animations', 'Shorthand Property'],
      content:[
        {name:"Introduction to Animation",path:'/courses/css/m5/Introduction-to-animation'},
        {name:"Shorthand Property",path:'/courses/css/m5/shorthand'},
        {name:"Assignment 5",path:'/courses/css/m5/assigment5'},
      ]
    },
  ];

  return (
    <>
      <div className="intro">
        <img src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png" alt="css" />
        <div>
          <h1>CSS</h1>
          <hr />
          <h3>Styling the HTML page using CSS, Beginner to Advanced</h3>
          <h3>Advanced</h3>
          <h3>Certificate Available</h3>
          <h3>7 Hrs</h3>
          <h3>5 Modules</h3>
          <h3>4.5<FaStar className='rating'/> Ratings</h3>
          
          <Link to={'/courses/css/m1/Introduction-to-Css'}>
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
              <div
                ref={(el) => (contentRefs.current[module.id] = el)}
                className="content"
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
          <li><strong>Style Webpages with Precision :</strong> Learn how to use CSS to control colors, fonts, spacing, and layout for a visually appealing design.</li>
          <li><strong>Master CSS Layout Techniques :</strong> Understand Flexbox, Grid, and positioning properties to create responsive and adaptive layouts.</li>
          <li><strong>Enhance User Experience with Animations & Transitions :</strong> Apply animations, transitions, and keyframe effects for smooth interactions.</li>
          <li><strong>Improve Performance & Maintainability :</strong> Learn best practices like CSS variables, BEM methodology, and modular CSS for scalable code.</li>
          <li><strong>Work with Responsive Design :</strong> Use media queries and relative units to make websites adapt to different screen sizes.</li>
        </ul>
      </div>
    </>
  );
}
