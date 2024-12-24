

import React, { useState } from 'react';
import '../style/fonts.css';
import portfoliobackground from '../../assets/icons/portfoliobackground.png';
import portfolio1 from '../../assets/icons/protfolio1.png';
import portfolio2 from '../../assets/icons/protfolio2.png';
import portfolio3 from '../../assets/icons/protfolio3.png';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [portfolio1, portfolio2, portfolio3, portfolio3, portfolio1, portfolio2];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 4 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className='flex flex-col p-4 h-[100vh] bg-cover bg-center'
      style={{ backgroundImage: `url(${portfoliobackground})` }}
    >
      <h1 className='font-["Winter_Minie"] text-[#F8EB47] text-center text-4xl mt-10'>
        PORTFOLIO
      </h1>

      <div className='flex px-4 md:px-20 justify-center mt-24 2xl:mt-40 overflow-hidden'>
        <div className='relative'>
          <div className='flex space-x-4 md:space-x-6 flex-wrap md:flex-nowrap'>
            {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${currentIndex + index + 1}`}
                className='w-full md:w-1/4 h-64 object-cover px-4 mb-4 md:mb-0'
              />
            ))}
          </div>
          <div className='absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4'>
            <button
              onClick={handlePrevClick}
              disabled={currentIndex === 0}
              className='bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 disabled:opacity-50'
            >
                 <i className="fa fa-arrow-left"></i>
            </button>
            <button
              onClick={handleNextClick}
              disabled={currentIndex === images.length - 4}
              className='bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 disabled:opacity-50'
            >
                 <i className="fa fa-arrow-right "></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
