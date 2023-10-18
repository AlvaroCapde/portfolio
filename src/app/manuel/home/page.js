'use client';
import React from 'react';
import ImageCarousel from "@/Components/carousel/Carousel";
import NavBar from "@/Components/nav-bar/NavBar";
import Footer from "@/Components/footer/Footer";

import '../../../styles.css';

const showcase = [
    "/showcase/showcase_01.jpg",
    "/showcase/showcase_02.jpg",
    "/showcase/showcase_03.jpg",

];


const Home = () => {
    return (
        <div className="page-margin" >
            <NavBar></NavBar>
            <h1 className="main-title">Manuel fernando solano olivares</h1>
            <div className="page-content">
                <div className="m-10" style={{ width: '600px', height: '600px' }}> {/* Adjust the width and height as needed */}
                    <a
                        href="/manuel/home"
                        className="bg-slate-500 rounded-full block  w-full h-full"
                        style={{ backgroundImage: 'url("/Manuel_Solano_Foto.jpg")', backgroundSize: 'cover' }}
                    ></a>
                </div>

                <div className="text-content resume-text">
                    <h1 className="page-title">about me</h1>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget justo mi. Donec at lacinia erat, at posuere neque. Duis lacinia metus non erat auctor, eu auctor metus sollicitudin.</p>
                    <p>Proin euismod velit ut metus pellentesque, id dapibus ex rhoncus. In bibendum turpis non auctor lacinia. Nulla ac augue eget elit malesuada feugiat. Nullam eleifend, orci non laoreet sodales, metus sem bibendum tellus, eu cursus quam ex a justo. Donec euismod bibendum enim, nec interdum dui.</p>
                    <br/>

                </div>

            </div>
            <div className="page-content resume-text">
                <div className="text-content">
                    <h1 className="page-title">academic history</h1>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget justo mi. Donec at lacinia erat, at posuere neque. Duis lacinia metus non erat auctor, eu auctor metus sollicitudin.</p>
                    <p>Proin euismod velit ut metus pellentesque, id dapibus ex rhoncus. In bibendum turpis non auctor lacinia. Nulla ac augue eget elit malesuada feugiat. Nullam eleifend, orci non laoreet sodales, metus sem bibendum tellus, eu cursus quam ex a justo. Donec euismod bibendum enim, nec interdum dui.</p>
                    <br/>

                </div>

                <div className="text-content resume-text">
                    <h1 className="page-title">work experience</h1>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget justo mi. Donec at lacinia erat, at posuere neque. Duis lacinia metus non erat auctor, eu auctor metus sollicitudin.</p>
                    <p>Proin euismod velit ut metus pellentesque, id dapibus ex rhoncus. In bibendum turpis non auctor lacinia. Nulla ac augue eget elit malesuada feugiat. Nullam eleifend, orci non laoreet sodales, metus sem bibendum tellus, eu cursus quam ex a justo. Donec euismod bibendum enim, nec interdum dui.</p>
                    <br/>

                </div>


                </div>
            <div>
                <ImageCarousel images={showcase} />
            </div>

            <div className="page-content ">
                <div className="text-content resume-text">
                    <h1 className="page-title">skills</h1>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget justo mi. Donec at lacinia erat, at posuere neque. Duis lacinia metus non erat auctor, eu auctor metus sollicitudin.</p>
                    <p>Proin euismod velit ut metus pellentesque, id dapibus ex rhoncus. In bibendum turpis non auctor lacinia. Nulla ac augue eget elit malesuada feugiat. Nullam eleifend, orci non laoreet sodales, metus sem bibendum tellus, eu cursus quam ex a justo. Donec euismod bibendum enim, nec interdum dui.</p>
                    <br/>

                </div>
            </div>




        </div>
    );
};

export default Home;
