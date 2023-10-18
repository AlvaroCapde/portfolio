import React, { useCallback, useState, useEffect } from "react";

export const LoadingScreen = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(undefined);

    const beginLoading = useCallback(() => {
        setResult(undefined);
        const stateArray = ["success", "error"];
        setLoading(true);

        setTimeout(() => {
            setLoading(false); // Set loading to false after 3 seconds
            setResult(stateArray[Math.floor(Math.random() * stateArray.length)]);
        }, 3000);
    }, []);

    useEffect(() => {
        beginLoading();
    }, [beginLoading]);

    if (!loading) {
        return null; // Don't render the loading screen when loading is false
    }

    return (
        <div className="flex flex-col space-y-10 items-center justify-center loading-page">
            <div className="relative">
                <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-slate-500 animate-spin"></div>
            </div>
            <div>
                <h1 className="text-2xl text-slate-600 animate-bounce font-bold text-center">
                    Loading
                </h1>
            </div>
        </div>
    );
};
