import CascadSS from "../CourseCard/CascadSS";
import Cpplus from "../CourseCard/Cpplus";
import Html from "../CourseCard/Html";
import Java from "../CourseCard/Java";
import Javascript from "../CourseCard/Javascript";
import ReactBasics from "../CourseCard/ReactBasics";
import "../styles/student.css";

import React from 'react'

export default function Student() {
  return (
    <>
            <h1>Enrolled Courses</h1>
            <div className="course-container">
               <ReactBasics buttontext={"Resume"}/>
               <Cpplus buttontext={"Resume"}/>
               <Java buttontext={"Resume"}/>
            </div>


            <h1>Available Courses</h1>
            <div className="course-container">
                <CascadSS buttontext={"Enroll Now"}/>
                <Javascript buttontext={"Enroll Now"}/>
            </div>


            <h1>Completed Courses</h1>
            <div className="course-container">
                <Html buttontext={"Compleated"}/>
            </div>
        </>
);
}

