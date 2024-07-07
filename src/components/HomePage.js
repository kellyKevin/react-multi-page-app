// src/components/HomePage.js
import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <section className="hero-section">
                <h1>Welcome to Our Website!</h1>
                <p>Discover amazing content and explore new opportunities.</p>
                <button className="cta-button">Learn More</button>
            </section>
            <section className="introduction-section">
                <h2>About Us</h2>
                <p>We are committed to providing the best service to our customers. Our team works tirelessly to ensure you have the best experience possible.</p>
            </section>
            <section className="feature-section">
                <h2>Our Features</h2>
                <ul>
                    <li>Feature 1: High-quality content</li>
                    <li>Feature 2: Easy to navigate</li>
                    <li>Feature 3: 24/7 support</li>
                </ul>
            </section>
        </div>
    );
}

export default HomePage;
