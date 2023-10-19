'use client';
import React from 'react';
import ImageCarousel from "@/Components/carousel/Carousel";
import NavBar from "@/Components/nav-bar/NavBar";


import '../../styles.css';


const showcase = [
    "/showcase/showcase_01.jpg",
    "/showcase/showcase_02.jpg",
    "/showcase/showcase_03.jpg",

];


const Home = () => {
    return (
        <div className="stdFont">
        <div className="page-margin " style={{maxWidth:'80%', marginLeft: 'auto', marginRight: 'auto'}}>

            <NavBar/>
            <h1 className="main-title">Manuel fernando solano olivares</h1>
            <div className="page-content">
                <div >
                <div className="m-10 " style={{ width: '600px', height: '600px' }}>
                    <a

                        className="bg-slate-500 rounded-full block  w-full h-full background-highlight-round"
                        style={{ backgroundImage: 'url("/Manuel_Solano_Foto.jpg")', backgroundSize: 'cover' }}
                    ></a>
                </div>
                </div>
                <div className="text-content  resume-text " style={{minWidth:"500px"}}>
                    <h1 className="page-title about-me-title" >about me</h1>
                    <br/>
                    <p className="about-me-text ">My name is Manuel Solano, I am a 22 year old animation student in Universidad Panamericana and professional photographer from Guadalajara, Jalisco.</p>


                    <br/>

                </div>

            </div>
            <div className="page-content info-page background-highlight">
                <div className="text-content  resume-text ">
                    <h1 className="page-title ">academic history</h1>
                    <br/>

                    <p>I am currently in my ninth semester pursuing a degree in Animation at Universidad Panamericana.</p>
                    <p>In addition to my studies in Universidad Panamericana, I spent a semester abroad studying in U-Tad, an animation school in Spain, from September 2022 to January 2023.</p>

                    <br/>

                </div>

                <div className="text-content  resume-text ">
                    <h1 className="page-title" >work experience</h1>
                    <br/>
                    <ul >
                        <li>Independent employment as a 3D render designer for informational and commercial purposes.</li>
                        <br/>
                        <li>Independent employment as an event photographer, specializing in weddings and conferences.</li>
                    </ul>

                </div>

            </div>

            <div style={{marginTop:'100px'}}s>
                <br/>
                <h1 className="main-title " >My work</h1>
                <br/>
                <div style={{width:'125%', marginLeft: '-12.5%'}}>
                <ImageCarousel  images={showcase} />
            </div></div>
            <div style={{marginTop:'100px'}}>

            <h1 className="main-title ">skills</h1>
                <br/>
            <div className="page-content info-page background-highlight "  >

                <div className="text-content  resume-text ">
                    <h1 className="page-title ">soft skills</h1>
                    <br/>
                    <ul className="list-inside text-center">
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

                <div className="text-content  resume-text ">

                    <h1 className="page-title">hard skills</h1>
                    <br/>
                    <ul className="list-inside text-center">
                        <li>Microsoft Office</li>
                        <li>Adobe Creative Cloud</li>
                        <li>Autodesk Maya</li>
                        <li>NextLimit RealFlow</li>
                        <li>C++ and Python (intermediate)</li>
                        <li>Digital camera operation (DSLR and Mirrorless)</li>
                        <li>Camera drone operation</li>
                    </ul>
                    <br/>

                </div>
                <div className="text-content  resume-text ">
                    <h1 className="page-title ">languages</h1>
                    <br/>
                    <ul className="list-inside  text-center" >
                        <li>Spanish (Native)</li>
                        <li>English (C2 CAE/TOEFL)</li>
                        <li>Italian (B2 CILS)</li>
                        <li>French (B1 DELF)</li>
                        <li>German (Basic)</li>
                    </ul>
                    <br/>


                </div>
            </div>
            </div>






        </div>
        </div>
    );
};

export default Home;
