
import React from 'react';
import '../styles/intro.css';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPen } from 'react-icons/fa';

export default function Assignments() {
    
    const modules = [
        {
            id:"a1",name:"Assignment 1",path:'/courses/htm/m1/quiz1',status:true     
        },
        {        
            id:"a2",name:"Assignment 2",path:'/courses/html/m2/quiz2',status:true
        },
        {        
            id:"a3",name:"Assignment 3",path:'/courses/html/m3/quiz3',status:false
        },
        {        
            id:"a4",name:"Assignment 4",path:'/courses/html/m4/quiz4',status:false
        },
        {        
            id:"a5",name:"Assignment 5",path:'/courses/html/m5/quiz5',status:false
        },
        
      ];
    
  return (
    <>
     <h1>Assignments</h1> 
     {<div className="modules">
        <ul>
          
         { modules.map((module) => (
            <div className="module" key={module.id}>
               <Link to={module.path} className='assign' >
               <li >
                {module.status===true?<FaCheckCircle color='green' className='icon'/>:<FaPen color='indigo' className='icon'/>}
               {module.name}
               </li>
               </Link>
            </div>
          ))}
        </ul>
      </div> }
    </>
  )
}
