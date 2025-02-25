import React, { useState, useRef } from 'react';
import '../styles/intro.css';
import { Link } from 'react-router-dom';
import {  FaAngleDown, FaAngleUp, FaStar } from 'react-icons/fa'


export default function JsIntro() {
  const [expandedModule, setExpandedModule] = useState(null);
  const contentRefs = useRef({});

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const modules = [
    {
      id: 'm1',
      title: 'Introduction and Installing JavaScript',
      content:[
        {name:"Introduction to JS",path:'/courses/js/m1/Introduction-to-Js'},
        {name:"Running-Javascript-Locally",path:'/courses/js/m1/Runnning-Js'}
      ]
    },
    {
      id: 'm2',
      title: 'Programming Constructs in JS',
      content:[
        {name:"Syntax, Variables and DataTypes",path:'/courses/js/m2/Syntax-variables-datatypes'},
        {name:"Operators",path:'/courses/js/m2/Operators'},
        {name:"Input/Output in JS",path:'/courses/js/m2/Input-Output-in-JS'},
        {name:"Mastering Conditional Statement",path:'/courses/js/m2/Mastering-Conditional-Statement'},
        {name:"Mastering Switch Statement",path:'/courses/js/m2/Mastering-Switch-Statement'},
        {name:"Mastering Loops",path:'/courses/js/m2/Mastering-Loops'},
        {name:"Mastering Functions",path:'/courses/js/m2/Mastering-Functions'}
      ]
    },
    {
      id: 'm3',
      title: 'Scope and Arrow Functions',
      content:[
        {name:"Scopes in JavaScript",path:'/courses/js/m3/Scopes-js'},
        {name:"Mastering Arrow Functions",path:'/courses/js/m3/Mastering-arrow-Functions'},

      ]
    },
    {
      id: 'm4',
      title: 'Objects and Arrays in JS',
      content:[
        {name:"Introduction to Objects",path:'/courses/js/m4/Introduction-to-objcts'},
        {name:"Object Methodss",path:'/courses/js/m4/Object-methods'},
        {name:"Introduction to Arrays",path:'/courses/js/m4/Introduction-to-arrays'},
        {name:"Methods of Arrays",path:'/courses/js/m4/Array-methods'},

      ]
    },
    {
      id: 'm5',
      title: 'JavaScript Methods',
      content:[
        {name:"String Methods",path:'/courses/js/m4/String-methods'},
        {name:"Number Methods",path:'/courses/js/m4/Number-methods'},
        {name:"Understanding Errors in JavaScript",path:'/courses/js/m4/Error-in-js'},

      ]
    },
  ];

  return (
    <>
      <div className="intro">
        <img src="https://files.ably.io/ghost/prod/2023/12/choosing-the-best-javascript-frameworks-for-your-next-project.png" alt="JS" />
        <div>
          <h1>JavaScript</h1>
          <hr />
          <h3>Master the core concepts of JavaScript to build dynamic web applications.</h3>
          <h3>Intermediate</h3>
          <h3>Certificate Available</h3>
          <h3>6 Hrs</h3>
          <h3>5 Modules</h3>
          <h3>4.4<FaStar  className='rating'/> Ratings</h3>
          
          <Link to={'/courses/js/Introduction-to-Js'}>
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
          <li><strong>Understand Core JavaScript Concepts :</strong> Learn variables, data types, functions, loops, and event handling to build dynamic web applications.</li>
          <li><strong>Manipulate the DOM Efficiently :</strong> Use JavaScript to dynamically update and modify HTML and CSS for interactive user experiences.</li>
          <li><strong>Master Asynchronous Programming :</strong> Understand callbacks, promises, and async/await to handle API requests and background tasks smoothly.</li>
          <li><strong>Improve Performance & Maintainability :</strong> Follow best practices like modular code structure, closures, and efficient event handling.</li>
        </ul>
      </div>
    </>
  );
}
