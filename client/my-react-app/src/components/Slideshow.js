import '../styles/Slideshow.css';
import React from 'react';
import { useState } from 'react';

const photos = ["/assets/mediaday.jpg", "/assets/luna.jpeg", "/assets/conferences.jpeg", "/assets/selfie.jpeg", "/assets/bahamas.jpg"];

function Slideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);
    React.useEffect(() => {
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                 prevIndex === photos.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => {};
    }, [currentIndex]);

    return (
        <div>
            <div className="slideshow">
                <div className="slideshowSlider"
                style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}
                >
                    {photos.map((src, index) => (
                    <div>
                        <img src={src} key={index} alt="About me 1" className="slideshowImage"/>
                    </div>
                    ))}
                </div>
            </div>

            <div className="slideshowDots">
                {photos.map((_, index) => (
                    <div>
                        <span key={index} className="slideshowDot"></span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;
