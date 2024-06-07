import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login.jsx'; 
import About from './pages/About.jsx'; 
import Home from './pages/Home/Home.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

