// pages/swiper-page.js

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const SwiperPage = () => {
  return (
    <div>
      <h1>Swiper Example</h1>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        <SwiperSlide>
          <img src="/images/slide1.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide2.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide3.jpg" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide4.jpg" alt="Slide 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperPage;
