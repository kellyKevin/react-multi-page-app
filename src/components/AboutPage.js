// src/components/AboutPage.js
import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <h1>About Us</h1>
            <p>Our mission is to provide the highest quality service to our customers. We believe in transparency, integrity, and excellence in everything we do.</p>
            <section className="our-mission">
                <h2>Our Mission</h2>
                <p>To revolutionize the way people interact with our services and provide unmatched value and support.</p>
            </section>
            <section className="our-team">
                <h2>Our Team</h2>
                <p>We are a diverse team of professionals dedicated to your success. Meet our experts who make everything possible.</p>
            </section>
        </div>
    );
}

export default AboutPage;
