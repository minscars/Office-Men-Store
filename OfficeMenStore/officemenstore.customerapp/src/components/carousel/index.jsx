import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image1 from '@/components/carousel/images/banner1.jpg';
import Image2 from '@/components/carousel/images/banner2.jpg';
import Image3 from '@/components/carousel/images/banner3.jpg';
import Image4 from '@/components/carousel/images/banner4.jpg';
import './styles.css';
import { carouselData } from '@/data';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
