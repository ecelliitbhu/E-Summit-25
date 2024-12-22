
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";

const NavigationButton = ({
  direction,
  uniqueClass,
  iconPath,
}: {
  direction: "prev" | "next";
  uniqueClass: string;
  iconPath: string;
}) => {
  return (
    <div
      className={`${uniqueClass}-button-${direction} absolute top-1/2 ${direction === 'prev' ? 'left-[-50px] sm:left-[-60px]' : 'right-[-50px] sm:right-[-60px]'} transform -translate-y-1/2 z-10 cursor-pointer bg-gradient-to-r from-pink-500 to-purple-600 w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-full shadow-lg transition-all duration-300 hover:scale-110`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="white"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
      </svg>
    </div>
  );
};

const CustomSlider = ({
  heading,
  gradientText,
  slidesData,
  slidesPerView = 3,
  coverflowEffect = {},
  uniqueClass,
}: {
  heading: string;
  gradientText: string;
  slidesData: { img: string; name?: string; description?: string; post?: string; link?: string }[];
  slidesPerView?: number;
  coverflowEffect?: object;
  uniqueClass: string;
}) => {
  return (
    <div className="container relative mx-auto mt-10 px-4 sm:px-6 lg:px-8">
    
      <h2 className="text-center text-3xl font-bold text-white mb-8 select-none">
        {heading.split(gradientText)[0]}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          {gradientText}
        </span>
        {heading.split(gradientText)[1]}
      </h2>
      <div className="relative w-full max-w-6xl mx-auto">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={slidesPerView}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
            ...coverflowEffect,
          }}
          navigation={{
            nextEl: `.${uniqueClass}-button-next`,
            prevEl: `.${uniqueClass}-button-prev`,
            clickable: true,
          } as any}
          modules={[EffectCoverflow, Navigation]}
          className="swiper-container"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: slidesPerView,
              spaceBetween: 20,
            },
          }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#1e1e1e] relative rounded-lg shadow-xl w-[300px] h-[350px] overflow-hidden select-none">
               
                {slide.name && (
                  <div>
                    <div className="absolute top-4 left-4">
                      <img
                        src={slide.img}
                        alt={slide.name}
                        className="rounded-full w-14 h-14 border-2 border-white"
                      />
                    </div>
                    <div className="absolute top-24 left-6 right-6">
                      <h3 className="text-lg font-semibold text-white">{slide.name}</h3>
                      <p className="text-sm text-gray-400">{slide.description}</p>
                      <p className="font-medium text-pink-500">{slide.post}</p>
                    </div>
                  </div>
                )}
              
                {!slide.name && (
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={slide.img}
                      alt="Sponsor Logo"
                      className="object-contain max-h-16"
                    />
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

       
        <NavigationButton 
          direction="prev" 
          uniqueClass={uniqueClass} 
          iconPath="M15 19l-7-7 7-7" 
        />
        <NavigationButton 
          direction="next" 
          uniqueClass={uniqueClass} 
          iconPath="M9 19l7-7-7-7" 
        />
      </div>

      <style jsx>{`
        .swiper-container {
          padding: 20px 0;
        }
        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .swiper-button-prev,
        .swiper-button-next {
          cursor: pointer;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          color: #ff007f;
        }
        .select-none {
          user-select: none;
        }
        @media (max-width: 640px) {
          .swiper-container {
            padding: 10px 0;
          }
          .swiper-slide {
            width: 100%;
            height: auto;
          }
        }
        @media (min-width: 640px) and (max-width: 1024px) {
          .swiper-container {
            padding: 15px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CustomSlider;
