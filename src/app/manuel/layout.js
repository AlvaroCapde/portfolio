'use client'
import NavBar from "@/Components/nav-bar/NavBar";

export default function Layout({children}) {
    return(
        <>
            <NavBar />
            {children}
        </>
        )
}