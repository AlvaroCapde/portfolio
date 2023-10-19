import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex, images.length]);

    return (
        <Carousel
            showThumbs={false}
            selectedItem={currentIndex}
            onChange={setCurrentIndex}
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            transitionTime={1000}
        >
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Image ${index}`} />
                </div>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;
