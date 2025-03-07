// import { Card, CardContent, CardActions, Typography, Button, LinearProgress } from "@mui/material";
// import { useState } from "react";
// import "../styles/Instructor.css";

// export default function Instructor() {
//   const [courses] = useState([
//     { id: 1, title: "JavaScript Basics", students: 120, progress: 75 },
//     { id: 2, title: "React Fundamentals", students: 95, progress: 60 },
//   ]);

//   return (
//     <div className="container">
//       <Typography variant="h4" gutterBottom>Instructor Dashboard</Typography>
      
//       <div className="header">
//         <Typography variant="h5">My Courses</Typography>
//         <Button variant="contained" color="primary">Add New Course</Button>
//       </div>

//       <div className="course-grid">
//         {courses.map((course) => (
//           <Card key={course.id}>
//             <CardContent>
//               <Typography variant="h6">{course.title}</Typography>
//               <Typography color="textSecondary">Enrolled Students: {course.students}</Typography>
//               <LinearProgress variant="determinate" value={course.progress} style={{ marginTop: '8px' }} />
//             </CardContent>
//             <CardActions>
//               <Button variant="outlined" color="primary">Manage Course</Button>
//             </CardActions>
//           </Card>
//         ))}
//       </div>
      
//       <div className="section">
//         <Typography variant="h5">Student Progress</Typography>
//         <Typography color="textSecondary">Monitor student progress across courses.</Typography>
//       </div>

//       <div className="section">
//         <Typography variant="h5">Discussions</Typography>
//         <Typography color="textSecondary">Respond to student queries and engage with learners.</Typography>
//       </div>
//     </div>
//   );
// }
import React from 'react'

export default function Instructor() {
  return (
    <div>
      <h1>Instructor</h1>
    </div>
  )
}
