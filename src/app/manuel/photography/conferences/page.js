"use client"
import React, { useState, useEffect } from 'react';
import NavBar from "@/Components/nav-bar/NavBar";
import Footer from "@/Components/footer/Footer";
import Gallery from "@/Components/Gallery/Gallery";
import {LoadingScreen} from "@/Components/LoadingScreen";

import PasswordProtectedPage from "@/Components/password/PasswordProtectedPage";


import '../../../../styles.css';

let images;
images = [
    '/conferencePhotos/Conferencias.jpg',
    '/conferencePhotos/Conferencias_01.jpg',
    '/conferencePhotos/Conferencias_02.jpg',
    '/conferencePhotos/Conferencias_03.jpg',
    '/conferencePhotos/Conferencias_04.jpg',
    '/conferencePhotos/Conferencias_05.jpg',

    '/conferencePhotos/Conferencias_07.jpg',
    '/conferencePhotos/Conferencias_08.jpg',
    '/conferencePhotos/Conferencias_09.jpg',
    '/conferencePhotos/Conferencias_10.jpg',
    '/conferencePhotos/Conferencias_11.jpg',

];

function App() {

    return (
        <div className="App page-margin" style={{marginTop: '5%' }}>
            <LoadingScreen/>
            <NavBar />
            <div className="body-padding">
                <h1 className="page-title">Scalable Photo Gallery</h1>
                <br />


            </div>
            <Gallery photos={images} /> {/* Use the Gallery component with wedding photos */}

        </div>
    );
}

export default App;
