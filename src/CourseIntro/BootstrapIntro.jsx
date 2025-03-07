import React, { useState, useRef } from 'react';
import '../styles/intro.css';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp, FaStar } from 'react-icons/fa';

export default function BootstrapIntro() {
  const [expandedModule, setExpandedModule] = useState(null);
  const contentRefs = useRef({});

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const modules = [
    {
      id: 'm1',
      title: 'Introduction to Bootstrap',
      content: [
        { name: "What is Bootstrap?", path: "/courses/bootstrap/m1/what-is-bootstrap" },
        { name: "Setting Up Bootstrap", path: "/courses/bootstrap/m1/setting-up-bootstrap" },
        { name: "Bootstrap Grid System", path: "/courses/bootstrap/m1/grid-system" },
        { name: "Assignment 1", path: "/courses/bootstrap/m1/assignment1" },
      ]
    },
    {
      id: 'm2',
      title: 'Bootstrap Components',
      content: [
        { name: "Buttons & Forms", path: "/courses/bootstrap/m2/buttons-forms" },
        { name: "Navbars & Dropdowns", path: "/courses/bootstrap/m2/navbars-dropdowns" },
        { name: "Cards & Modals", path: "/courses/bootstrap/m2/cards-modals" },
        { name: "Assignment 2", path: "/courses/bootstrap/m2/assignment2" },
      ]
    },
    {
      id: 'm3',
      title: 'Bootstrap Utilities & Responsive Design',
      content: [
        { name: "Spacing & Typography", path: "/courses/bootstrap/m3/spacing-typography" },
        { name: "Flexbox & Layout Helpers", path: "/courses/bootstrap/m3/flexbox-layout" },
        { name: "Making Websites Responsive", path: "/courses/bootstrap/m3/responsive-web-design" },
        { name: "Assignment 3", path: "/courses/bootstrap/m3/assignment3" },
      ]
    },
    {
      id: 'm4',
      title: 'Bootstrap JavaScript Components',
      content: [
        { name: "Carousels & Alerts", path: "/courses/bootstrap/m4/carousels-alerts" },
        { name: "Tooltips & Popovers", path: "/courses/bootstrap/m4/tooltips-popovers" },
        { name: "Assignment 4", path: "/courses/bootstrap/m4/assignment4" },
      ]
    },
    {
      id: 'm5',
      title: 'Advanced Bootstrap & Projects',
      content: [
        { name: "Customizing Bootstrap", path: "/courses/bootstrap/m5/customizing-bootstrap" },
        { name: "Building a Landing Page", path: "/courses/bootstrap/m5/building-landing-page" },
        { name: "Final Project", path: "/courses/bootstrap/m5/final-project" },
        { name: "Assignment 5", path: "/courses/bootstrap/m5/assignment5" },
      ]
    },
  ];

  return (
    <>
      <div className="intro">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpJ8b0YetRguNf2XoU6OiyKoTzoFON6971A&s" alt="bootstrap" height={150} width={200}/>
        <div>
          <h1>Bootstrap</h1>
          <hr />
          <h3>Master Bootstrap for Responsive Web Design</h3>
          <h3>Beginner to Intermediate</h3>
          <h3>Certificate Available</h3>
          <h3>6 Hrs</h3>
          <h3>5 Modules</h3>
          <h3>4.7 <FaStar className='rating' /> Ratings</h3>

          <Link to={'/courses/bootstrap/m1/what-is-bootstrap'}>
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
          <li><strong>Build Responsive Websites:</strong> Use Bootstrap's grid system and layout utilities.</li>
          <li><strong>Master Prebuilt Components:</strong> Work with buttons, forms, navbars, and modals.</li>
          <li><strong>Customize Bootstrap:</strong> Modify styles and themes for custom designs.</li>
          <li><strong>Use Bootstrap's JavaScript Features:</strong> Add dynamic elements like carousels and alerts.</li>
          <li><strong>Work on Real-World Projects:</strong> Apply Bootstrap in practical web development projects.</li>
        </ul>
      </div>
    </>
  );
}
