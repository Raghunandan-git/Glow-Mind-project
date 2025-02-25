import React, { useState, useRef } from 'react';
import '../styles/intro.css';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp, FaStar } from 'react-icons/fa';

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
      content: [
        { name: 'Java Introduction', path: '/courses/java/m1/java-introduction' },
        { name: 'Setting up with Java', path: '/courses/java/m1/setting-up-with-java' },
        { name: 'Basic Syntax', path: '/courses/java/m1/basic-syntax' }
      ]
    },
    {
      id: 'm2',
      title: 'Programming Constructs of Java',
      content: [
        { name: 'Variables and DataTypes', path: '/courses/java/m2/variables-and-datatypes' },
        { name: 'TypeCasting and Type Conversion', path: '/courses/java/m2/typecasting-and-type-conversion' },
        { name: 'Input and Output', path: '/courses/java/m2/input-and-output' },
        { name: 'Operators', path: '/courses/java/m2/operators' },
        { name: 'Strings', path: '/courses/java/m2/strings' },
        { name: 'Comments and Math Functions', path: '/courses/java/m2/comments-and-math-functions' }
      ]
    },
    {
      id: 'm3',
      title: 'Control Statements and Arrays',
      content: [
        { name: 'Conditional Statements', path: '/courses/java/m3/conditional-statements' },
        { name: 'Looping Statements', path: '/courses/java/m3/looping-statements' },
        { name: 'Jump Statements', path: '/courses/java/m3/jump-statements' },
        { name: 'Introduction to Arrays', path: '/courses/java/m3/introduction-to-arrays' },
        { name: 'Multidimensional Arrays', path: '/courses/java/m3/multidimensional-arrays' }
      ]
    },
    {
      id: 'm4',
      title: 'Methods and OOPs in Java',
      content: [
        { name: 'Introduction to Methods', path: '/courses/java/m4/introduction-to-methods' },
        { name: 'Parameters and Return Values', path: '/courses/java/m4/parameters-and-return-values' },
        { name: 'Method Overloading and Overriding', path: '/courses/java/m4/method-overloading-and-overriding' },
        { name: 'Class and Objects', path: '/courses/java/m4/class-and-objects' },
        { name: 'Constructors and Access Specifiers', path: '/courses/java/m4/constructors-and-access-specifiers' },
        { name: 'OOPs Concepts', path: '/courses/java/m4/oops-concepts' }
      ]
    },
    {
      id: 'm5',
      title: 'Exception Handling and File Handling',
      content: [
        { name: 'Exception Handling', path: '/courses/java/m5/exception-handling' },
        { name: 'Exception Handling Keywords', path: '/courses/java/m5/exception-handling-keywords' },
        { name: 'File Handling', path: '/courses/java/m5/file-handling' }
      ]
    }
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
          <h3>4.4<FaStar className='rating' /> Ratings</h3>
          
          <Link to={'/courses/java/introduction-to-java'}>
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
