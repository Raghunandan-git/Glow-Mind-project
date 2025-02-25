import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp, FaBars } from 'react-icons/fa';
import '../../styles/Sidebar.css';

export default function HtmlSidebar() {
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
      title: 'Introduction to HTML',
      content: [
        { name: 'Introduction to HTML', path: '/courses/html/m1/introduction-to-html' },
        { name: 'HTML Editors', path: '/courses/html/m1/HTML-editors' },
        {name:"Basic Structure of HTML",path:'/courses/html/m1/Basic-Structure-of-HTML'},
        {name:"Assignment 1",path:'/Courses/htm/m1/quiz1'}
      ]
    },
    {
      id: 'm2',
      title: 'HTML Tags',
      content: [
        { name: 'HTML elements', path: '/Courses/html/m2/HTML-Elements' },
        { name: 'HTML Attributes', path: '/Courses/html/m2/HTML-Attributes' },
        { name: 'Document Structure Tags', path: '/Courses/html/m2/Document-Structure-Tags' },
        { name: 'Text Formatting tags', path: '/Courses/html/m2/Text-Formatting-Tags' },
        { name: 'Lists', path: '/Courses/html/m2/List' },
        { name: 'Tables', path: '/Courses/html/m2/Tables' },
        {name:"Assignment 2",path:'/Courses/html/m2/quiz2'},

      ]
    },
    {
      id: 'm3',
      title: 'More HTML Tags',
      content: [
        { name: 'Links and Media', path: '/Courses/html/m3/Links-and-Media' },
        { name: 'HTML Forms', path: '/Courses/html/m3/HTML-Forms' },
        { name: 'Semantic tags', path: '/Courses/html/m3/Semantic-Tags' },
        {name:"Assignment 3",path:'/Courses/html/m3/quiz3'},

      ]
    },
    {
      id: 'm4',
      title: 'Understanding Styling and DOM',
      content: [
        { name: 'Container Elements', path: '/Courses/html/m4/Moving-towards-Styling' },
        { name: 'Understanding DOM', path: '/Courses/html/m4/Understanding-DOM' },
        {name:"Assignment 4",path:'/Courses/html/m4/quiz4'}

      ]
    }
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
