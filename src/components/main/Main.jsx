
import React, { useState } from "react";
import mainbackground from "../../assets/icons/mainbackgruound.png";
import balu from "../../assets/icons/balu.png";
import foxstart from "../../assets/icons/foxstar.png";
import redhat from "../../assets/icons/redhat.png";
import dog from "../../assets/icons/dog.png";

import "../style/main.css";

const Main = () => {
  const images = [balu, foxstart, redhat, dog, dog];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="fullscreen-background">
      <div className="grid grid-cols-1 px-4 md:px-10 py-5 overflow-hidden">
        {/* Navigation Bar */}
        <div className="bg-[#D9D9D9] flex flex-wrap py-4 rounded-2xl justify-center gap-4 md:gap-8 w-[90%] md:w-[60%] mx-auto mt-4 border-b-4 border-gray-400 shadow-lg">
          <a href="#" className="text-base md:text-2xl">
            Home
          </a>
          <a href="#" className="text-base md:text-2xl">
            About us
          </a>
          <a href="#" className="text-base md:text-2xl">
            Portfolio
          </a>
          <a href="#" className="text-base md:text-2xl">
            Tokens
          </a>
          <a href="#" className="text-base md:text-2xl">
            Contact Us
          </a>
        </div>

        {/* Carousel */}
        <div className="flex px-4 md:px-20 justify-center mt-12 md:mt-24 2xl:mt-60 overflow-hidden">
          <div className="relative">
            <div className="flex space-x-2 md:space-x-4">
              {images
                .slice(currentIndex, currentIndex + 4)
                .map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${currentIndex + index + 1}`}
                    className="w-[20%] md:w-1/4 h-32 md:h-64 object-cover rounded-lg"
                  />
                ))}
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
              <button
                onClick={handlePrevClick}
                disabled={currentIndex === 0}
                className={`${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                } bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700`}
              >
                <i className="fa fa-arrow-left"></i>
              </button>
              <button
                onClick={handleNextClick}
                disabled={currentIndex === images.length - 4}
                className={`${
                  currentIndex === images.length - 4
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                } bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700`}
              >
                <i className="fa fa-arrow-right "></i>
              </button>
            </div>
          </div>
        </div>

        {/* Token Count */}
        <div className="flex justify-center mt-10 overflow-hidden">
          <div className="w-[90%] md:w-[30%] bg-[#FFFFFF] px-4 md:px-8 py-4 text-center rounded-xl border-4 border-gray-400 shadow-lg">
            <p className="text-sm md:text-lg font-medium font-['Winter_Minie']">TOTAL TOKEN = 400</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
