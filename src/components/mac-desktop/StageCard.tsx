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
      x: "0%",
      transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" }
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
      <div className="bg-[#0D0D0D] p-2.5 text-xs font-medium text-white/70">
        about.txt
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

        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.4 } }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="mt-4"
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
                tools 😉
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default StageCard;
