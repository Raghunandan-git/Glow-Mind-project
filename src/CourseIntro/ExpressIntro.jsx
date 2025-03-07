import React, { useState, useRef } from 'react';
import '../styles/intro.css';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp, FaStar } from 'react-icons/fa';

export default function NodeExpressIntro() {
  const [expandedModule, setExpandedModule] = useState(null);
  const contentRefs = useRef({});

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const modules = [
    {
      id: 'm1',
      title: 'Introduction to Node.js & Express.js',
      content: [
        { name: "What is Node.js?", path: "/courses/nodeexpress/m1/what-is-nodejs" },
        { name: "Setting Up a Node.js Project", path: "/courses/nodeexpress/m1/setup-node-project" },
        { name: "Understanding npm & Package.json", path: "/courses/nodeexpress/m1/npm-package-json" },
        { name: "What is Express.js?", path: "/courses/nodeexpress/m1/what-is-expressjs" },
        { name: "Assignment 1", path: "/courses/nodeexpress/m1/assignment1" },
      ]
    },
    {
      id: 'm2',
      title: 'Building Web Servers with Express',
      content: [
        { name: "Creating a Simple Server", path: "/courses/nodeexpress/m2/simple-server" },
        { name: "Handling HTTP Requests & Responses", path: "/courses/nodeexpress/m2/http-requests-responses" },
        { name: "Middleware in Express", path: "/courses/nodeexpress/m2/middleware" },
        { name: "Assignment 2", path: "/courses/nodeexpress/m2/assignment2" },
      ]
    },
    {
      id: 'm3',
      title: 'Working with Databases',
      content: [
        { name: "Connecting Node.js to MongoDB", path: "/courses/nodeexpress/m3/node-mongodb" },
        { name: "Using Mongoose for Data Models", path: "/courses/nodeexpress/m3/mongoose-models" },
        { name: "Performing CRUD Operations", path: "/courses/nodeexpress/m3/crud-operations" },
        { name: "Assignment 3", path: "/courses/nodeexpress/m3/assignment3" },
      ]
    },
    {
      id: 'm4',
      title: 'Advanced Express.js & Authentication',
      content: [
        { name: "User Authentication with JWT", path: "/courses/nodeexpress/m4/jwt-authentication" },
        { name: "Session & Cookies in Express", path: "/courses/nodeexpress/m4/sessions-cookies" },
        { name: "Role-Based Access Control", path: "/courses/nodeexpress/m4/role-based-access" },
        { name: "Assignment 4", path: "/courses/nodeexpress/m4/assignment4" },
      ]
    },
    {
      id: 'm5',
      title: 'Building RESTful APIs with Node.js',
      content: [
        { name: "REST API Basics & Design", path: "/courses/nodeexpress/m5/rest-api-design" },
        { name: "Error Handling & Logging", path: "/courses/nodeexpress/m5/error-handling" },
        { name: "Deployment of Node.js Apps", path: "/courses/nodeexpress/m5/deploy-node-app" },
        { name: "Final Project: Building a Full-Stack App", path: "/courses/nodeexpress/m5/final-project" },
        { name: "Assignment 5", path: "/courses/nodeexpress/m5/assignment5" },
      ]
    },
  ];

  return (
    <>
      <div className="intro">
        <img src="https://miro.medium.com/v2/resize:fit:1400/0*-VVwL0nee9RgEhJB.png" alt="node-express" />
        <div>
          <h1>Node.js & Express.js</h1>
          <hr />
          <h3>Master backend development with Node.js & Express.js</h3>
          <h3>Beginner to Advanced</h3>
          <h3>Certificate Available</h3>
          <h3>8 Hrs</h3>
          <h3>5 Modules</h3>
          <h3>4.8 <FaStar className='rating' /> Ratings</h3>

          <Link to={'/courses/nodeexpress/m1/what-is-nodejs'}>
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
          <li><strong>Build Scalable Backend Applications:</strong> Learn to create efficient and scalable web servers using Node.js & Express.js.</li>
          <li><strong>Work with Databases:</strong> Connect and interact with databases like MongoDB using Mongoose.</li>
          <li><strong>Authentication & Security:</strong> Implement JWT authentication, sessions, and secure routes.</li>
          <li><strong>RESTful APIs & Middleware:</strong> Design and build REST APIs with proper error handling.</li>
          <li><strong>Deploy Full-Stack Applications:</strong> Learn how to deploy Node.js applications on cloud platforms.</li>
        </ul>
      </div>
    </>
  );
}
