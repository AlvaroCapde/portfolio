'use client'
import {useCallback, useState} from "react";
import {LoadingScreen} from "@/Components/LoadingScreen";
import { useRouter } from 'next/router';
import NavBar from "@/Components/nav-bar/NavBar";
import footer from "@/Components/footer/Footer";
import Footer from "@/Components/footer/Footer";
import Link from 'next/link';


export default function Home() {
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(undefined)
    const beginLoading = useCallback(() => {
            setResult(undefined)
            const stateArray = ['success', 'error']
            setLoading(true)
            setTimeout(() => {
                setResult(stateArray[Math.floor(Math.random() * stateArray.length)])
            },3000)

        }

    , [setLoading])

    return (

        <main className="flex min-h-screen items-center justify-center p-24">
            <NavBar />
            <a href="photoGallery.js" className="text-blue-400">redirect</a>
            <div className="flex flex-col items-center justify-center">
                {loading ? (
                    result ? (
                        <div className="text-center">
                            <div className={`text-5xl font-bold ${result === 'success' ? 'text-green-700' : 'text-red-600'}`}>
                                {result === 'success' ? 'Resumes loaded with success!' : 'Failed to load resumes'}
                            </div>
                            <button onClick={beginLoading} className="bg-slate-500 rounded-full px-6 py-4 text-white font-bold">Reload</button>
                        </div>
                    ) : (
                        <LoadingScreen />
                    )
                ) : (
                    <div className="flex flex-col items-center">
                        <div className="m-10" style={{ width: '300px', height: '300px' }}> {/* Adjust the width and height as needed */}
                            <button
                                onClick={beginLoading}
                                className="bg-slate-500 rounded-full w-full h-full"
                                style={{ backgroundImage: 'url("foto.png")', backgroundSize: 'cover' }}
                            ></button>
                        </div>
                        <div className="m-10" style={{ width: '300px', height: '300px' }}> {/* Adjust the width and height as needed */}
                            <button
                                onClick={beginLoading}
                                className="bg-slate-500 rounded-full w-full h-full"
                                style={{ backgroundImage: 'url("foto.png")', backgroundSize: 'cover' }}
                            ></button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </main>






    );
};
