/**
 * Filename: App.js
 * Author: Jingfu Luo
 * Student ID: 301451463
 * Date: 2024-09-26
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Services from './pages/Services';
import Contactme from './pages/Contactme';

// ------------------------
// Main App Component
// ------------------------
function App() {
  return (
    <Router>
      <div style={{ paddingBottom: '60px' }}> {/* Ensure content is not covered by the fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/services" element={<Services />} /> {/* Note: Path should be lowercase */}
          <Route path="/contactme" element={<Contactme />} /> {/* Note: Path should be lowercase */}
        </Routes>
      </div>
      <Navbar />
    </Router>
  );
}

export default App;
