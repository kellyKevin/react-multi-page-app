// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <header className="header">
                    <nav className="navbar">
                        <ul className="nav-links">
                            <li><NavLink to="/" className="nav-link" activeClassName="active-link" end>Home</NavLink></li>
                            <li><NavLink to="/about" className="nav-link" activeClassName="active-link">About</NavLink></li>
                            <li><NavLink to="/contact" className="nav-link" activeClassName="active-link">Contact</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </main>
                <footer className="footer">
                    <p>&copy; 2024 My Website. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
