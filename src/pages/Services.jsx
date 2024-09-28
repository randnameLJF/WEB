/**
 * Filename: Services.js
 * Author: Jingfu Luo
 * Student ID: 301451463
 * Date: 2024-09-26
 */

import React from "react";
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.png';

// ------------------------
// Services Data
// ------------------------
const services = [
    {
        id: 1,
        title: "Junior FX Artist",
        description: "2015-2017.",
        image: image1
    },
    {
        id: 2,
        title: "Senior FX Artist",
        description: "2017-2020.",
        image: image2
    },
    {
        id: 3,
        title: "Senior Technical Artist",
        description: "2020-2024",
        image: image3
    },
];

// ------------------------
// Services Component
// ------------------------
const Services = () => {
    return (
        <div style={{ padding: '20px', marginTop: '100px' }}> {/* 增加顶部边距以防止被导航栏遮挡 */}
            <h2>Our Services</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {services.map(service => (
                    <div key={service.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
                        <h3>{service.title}</h3>
                        <img 
                            src={service.image} 
                            alt={service.title} 
                            style={{ width: '25%', height: 'auto', borderRadius: '8px' }} // 将图片宽度设置为25%
                        />
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
