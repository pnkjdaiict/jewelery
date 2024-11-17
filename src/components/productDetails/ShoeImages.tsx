"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

export const ShoeImages = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  const imageChange = (index: number) => {
    setActiveIndex(index);
  };

  const scrollLeft = () => {
    if (thumbnailContainerRef.current) {
      thumbnailContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (thumbnailContainerRef.current) {
      thumbnailContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const images = [
    "/products/11.webp",
    "/products/12.webp",
    "/products/13.webp",
    "/products/14.webp",
    "/products/15.webp",
  ];

  return (
    <div className="w-full px-2 py- md:px-20">
      {/* Main Product Image */}
      <div className="w-full flex items-center justify-center mb-4">
        <Image
          src={images[activeIndex]}
          alt="Selected Product"
          height={600}
          width={500}
          className="h-[400px] bg-pink-50 md:h-[500px] w-full object-contain rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      {/* Thumbnail Section */}
      <div className="relative w-full border-t rounded-md py-4">
        {/* Scroll Buttons */}
        <div className="absolute -left- top-1/2 transform -translate-y-1/2 z-10">
          <button
            onClick={scrollLeft}
            className="p-2 bg-pink-700 rounded-full hover:bg-gray-700 transition-colors text-white shadow-lg"
          >
            <BiLeftArrow className="text-lg" />
          </button>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <button
            onClick={scrollRight}
            className="p-2 bg-pink-700 rounded-full hover:bg-gray-700 transition-colors text-white shadow-lg"
          >
            <BiRightArrow className="text-lg" />
          </button>
        </div>

        {/* Thumbnails */}
        <div
          ref={thumbnailContainerRef}
          className="flex items-center px-10 gap-4 overflow-x-auto scrollbar-hide py-2"
        >
          {images.map((image, index) => (
            <div
              key={index}
              onMouseEnter={() => imageChange(index)}
              onClick={() => imageChange(index)}
              className={`flex-shrink-0 w-24 h-24 md:w-28 md:h-28 border-2 rounded-lg cursor-pointer transition-all ${
                activeIndex === index
                  ? "border-pink-700 shadow-lg scale-105"
                  : "border-gray-300"
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                width={100}
                height={100}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
