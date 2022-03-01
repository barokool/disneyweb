import React, { useState } from 'react';
import SwiperCore, { EffectCoverflow, Pagination,Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import './reactslick-style.css'


SwiperCore.use([Navigation])

const object = [
    'https://ss-images.saostar.vn/w800/2020/02/01/6912129/90215864-c907-49a0-93cd-766b4e498497.png',
     'https://ss-images.saostar.vn/wp700/2018/12/05/4189323/ralph-breaks-the-internet-wreck-it-ralph-2-inside-the-disney_qrvj.jpg',
     'https://image.thanhnien.vn/w660/Uploaded/2022/abfluao/2021_09_09/a1_kxfl.png',
]


SwiperCore.use([ Pagination]);

export default function Reactslick() {
  return (
    <>
      <Swiper
        navigation
        loop={true}
        pagination={true}
        className="mySwiper"
      >
        {object.map((img, i) => {
          return (
            <SwiperSlide className='swiperslider' key={i}>
              <img src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      
    </>
  );
}

