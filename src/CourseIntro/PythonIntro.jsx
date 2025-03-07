import React, { useState, useRef } from 'react';
import '../styles/intro.css';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp, FaStar } from 'react-icons/fa';

export default function PythonIntro() {
  const [expandedModule, setExpandedModule] = useState(null);
  const contentRefs = useRef({});

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const modules = [
    {
      id: 'm1',
      title: 'Introduction to Python',
      content: [
        { name: "What is Python?", path: "/courses/python/m1/what-is-python" },
        { name: "Setting up Python", path: "/courses/python/m1/setup-python" },
        { name: "Basic Syntax", path: "/courses/python/m1/basic-syntax" },
        { name: "Assignment 1", path: "/courses/python/m1/assignment1" },
      ]
    },
    {
      id: 'm2',
      title: 'Data Types and Operators',
      content: [
        { name: "Variables and Data Types", path: "/courses/python/m2/data-types" },
        { name: "Operators in Python", path: "/courses/python/m2/operators" },
        { name: "User Input & Type Conversion", path: "/courses/python/m2/user-input" },
        { name: "Assignment 2", path: "/courses/python/m2/assignment2" },
      ]
    },
    {
      id: 'm3',
      title: 'Control Flow & Functions',
      content: [
        { name: "Conditional Statements", path: "/courses/python/m3/conditionals" },
        { name: "Loops in Python", path: "/courses/python/m3/loops" },
        { name: "Functions & Scope", path: "/courses/python/m3/functions" },
        { name: "Assignment 3", path: "/courses/python/m3/assignment3" },
      ]
    },
    {
      id: 'm4',
      title: 'Working with Data Structures',
      content: [
        { name: "Lists & Tuples", path: "/courses/python/m4/lists-tuples" },
        { name: "Dictionaries & Sets", path: "/courses/python/m4/dictionaries-sets" },
        { name: "Assignment 4", path: "/courses/python/m4/assignment4" },
      ]
    },
    {
      id: 'm5',
      title: 'Object-Oriented Programming (OOP)',
      content: [
        { name: "Classes and Objects", path: "/courses/python/m5/classes-objects" },
        { name: "Inheritance & Polymorphism", path: "/courses/python/m5/inheritance" },
        { name: "Assignment 5", path: "/courses/python/m5/assignment5" },
      ]
    },
  ];

  return (
    <>
      <div className="intro">
        <img src="https://abctrainings.in/media/thumbnails/Python-01_2_1.png" alt="python" height={150} width={200}/>
        <div>
          <h1>Python</h1>
          <hr />
          <h3>Learn Python from Basics to Advanced Concepts</h3>
          <h3>Beginner-Friendly</h3>
          <h3>Certificate Available</h3>
          <h3>10 Hrs</h3>
          <h3>5 Modules</h3>
          <h3>4.7 <FaStar className='rating' /> Ratings</h3>

          <Link to={'/courses/python/m1/what-is-python'}>
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
                    <Link to={item.path} className='contname' key={index}>
                      <li>{item.name}</li>
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
          <li><strong>Master Python Basics:</strong> Understand syntax, data types, and control flow.</li>
          <li><strong>Work with Data Structures:</strong> Learn about lists, dictionaries, and tuples.</li>
          <li><strong>Write Efficient Code:</strong> Use loops, functions, and modular programming techniques.</li>
          <li><strong>Object-Oriented Programming (OOP):</strong> Implement classes, objects, and inheritance.</li>
          <li><strong>Build Real-World Applications:</strong> Work on hands-on projects with Python.</li>
        </ul>
      </div>
    </>
  );
}
