"use client"
import React, { useState, useEffect } from 'react';
import NavBar from "@/Components/nav-bar/NavBar";
import Gallery from "@/Components/gallery/Gallery";
import Downloads from "@/Components/download-btns/Downloads";
import PasswordProtectedPage from "@/Components/password/PasswordProtectedPage";

import '../../../../styles.css';
import {LoadingScreen} from "@/Components/LoadingScreen";

let images;
images = [
    '/clients/HTB/htb_01.jpg',
    '/clients/HTB/htb_02.jpg',
    '/clients/HTB/htb_03.jpg',
    '/clients/HTB/htb_04.jpg',
    '/clients/HTB/htb_05.jpg',
    '/clients/HTB/htb_06.jpg',
    '/clients/HTB/htb_07.jpg',
    '/clients/HTB/htb_08.jpg',
    '/clients/HTB/htb_09.jpg',
    '/clients/HTB/htb_10.jpg',
    '/clients/HTB/htb_11.jpg',
    '/clients/HTB/htb_12.jpg',
    '/clients/HTB/htb_13.jpg',
    '/clients/HTB/htb_14.jpg',
    '/clients/HTB/htb_15.jpg',
    '/clients/HTB/htb_16.jpg',
    '/clients/HTB/htb_17.jpg',
    '/clients/HTB/htb_18.jpg',
    '/clients/HTB/htb_19.jpg',
    '/clients/HTB/htb_20.jpg',
    '/clients/HTB/htb_21.jpg',
    '/clients/HTB/htb_22.jpg',
    '/clients/HTB/htb_23.jpg',
    '/clients/HTB/htb_24.jpg',
    '/clients/HTB/htb_25.jpg',
    '/clients/HTB/htb_26.jpg',
    '/clients/HTB/htb_27.jpg',
    '/clients/HTB/htb_28.jpg',

];
function App() {


    return (
        <div>

            <LoadingScreen></LoadingScreen>
            <PasswordProtectedPage correctPassword="htb2023" />
            <Downloads
                downloadLink="/clients/HTB/HTB.zip"
                slideshowLink="https://drive.google.com/drive/folders/1JFI4xY-1LV7Zl3vhA3IshSNnex8YlHIs?usp=share_link"
            />
            <div className="App page-margin stdFont" style={{ marginTop: '-100px;' }}>

                <NavBar></NavBar>
                <div className="body-padding">
                <h1 className="page-title">Hack The Box</h1>

                </div>
                <Gallery photos={images} />

            </div>
        </div>
    );
}

export default App;
