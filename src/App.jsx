import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './style.css'
import Login from './page/Login'
import Register from './page/Register'
import Home from './page/Home'
import JobDetails from './page/JobDetails'  
import { Info } from './components/Info'
import Plans from './page/Plans';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuth') === 'true'
  )

  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Home is public now */}
        <Route path="/" element={<Home />} /> 

        {/* ✅ Auth routes */}
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/profile" replace /> : <Login />
          }
        />
        <Route
          path="/register"
          element={
            isAuthenticated ? <Navigate to="/profile" replace /> : <Register />
          }
        />

        <Route path="/plans" element={<Plans />} /> 

        {/* 🔒 Protected routes */}
        <Route
          path="/profile"
          element={
            isAuthenticated ? <Info /> : <Navigate to="/login" replace />
          }
        />

        {/* Route for JobDetails */}
        <Route
          path="/job-details/:jobId"
          element={isAuthenticated ? <JobDetails /> : <Navigate to="/login" replace />}
        />

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
