/**
 * Filename: Contactme.js
 * Author: Jingfu Luo
 * Student ID: 301451463
 * Date: 2024-09-26
 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 使用 useNavigate

const Contactme = () => {
    const navigate = useNavigate(); // 创建导航函数
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
    });

    // ------------------------
    // Handle Input Change
    // ------------------------
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // ------------------------
    // Handle Form Submission
    // ------------------------
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData); // 处理逻辑
        alert('Message sent!'); // 示例处理
        
        // 使用 navigate 重定向到主页
        navigate('/'); // 确保路径与路由配置一致
        
        // 重置表单
        setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            message: '',
        });
    };

    return (
        <div style={{ 
            marginBottom: '20px', 
            padding: '20px', 
            backgroundColor: '#f5f5f5', 
            borderRadius: '8px', 
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
            marginTop: '100px' // 增加顶部边距，确保不被导航栏遮挡
        }}>
            <h3>Contact Information</h3>
            <p>Email: example@example.com</p>
            <p>Phone: (123) 456-7890</p>

            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        First Name:
                        <input 
                            type="text" 
                            name="firstName" 
                            value={formData.firstName} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Last Name:
                        <input 
                            type="text" 
                            name="lastName" 
                            value={formData.lastName} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Phone:
                        <input 
                            type="tel" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Email:
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Message:
                        <textarea 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            required 
                        ></textarea>
                    </label>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contactme;
