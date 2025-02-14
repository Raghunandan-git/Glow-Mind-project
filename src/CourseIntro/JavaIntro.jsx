import React, { useState, useRef } from 'react';
import '../styles/intro.css';
import { Link } from 'react-router-dom';
import {  FaAngleDown, FaAngleUp, FaStar } from 'react-icons/fa'


export default function JavaIntro() {
  const [expandedModule, setExpandedModule] = useState(null);
  const contentRefs = useRef({});

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const modules = [
    {
      id: 'm1',
      title: 'Introduction to Java',
      content: ['Java Introduction', 'Setting up with Java', 'Basic Syntax'],
    },
    {
      id: 'm2',
      title: 'Programming Constructs of Java',
      content: ['Variables and DataTypes', 'TypeCasting and Type Conversion', 'Input and Output', 'Operators', 'Strings', 'Comments and Math Functions'],
    },
    {
      id: 'm3',
      title: 'Control Statements and Arrays',
      content: ['Conditional Statements', 'Looping Statements', 'Jump Statements', 'Introduction to Arrays', 'Multidimensional Arrays'],
    },
    {
      id: 'm4',
      title: 'Methods and OOPs in Java',
      content: ['Introduction to Methods', 'Parameters and Return Values', 'Method Overloading and Overriding', 'Class and Objects', 'Constructors and Access Specifiers', 'OOPs Concepts'],
    },
    {
      id: 'm5',
      title: 'Exception Handling and File Handling',
      content: ['Exception Handling', 'Exception Handling Keywords', 'File Handling'],
    },
  ];

  return (
    <>
      <div className="intro">
        <img src="https://miro.medium.com/v2/resize:fit:700/0*gtY-llyEbkeoS1Sp.png" alt="Java" />
        <div>
          <h1>Programming with Java</h1>
          <hr />
          <h3>Problem solving and learning core concepts of Java Programming</h3>
          <h3>Beginner</h3>
          <h3>Certificate Available</h3>
          <h3>8 Hrs</h3>
          <h3>5 Modules</h3>
          <h3>4.4<FaStar  className='rating'/> Ratings</h3>
          
          <Link to={'/courses/java/Introduction-yo-Java'}>
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
          <li><strong>Understand Java Basics :</strong> Learn about variables, data types, operators, and input/output handling using Scanner.</li>
          <li><strong>Master Control Structures :</strong> Use conditional statements (if-else, switch) and loops (for, while, do-while) for decision-making.</li>
          <li><strong>Work with Methods :</strong> Understand method creation, parameter passing, return types, and method overloading.</li>
          <li><strong>Explore Arrays & Strings :</strong> Learn how to store and manipulate data efficiently using arrays and String methods.</li>
          <li><strong>Introduction to Object-Oriented Programming :</strong> Learn about classes, objects, constructors, and basic OOP principles like encapsulation and inheritance.</li>
        </ul>
      </div>
    </>
  );
}
