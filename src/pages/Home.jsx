/**
 * Filename: Home.js
 * Author: Jingfu Luo
 * Student ID: 301451463
 * Date: 2024-09-26
 */

import React from 'react';

const Home = () => {
    // ------------------------
    // Styles
    // ------------------------
    const containerStyle = {
        paddingTop: '80px',
        padding: '5px',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        minHeight: '50vh',
        flexDirection: 'column',
        justifyContent: 'flex-start', 
        marginBottom: '1px',
    };

    const fullHeightContainerStyle = {
        paddingTop: '25px',
        padding: '5px',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'flex-start', 
    };

    // ------------------------
    // Render Home Component
    // ------------------------
    return (
        <div>
            <div style={containerStyle}>
                <h1>Welcome to my page</h1>
                <h2>My Basic Information</h2>
                <p>I'm a student from China, and I was a technical artist in the Game Industry.</p>
                <p>I'm studying Web Application Development.</p>
                <p>This is my first program.</p>
                <p>This is my resume</p>
            </div>

            <div style={fullHeightContainerStyle}>
                <h2>Click Anywhere You Want</h2>
                <a href="https://www.linkedin.com/in/jingfu-luo-5ab577158" target="_blank" rel="noopener noreferrer">
                    Visit my LinkedIn Profile
                </a>
            </div>
        </div>
    );
};

export default Home;
