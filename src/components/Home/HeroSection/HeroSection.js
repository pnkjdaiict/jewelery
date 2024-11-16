'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Constant from '../../../config/constant';

export default function HeroSection() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <div className="w-full h-[90vh] mt-36 relative">
        <div className="video-container w-full h-full">
          <video className="w-full h-full object-cover relative"   loop muted autoPlay>
            <source src={'/homepage/www.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Text Over Video */}
          <div className="absolute bg-gradient-to-t from-white to-transparent left-0 w-full h-[60%] bottom-0 flex items-center justify-center text-white text-4xl font-bold bg-opacity-50">
            <div className='flex flex-col text-base gap-y-6 font-serif mt-12'>
        
          <label className='  text-7xl font-medium capitalize font-baskervville  pl-16'>Timeless Jewelry  </label>       

          <label className='  text-7xl font-medium capitalize font-baskervville   text-right pl-48'>Every Occasion </label>
  </div>
          </div>
        </div>
      </div>
    </>
  );
}
