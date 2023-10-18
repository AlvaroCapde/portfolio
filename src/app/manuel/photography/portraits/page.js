'use client'

import React from 'react';
import NavBar from "@/Components/nav-bar/NavBar";
import Footer from "@/Components/footer/Footer";
import PasswordProtectedPage from "@/Components/password/PasswordProtectedPage";
import Gallery from "@/Components/Gallery/Gallery";

import '../../../../styles.css';

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
        <div className="App page-margin" style={{ marginBottom: '20%', marginTop: '5%' }}>
            <NavBar />
            <div className="body-padding">
                <h1 className="page-title">Scalable Photo Gallery</h1>
                <br />
                {/* Your text content */}
            </div>
            <Gallery photos={images} /> {/* Use the Gallery component with wedding photos */}

            <div className='footer-fixed'>
                <Footer />
            </div>
        </div>
    );
}

export default App;
