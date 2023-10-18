'use client';
import React from 'react';
import ImageCarousel from "@/Components/carousel/Carousel";
import NavBar from "@/Components/nav-bar/NavBar";
import Footer from "@/Components/footer/Footer";

import '../../../styles.css';

const showcase = [
    "/showcase/showcase_01.jpg",
    "/showcase/showcase_02.jpg",
    "/showcase/showcase_03.jpg",

];


const Home = () => {
    return (
        <div className="page-margin" >
            <NavBar></NavBar>
            <h1 className="main-title">Manuel fernando solano olivares</h1>
            <div className="page-content">
                <div className="m-10" style={{ width: '600px', height: '600px' }}> {/* Adjust the width and height as needed */}
                    <a

                        className="bg-slate-500 rounded-full block  w-full h-full"
                        style={{ backgroundImage: 'url("/Manuel_Solano_Foto.jpg")', backgroundSize: 'cover' }}
                    ></a>
                </div>

                <div className="text-content about-me-text">
                    <h1 className="page-title">about me</h1>
                    <br/>
                    <p>My name is Manuel Solano, I am a 22 year old animation student in Universidad Panamericana and professional photographer from Guadalajara, Jalisco.</p>


                    <br/>

                </div>

            </div>
            <div className="page-content info-page resume-text about-me-info ">
                <div className="text-content">
                    <h1 className="page-title ">academic history</h1>
                    <br/>
                    <p>I am currently in my ninth semester pursuing a degree in Animation at Universidad Panamericana.</p>
                    <p>In addition to my studies in Universidad Panamericana, I spent a semester abroad studying in U-Tad, an animation school in Spain, from September 2022 to January 2023.</p>

                    <br/>

                </div>

                <div className="text-content resume-text">
                    <h1 className="page-title">work experience</h1>
                    <br/>
                    <ul className="list-disc">
                        <li>Independent employment as a 3D render designer for informational and commercial purposes.</li>
                        <li>Independent employment as an event photographer, specializing in weddings and conferences.</li>
                    </ul>


                </div>


                </div>
            <div>
                <br/>
                <h1 className="main-title">My work</h1>
                <br/>
                <ImageCarousel images={showcase} />
            </div>

            <div className="page-content info-page resume-text about-me-info">
                <div className="text-content ">
                    <h1 className="page-title ">soft skills</h1>
                    <br/>
                    <ul className="list-inside list-disc text-center">
                        <li>Problem-solving</li>
                        <li>Critical thinking</li>
                        <li>Effective communication</li>
                        <li>Quick learning</li>
                        <li>Adaptability</li>
                        <li>Teamwork</li>
                        <li>Professional ethics</li>
                    </ul>
                    <br/>

                </div>
                <div className="text-content">
                    <h1 className="page-title ">languages</h1>
                    <br/>
                    <ul className="list-inside list-disc text-center">
                        <li>Spanish (Native)</li>
                        <li>English (C2 CAE/TOEFL)</li>
                        <li>Italian (B2 CILS)</li>
                        <li>French (B1 DELF)</li>
                        <li>German (Basic)</li>
                    </ul>
                    <br/>

                </div>

                <div className="text-content resume-text">
                    <h1 className="page-title">hard skills</h1>
                    <br/>
                    <ul className="list-inside list-disc text-center">
                        <li>Microsoft Office</li>
                        <li>Adobe Creative Cloud</li>
                        <li>Autodesk Maya</li>
                        <li>NextLimit Realflow</li>
                        <li>C++ and Python (intermediate)</li>
                        <li>Digital camera operation (DSLR and Mirrorless)</li>
                        <li>Camera drone operation</li>
                    </ul>

                </div>
                </div>




        </div>
    );
};

export default Home;
