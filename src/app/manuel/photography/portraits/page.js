'use client'

import React from 'react';
import NavBar from "@/Components/nav-bar/NavBar";
import Gallery from "@/Components/gallery/Gallery";

import '../../../../styles.css';
import {LoadingScreen} from "@/Components/LoadingScreen";

const images = [
    "/portraitPhotos/Retrato_01.jpg",
    "/portraitPhotos/Retrato_02.jpg",
    "/portraitPhotos/Retrato_03.jpg",
    "/portraitPhotos/Retrato_04.jpg",
    "/portraitPhotos/Retrato_05.jpg",
    "/portraitPhotos/Retrato_06.jpg",
    "/portraitPhotos/Retrato_07.jpg",
    "/portraitPhotos/Retrato_08.jpg",
    "/portraitPhotos/Retrato_01_Landscape.jpg",
    "/portraitPhotos/Retrato_02_Landscape.jpg",
    "/portraitPhotos/Retrato_03_Landscape.jpg",
    "/portraitPhotos/Retrato_04_Landscape.jpg",

];



function App() {
    return (
        <div className="App page-margin stdFont" >
            <LoadingScreen/>
            <NavBar />
            <h1 className="main-title">portraits</h1>
            <Gallery photos={images} />


        </div>
    );
}

export default App;
