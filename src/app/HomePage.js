import React from "react";
import Link from 'next/link';

const HomePage = () => {
    return (
        <div>
            <h1>Success Page</h1>
            <p>Your content for the success page goes here.</p>
            <Link href="/">Go back to the home page</Link>
        </div>
    );
};

export default SuccessPage;