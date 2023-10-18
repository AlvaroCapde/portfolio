import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the current index to move to the next slide
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 5000); // 5000 milliseconds = 5 seconds

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex, images.length]);

    return (
        <Carousel
            showArrows={true}
            showThumbs={false}
            selectedItem={currentIndex}
            onChange={setCurrentIndex}
            autoPlay={true}
            infiniteLoop={true} // Enable seamless looping
            transitionTime={0} // Set transition time to 0 to avoid animations between images
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
