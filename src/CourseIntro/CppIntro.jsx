import React, { useState, useRef } from 'react';
import '../styles/intro.css';
import { Link } from 'react-router-dom';
import {  FaAngleDown, FaAngleUp, FaStar } from 'react-icons/fa'

export default function CppIntro() {
  const [expandedModule, setExpandedModule] = useState(null);
  const contentRefs = useRef({});

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const modules = [
    {
      id: 'm1',
      title: 'Introduction to C++',
      content: ['Setting up IDE', 'Basic Code Structure', 'Input/Output in C++'],
    },
    {
      id: 'm2',
      title: 'Programming Constructs of C++',
      content: ['DataTypes in C++', 'Overflow and Underflow', 'TypeCasting and Type Conversion', 'Operators', 'Escape Sequences'],
    },
    {
      id: 'm3',
      title: 'Control Statements and Functions in C++',
      content: ['Conditional Statements', 'Looping Statements', 'Jump Statements', 'Introduction to Functions in C++'],
    },
    {
      id: 'm4',
      title: 'Arrays and Structures in C++',
      content: ['Introduction to Arrays', 'Arrays and Loops', '2D Arrays', 'Structures in C++', 'All about Pointers'],
    },
    {
      id: 'm5',
      title: 'Class and STL in C++',
      content: ['Class/Objects', 'Constructors', 'OOP Concepts', 'Vectors', 'Sets', 'Maps'],
    },
  ];

  return (
    <>
      <div className="intro">
        <img src="https://miro.medium.com/v2/resize:fit:1400/0*ZpjhBs0gR5oSd3Il" alt="C++" />
        <div>
          <h1>Mastering in C++</h1>
          <hr />
          <h3>Understanding the core concepts in programming with C++</h3>
          <h3>Beginner</h3>
          <h3>Certificate Available</h3>
          <h3>8 Hrs</h3>
          <h3>5 Modules</h3>
          <h3>4.2<FaStar className='rating'/> Ratings</h3>
          
          <Link to={'/courses/c++/Introduction-to-C++'}>
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
              {  module.title}
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
          <li><strong>Understand C++ Basics :</strong> Learn about variables, data types, operators, and input/output handling.</li>
          <li><strong>Master Control Structures :</strong> Use conditional statements (if-else, switch) and loops (for, while, do-while) for decision-making.</li>
          <li><strong>Work with Functions :</strong> Understand function creation, parameter passing, return types, and function overloading.</li>
          <li><strong>Explore Arrays & Strings :</strong> Learn how to store and manipulate data efficiently using arrays and string functions.</li>
          <li><strong>Introduction to Object-Oriented Programming :</strong> Learn about classes, objects, constructors, and basic principles like encapsulation and inheritance.</li>
        </ul>
      </div>
    </>
  );
}