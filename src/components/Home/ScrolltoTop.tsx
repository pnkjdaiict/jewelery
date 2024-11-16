"use client";
import React, { useState, useEffect } from "react";
import { BiUpArrowAlt } from "react-icons/bi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = () => {
    const scrollY = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    const totalScrollableHeight = docHeight - windowHeight;
    const scrollPercentage = (scrollY / totalScrollableHeight) * 100;
    setScrollProgress(scrollPercentage);

    if (scrollY > windowHeight / 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-7 right-10 z-50 p-3 bg-white text-white rounded-full shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{ width: "60px", height: "60px" }}
    >
      <svg
        className="absolute top-0 left-0"
        width="60"
        height="60"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="text-gray-300"
          strokeWidth="3"
          stroke="currentColor"
          fill="transparent"
          r="16"
          cx="18"
          cy="18"
        />
        <circle
          className="text-base"
          strokeWidth="3"
          strokeDasharray={`${scrollProgress}, 100`}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="16"
          cx="18"
          cy="18"
        />
      </svg>
      <span className="relative z-10 text-2xl flex items-center justify-center">
        {" "}
        <BiUpArrowAlt className="text-base" />
      </span>
    </button>
  );
};

export default ScrollToTop;
