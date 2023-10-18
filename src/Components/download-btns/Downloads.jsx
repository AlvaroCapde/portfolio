import React from 'react';
import '../../styles.css';

function Downloads(props) {
    const { downloadLink, slideshowLink } = props;

    return (
        <div className="button-container flex-row page-margin ">
            <a href={downloadLink} className="top-right-button stdButton" download>
                DOWNLOAD ALL PHOTOS
            </a>
            <a href={slideshowLink} className="top-right-button stdButton">
                WATCH SLIDESHOW
            </a>
        </div>
    );
}

export default Downloads;
