"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const TEXTS = ["unique.", "alluring.", "minimal."];

const COLORS = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Indigo",
  "Violet",
  "Pink",
  "Brown",
  "Black",
  "White",
  "Gray",
  "Cyan",
  "Magenta",
  "Lime",
  "Maroon",
  "Navy",
  "Olive",
  "Teal",
  "Purple"
];

const MinimalisticHeroPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TEXTS.length);
    }, 2000);

    // return () => clearInterval(interval);
  }, []);

  const marqueeVariants = {
    animate: {
      x: [0, -5400],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 80,
          ease: "linear"
        }
      }
    }
  };

  return (
    <section className="pt-52">
      <div className="text-center text-[96px] font-semibold tracking-tight leading-[110px]">
        <h1 className="relative z-20 text-white/60">Making your brand</h1>
        <div className="relative h-28 flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false} mode="popLayout">
            {TEXTS.map((text, i) => {
              if (currentIndex === i) {
                return (
                  <motion.h1
                    initial={{
                      y: i === 0 ? -60 : 60,
                      opacity: 0
                    }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: i === 0 ? 60 : -60, opacity: 0 }}
                    key={text}
                    className="absolute text-white/65"
                    transition={{
                      duration: 0.7,
                      type: "spring",
                      bounce: 0.15,
                      opacity: { duration: 0.15 }
                    }}
                    style={{ zIndex: i === 0 ? 20 : 10 }}
                  >
                    {text}
                  </motion.h1>
                );
              }
            })}
          </AnimatePresence>
        </div>

        <div>
          <button
            className={cn(
              "text-base tracking-normal flex-shrink-0 font-medium border border-[#7D7D7D] h-12 px-6 rounded-xl inline-flex items-center justify-center gap-4 relative overflow-hidden text-[#7D7D7D] group hover:text-[#0D0D0D] transition-all duration-300 ease-in-out w-48"
            )}
            onMouseOver={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 z-10 group-hover:translate-x-16 transition-transform duration-300 ease-in-out"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
            </svg>

            <span className="group-hover:translate-x-full transition-transform duration-300 ease-in-out">
              View Projects
            </span>

            <span className="absolute w-full h-full bg-[#7D7D7D] translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out"></span>
          </button>
        </div>
      </div>

      <div className="h-[500px] w-screen overflow-hidden max-w-full relative flex">
        <motion.div
          className="2xl:mt-48 mt-32 whitespace-nowrap will-change-transform w-full h-full flex items-center gap-4"
          variants={marqueeVariants}
          animate="animate"
        >
          {COLORS.map((color) => (
            <div
              key={color}
              className="w-[350px] h-full flex-shrink-0"
              style={{ background: color }}
            ></div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MinimalisticHeroPage;
