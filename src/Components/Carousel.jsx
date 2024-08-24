import React, { useState, useEffect } from "react";
import image1 from "../assets/photo/front1.jpg";
import image2 from "../assets/photo/front2.jpg";
import image3 from "../assets/photo/front3.jpeg";
import image4 from "../assets/photo/front4.jpg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [image1, image2, image3, image4];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const setSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div
      id="default-carousel"
      className="relative w-full group"
      data-carousel="slide"
    >
      <div className="relative h-[500px] overflow-hidden rounded-sm">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              index === currentSlide ? "block" : "hidden"
            }`}
            data-carousel-item
          >
            <img
              src={slide}
              className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-400/30 group-hover:bg-white/50 dark:group-hover:bg-gray-400/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* Next Button */}
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-400/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
