'use client'
import {useCallback, useState} from "react";
import {LoadingScreen} from "@/Components/LoadingScreen";
import '../styles.css';


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

            <div className="flex flex-col items-center justify-center">
                    <LoadingScreen/>
                <h1 className='text-slate-400 text-5xl font-extrabold mb-20'>EPIC RESUMES</h1>
                    <div className="flex items-center">
                        <div className='text-center'>
                        <div className="m-10" style={{ width: '300px', height: '300px' }}>
                            <a
                                href="/manuel"
                                className="bg-slate-500 rounded-full block  w-full h-full"
                                style={{ backgroundImage: 'url("/Manuel_Solano_Foto.jpg")', backgroundSize: 'cover' }}
                            ></a>
                        </div>
                        <p className='text-slate-400 text-2xl font-extrabold animate-bounce'>Manuel Solano Olivares </p>
                        </div>
                        <div className='text-center'>
                        <div className="m-10" style={{ width: '300px', height: '300px' }}>
                            <a
                               href="/alvaro"
                                className="bg-slate-500 rounded-full block w-full h-full"
                                style={{ backgroundImage: 'url("Alvaro_Capde_Foto.JPG")', backgroundSize: 'cover', backgroundPosition: 'center calc(50% - 50px)'}}
                            ></a>
                        </div>
                            <p className='text-slate-400 text-2xl font-extrabold animate-bounce'>Alvaro Capdevila Ponce de Leon </p>
                        </div>
                    </div>

            </div>
        </main>
    );
};
