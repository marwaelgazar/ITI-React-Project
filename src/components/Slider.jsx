import React, { useState } from "react";

const Slider = () => {
  const images = [
    "assets/images/1.jpeg",
    "assets/images/2.jpeg",
    "assets/images/3.jpeg",
    "assets/images/4.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="container mt-5 text-center">
      <div className="slider-container">
        <button
          className="btn btn-primary m-2"
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <img
          src={images[currentIndex]}
          alt=""
          style={{ width: "300px", height: "300px", borderRadius: "10px" }}
        />
        <button
          className="btn btn-primary m-2"
          onClick={nextSlide}
          disabled={currentIndex === images.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
