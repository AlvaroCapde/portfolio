'use client'
import NavBar from "@/Components/nav-bar/NavBar";
import Head from 'next/head';
export default function Layout({children}) {
    return(
        <>
            <NavBar />
            {children}
        </>
        )
}