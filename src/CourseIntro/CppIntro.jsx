import React, { useState, useRef } from 'react';
import '../styles/intro.css';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp, FaStar } from 'react-icons/fa';

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
      content: [

        { name: 'Introduction to C++', path: '/courses/c++/m1/Introduction-to-C++' },
        { name: 'Setting up IDE', path: '/courses/c++/m1/setting-up-ide' },
        { name: 'Basic Code Structure', path: '/courses/c++/m1/basic-code-structure' },
        { name: 'Input/Output in C++', path: '/courses/c++/m1/input-output' }
      ]
    },
    {
      id: 'm2',
      title: 'Programming Constructs of C++',
      content: [
        { name: 'DataTypes in C++', path: '/courses/c++/m2/datatypes' },
        { name: 'Overflow and Underflow', path: '/courses/c++/m2/overflow-underflow' },
        { name: 'TypeCasting and Type Conversion', path: '/courses/c++/m2/typecasting' },
        { name: 'Operators', path: '/courses/c++/m2/operators' },
        { name: 'Escape Sequences', path: '/courses/c++/m2/escape-sequences' }
      ]
    },
    {
      id: 'm3',
      title: 'Control Statements and Functions in C++',
      content: [
        { name: 'Conditional Statements', path: '/courses/c++/m3/conditional-statements' },
        { name: 'Looping Statements', path: '/courses/c++/m3/looping-statements' },
        { name: 'Jump Statements', path: '/courses/c++/m3/jump-statements' },
        { name: 'Introduction to Functions in C++', path: '/courses/c++/m3/functions' }
      ]
    },
    {
      id: 'm4',
      title: 'Arrays and Structures in C++',
      content: [
        { name: 'Introduction to Arrays', path: '/courses/c++/m4/arrays' },
        { name: 'Arrays and Loops', path: '/courses/c++/m4/arrays-loops' },
        { name: 'Multidimentional Arrays', path: '/courses/c++/m4/2d-arrays' },
        { name: 'Structures in C++', path: '/courses/c++/m4/structures' },
        { name: 'All about Pointers', path: '/courses/c++/m4/pointers' }
      ]
    },
    {
      id: 'm5',
      title: 'Class and STL in C++',
      content: [
        { name: 'Class/Objects', path: '/courses/c++/m5/class-objects' },
        { name: 'Constructors', path: '/courses/c++/m5/constructors' },
        { name: 'OOP Concepts', path: '/courses/c++/m5/oop-concepts' },
        { name: 'Vectors', path: '/courses/c++/m5/vectors' },
        { name: 'Sets', path: '/courses/c++/m5/sets' },
        { name: 'Maps', path: '/courses/c++/m5/maps' }
      ]
    }
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
          
          <Link to={'/sidebar'}>
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
