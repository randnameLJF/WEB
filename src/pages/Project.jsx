/**
 * Filename: Project.js
 * Author: Jingfu Luo
 * Student ID: 301451463
 * Date: 2024-09-26
 */

import React from 'react';
import image1 from '../assets/image1.jpg'; 
import image2 from '../assets/image2.jpg'; 
import image3 from '../assets/image3.png'; 

const Project = () => {
  // ------------------------
  // Styles
  // ------------------------
  const containerStyle = {
    paddingTop: '50px',
    padding: '5px',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    minHeight: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: '1px',
  };

  const imgStyle = {
    margin: '0 10px',
    width: '25%',
    height: 'auto',
    objectFit: 'cover',
    maxHeight: '200px',
  };

  // ------------------------
  // Render Projects
  // ------------------------
  return (
    <div style={containerStyle}>
      <h1 style={{ marginTop: '100px' }}>My Projects</h1>
      <p style={{ marginTop: '20px' }}>Here are some of my projects:</p>
      
      {/* Adding project images and descriptions */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={image1} 
            alt="Project 1" 
            style={imgStyle} 
          />
          <p>This is my first movie project.</p>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <img 
            src={image2} 
            alt="Project 2" 
            style={imgStyle} 
          />
          <p>This is my second movie project.</p> {/* 拼写更正 */}
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <img 
            src={image3} 
            alt="Project 3" 
            style={imgStyle} 
          />
          <p>This is my first game project.</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
