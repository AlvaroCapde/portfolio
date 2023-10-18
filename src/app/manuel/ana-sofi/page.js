"use client"
import React, { useState, useEffect } from 'react';
import NavBar from "@/Components/nav-bar/NavBar";
import Footer from "@/Components/footer/Footer";
import Gallery from "@/Components/Gallery/Gallery";

import PasswordProtectedPage from "@/Components/password/PasswordProtectedPage";

import '../../../styles.css';
import {LoadingScreen} from "@/Components/LoadingScreen";

let images;
images = [
    '/clients/Ana_Sofi/Ana_Sofi_01.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_02.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_03.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_04.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_05.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_06.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_07.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_08.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_09.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_10.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_11.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_12.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_13.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_14.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_15.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_16.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_17.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_18.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_19.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_20.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_21.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_22.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_23.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_24.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_25.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_26.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_27.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_28.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_29.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_30.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_31.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_32.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_33.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_34.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_35.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_35-1.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_36.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_37.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_38.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_39.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_40.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_41.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_42.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_43.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_44.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_45.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_46.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_47.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_48.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_49.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_50.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_51.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_52.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_53.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_54.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_55.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_56.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_57.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_58.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_59.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_60.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_61.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_62.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_63.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_65.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_66.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_67.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_68.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_69.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_70.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_71.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_72.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_73.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_74.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_75.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_76.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_77.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_78.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_79.jpg',
    '/clients/Ana_Sofi/Ana_Sofi_80.jpg'
];
function App() {


    return (
        <div>
            <LoadingScreen></LoadingScreen>
           <PasswordProtectedPage correctPassword="anasofi9923" />
            <div className="App page-margin" style={{ marginTop: '5%', marginBottom:'15%a'}}>
                <NavBar></NavBar>
                <div className="body-padding">
                <h1 className="page-title">Ana Sofi</h1>

                </div>
                <Gallery photos={images} />
                <div className='footer-fixed'>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;