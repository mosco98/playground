"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import WavingHand from "../WavingHand";

interface StageCardProps {
  onOpen: () => void;
}

const StageCard = ({ onOpen }: StageCardProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to handle outside clicks
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false); // Close if clicked outside
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const cardVariants = {
    small: {
      rotateY: "30deg",
      borderRadius: "8px",
      scale: 0.9,
      opacity: 0.8,
      width: "160px",
      height: "100px",
      x: "0%"
      // transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" }
    },
    big: {
      rotateY: "0deg",
      borderRadius: "12px",
      scale: 1,
      opacity: 1,
      width: "35vw",
      height: "auto",
      x: "50%"
    }
  };

  const handleClick = () => {
    if (!isOpen) {
      // Call onOpen prop to notify parent or perform any necessary action
      onOpen();
      setIsOpen(true);
    }
  };

  return (
    <motion.div
      className="bg-[#171717] flex-shrink-0 z-50 relative flex flex-col overflow-hidden shadow-xl"
      variants={cardVariants}
      initial={isOpen ? "big" : "small"}
      animate={isOpen ? "big" : "small"}
      whileHover={{ scale: 1, opacity: 1, transition: { delay: 0 } }}
      onClick={handleClick}
      layout
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{
        position: isOpen ? "fixed" : "relative",
        backdropFilter: "blur(10px)"
      }}
      ref={ref}
    >
      <div className="bg-[#0D0D0D] p-2.5 text-xs font-medium text-white/70 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span
            className="w-2.5 aspect-square bg-red-500 rounded-full
            flex items-center justify-center
          "
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-1.5 h-1.5 flex-shrink-0 stroke-[2px]"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
            </svg>
          </span>

          <span
            className="w-2.5 aspect-square bg-yellow-500 rounded-full
            flex items-center justify-center
          "
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-1.5 h-1.5 flex-shrink-0 stroke-[2px]"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z" />
            </svg>
          </span>

          <span
            className="w-2.5 aspect-square bg-green-500 rounded-full
            flex items-center justify-center
          "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-1.5 h-1.5 flex-shrink-0 stroke-[2px] rotate-[135deg]"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z" />
            </svg>
          </span>
        </div>
        <p>about.txt</p>
      </div>

      <motion.div
        // animate={{ scale: isOpen ? 1 : 0.9 }}
        className="px-2.5 pt-4 pb-8 flex-1"
      >
        <Image
          className="w-11 h-11 rounded-full object-cover"
          width={44}
          height={44}
          src={"/me.jpg"}
          alt="me"
        />

        <AnimatePresence initial={true} mode="wait">
          {isOpen && (
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="mt-4 overflow-hidden relative"
            >
              <h1 className="text-xl font-semibold font-satoshi text-white">
                <WavingHand /> Hi there! I&apos;m Moses.
              </h1>

              <p className="mt-2 tracking-normal text-sm">
                I&apos;m a{" "}
                <span className="underline">Front-end developer</span> with 5
                years of experience, crafting websites and web apps into
                delightful digital experiences. I believe in blending beauty,
                usability, and performance to create something truly special.
                Let&apos;s make the web awesome together!
              </p>

              <p className="mt-2 tracking-normal text-sm">
                A list of some of the projects I&apos;m proud to have
                contributed to are on the right.
              </p>

              <p className="mt-2 tracking-normal text-sm">
                Move your cursor to the bottom of the page to see my Skills and
                tools.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default StageCard;
