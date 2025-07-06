import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { 
  FaChalkboardTeacher, 
  FaChartLine, 
  FaClock, 
  FaTrophy, 
  FaUsers, 
  FaCheckCircle, 
  FaBookOpen,
  FaStar,
  FaArrowRight,
  FaEdit,
  FaPlus,
  FaEye,
} from 'react-icons/fa';
import './InstructorDashboard.css';

const InstructorDashboard = () => {
  const { user } = useAuth();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');

  // Mock data - in a real app, this would come from your backend
  const [courseStats] = useState([
    { id: 1, name: 'HTML Fundamentals', totalStudents: 45, activeStudents: 38, completionRate: 84, color: '#ff6b6b' },
    { id: 2, name: 'CSS Styling', totalStudents: 32, activeStudents: 28, completionRate: 87, color: '#4ecdc4' },
    { id: 3, name: 'JavaScript Basics', totalStudents: 28, activeStudents: 22, completionRate: 78, color: '#45b7d1' },
    { id: 4, name: 'React Fundamentals', totalStudents: 35, activeStudents: 30, completionRate: 85, color: '#96ceb4' }
  ]);

  const [recentActivities] = useState([
    { id: 1, type: 'student', title: 'New student enrolled in HTML Fundamentals', time: '2 hours ago', icon: FaUsers },
    { id: 2, type: 'course', title: 'Updated CSS Styling course content', time: '1 day ago', icon: FaEdit },
    { id: 3, type: 'achievement', title: 'Course "JavaScript Basics" reached 100 students', time: '2 days ago', icon: FaTrophy },
    { id: 4, type: 'feedback', title: 'Received 5-star review for React course', time: '3 days ago', icon: FaStar }
  ]);

  const [stats] = useState({
    totalCourses: 8,
    totalStudents: 140,
    activeStudents: 118,
    totalRevenue: 2800,
    averageRating: 4.8,
    pendingAssignments: 12
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const hour = currentTime.getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 17) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, [currentTime]);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: true, 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="instructor-dashboard-container">
      {/* Header Section */}
      <div className="instructor-dashboard-header">
        <div className="welcome-section">
          <h1>{greeting}, Instructor {user?.name || 'Teacher'}! 👨‍🏫</h1>
          <p className="subtitle">Ready to inspire and educate your students?</p>
          <div className="time-info">
            <FaClock className="time-icon" />
            <span>{formatTime(currentTime)} • {formatDate(currentTime)}</span>
          </div>
        </div>
        <div className="quick-stats">
          <div className="stat-card">
            <FaUsers className="stat-icon" />
            <div>
              <h3>{stats.totalStudents}</h3>
              <p>Total Students</p>
            </div>
          </div>
          <div className="stat-card">
            <FaBookOpen className="stat-icon" />
            <div>
              <h3>{stats.totalCourses}</h3>
              <p>Active Courses</p>
            </div>
          </div>
          <div className="stat-card">
            <FaStar className="stat-icon" />
            <div>
              <h3>{stats.averageRating}</h3>
              <p>Avg Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="instructor-dashboard-grid">
        {/* Course Management Section */}
        <div className="instructor-dashboard-card course-management">
          <div className="card-header">
            <h2><FaChalkboardTeacher className="card-icon" /> My Courses</h2>
            <Link to="/courses" className="view-all">View All <FaArrowRight /></Link>
          </div>
          <div className="course-stats-list">
            {courseStats.map(course => (
              <div key={course.id} className="course-stat-item">
                <div className="course-info">
                  <h4>{course.name}</h4>
                  <p>{course.activeStudents}/{course.totalStudents} active students</p>
                </div>
                <div className="completion-bar-container">
                  <div 
                    className="completion-bar" 
                    style={{ 
                      width: `${course.completionRate}%`,
                      backgroundColor: course.color 
                    }}
                  ></div>
                  <span className="completion-text">{course.completionRate}%</span>
                </div>
                <div className="course-actions">
                  <Link to={`/courses/${course.name.toLowerCase().replace(' ', '')}/edit`} className="edit-btn">
                    <FaEdit />
                  </Link>
                  <Link to={`/courses/${course.name.toLowerCase().replace(' ', '')}/students`} className="view-btn">
                    <FaEye />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="instructor-dashboard-card recent-activities">
          <div className="card-header">
            <h2><FaClock className="card-icon" /> Recent Activities</h2>
          </div>
          <div className="activities-list">
            {recentActivities.map(activity => (
              <div key={activity.id} className="activity-item">
                <div className="activity-icon">
                  <activity.icon />
                </div>
                <div className="activity-content">
                  <h4>{activity.title}</h4>
                  <p>{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="instructor-dashboard-card quick-actions">
          <div className="card-header">
            <h2><FaPlus className="card-icon" /> Quick Actions</h2>
          </div>
          <div className="actions-grid">
            <Link to="/courses/create" className="action-card">
              <FaPlus className="action-icon" />
              <h4>Create Course</h4>
              <p>Add new content</p>
            </Link>
            <Link to="/assignments" className="action-card">
              <FaCheckCircle className="action-icon" />
              <h4>Review Assignments</h4>
              <p>{stats.pendingAssignments} pending</p>
            </Link>
            <Link to="/students" className="action-card">
              <FaUsers className="action-icon" />
              <h4>Manage Students</h4>
              <p>View all students</p>
            </Link>
            <Link to="/analytics" className="action-card">
              <FaChartLine className="action-icon" />
              <h4>Analytics</h4>
              <p>View insights</p>
            </Link>
          </div>
        </div>

        {/* Teaching Stats */}
        <div className="instructor-dashboard-card teaching-stats">
          <div className="card-header">
            <h2><FaChartLine className="card-icon" /> Teaching Statistics</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">${stats.totalRevenue}</div>
              <div className="stat-label">Total Revenue</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.activeStudents}</div>
              <div className="stat-label">Active Students</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{Math.round((stats.activeStudents / stats.totalStudents) * 100)}%</div>
              <div className="stat-label">Engagement Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.pendingAssignments}</div>
              <div className="stat-label">Pending Reviews</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="instructor-dashboard-bottom">
        <div className="motivational-card">
          <div className="motivation-content">
            <h3>You're making a difference! 🌟</h3>
            <p>Your students are learning and growing thanks to your guidance. Keep inspiring the next generation of developers.</p>
            <Link to="/courses/create" className="cta-button">
              Create New Course
            </Link>
          </div>
          <div className="motivation-illustration">
            <FaChalkboardTeacher size={60} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard; 