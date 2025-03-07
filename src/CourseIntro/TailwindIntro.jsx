import React, { useState, useRef } from 'react';
import '../styles/intro.css';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp, FaStar } from 'react-icons/fa';

export default function TailwindCSSIntro() {
  const [expandedModule, setExpandedModule] = useState(null);
  const contentRefs = useRef({});

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const modules = [
    {
      id: 'm1',
      title: 'Introduction to Tailwind CSS',
      content: [
        { name: "What is Tailwind CSS?", path: "/courses/tailwind/m1/what-is-tailwind" },
        { name: "Installing Tailwind CSS", path: "/courses/tailwind/m1/installing-tailwind" },
        { name: "Utility-First CSS Concept", path: "/courses/tailwind/m1/utility-first-css" },
        { name: "Assignment 1", path: "/courses/tailwind/m1/assignment1" },
      ]
    },
    {
      id: 'm2',
      title: 'Working with Tailwind Basics',
      content: [
        { name: "Spacing, Sizing, and Colors", path: "/courses/tailwind/m2/spacing-sizing-colors" },
        { name: "Typography and Shadows", path: "/courses/tailwind/m2/typography-shadows" },
        { name: "Using Flexbox and Grid", path: "/courses/tailwind/m2/flexbox-grid" },
        { name: "Assignment 2", path: "/courses/tailwind/m2/assignment2" },
      ]
    },
    {
      id: 'm3',
      title: 'Advanced Tailwind CSS Features',
      content: [
        { name: "Customizing Tailwind Configuration", path: "/courses/tailwind/m3/custom-config" },
        { name: "Responsive Design with Tailwind", path: "/courses/tailwind/m3/responsive-design" },
        { name: "Dark Mode & Theme Customization", path: "/courses/tailwind/m3/dark-mode-theme" },
        { name: "Assignment 3", path: "/courses/tailwind/m3/assignment3" },
      ]
    },
    {
      id: 'm4',
      title: 'Building Components with Tailwind',
      content: [
        { name: "Creating Buttons & Forms", path: "/courses/tailwind/m4/buttons-forms" },
        { name: "Building Responsive Navigation Bars", path: "/courses/tailwind/m4/navigation-bars" },
        { name: "Reusable UI Components", path: "/courses/tailwind/m4/ui-components" },
        { name: "Assignment 4", path: "/courses/tailwind/m4/assignment4" },
      ]
    },
    {
      id: 'm5',
      title: 'Tailwind CSS with Frameworks',
      content: [
        { name: "Using Tailwind with React", path: "/courses/tailwind/m5/tailwind-react" },
        { name: "Using Tailwind with Next.js", path: "/courses/tailwind/m5/tailwind-nextjs" },
        { name: "Final Project: Building a Portfolio", path: "/courses/tailwind/m5/final-project" },
        { name: "Assignment 5", path: "/courses/tailwind/m5/assignment5" },
      ]
    },
  ];

  return (
    <>
      <div className="intro">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="tailwind" />
        <div>
          <h1>Tailwind CSS</h1>
          <hr />
          <h3>Build modern and responsive designs with Tailwind CSS</h3>
          <h3>Beginner to Advanced</h3>
          <h3>Certificate Available</h3>
          <h3>6 Hrs</h3>
          <h3>5 Modules</h3>
          <h3>4.7 <FaStar className='rating' /> Ratings</h3>

          <Link to={'/courses/tailwind/m1/what-is-tailwind'}>
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
          <li><strong>Understand Tailwind's Utility-First Approach:</strong> Learn how Tailwind CSS differs from traditional frameworks.</li>
          <li><strong>Master Responsive Design:</strong> Implement mobile-first design with breakpoints.</li>
          <li><strong>Customize Tailwind:</strong> Modify Tailwind’s default configuration to suit your project.</li>
          <li><strong>Build Reusable UI Components:</strong> Learn how to create buttons, forms, and cards efficiently.</li>
          <li><strong>Integrate Tailwind with React & Next.js:</strong> Use Tailwind to style modern frontend applications.</li>
        </ul>
      </div>
    </>
  );
}
