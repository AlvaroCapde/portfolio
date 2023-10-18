import React from 'react';
import './Footer.css'; // You can create a separate CSS file for styling

export default function Footer() {
    return (
        <div className="content-container">
        <div className="footer">
            <div className="footer-content">
                <h2 className="footer-title">Footer Title</h2>
                <div className="social-media">
                <img src="/instagram_logo.png" alt="Instagram Logo" className="footer-image" />@manusolano.photography
                </div>
                <p className="footer-text">
                    info@manusolano.com
                </p>
            </div>
        </div>
        </div>
    );
}