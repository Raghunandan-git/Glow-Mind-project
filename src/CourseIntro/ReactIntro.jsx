import React, { useState, useRef } from 'react';
import '../styles/intro.css';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp, FaStar } from 'react-icons/fa';

export default function ReactIntro() {
  const [expandedModule, setExpandedModule] = useState(null);
  const contentRefs = useRef({});

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const modules = [
    {
      id: 'm1',
      title: 'Introduction To React',
      content: [
        { name: 'React Introduction', path: '/courses/react-basics/m1/react-introduction' },
        { name: 'Setting up with React', path: '/courses/react-basics/m1/setting-up-with-javascript' },
        { name: 'Understanding JSX', path: '/courses/react-basics/m1/understanding-jsx' }
      ]
    },
    {
      id: 'm2',
      title: 'Components and Props',
      content: [
        { name: 'Functional and Class Components', path: '/courses/react-basics/m2/functional-and-class-components' },
        { name: 'Props', path: '/courses/react-basics/m2/props' },
        { name: 'React Events', path: '/courses/react-basics/m2/react-events' },
        { name: 'Conditional Rendering', path: '/courses/react-basics/m2/conditional-rendering' },
        { name: 'Rendering Arrays', path: '/courses/react-basics/m2/rendering-arrays' }
      ]
    },
    {
      id: 'm3',
      title: 'React Router and Styling',
      content: [
        { name: 'Introduction to React Router', path: '/courses/react-basics/m3/introduction-to-react-router' },
        { name: 'Setting up React Router', path: '/courses/react-basics/m3/setting-up-react-router' },
        { name: 'Route and Link', path: '/courses/react-basics/m3/route-and-link' },
        { name: 'React CSS Styling', path: '/courses/react-basics/m3/react-css-styling' }
      ]
    },
    {
      id: 'm4',
      title: 'State Management and Hooks',
      content: [
        { name: 'Understanding State and useState Hook', path: '/courses/react-basics/m4/understanding-state-and-usestate' },
        { name: 'useEffect Hook', path: '/courses/react-basics/m4/useeffect-hook' },
        { name: 'Some More Hooks', path: '/courses/react-basics/m4/some-more-hooks' }
      ]
    }
  ];

  return (
    <>
      <div className="intro">
        <img
          src="https://imic.edu.vn/Contents/images/news/khoa-hoc-phat-trien-web-react-js-10-loi-the-hang-dau-cua-viec-su-dung-react-js-hoc-tai-imic.png"
          alt="React"
        />
        <div>
          <h1>React Basics</h1>
          <hr />
          <h3>Learn the fundamentals of React, including components, props, and state.</h3>
          <h3>Beginner</h3>
          <h3>Certificate Available</h3>
          <h3>9 Hrs</h3>
          <h3>4 Modules</h3>
          <h3>4.4<FaStar className='rating' /> Ratings</h3>

          <Link to={'/react-layout'}>
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
                  maxHeight: expandedModule === module.id ? `${contentRefs.current[module.id]?.scrollHeight}px` : '0px'
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
          <li><strong>Getting Started with React :</strong> Learn about React basics, JSX, functional components, and props.</li>
          <li><strong>React Router & Navigation :</strong> Understand React Router, creating multiple pages, and using Route, Link, and useNavigate for navigation.</li>
          <li><strong>Styling in React :</strong> Explore different styling methods like CSS Modules, Styled Components, and Tailwind CSS for better UI design.</li>
          <li><strong>State Management & Hooks :</strong> Learn about useState for managing state, useEffect for side effects, and useContext for global state management.</li>
        </ul>
      </div>
    </>
  );
}
