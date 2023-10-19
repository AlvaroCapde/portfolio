"use client"
import React, { useState, useEffect } from 'react';
import NavBar from "@/Components/nav-bar/NavBar";
import Gallery from "@/Components/gallery/Gallery";
import {LoadingScreen} from "@/Components/LoadingScreen";



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
        <div className="App page-margin">
<LoadingScreen/>
            <NavBar />
            <h1 className="main-title">conferences</h1>
            <Gallery photos={images} />

        </div>
    );
}

export default App;
