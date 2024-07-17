"use client";

import { useEffect, useState } from "react";

import { motion, useMotionValue } from "framer-motion";
import CarouselItem from "./CarouselItem";

const items = [
  "/coffee-1.webp",
  "/coffee-2.webp",
  "/coffee-3.jpeg",
  "/coffee-4.webp",
  "/coffee-5.webp",
  "/coffee-10.jpeg",
  "/coffee-6.webp",
  "/coffee-7.webp",
  "/coffee-8.webp",
  "/coffee-9.webp",
  "/coffee-10.jpeg"
];

const SLIDE_WIDTH = 350;

const FoggyCarousel = () => {
  const [active, setActive] = useState(0);

  const currentIndex = useMotionValue(0);

  useEffect(() => {
    currentIndex.set(0);
  }, []);

  useEffect(() => {
    currentIndex.set(active);
  }, [active, currentIndex]);

  const handlePrevious = () => {
    setActive((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % items.length);
  };

  return (
    <motion.div className="flex items-center justify-center overflow-hidden pb-40 relative">
      {/* <div
        className="w-full h-10 absolute top-0"
        style={{
          background:
            "linear-gradient(360deg, rgba(253, 253, 255, 0.01) 0%, #F6F1D1 81.62%)",
          zIndex: 1000
        }}
      ></div> */}

      <div
        className="w-[35%] h-full absolute z-50 left-0"
        style={{
          background:
            "linear-gradient(-90deg, rgba(253, 253, 255, 0.00) 0%, #F6F1D1 81.62%)",
          zIndex: 10000
        }}
      ></div>

      <div
        className="w-[35%] h-full absolute z-50 right-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(253, 253, 255, 0.00) 0%, #F6F1D1 81.62%)",
          zIndex: 10000
        }}
      ></div>

      {items.map((item, i) => (
        <CarouselItem
          key={i}
          active={active}
          index={i}
          item={item}
          mv={currentIndex}
          itemsLength={items.length}
          width={SLIDE_WIDTH}
        />
      ))}

      <div
        className="h-[450px] bg-transparent rounded-3xl absolute left-1/2 -translate-x-1/2 flex items-center justify-between text-[#554C11]"
        style={{ width: `${SLIDE_WIDTH}px`, zIndex: 10000 }}
      >
        <button
          className="w-10 aspect-square rounded-full bg-[#F6F1D1] opacity-80 flex items-center justify-center relative -left-6"
          onClick={handlePrevious}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
          </svg>
        </button>
        <button
          className="w-10 aspect-square rounded-full bg-[#F6F1D1] opacity-80 flex items-center justify-center relative -right-6"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default FoggyCarousel;
