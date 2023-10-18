'use client';
import React from 'react';
import ImageCarousel from "@/Components/carousel/Carousel";
import NavBar from "@/Components/nav-bar/NavBar";
import Footer from "@/Components/footer/Footer";

import '../../../styles.css';

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
"/portraitPhotos/Retrato_01.jpg",
    "/portraitPhotos/Retrato_02.jpg",
    "/portraitPhotos/Retrato_03.jpg",
    "/portraitPhotos/Retrato_04.jpg",
    "/portraitPhotos/Retrato_05.jpg",
    "/portraitPhotos/Retrato_06.jpg",
    "/portraitPhotos/Retrato_07.jpg",
    "/portraitPhotos/Retrato_08.jpg",
];

const Home = () => {
    return (
        <div className="page-margin" style={{marginTop: '5%'}}>
            <NavBar></NavBar>
            <h1 className="page-title">Image Carousel Example</h1>
            <div className="page-content">
                <div className="carousel-container-landscape">
                    <ImageCarousel images={weddings} />
                </div>

                <div className="text-content">
                    <h1 className="page-subtitle">Weddings</h1>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget justo mi. Donec at lacinia erat, at posuere neque. Duis lacinia metus non erat auctor, eu auctor metus sollicitudin.</p>
                    <p>Proin euismod velit ut metus pellentesque, id dapibus ex rhoncus. In bibendum turpis non auctor lacinia. Nulla ac augue eget elit malesuada feugiat. Nullam eleifend, orci non laoreet sodales, metus sem bibendum tellus, eu cursus quam ex a justo. Donec euismod bibendum enim, nec interdum dui.</p>
                </div>
            </div>
            <div className="page-content">
                <div className="carousel-container-landscape">
                    <ImageCarousel images={conferences} />
                </div>
                <div className="text-content">
                    <h1 className="page-subtitle">Events</h1>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget justo mi. Donec at lacinia erat, at posuere neque. Duis lacinia metus non erat auctor, eu auctor metus sollicitudin.</p>
                    <p>Proin euismod velit ut metus pellentesque, id dapibus ex rhoncus. In bibendum turpis non auctor lacinia. Nulla ac augue eget elit malesuada feugiat. Nullam eleifend, orci non laoreet sodales, metus sem bibendum tellus, eu cursus quam ex a justo. Donec euismod bibendum enim, nec interdum dui.</p>
                </div>

            </div>
            <div className="page-content">
                <div className="carousel-container-portrait">
                    <ImageCarousel images={portraits} />
                </div>
                <div className="text-content">
                    <h1 className="page-subtitle">Portraits</h1>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget justo mi. Donec at lacinia erat, at posuere neque. Duis lacinia metus non erat auctor, eu auctor metus sollicitudin.</p>
                    <p>Proin euismod velit ut metus pellentesque, id dapibus ex rhoncus. In bibendum turpis non auctor lacinia. Nulla ac augue eget elit malesuada feugiat. Nullam eleifend, orci non laoreet sodales, metus sem bibendum tellus, eu cursus quam ex a justo. Donec euismod bibendum enim, nec interdum dui.</p>
                </div>
            </div>



        </div>
    );
};

export default Home;
