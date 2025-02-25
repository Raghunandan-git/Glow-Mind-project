import React, { useState, useRef } from 'react';
import "../../styles/Sidebar.css";
import {  FaAngleDown, FaAngleUp} from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function CppSidebar() {

const modules = [
    {
      id: 'm1',
      title: 'Introduction to HTML',
      content:[
        { name: 'Introduction to C++', path: '/courses/c++/m1/Introduction-to-C++' },
        {name:"Introduction to HTML",path:'/courses/html/m1/introduction-to-html'},
        {name:"HTML Editors",path:'/courses/html/m1/HTML-editors'},
        {name:"Basic Structure of HTML",path:'/courses/html/m1/Basic-Structure-of-HTML'}
      ]
      
    },
    {
      id: 'm2',
      title: 'HTML Tags',
      content:[
        {name:"HTML elements",path:'/Courses/html/m2/HTML-Elements'},
        {name:"HTML Attributes",path:'/Courses/html/m2/HTML-Attributes'},
        {name:"Document Structure Tags",path:'/Courses/html/m2/Document-Structure-Tags'},
        {name:"Text Formatting tags",path:'/Courses/html/m2/Text-Formatting-Tags'},
        {name:"Lists",path:'/Courses/html/m2/List'},
        {name:"Tables",path:'/Courses/html/m2/Tables'},

      ]
    },
    {
      id: 'm3',
      title: 'More HTML Tags',
      content:[
        {name:"Links and Media",path:'/Courses/html/m3/Links-and-Media'},
        {name:"HTML Forms",path:'/Courses/html/m3/HTML-Forms'},
        {name:"Semantic tags",path:'/Courses/html/m3/Semantic-Tags'},
      ]
    },
    {
      id: 'm4',
      title: 'Understanding Styling and DOM',
      content:[
        {name:"Moving towards Styling",path:'/Courses/html/m4/Moving-towards-Styling'},
        {name:"Understanding DOM",path:'/Courses/html/m4/Understanding-DOM'}
      ]
    },
  ];

    const [expandedModule, setExpandedModule] = useState(null);
    const contentRefs = useRef({}); 
  
    const toggleModule = (moduleId) => {
      setExpandedModule(expandedModule === moduleId ? null : moduleId);
    };

  return (
    <div className="sidebar">
      <h1 id='sidebar-head'>HTML</h1>
      <ul className="sidebar-list">
        {modules.map((module) => (
            <div className="mod" key={module.id}>
          <li onClick={() => toggleModule(module.id)}>
            {expandedModule === module.id ? <FaAngleUp className="arrow-icon" /> : <FaAngleDown className="arrow-icon" />}
                {module.title}
            </li>
            <div ref={(el) => (contentRefs.current[module.id] = el)} className="content"
                style={{
                  maxHeight: expandedModule === module.id ? `${contentRefs.current[module.id]?.scrollHeight}px` : '0px',
                }}
              >
              <ul className='sidebar-cont'>
                  {module.content.map((item, index) => (
                      <Link to={item.path} className='contname'>
                    <li key={index}>
                      {item.name}
                    </li>
                      </Link>
                  ))}
                </ul>
            </div>
            
          
          </div>
        ))}
      </ul>
    </div>
  );
}
