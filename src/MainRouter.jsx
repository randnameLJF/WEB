/**
 * Filename: MainRouter.js
 * Author: Jingfu Luo
 * Student ID: 301451463
 * Date: 2024-09-26
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Services from './pages/Services';
import Contactme from './pages/Contactme';

// ------------------------
// Main Router Component
// ------------------------
const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/services" element={<Services />} /> {/* Note: Path should be lowercase */}
      <Route path="/contactme" element={<Contactme />} /> {/* Note: Path should be lowercase */}
    </Routes>
  );
};

export default MainRouter;
