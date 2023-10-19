'use client';
import React from 'react';
import ImageCarousel from "@/Components/carousel/Carousel";
import NavBar from "@/Components/nav-bar/NavBar";
import Head from 'next/head';

import '../../../styles.css';
import {LoadingScreen} from "@/Components/LoadingScreen";

const weddings = [
    "/weddingPhotos/Bodas_01.jpg",
    "/weddingPhotos/Bodas_02.jpg",
    "/weddingPhotos/Bodas_03.jpg",

];
const conferences = [
    '/conferencePhotos/Conferencias_01.jpg',
    '/conferencePhotos/Conferencias_02.jpg',
    '/conferencePhotos/Conferencias_03.jpg',

];
const portraits  = [

    "/portraitPhotos/Retrato_02.jpg",
    "/portraitPhotos/Retrato_04.jpg",
    "/portraitPhotos/Retrato_06.jpg",
    "/portraitPhotos/Retrato_07.jpg",
];

const Home = () => {
    return (
        <div className="page-margin" >

            <LoadingScreen/>
            <NavBar></NavBar>
            <h1 className="main-title">photography</h1>
            <div className="page-content">
                <div className="carousel-container-landscape">
                <a href="/manuel/photography/weddings" >
                    <ImageCarousel images={weddings} /></a>
                </div>
                <div className="carousel-container-landscape">
                <a href="/manuel/photography/conferences" >
                    <ImageCarousel images={conferences} /></a>
                </div>
            </div>
            <div className="page-content">
                <div className="carousel-container-landscape">
                    <a href="/manuel/photography/portraits" >
                    <ImageCarousel images={portraits} /></a>
                </div>
            </div>




        </div>
    );
};

export default Home;
