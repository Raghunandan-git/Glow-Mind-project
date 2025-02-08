// CppIntro.jsx
import React, { useState } from 'react'
import '../styles/intro.css'
import { Link } from 'react-router-dom'
export default function CppIntro() {
 const [expandedModule,setExpandedModule]=useState(null)
     const toggleModule=(module)=>{
        setExpandedModule(expandedModule===module?null:module)
     }
   return (
     <>
     <div className="intro">
             <img src="https://miro.medium.com/v2/resize:fit:1400/0*ZpjhBs0gR5oSd3Il" alt="C++"  />
             <div>
             <h1>Mastering in C++</h1>
             <hr />
             <h3>Understanding the core concepts in programming with c++</h3>
             <h3>Beginner</h3>
             <h3>Certificate Available</h3>
             <h3>8 Hrs</h3> 
             <h3>5 Modules</h3>
             <Link to={'/introduction-to-C++'} ><button>Go To Course</button></Link>       
             </div>
        </div> 
        <h1>Modules</h1>
       <div className="modules">
         <ul>
           
           <div className="module">
           <li onClick={()=>toggleModule('m1')}>
             Introduction To C++
           </li>
             {expandedModule==='m1' && (
               <div className="content">
                 
                 <li>Setting up IDE</li>
                 <li>Basic code Structure</li>
                 <li>Input/Output in C++</li>
               </div>
             )}
           </div>
 
           <div className="module">
           <li onClick={()=>toggleModule('m2')}>
             Programing Constructs of C++
           </li>
           {expandedModule==='m2' && (
               <div className="content">
                 
                 <li>DataTypes in c++</li>
                 <li>Overflow and Underflow</li>
                 <li>TypeCasting and Type Conversion</li>
                 <li>Operators</li>
                 <li>Escape Sequences</li>
               </div>
             )}
           </div>
 
           <div className="module">
           <li onClick={()=>toggleModule('m3')}>
             Control Statements and Functions in C++
           </li>
           {expandedModule==='m3' && (
               <div className="content">
                 <li>Conditional Statements</li>
                 <li>Loopings statements</li>
                 <li>Jump statements</li>
                 <li>Introduction to Functions in C++</li>
               </div>
             )}
           </div>
 
           <div className="module">
           <li onClick={()=>toggleModule('m4')}>
            Arrays and Structures  in C++
           </li>
           {expandedModule==='m4' && (
               <div className="content">
                 
                 <li>Introduction to Arrays</li>
                 <li>Arrays and Loops</li>
                 <li>2D Arrays</li>             
                 <li>Structures in C++</li>             
                 <li>All about Pointers</li>             
                </div>
             )}
           </div>
 
           <div className="module">
           <li onClick={()=>toggleModule('m5')}>
            Class and STL in C++
           </li>
           {expandedModule==='m5' && (
               <div className="content">
                 <li>Class/Objects </li>
                 <li>Constructors</li>
                 <li>OOPS Concepts</li>
                 <li>Vectors</li>
                 <li>Sets</li>
                 <li>Maps</li>
               </div>
             )}
           </div>
        </ul>
       </div>
       
       <div className="features">
         <hr />
       <h2>What You Will Learn</h2>
       <ul>
       <li><strong>Understand C++ Basics :</strong> Learn about variables, data types, operators, and input/output handling.</li>  
       <li><strong>Master Control Structures :</strong> Use conditional statements (if-else, switch) and loops (for, while, do-while) for decision-making.</li>  
       <li><strong>Work with Functions :</strong> Understand function creation, parameter passing, return types, and function overloading.</li>  
       <li><strong>Explore Arrays & Strings :</strong> Learn how to store and manipulate data efficiently using arrays and string functions.</li>  
       <li><strong>Introduction to Object-Oriented Programming :</strong> Learn about classes, objects, constructors, and basic principles like encapsulation and inheritance.</li>    
       </ul>
       </div>
 
     </>
   )
}
