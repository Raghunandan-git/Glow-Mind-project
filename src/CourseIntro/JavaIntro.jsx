// JavaIntro.jsx
import React, { useState } from 'react'
import '../styles/intro.css'
import { Link } from 'react-router-dom'
export default function JavaIntro() {
 const [expandedModule,setExpandedModule]=useState(null)
      const toggleModule=(module)=>{
         setExpandedModule(expandedModule===module?null:module)
      }
    return (
      <>
      <div className="intro">
              <img src="https://miro.medium.com/v2/resize:fit:700/0*gtY-llyEbkeoS1Sp.png" alt="Java"  />
              <div>
              <h1>Programming with Java</h1>
              <hr />
              <h3>Problem solving and learning core concepts of Java Programming</h3>
              <h3>Beginner</h3>
              <h3>Certificate Available</h3>
              <h3>8 Hrs</h3> 
              <h3>5 Modules</h3>
              <Link to={'/introduction-to-Java'} ><button>Go To Course</button></Link>       
              </div>
         </div> 
         <h1>Modules</h1>
        <div className="modules">
          <ul>
            
            <div className="module">
            <li onClick={()=>toggleModule('m1')}>
              Introduction To Java
            </li>
              {expandedModule==='m1' && (
                <div className="content">
                  
                  <li>Java Introduction</li>
                  <li>Setting up with Java</li>
                  <li>Basic Syntax</li>
                </div>
              )}
            </div>
  
            <div className="module">
            <li onClick={()=>toggleModule('m2')}>
              Programing Constructs of Java
            </li>
            {expandedModule==='m2' && (
                <div className="content">
                  
                  <li>Variables and DataTypes</li>
                  <li>TypeCasting and Type Conversion</li>
                  <li>Input and Output</li>
                  <li>Operators</li>
                  <li>Strings</li>
                  <li>Comments and Math Functions</li>

                </div>
              )}
            </div>
  
            <div className="module">
            <li onClick={()=>toggleModule('m3')}>
              Control Statements and Arrays
            </li>
            {expandedModule==='m3' && (
                <div className="content">
                  <li>Conditional Statements</li>
                  <li>Loopings statements</li>
                  <li>Jump statements</li>
                  <li>Introduction To Arrays</li>
                  <li>Multidimentional Arrays</li>
                </div>
              )}
            </div>
  
            <div className="module">
            <li onClick={()=>toggleModule('m4')}>
             Methods and OOPs in Java
            </li>
            {expandedModule==='m4' && (
                <div className="content">
                  
                  <li>Introduction to Methods</li>
                  <li>Parameters and return values</li>
                  <li>Method overloading and overriding</li>             
                  <li>Class and Objects</li>             
                  <li>Constructors and Acccess specifiers</li>             
                  <li>OOPs Concepts</li>             
                 </div>
              )}
            </div>
  
            <div className="module">
            <li onClick={()=>toggleModule('m5')}>
             Exception handling and File handling
            </li>
            {expandedModule==='m5' && (
                <div className="content">
                  <li>Exception handling </li>
                  <li>Exception handling keywords</li>
                  <li>File handling</li>
                </div>
              )}
            </div>

           
         </ul>
        </div>
        
        <div className="features">
          <hr />
        <h2>What You Will Learn</h2>
        <ul>
        <li><strong>Understand Java Basics :</strong> Learn about variables, data types, operators, and input/output handling using Scanner.</li>  
        <li><strong>Master Control Structures :</strong> Use conditional statements (if-else, switch) and loops (for, while, do-while) for decision-making.</li>  
        <li><strong>Work with Methods :</strong> Understand method creation, parameter passing, return types, and method overloading.</li>  
        <li><strong>Explore Arrays & Strings :</strong> Learn how to store and manipulate data efficiently using arrays and String methods.</li>  
        <li><strong>Introduction to Object-Oriented Programming :</strong> Learn about classes, objects, constructors, and basic OOP principles like encapsulation and inheritance.</li>  
        </ul>
        </div>
  
      </>
    )
}
