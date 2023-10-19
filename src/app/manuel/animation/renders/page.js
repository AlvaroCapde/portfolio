'use client';
import React from 'react';
import ImageCarousel from "@/Components/carousel/Carousel";
import NavBar from "@/Components/nav-bar/NavBar";
import '../../../../styles.css';
import {LoadingScreen} from "@/Components/LoadingScreen";

const skin = [
    "/renders/skin/skin_01.jpg",
    "/renders/skin/skin_02.jpg",
    "/renders/skin/skin_03.jpg",

];
const domino = [
    '/renders/domino/domino_01.jpg',
    '/renders/domino/domino_02.jpg',
    '/renders/domino/domino_03.jpg',

];
const car  = [
    "/renders/car/car_01.jpg",
    "/renders/car/car_02.jpg",
    "/renders/car/car_03.jpg",

];
const virus  = [
    "/renders/virus/virus_01.jpg",
    "/renders/virus/virus_02.jpg",
    "/renders/virus/virus_03.jpg",

];

const catheter  = [
    "/renders/catheter/catheter_01.jpg",
    "/renders/catheter/catheter_02.jpg",
    "/renders/catheter/catheter_03.jpg",

];



const Home = () => {
    return (


        <div className="page-margin" >
            <LoadingScreen/>
            <NavBar></NavBar>
            <h1 className="main-title">renders</h1>
            <div className="page-content">
                <div className="carousel-container-landscape">
                    <ImageCarousel images={catheter} />
                </div>


                <div className="text-content padding-separator">
                    <h1 className="page-title ">catheter</h1>
                    <br/>
                    <ul className="list-disc text-2xl">
                        <li>Personal project</li>
                        <li>Simulation created in RealFlow</li>
                        <li>Animation done in Autodesk Maya</li>
                        <li>Render carried out with Arnold</li>
                    </ul><br/>
                </div>

            </div>
            <div className="page-content">
                <div className="carousel-container-landscape">
                    <ImageCarousel images={car} />
                </div>
                <div className="text-content padding-separator">
                    <h1 className="page-title">joker car</h1>
                    <br/>
                    <ul className="list-disc text-2xl">
                        <li>Texturing done in Adobe Substance 3D Painter</li>
                        <li>Rendering done in Arnold</li>
                        <li>Touch-ups made in Photoshop</li>
                    </ul><br/>
                 </div>

            </div>
            <div className="page-content">
                <div className="carousel-container-landscape">
                    <ImageCarousel images={skin} />
                </div>
                <div className="text-content padding-separator">
                    <h1 className="page-title">skin render</h1>
                    <br/>
                    <ul className="list-disc text-2xl">
                        <li>Texturing done in Adobe Substance 3D Painter</li>
                        <li>Rendering done in Arnold</li>
                        <li>Touch-ups made in Photoshop</li>
                    </ul><br/>
                </div>
            </div>
            <div className="page-content">
                <div className="carousel-container-landscape">
                    <ImageCarousel images={domino} />
                </div>
                <div className="text-content padding-separator">
                    <h1 className="page-title">domino effect</h1>
                    <br/>
                    <ul className="list-disc text-2xl">
                        <li>Personal project</li>
                        <li>Simulation created in RealFlow</li>
                        <li>Animation done in Autodesk Maya</li>
                        <li>Render carried out with Arnold</li>
                    </ul><br/>
                 </div>
            </div>
            <div className="page-content">
                <div className="carousel-container-landscape">
                    <ImageCarousel images={virus} />
                </div>

                <div className="text-content padding-separator" >
                    <h1 className="page-title">zika virus</h1>
                    <br/>
                    <ul className="list-disc text-2xl " >
                        <li>Project carried out for a client who is a medical student.</li>
                        <li>Modeling and animation done in Autodesk Maya.</li>
                        <li>Render carried out with Arnold.</li>
                    </ul>
                    <br/>
                 </div>
            </div>


        </div>
    );
};

export default Home;
