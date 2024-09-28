/**
 * Filename: About.js
 * Author: Jingfu Luo
 * Student ID: 301451463
 * Date: 2024-09-26
 */

import React from 'react';
import myimage from '../assets/myimage.jpg';
import mypdf from '../assets/mypdf.pdf';

const About = () => {
  // ------------------------
  // Container Style
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

  // ------------------------
  // Render About Component
  // ------------------------
  return (
    <div style={containerStyle}>
      <h1 style={{ marginTop: '100px' }}>About Me</h1>
      <p style={{ marginTop: '20px' }}>Content goes here</p> {/* 具体内容可替换 */}
      <p>Hello, my name is Jingfu Luo</p>
      <img 
        src={myimage}
        alt="About me"
        style={{ margin: '20px auto', display: 'block', width: '25%', height: 'auto' }}
      />
      <a 
        href={mypdf}
        target="_blank"
        style={{ marginTop: '20px', textDecoration: 'underline', color: '#007bff' }}
      >
        Download PDF Version
      </a>
    </div>
  );
};

export default About;
