'use client'

import React from 'react';
import NavBar from "@/Components/nav-bar/NavBar";
import Footer from "@/Components/footer/Footer";

import '../../../styles.css';

function Contact() {
    return (
        <div>
            <NavBar></NavBar>
            <div className="flexColumn h-full page-margin">
                <h1 className="main-title">Contact Information</h1>
                <table className="contact-table">
                    <tbody >
                    <tr>
                        <td className="t-l-c page-title"><strong>Phone Number:</strong></td>
                        <td className="t-r-c page-title">+52 33 1252-8701</td>
                    </tr>
                    <tr>
                        <td className="page-title"><strong>Email:</strong></td>
                        <td className="page-title">info@manusolano.com</td>
                    </tr>
                    <tr>
                        <td className=" page-title"><strong>Website:</strong></td>
                        <td className="page-title"><a href="https://www.example.com">www.manusolano.com</a></td>
                    </tr>
                    <tr>
                        <td className="b-l-c page-title"><strong>Instagram:</strong></td>
                        <td className="b-r-c page-title"><a href="https://www.instagram.com/manusolano.photography">Instagram</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Contact;
