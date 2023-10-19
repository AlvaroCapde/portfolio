'use client';
import React from 'react';
import ImageCarousel from "@/Components/carousel/Carousel";
import NavBar from "@/Components/nav-bar/NavBar";
import Footer from "@/Components/footer/Footer";
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
                <div className="carousel-container-landscape ">
                    <ImageCarousel images={weddings} />
                </div>


                <div className="text-content  text-2xl padding-separator">
                    <h1 className="page-title">Weddings</h1>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget justo mi. Donec at lacinia erat, at posuere neque. Duis lacinia metus non erat auctor, eu auctor metus sollicitudin.</p>
                    <p>Proin euismod velit ut metus pellentesque, id dapibus ex rhoncus. In bibendum turpis non auctor lacinia. Nulla ac augue eget elit malesuada feugiat. Nullam eleifend, orci non laoreet sodales, metus sem bibendum tellus, eu cursus quam ex a justo. Donec euismod bibendum enim, nec interdum dui.</p>
                    <br/>
                    <a href="/manuel/photography/weddings" className="page-subtitle flexColumn see-more-link">See more...</a>
                </div>

            </div>
            <div className="page-content">
                <div className="carousel-container-landscape">
                    <ImageCarousel images={conferences} />
                </div>
                <div className="text-content text-2xl padding-separator">
                    <h1 className="page-title">Events</h1>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget justo mi. Donec at lacinia erat, at posuere neque. Duis lacinia metus non erat auctor, eu auctor metus sollicitudin.</p>
                    <p>Proin euismod velit ut metus pellentesque, id dapibus ex rhoncus. In bibendum turpis non auctor lacinia. Nulla ac augue eget elit malesuada feugiat. Nullam eleifend, orci non laoreet sodales, metus sem bibendum tellus, eu cursus quam ex a justo. Donec euismod bibendum enim, nec interdum dui.</p>
                    <br/>
                    <a href="/manuel/photography/conferences" className="page-title flexColumn see-more-link">See more...</a>
                </div>

            </div>
            <div className="page-content ">
                <div className="carousel-container-landscape">
                    <ImageCarousel images={portraits} />
                </div>
                <div className="text-content text-2xl padding-separator ">
                    <h1 className="page-title">Portraits</h1>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget justo mi. Donec at lacinia erat, at posuere neque. Duis lacinia metus non erat auctor, eu auctor metus sollicitudin.</p>
                    <p>Proin euismod velit ut metus pellentesque, id dapibus ex rhoncus. In bibendum turpis non auctor lacinia. Nulla ac augue eget elit malesuada feugiat. Nullam eleifend, orci non laoreet sodales, metus sem bibendum tellus, eu cursus quam ex a justo. Donec euismod bibendum enim, nec interdum dui.</p>
                    <br/>
                    <a href="/manuel/photography/portraits" className="page-title flexColumn see-more-link">See more...</a>
                </div>
            </div>



        </div>
    );
};

export default Home;
