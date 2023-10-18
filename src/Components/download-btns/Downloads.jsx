import React from 'react';

import '../../styles.css';

function ButtonContainer() {
    return (
        <div className="button-container flex-row">
            <button className="top-right-button stdButton">Download all photos</button>
            <button className="top-right-button stdButton">Watch slideshow</button>
        </div>
    );
}

export default ButtonContainer;
