'use client';
import React from 'react';
import ImageCarousel from "@/Components/carousel/Carousel";
import NavBar from "@/Components/nav-bar/NavBar";
import Footer from "@/Components/footer/Footer";

import '../../../../styles.css';

const images = [
    'https://via.placeholder.com/1080x720/eee?text=3:2',
    'https://via.placeholder.com/1080x720/eee?text=3:2',
    'https://via.placeholder.com/1080x720/eee?text=3:2',

];
const images2 = [
    'https://placehold.co/400x600',
    'https://placehold.co/400x600',
    'https://placehold.co/400x600',

];


const Home = () => {
    return (
        <div style={{marginBottom:'20%', marginTop: '10%'}}>
            <NavBar></NavBar>
            <h1 className="page-title">Image Carousel Example</h1>
            <div className="page-content">
                <div className="carousel-container-landscape">
                    <ImageCarousel images={images} />
                </div>
                <div className="text-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget justo mi. Donec at lacinia erat, at posuere neque. Duis lacinia metus non erat auctor, eu auctor metus sollicitudin.</p>
                    <p>Proin euismod velit ut metus pellentesque, id dapibus ex rhoncus. In bibendum turpis non auctor lacinia. Nulla ac augue eget elit malesuada feugiat. Nullam eleifend, orci non laoreet sodales, metus sem bibendum tellus, eu cursus quam ex a justo. Donec euismod bibendum enim, nec interdum dui.</p>
                </div>
            </div>
            <div className="page-content">
                <div className="carousel-container-landscape">
                    <ImageCarousel images={images} />
                </div>
                <div className="text-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget justo mi. Donec at lacinia erat, at posuere neque. Duis lacinia metus non erat auctor, eu auctor metus sollicitudin.</p>
                    <p>Proin euismod velit ut metus pellentesque, id dapibus ex rhoncus. In bibendum turpis non auctor lacinia. Nulla ac augue eget elit malesuada feugiat. Nullam eleifend, orci non laoreet sodales, metus sem bibendum tellus, eu cursus quam ex a justo. Donec euismod bibendum enim, nec interdum dui.</p>
                </div>

            </div>
            <div className="page-content">
                <div className="carousel-container-portrait">
                    <ImageCarousel images={images2} />
                </div>
                <div className="text-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget justo mi. Donec at lacinia erat, at posuere neque. Duis lacinia metus non erat auctor, eu auctor metus sollicitudin.</p>
                    <p>Proin euismod velit ut metus pellentesque, id dapibus ex rhoncus. In bibendum turpis non auctor lacinia. Nulla ac augue eget elit malesuada feugiat. Nullam eleifend, orci non laoreet sodales, metus sem bibendum tellus, eu cursus quam ex a justo. Donec euismod bibendum enim, nec interdum dui.</p>
                </div>


                <div className="carousel-container-portrait">
                    <ImageCarousel images={images2} />
                </div>
                <div className="text-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget justo mi. Donec at lacinia erat, at posuere neque. Duis lacinia metus non erat auctor, eu auctor metus sollicitudin.</p>
                    <p>Proin euismod velit ut metus pellentesque, id dapibus ex rhoncus. In bibendum turpis non auctor lacinia. Nulla ac augue eget elit malesuada feugiat. Nullam eleifend, orci non laoreet sodales, metus sem bibendum tellus, eu cursus quam ex a justo. Donec euismod bibendum enim, nec interdum dui.</p>
                </div>

            </div >
            <Footer></Footer>
        </div>
    );
};

export default Home;
