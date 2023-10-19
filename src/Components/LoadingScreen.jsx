import React, { useState, useEffect } from "react";
import '../styles.css';

export const LoadingScreen = () => {
    const [loading, setLoading] = useState(true); // Start with loading screen visible
    const [result, setResult] = useState(undefined);

    useEffect(() => {
        const stateArray = ["success", "error"];
        setTimeout(() => {
            setLoading(false); // Hide loading screen
            setResult(stateArray[Math.floor(Math.random() * stateArray.length)]);
        }, 1500);
    }, []);

    const loadingScreenStyle = {
        opacity: loading ? 1 : 0, // Set opacity based on loading state
        pointerEvents: loading ? "auto" : "none", // Allow interaction only when loading is true
    };

    return (
        <div className="loading-page" style={loadingScreenStyle}>
            <div className="flex flex-col space-y-10 items-center justify-center">
                <div className="relative">
                    <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                    <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-slate-500 animate-spin"></div>
                </div>
                <div>
                    <h1 className="text-2xl text-slate-600 animate-bounce font-bold text-center">
                        Loading...
                    </h1>
                </div>
            </div>
        </div>
    );
};