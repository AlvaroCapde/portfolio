import React from 'react';
import './Footer.css'; // You can create a separate CSS file for styling

export default function Footer() {
    return (
        <div className="content-container">
        <div className="footer">
            <div className="footer-content">
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