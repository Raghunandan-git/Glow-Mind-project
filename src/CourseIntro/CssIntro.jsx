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
      content: ['Introduction to CSS', 'Different ways of writing CSS', 'CSS Selectors', 'Styling text with CSS'],
    },
    {
      id: 'm2',
      title: 'CSS Block Models, Links, Lists, and Background Images',
      content: ['CSS Block Models', 'Styling Links and Lists', 'Styling Background'],
    },
    {
      id: 'm3',
      title: 'CSS Display Properties',
      content: ['Display, Position Property', 'Understanding Float, Clear, and Overview in CSS'],
    },
    {
      id: 'm4',
      title: 'FlexBox and Grid',
      content: ['Introduction to FlexBox', 'More About Flex', 'Introduction to Grid', 'More About Grid'],
    },
    {
      id: 'm5',
      title: 'CSS Animations',
      content: ['Introduction to Animations', 'Shorthand Property'],
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
          
          <Link to={'/courses/css/Introduction-to-Css'}>
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
                    <li key={index}>{item}</li>
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
