import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const AlternativeComponent = ({ heading, gradientText, slidesData, uniqueClass }) => {
  return (
    <div className={uniqueClass}>
      <h2>{heading}</h2>
      <p style={{ background: 'linear-gradient(90deg, #00f, #0ff)', padding: '5px' }}>
        {gradientText}
      </p>

      <Swiper
        slidesPerView={1} // Adjust this to 1 for single slide per view or more if you need multiple
        spaceBetween={20} // Space between slides
        grid={{
          rows: 3, // Rows in the grid
          fill: 'row', // Ensure each row fills correctly
        }}
        modules={[Grid, Navigation]} // Enable grid and navigation
        navigation // Enable arrow navigation
        className="mySwiper"
      >
        {slidesData.map((item, index) => (
          <SwiperSlide key={index}>
            {/* Check if the item contains text data (i.e., name, description, post) */}
            {item.name ? (
              <div className="flex flex-col items-center bg-white bg-opacity-10 p-5 rounded-lg text-white">
                <h4 className="mb-2">{item.name}</h4>
                <p>{item.description}</p>
              </div>
            ) : (
              // For brand logos, just show the image
              <div className="bg-white bg-opacity-10 p-5 rounded-lg flex justify-center items-center">
                <img
                  src={item.img}
                  alt={`Brand ${index}`}
                  className="w-[120px] h-auto object-contain"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AlternativeComponent;
