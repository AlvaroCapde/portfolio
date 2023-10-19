'use client'

import React from 'react';
import NavBar from "@/Components/nav-bar/NavBar";
import Footer from "@/Components/footer/Footer";
import PasswordProtectedPage from "@/Components/password/PasswordProtectedPage";
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
];



function App() {
    return (
        <div className="App page-margin" >
            <LoadingScreen/>
            <NavBar />
            <h1 className="main-title">portraits</h1>
            <Gallery photos={images} /> {/* Use the Gallery component with wedding photos */}


        </div>
    );
}

export default App;
