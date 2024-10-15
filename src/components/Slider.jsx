import React, { useEffect, useState } from "react";

const images = [
  "/images/img-1.jpg",
  "/images/img-3.jpg",
  "/images/img-4.jpg",
  "/images/img-5.jpg",
  "/images/img-6.jpg",
  "/images/img-7.jpg",
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = images.length; // Set this to the number of images

  // Function to navigate to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides ? 1 : prevSlide + 1
    );
  };

  // Function to navigate to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 1 ? totalSlides : prevSlide - 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);

    // Cleanup function to clear interval when the component unmounts
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="carousel w-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full h-[600px] ${
            currentSlide === index + 1 ? "block" : "hidden"
          }`}
        >
          <img
            src={image}
            className="w-full object-cover h-[600px]"
            alt={`Slide ${index + 1}`}
          />
          <div className="absolute left-5 right-5 z-40 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a onClick={prevSlide} className="btn btn-circle">
              ❮
            </a>
            <a onClick={nextSlide} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
