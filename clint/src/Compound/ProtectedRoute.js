// src/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('users'));
  return user ? children : <Navigate to="/a" replace />;
};

export default ProtectedRoute;
