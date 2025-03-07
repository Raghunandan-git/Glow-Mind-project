import React, { useState, useRef } from 'react';
import '../styles/intro.css';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp, FaStar } from 'react-icons/fa';

export default function MySQLIntro() {
  const [expandedModule, setExpandedModule] = useState(null);
  const contentRefs = useRef({});

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const modules = [
    {
      id: 'm1',
      title: 'Introduction to Databases & MySQL',
      content: [
        { name: "What is a Database?", path: "/courses/mysql/m1/what-is-database" },
        { name: "Relational Databases & MySQL", path: "/courses/mysql/m1/relational-databases" },
        { name: "Installing MySQL", path: "/courses/mysql/m1/installing-mysql" },
        { name: "Assignment 1", path: "/courses/mysql/m1/assignment1" },
      ]
    },
    {
      id: 'm2',
      title: 'Basic MySQL Queries',
      content: [
        { name: "Creating & Deleting Databases", path: "/courses/mysql/m2/create-delete-db" },
        { name: "Creating Tables", path: "/courses/mysql/m2/create-tables" },
        { name: "Inserting Data into Tables", path: "/courses/mysql/m2/insert-data" },
        { name: "Assignment 2", path: "/courses/mysql/m2/assignment2" },
      ]
    },
    {
      id: 'm3',
      title: 'Retrieving & Manipulating Data',
      content: [
        { name: "SELECT Queries", path: "/courses/mysql/m3/select-queries" },
        { name: "Filtering Data (WHERE, ORDER BY)", path: "/courses/mysql/m3/filtering-data" },
        { name: "Updating & Deleting Data", path: "/courses/mysql/m3/update-delete" },
        { name: "Assignment 3", path: "/courses/mysql/m3/assignment3" },
      ]
    },
    {
      id: 'm4',
      title: 'Joins & Relationships',
      content: [
        { name: "Understanding Primary & Foreign Keys", path: "/courses/mysql/m4/primary-foreign-keys" },
        { name: "INNER, LEFT, RIGHT, FULL JOIN", path: "/courses/mysql/m4/joins" },
        { name: "Normalization Concepts", path: "/courses/mysql/m4/normalization" },
        { name: "Assignment 4", path: "/courses/mysql/m4/assignment4" },
      ]
    },
    {
      id: 'm5',
      title: 'Advanced MySQL Concepts',
      content: [
        { name: "Indexes & Performance Optimization", path: "/courses/mysql/m5/indexes-performance" },
        { name: "Stored Procedures & Triggers", path: "/courses/mysql/m5/stored-procedures-triggers" },
        { name: "Assignment 5", path: "/courses/mysql/m5/assignment5" },
      ]
    },
  ];

  return (
    <>
      <div className="intro">
        <img src="https://www.zend.com/sites/default/files/image/2020-04/image-blog-mysql-php.jpg" alt="mysql" height={150} width={200}/>
        <div>
          <h1>MySQL</h1>
          <hr />
          <h3>Learn MySQL for Efficient Database Management</h3>
          <h3>Beginner to Intermediate</h3>
          <h3>Certificate Available</h3>
          <h3>8 Hrs</h3>
          <h3>5 Modules</h3>
          <h3>4.6 <FaStar className='rating' /> Ratings</h3>

          <Link to={'/courses/mysql/m1/what-is-database'}>
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
          <li><strong>Understand Database Basics:</strong> Learn about relational databases and SQL.</li>
          <li><strong>Write Effective SQL Queries:</strong> Retrieve, filter, and manipulate data efficiently.</li>
          <li><strong>Work with Relationships & Joins:</strong> Understand how tables interact using primary/foreign keys and joins.</li>
          <li><strong>Optimize Performance:</strong> Learn indexing and performance-tuning strategies.</li>
          <li><strong>Use Stored Procedures & Triggers:</strong> Automate tasks and improve database functionality.</li>
        </ul>
      </div>
    </>
  );
}
