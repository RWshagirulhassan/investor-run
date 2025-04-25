import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import playercardbg from "../../public/images/playercardbg.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { players } from "../pages/player_detail_page";

const CoverflowSwiper = ({ cards = [], className = "", loop = true }) => {
  const navigate = useNavigate();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <div
      className={`z-[1000] relative w-full  mx-auto px-4 md:px-8 py-8 ${className}`}
    >
      {/* Custom Navigation Buttons */}
      <div className="absolute z-20 -bottom-20 left-1/2 -translate-x-1/2 flex  bg-[#3a558f] rounded-full px-1 gap-2 border-[2px] border-yellow-500">
        <div
          ref={prevRef}
          className="p-2 rounded-full transition cursor-pointer  text-yellow-500"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div
          ref={nextRef}
          className="p-2 rounded-full transition cursor-pointer text-yellow-500 "
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={loop}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{
          el: paginationRef.current,
          clickable: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.params.pagination.el = paginationRef.current;
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {players.map((card, index) => (
          <SwiperSlide
            key={index}
            className=" !w-[350px] md:!w-[400px] lg:!w-[450px] !h-auto"
          >
            <div className="overflow-hidden cursor-pointer rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 relative h-full w-full z-1000">
              <button
                onClick={() => {
                  navigate("/detail", { state: { selectedIndex: index } });
                }}
                // to="/detail"
                className="min-h-[42.2vh]  min-w-full flex h-full w-full grow-0  relative bg-[radial-gradient(circle,_#375FFF,_#22388D)]"
              >
                {/* <img
                  className="w-full h-full absolute object-contain "
                  src={playercardbg}
                ></img> */}
                <img
                  className="w-full h-full absolute object-contain top-[10vh] "
                  src={card.img}
                ></img>
                <text className="top-[5vh] left-[2vw] absolute object-contain font-black text-5xl text-white">
                  {card.name}
                </text>
                <div className="text-black absolute right-[3vw] top-[3vh] cursor-pointer">
                  <svg
                    width="108"
                    height="108"
                    viewBox="0 0 108 108"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_di_815_13528)">
                      <rect
                        x="10.1328"
                        y="7"
                        width="88.2"
                        height="88.2"
                        rx="44.1"
                        fill="#FCC31E"
                      />
                      <path
                        d="M39.2719 65.8175C38.6007 65.1463 38.5447 64.0928 39.1041 63.3579L39.2719 63.1659L65.7876 36.6501C66.5199 35.9179 67.707 35.9179 68.4392 36.6501C69.1104 37.3213 69.1664 38.3748 68.607 39.1097L68.4392 39.3017L41.9234 65.8175C41.1912 66.5497 40.0041 66.5497 39.2719 65.8175Z"
                        fill="white"
                      />
                      <path
                        d="M45.7712 39.8994C44.7357 39.9016 43.8945 39.064 43.8922 38.0285C43.8902 37.0871 44.5823 36.3063 45.4861 36.1704L45.7631 36.1495L67.1066 36.1036C68.0507 36.1015 68.8329 36.7976 68.9657 37.7045L68.9855 37.9824L68.9414 59.3276C68.9392 60.3631 68.098 61.2008 67.0625 61.1986C66.1212 61.1967 65.3433 60.5013 65.2112 59.5969L65.1915 59.3198L65.2306 39.8574L45.7712 39.8994Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_di_815_13528"
                        x="0.892813"
                        y="0.56"
                        width="106.679"
                        height="106.68"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="2.8"
                          operator="dilate"
                          in="SourceAlpha"
                          result="effect1_dropShadow_815_13528"
                        />
                        <feOffset dy="2.8" />
                        <feGaussianBlur stdDeviation="3.22" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_815_13528"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_815_13528"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="7"
                          operator="erode"
                          in="SourceAlpha"
                          result="effect2_innerShadow_815_13528"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="0.56" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect2_innerShadow_815_13528"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots */}
      <div ref={paginationRef} className="swiper-pagination mt-6 text-center" />
    </div>
  );
};

export default CoverflowSwiper;
