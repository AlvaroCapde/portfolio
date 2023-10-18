import React from 'react';
import './Footer.css'; // You can create a separate CSS file for styling

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <h2 className="footer-title">Footer Title</h2>
                <img src="your-image-path.jpg" alt="Footer Image" className="footer-image" />
                <p className="footer-text">
                    This is some footer text. You can add any additional information here.
                </p>
            </div>
        </div>
    );
}