import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RoleBasedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();
  const token = localStorage.getItem('token');

  // Check if user is authenticated
  if (!token || !user) {
    return <Navigate to="/login" />;
  }

  // Check if user has the required role
  if (!allowedRoles.includes(user.role)) {
    // Redirect based on user's actual role
    if (user.role === 'instructor') {
      return <Navigate to="/instructor-dashboard" />;
    } else if (user.role === 'student') {
      return <Navigate to="/dashboard" />;
    } else {
      return <Navigate to="/dashboard" />;
    }
  }

  return children;
};

export default RoleBasedRoute; 