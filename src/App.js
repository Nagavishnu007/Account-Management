
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Profile from './Components/Profile';
import AuthProvider from './Contexts/AuthContext';
import './App.css'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <nav>
          <Link to="/login">Login</Link> 
          <Link to="/register">Register</Link>  
          <Link to="/profile">Profile</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
