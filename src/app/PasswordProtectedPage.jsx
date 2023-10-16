import React, { useState } from 'react';

const PasswordProtectedPage = ({ correctPassword }) => {
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === correctPassword) {
            setAuthenticated(true);
        } else {
            alert('Incorrect password. Please try again.');
        }
    };

    if (authenticated) {
        // Render the protected content or redirect here after authentication
        return (
            <div>

            </div>
        );
    }

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'white', // Change the background color or style as desired
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div>
                <h1>Password-Protected Page</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Enter Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default PasswordProtectedPage;
