import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Import the CSS file for styling

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to automatically change slides
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!images.length) {
    return <div>No images available</div>;
  }

  return (
    <div className="slider">
      {/* <button className="prev slidebtn" onClick={prevSlide}>Previous</button> */}
      <div className="slide">
        <img src={images[currentIndex]} alt={`slide-${currentIndex}`} />
      </div>
      {/* <button className="next slidebtn" onClick={nextSlide}>Next</button> */}
    </div>
  );
};

export default ImageSlider;
