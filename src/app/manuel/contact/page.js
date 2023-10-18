'use client'

import React from 'react';
import NavBar from "@/Components/nav-bar/NavBar";
import Footer from "@/Components/footer/Footer";

import '../../../styles.css';

function Contact() {
    return (
        <div>
            <NavBar></NavBar>
            <div className="flexColumn h-screen center-margin">
                <h1 className="page-title">Contact Information</h1>
                <table className="contact-table">
                    <tbody>
                    <tr>
                        <td><strong>Phone Number:</strong></td>
                        <td>+1 (123) 456-7890</td>
                    </tr>
                    <tr>
                        <td><strong>Email:</strong></td>
                        <td>contact@example.com</td>
                    </tr>
                    <tr>
                        <td><strong>Website:</strong></td>
                        <td><a href="https://www.example.com">www.example.com</a></td>
                    </tr>
                    <tr>
                        <td><strong>Instagram:</strong></td>
                        <td><a href="https://www.instagram.com/example">Instagram</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className='footer-fixed'>
            <Footer />
            </div>
        </div>
    );
}

export default Contact;
