import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp, FaBars } from 'react-icons/fa';
import '../../styles/Sidebar.css';

export default function CssSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedModule, setExpandedModule] = useState(null);
  const contentRefs = useRef({});

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add('no-scroll'); 
    } else {
      document.body.classList.remove('no-scroll'); 
    }
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const modules = [
    {
      id: 'm1',
      title: 'Introduction to CSS',
      // content: ['Introduction to CSS', 'Different ways of writing CSS', 'CSS Selectors', 'Styling text with CSS'],
      content:[
        {name:"Introduction to CSS",path:"/courses/css/m1/Introduction-to-Css"},
        {name:"Different ways of writing CSS",path:"/courses/css/m1/different-ways-of-writing-css"},
        {name:"CSS Selectors",path:"/courses/css/m1/Css-selectors"},
        {name:"Styling text with CSS",path:"/courses/css/m1/Styling-text"},
        {name:"Assignment 1",path:"/courses/css/m1/assigment1"},
      ]
    },
    {
      id: 'm2',
      title: 'CSS Block Models, Links, Lists, and Background Images',
      content:[
        {name:"CSS Block Models",path:'/courses/css/m2/CSS-Block-Models'},
        {name:"Styling Lists and Links",path:'/courses/css/m2/Styling-lists-links'},
        {name:"Styling Background",path:'/courses/css/m2/Styling-Background'},
        {name:"Assignment 2",path:'/courses/css/m2/assigment2'},
      ]
    },
    {
      id: 'm3',
      title: 'CSS Display Properties',
      content:[
        {name:"Display, Position Property",path:'/courses/css/m3/Display,Position-Property'},
        {name:"Understanding Float, Clear, and Overview in CSS",path:'/courses/css/m3/Float-clear-overview'},
        {name:"Assignment 3",path:'/courses/css/m3/assigment3'},

      ]
    },
    {
      id: 'm4',
      title: 'FlexBox and Grid',
      content:[
        {name:"Introduction to FlexBox",path:'/courses/css/m4/Introduction-to-flexbox'},
        {name:"Introduction to Grid",path:'/courses/css/m5/shorthand'},
        {name:"Assignment 4",path:'/courses/css/m4/assigment4'},
      ]
    },
    {
      id: 'm5',
      title: 'CSS Animations',
      // content: ['Introduction to Animations', 'Shorthand Property'],
      content:[
        {name:"Introduction to Animation",path:'/courses/css/m5/Introduction-to-animation'},
        {name:"Shorthand Property",path:'/courses/css/m5/short-hand'},
        {name:"Assignment 5",path:'/courses/css/m5/assigment5'},
      ]
    },
  ];


  return (
    <>
      <button id="toggle-button" onClick={toggleSidebar}>
        <FaBars color="indigo" />
      </button>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h1 id="sidebar-head">HTML</h1>
        <ul className="sidebar-list">
          {modules.map((module) => (
            <div className="mod" key={module.id}>
              <li onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)} className="module-title">
                {expandedModule === module.id ? <FaAngleUp className="arrow-icon" /> : <FaAngleDown className="arrow-icon" />}
                {module.title}
              </li>
              <div
                ref={(el) => (contentRefs.current[module.id] = el)}
                className="content"
                style={{
                  maxHeight: expandedModule === module.id ? `${contentRefs.current[module.id]?.scrollHeight}px` : '0px'
                }}
              >
                <ul>
                  {module.content.map((item, index) => (
                    <Link to={item.path} className="contname" key={index}>
                      <li>{item.name}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </ul>
      </div>

      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
    </>
  );
}
