import React, { useState } from 'react';

import '../../styles.css';

const PasswordProtectedPage = ({ correctPassword }) => {
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === correctPassword) {
            setAuthenticated(true);
        } else {
            setErrorMessage('Incorrect password. Please try again.');
        }
    };

    if (authenticated) {
        // Render the protected content or redirect here after authentication
        return (
            <div>
                {/* Render your protected content here */}
            </div>
        );
    }

    return (
        <div
            className="passwordPage"
        >
            <div className="flexColumn h-screen">
                <h1 className="text-2xl font-semibold mb-4">Insert Password:</h1>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">


                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="rounded-lg px-6 py-3 stdInput"
                    />

                    <button className="stdButton" type="submit">
                        Submit
                    </button>
                </form>
                <label className="mb-2 mt-10" style={{ color: 'red', visibility: errorMessage ? 'visible' : 'hidden' }}>
                    Incorrect password. Please try again.
                </label>
            </div>
        </div>
    );
};

export default PasswordProtectedPage;
