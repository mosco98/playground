"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import VacationCarouselItem from "./VacationCarouselItem";

interface VacationCarouselProps {
  images: string[];
  updateCurrent: (index: number) => void;
}

const VacationCarousel = ({ images, updateCurrent }: VacationCarouselProps) => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    updateCurrent(active);
  }, [active, updateCurrent]);

  const handlePrevious = () => {
    if (active === 0) return;

    setActive((prev) => (prev - 1 + images.length) % images.length);
    setDirection((prev) => prev + 500);
  };

  const handleNext = () => {
    if (active === images.length - 1) return;

    setActive((prev) => (prev + 1) % images.length);
    setDirection((prev) => prev - 500);
  };

  return (
    <>
      <motion.div
        initial={{ x: direction }}
        animate={{ x: direction }}
        transition={{ duration: 0.6, bounce: 0.1, type: "spring" }}
        className="h-full flex flex-nowrap"
      >
        {images.map((image, i) => (
          <VacationCarouselItem
            key={i}
            imagesLength={images.length}
            currentIndex={active}
            direction={direction}
            index={i}
            width={500}
            image={image}
          />
        ))}
      </motion.div>

      <motion.div
        className="absolute w-full top-1/2 z-50 -translate-y-1/2 px-3 flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.65 } }}
        exit={{ opacity: 0 }}
      >
        <motion.button
          className={cn(
            "w-8 aspect-square bg-white rounded-full flex items-center justify-center shadow-md opacity-0 transition-all duration-300 ease-in-out pointer-events-none",
            active > 0 && "opacity-100 pointer-events-auto"
          )}
          onClick={handlePrevious}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
          </svg>
        </motion.button>

        <button
          className={cn(
            "w-8 aspect-square bg-white rounded-full flex items-center justify-center shadow-md opacity-0 transition-all duration-300 ease-in-out pointer-events-none",
            active < images.length - 1 && "opacity-100 pointer-events-auto"
          )}
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
          </svg>
        </button>
      </motion.div>
    </>
  );
};

export default VacationCarousel;
