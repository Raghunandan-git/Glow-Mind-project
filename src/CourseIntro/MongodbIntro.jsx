import React, { useState, useRef } from 'react';
import '../styles/intro.css';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp, FaStar } from 'react-icons/fa';

export default function MongoDBIntro() {
  const [expandedModule, setExpandedModule] = useState(null);
  const contentRefs = useRef({});

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const modules = [
    {
      id: 'm1',
      title: 'Introduction to MongoDB',
      content: [
        { name: "What is MongoDB?", path: "/courses/mongodb/m1/what-is-mongodb" },
        { name: "Installing MongoDB", path: "/courses/mongodb/m1/installing-mongodb" },
        { name: "MongoDB vs SQL", path: "/courses/mongodb/m1/mongodb-vs-sql" },
        { name: "Assignment 1", path: "/courses/mongodb/m1/assignment1" },
      ]
    },
    {
      id: 'm2',
      title: 'MongoDB CRUD Operations',
      content: [
        { name: "Creating Documents", path: "/courses/mongodb/m2/creating-documents" },
        { name: "Reading Documents", path: "/courses/mongodb/m2/reading-documents" },
        { name: "Updating & Deleting Data", path: "/courses/mongodb/m2/updating-deleting" },
        { name: "Assignment 2", path: "/courses/mongodb/m2/assignment2" },
      ]
    },
    {
      id: 'm3',
      title: 'MongoDB Data Modeling',
      content: [
        { name: "Schema Design & Data Types", path: "/courses/mongodb/m3/schema-design" },
        { name: "Indexing & Performance", path: "/courses/mongodb/m3/indexing-performance" },
        { name: "Relationships in MongoDB", path: "/courses/mongodb/m3/relationships" },
        { name: "Assignment 3", path: "/courses/mongodb/m3/assignment3" },
      ]
    },
    {
      id: 'm4',
      title: 'Advanced MongoDB Concepts',
      content: [
        { name: "Aggregation Framework", path: "/courses/mongodb/m4/aggregation-framework" },
        { name: "MongoDB Transactions", path: "/courses/mongodb/m4/mongodb-transactions" },
        { name: "Backup & Restore Data", path: "/courses/mongodb/m4/backup-restore" },
        { name: "Assignment 4", path: "/courses/mongodb/m4/assignment4" },
      ]
    },
    {
      id: 'm5',
      title: 'MongoDB with Node.js',
      content: [
        { name: "Connecting MongoDB with Node.js", path: "/courses/mongodb/m5/mongodb-nodejs" },
        { name: "Building a Simple API", path: "/courses/mongodb/m5/building-api" },
        { name: "Final Project", path: "/courses/mongodb/m5/final-project" },
        { name: "Assignment 5", path: "/courses/mongodb/m5/assignment5" },
      ]
    },
  ];

  return (
    <>
      <div className="intro">
        <img src="https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fyrikqesprn85cp3rjsw7.png" alt="mongodb" />
        <div>
          <h1>MongoDB</h1>
          <hr />
          <h3>Learn NoSQL Database Development with MongoDB</h3>
          <h3>Beginner to Advanced</h3>
          <h3>Certificate Available</h3>
          <h3>8 Hrs</h3>
          <h3>5 Modules</h3>
          <h3>4.6 <FaStar className='rating' /> Ratings</h3>

          <Link to={'/courses/mongodb/m1/what-is-mongodb'}>
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
          <li><strong>Master MongoDB Fundamentals:</strong> Learn NoSQL database concepts and how MongoDB differs from relational databases.</li>
          <li><strong>Perform CRUD Operations:</strong> Create, read, update, and delete data in MongoDB.</li>
          <li><strong>Optimize Performance:</strong> Use indexing, data modeling, and aggregation for efficient queries.</li>
          <li><strong>Work with Node.js & Express:</strong> Build applications that connect with MongoDB using Mongoose.</li>
          <li><strong>Backup, Restore & Secure Data:</strong> Learn best practices for maintaining and securing databases.</li>
        </ul>
      </div>
    </>
  );
}
