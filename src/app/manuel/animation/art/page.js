'use client'

import React from 'react';
import NavBar from "@/Components/nav-bar/NavBar";
import Footer from "@/Components/footer/Footer";
import PasswordProtectedPage from "@/Components/password/PasswordProtectedPage";
import Gallery from "@/Components/Gallery/Gallery";

import '../../../../styles.css';

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
        <div className="App page-margin">
            <NavBar />
            <div className="body-padding">
                <h1 className="main-title">art</h1>
                <br />
                {/* Your text content */}
            </div>
            <Gallery photos={images} /> {/* Use the Gallery component with wedding photos */}

        </div>
    );
}

export default App;
