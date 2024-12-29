
// "use client";
// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";

// const CustomSlider = ({
//   heading,
//   gradientText,
//   slidesData,
//   sliderType,
// }: {
//   heading: string;
//   gradientText: string;
//   slidesData: { img: string; name?: string; post?: string; description?: string }[];
//   sliderType: "participant" | "sponsor";
// }) => {
//   const navigationPrev = `button-prev-${sliderType}`;
//   const navigationNext = `button-next-${sliderType}`;

//   const [activeIndex, setActiveIndex] = useState<number>(0);

//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden relative z-10">
//       {/* Heading for Participants or Sponsors */}
//       <div className="mb-12 text-center relative z-20">
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 break-words">
//           {sliderType === "participant" ? (
//             <>
//               What our{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
//                 {gradientText}
//               </span>{" "}
//               for us?
//             </>
//           ) : (
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
//               {gradientText}
//             </span>
//           )}
//         </h2>
//       </div>

//       {/* Add margin to the slider container for spacing */}
//       <div className="relative w-full overflow-hidden z-10 mb-12">
//         <Swiper
//           loop={true}
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={3}
//           spaceBetween={20}
//           breakpoints={{
//             1100: { slidesPerView: 3, spaceBetween: 20 },
//             768: { slidesPerView: 2, spaceBetween: 15 },
//             0: { slidesPerView: 1, spaceBetween: 10 },
//           }}
//           navigation={{
//             nextEl: `.${navigationNext}`,
//             prevEl: `.${navigationPrev}`,
//           }}
//           onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//           modules={[Navigation]}
//         >
//           {slidesData.map((slide, index) => (
//             <SwiperSlide
//               key={index}
//               className={`transition-transform duration-300 ${
//                 index === activeIndex ? "scale-110 z-10" : "scale-95 opacity-80"
//               }`}
//             >
//               {sliderType === "participant" ? (
//                 <div className="bg-[#1e1e1e] rounded-lg shadow-md p-6 flex flex-col items-start gap-3 min-h-[320px]">
//                   <div className="flex flex-col items-start gap-2">
//                     <img
//                       src={slide.img}
//                       alt={slide.name || "Participant"}
//                       className="w-24 h-24 rounded-full object-cover"
//                     />
//                     <h3 className="text-white font-semibold text-lg">{slide.name}</h3>
//                     <p className="text-gray-400 text-sm">{slide.description}</p>
//                     <p className="text-purple-300 text-sm">{slide.post}</p>
//                   </div>
//                 </div>
//               ) : (
//                 <div
//                   className="bg-[#1e1e1e] rounded-lg shadow-md flex justify-center items-center"
//                   style={{ width: "100%", height: "200px" }}
//                 >
//                   <img
//                     src={slide.img}
//                     alt="Sponsor"
//                     className="object-contain w-20 h-20 md:w-32 md:h-32"
//                   />
//                 </div>
//               )}
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Navigation Buttons */}
//         <div
//           className={`absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer bg-gradient-to-r from-pink-500 to-purple-600 w-12 h-12 flex justify-center items-center rounded-full shadow-md hover:scale-110 ${navigationPrev}`}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="white"
//             className="w-6 h-6"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//           </svg>
//         </div>
//         <div
//           className={`absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer bg-gradient-to-r from-pink-500 to-purple-600 w-12 h-12 flex justify-center items-center rounded-full shadow-md hover:scale-110 ${navigationNext}`}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="white"
//             className="w-6 h-6"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M9 19l7-7-7-7" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomSlider;


"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const CustomSlider = ({
  heading,
  gradientText,
  slidesData,
  sliderType,
}: {
  heading: string;
  gradientText: string;
  slidesData: { img: string; name?: string; post?: string; description?: string }[];
  sliderType: "participant" | "sponsor";
}) => {
  const navigationPrev = `button-prev-${sliderType}`;
  const navigationNext = `button-next-${sliderType}`;

  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden relative z-10">
      {/* Heading for Participants or Sponsors */}
      <div className="mb-12 text-center relative z-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 break-words">
          {sliderType === "participant" ? (
            <>
              What our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                {gradientText}
              </span>{" "}
              for us?
            </>
          ) : (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              {gradientText}
            </span>
          )}
        </h2>
      </div>

      {/* Add margin to the slider container for spacing */}
      <div className="relative w-full overflow-hidden z-10 mb-12">
        <Swiper
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            1100: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            0: { slidesPerView: 1, spaceBetween: 10 },
          }}
          navigation={{
            nextEl: `.${navigationNext}`,
            prevEl: `.${navigationPrev}`,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[Navigation]}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide
              key={index}
              className={`transition-transform duration-300 ${
                index === activeIndex ? "scale-110 z-10" : "scale-95 opacity-80"
              }`}
            >
              {sliderType === "participant" ? (
                <div className="bg-[#1e1e1e] rounded-lg shadow-md p-6 flex flex-col items-start gap-3 min-h-[320px]">
                  <div className="flex flex-col items-start gap-2">
                    <img
                      src={slide.img}
                      alt={slide.name || "Participant"}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <h3 className="text-white font-semibold text-lg">{slide.name}</h3>
                    <p className="text-gray-400 text-sm">{slide.description}</p>
                    <p className="text-purple-300 text-sm">{slide.post}</p>
                  </div>
                </div>
              ) : (
                <div
                  className="bg-[#1e1e1e] rounded-lg shadow-md flex justify-center items-center"
                  style={{ width: "100%", height: "200px" }}
                >
                  <img
                    src={slide.img}
                    alt="Sponsor"
                    className="object-contain w-20 h-20 md:w-32 md:h-32"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div
          className={`absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer bg-gradient-to-r from-pink-500 to-purple-600 w-12 h-12 flex justify-center items-center rounded-full shadow-md hover:scale-110 ${navigationPrev}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div
          className={`absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer bg-gradient-to-r from-pink-500 to-purple-600 w-12 h-12 flex justify-center items-center rounded-full shadow-md hover:scale-110 ${navigationNext}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19l7-7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
