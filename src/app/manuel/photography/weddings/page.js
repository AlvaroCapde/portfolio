'use client'

import React from 'react';
import NavBar from "@/Components/nav-bar/NavBar";
import Gallery from "@/Components/gallery/Gallery";

import '../../../../styles.css';
import {LoadingScreen} from "@/Components/LoadingScreen";

const images = [
    "/weddingPhotos/Bodas.jpg",
    "/weddingPhotos/Bodas_01.jpg",
    "/weddingPhotos/Bodas_02.jpg",
    "/weddingPhotos/Bodas_03.jpg",
    "/weddingPhotos/Bodas_04.jpg",
    "/weddingPhotos/Bodas_05.jpg",
    "/weddingPhotos/Bodas_06.jpg",
    "/weddingPhotos/Bodas_08.jpg",
    "/weddingPhotos/Bodas_09.jpg",
    "/weddingPhotos/Bodas_10.jpg",
    "/weddingPhotos/Bodas_11.jpg",
    "/weddingPhotos/Bodas_12.jpg",
    "/weddingPhotos/Bodas_13.jpg",
    "/weddingPhotos/Bodas_14.jpg",
    "/weddingPhotos/Bodas_15.jpg",
    "/weddingPhotos/Bodas_16.jpg",
    "/weddingPhotos/Bodas_17.jpg",
    "/weddingPhotos/Bodas_18.jpg",
    "/weddingPhotos/Bodas_19.jpg",
    "/weddingPhotos/Bodas_20.jpg",
    "/weddingPhotos/Bodas_21.jpg",
    "/weddingPhotos/Bodas_22.jpg",
    "/weddingPhotos/Bodas_23.jpg",
    "/weddingPhotos/Bodas_24.jpg",
    "/weddingPhotos/Bodas_25.jpg",
    "/weddingPhotos/Bodas_26.jpg",
    "/weddingPhotos/Bodas_27.jpg",
    "/weddingPhotos/Bodas_28.jpg",
];



function App() {
    return (
        <div>
        <LoadingScreen/>
        <div className="App page-margin">

            <NavBar />
            <h1 className="main-title">weddings</h1>
            <Gallery photos={images} />
        </div>
        </div>
    );
}

export default App;
