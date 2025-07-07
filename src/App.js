import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoogleAuthWrapper from './GoogleAuthProvider';
import Login from './Login';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <GoogleAuthWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </GoogleAuthWrapper>
  );
}

export default App;
