"use client";

import Image from "next/image";
import Progress from "./Test";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ITEMS = [
  {
    id: 0,
    item: (
      <div className="relative w-full bg-[#f6f5f8] h-full">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 text-[#1d1d1f] text-center 2xl:mt-32 mt-24">
          <h1 className="text-7xl font-bold tracking-tighter">MacBook Air</h1>

          <p className="text-2xl mt-1.5">Lean. Mean. M3 machine</p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button className="bg-blue-500 text-white h-11 px-4 rounded-3xl hover:bg-blue-600 transition-all duration-300 ease-in-out">
              Learn more
            </button>

            <button className="border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white h-11 px-4 rounded-3xl transition-all duration-300 ease-in-out">
              Buy
            </button>
          </div>
        </div>

        <Image
          src={"/apple-slider/slider-3.jpg"}
          fill
          className="object-cover 2xl:pb-28 pb-20 pt-20"
          alt=""
        />
      </div>
    )
  },

  {
    id: 1,
    item: (
      <div className="relative w-full h-full flex flex-col justify-between bg-black">
        <div className="z-50 text-white text-center 2xl:mt-32 mt-24">
          <h1 className="text-7xl font-bold tracking-tighter">iPhone</h1>

          <p className="text-3xl mt-1.5 max-w-[500px] mx-auto font-normal">
            Our most powerful cameras yet. Ultrafast chips. And USC-C
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button className="bg-blue-500 text-white h-11 px-4 rounded-3xl hover:bg-blue-600 transition-all duration-300 ease-in-out">
              Learn more
            </button>

            <button className="border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white h-11 px-4 rounded-3xl transition-all duration-300 ease-in-out">
              Shop iPhone
            </button>
          </div>
        </div>

        <Image
          width={3008}
          height={692}
          src={"/apple-slider/slider-1.jpg"}
          className="scale-[2.2] absolute bottom-48"
          alt=""
        />
      </div>
    )
  },

  {
    id: 2,
    item: (
      <div className="relative w-full bg-[#f6f5f8] h-full">
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-50 text-[#1d1d1f] text-center">
          <h1 className="text-6xl font-bold tracking-tighter">Vision Pro</h1>

          <p className="text-xl mt-1.5">
            The era of spatial computing is here.
          </p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button className="bg-blue-500 text-white h-10 px-4 rounded-3xl hover:bg-blue-600 transition-all duration-300 ease-in-out">
              Learn more
            </button>

            <button className="border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white h-10 px-4 rounded-3xl transition-all duration-300 ease-in-out">
              Buy
            </button>
          </div>
        </div>

        <img
          src={"/apple-slider/slider-4.jpg"}
          className="object-contain absolute bottom-16 left-1/2 -translate-x-1/2 scale-125"
          alt=""
        />
      </div>
    )
  }
];

const AppleSlider = () => {
  const [progress, setProgress] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItems, setCurrentItems] = useState([...ITEMS]);
  const [currentXPosition, setCurrentXPosition] = useState(0);

  const [isPlaying, setIsPlaying] = useState(true);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // useEffect(() => {
  //   setCurrentItems((prev) => [ITEMS[ITEMS.length - 1], ...prev]);
  // }, []);

  console.log(currentItems);

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev === 100) {
            return 0;
          }

          return prev + 1;
        });
      }, 80);
    };

    if (isPlaying) {
      startInterval();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [progress, isPlaying, currentIndex]);

  useEffect(() => {
    if (progress === 100) {
      handleNext();
    }
  }, [progress]);

  const restartInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setProgress(0);
  };

  const handleControlPlay = () => {
    if (intervalRef.current) {
      if (isPlaying) {
        clearInterval(intervalRef.current);
      }
    }

    setIsPlaying((prev) => !prev);
  };

  const handleNext = () => {
    setCurrentXPosition((prev) => prev - 100);
    setCurrentIndex((prev) => (prev + 1) % ITEMS.length);
    restartInterval();
    setIsPlaying(true);

    const newItem = currentItems[currentIndex];

    setCurrentItems((prev) => [...prev, newItem]);
  };

  const handlePrev = () => {
    setCurrentXPosition((prev) => prev + 100);
    setCurrentIndex((prev) => (prev - 1 + ITEMS.length) % ITEMS.length);
    restartInterval();
    setIsPlaying(true);

    // const newItem =
    //   currentItems[(currentIndex - 1 + ITEMS.length) % ITEMS.length];

    // setCurrentItems((prev) => [newItem, ...prev]);
  };

  return (
    <div className="h-screen relative tracking-tight overflow-hidden flex">
      <div className="flex items-center gap-4 absolute bottom-10 left-1/2 -translate-x-1/2 z-50">
        <button
          className="w-10 aspect-square bg-gray-300/50 hover:bg-gray-200/80 transition-all duration-300 ease-in-out rounded-full flex items-center justify-center"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
          </svg>
        </button>

        <div className="w-14 aspect-square rounded-full relative">
          <Progress
            activeIndex={currentItems[currentIndex].id}
            totalSlides={ITEMS.length}
            progress={progress}
          />

          <button
            className="absolute w-10 aspect-square rounded-full bg-gray-300/50 hover:bg-gray-200/80 transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center"
            onClick={handleControlPlay}
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
              </svg>
            )}
          </button>
        </div>

        <button
          className="w-10 aspect-square bg-gray-300/50 hover:bg-gray-200/80 transition-all duration-300 ease-in-out rounded-full flex items-center justify-center"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
          </svg>
        </button>
      </div>

      {currentItems.map((item, i) => {
        return (
          <motion.div
            className="w-screen h-screen flex-shrink-0 overflow-hidden"
            key={i}
            // style={{ x: "-100%" }}
            initial={{ x: `${currentXPosition}%` }}
            animate={{ x: `${currentXPosition}%` }}
            transition={{
              // ease: [0.25, 0.1, 0.25, 1],
              // duration: 1.2
              duration: 1.2,
              ease: [0.22, 0.61, 0.36, 1]
            }}
            style={{ willChange: "transform" }}
          >
            {item.item}
          </motion.div>
        );
      })}
    </div>
  );
};

export default AppleSlider;
