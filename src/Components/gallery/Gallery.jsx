import React, { useState, useEffect } from 'react';

function Gallery({ photos }) {
    const [displayedPhotos, setDisplayedPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setDisplayedPhotos(photos.slice(0, 12));
            setIsLoading(false);
        }, 1000);
    }, [photos]);

    const loadMorePhotos = () => {
        setIsLoading(true);
        setTimeout(() => {
            const currentLength = displayedPhotos.length;
            const newPhotos = photos.slice(
                currentLength,
                currentLength + 10
            );
            setDisplayedPhotos([...displayedPhotos, ...newPhotos]);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div>
            <div className="gallery">
                {displayedPhotos.map((photo, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={photo} alt={`Photo ${index}`} />
                    </div>
                ))}
            </div>

            {displayedPhotos.length < photos.length && (
                <button className="stdButton" type="submit" onClick={loadMorePhotos} disabled={isLoading}>
                    Load more
                </button>
            )}
        </div>
    );
}

export default Gallery;
