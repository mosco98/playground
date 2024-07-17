"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const colors = [
  {
    bg: "#ED7D3A",
    text: "#FBE8DA"
  },

  {
    bg: "#462521",
    text: "#EBD8D5"
  },

  {
    bg: "#EF2D56",
    text: "#FCD9E1"
  },

  {
    bg: "#214E34",
    text: "#E2F3E9"
  }
];

const ExploringColorsPage = () => {
  const numbers = [0, 1, 3, 2];

  const [rotate, setRotate] = useState(0);
  const [currentColor, setCurrentColor] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentColor((prev) => (prev + 1) % colors.length);
      setRotate((prev) => prev - 90);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen grid grid-cols-2">
      <motion.div
        className="flex items-center justify-center"
        initial={{ background: colors[numbers[currentColor]].text }}
        animate={{ background: colors[numbers[currentColor]].text }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.div
          className="w-[500px] h-[500px] grid grid-cols-2"
          animate={{ rotate: `${rotate}deg` }}
          transition={{
            duration: 1,
            delay: 0.2,
            bounce: 0.3,
            type: "spring"
          }}
        >
          {colors.map((color, i) => (
            <div key={i} className="relative">
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-5xl text-white"
                style={{
                  background: color.bg
                }}
                initial={{
                  clipPath:
                    numbers[currentColor] === i
                      ? "circle(50% at 50% 50%)"
                      : "circle(100% at 50% 50%)"
                }}
                animate={{
                  clipPath:
                    numbers[currentColor] === i
                      ? "circle(50% at 50% 50%)"
                      : "circle(100% at 50% 50%)"
                }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center"
        initial={{ background: colors[numbers[currentColor]].bg }}
        animate={{ background: colors[numbers[currentColor]].bg }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="flex-shrink-0 overflow-hidden h-48 py-2 flex items-center justify-center relative">
          <AnimatePresence initial={false} mode="popLayout">
            {colors.map(
              (_color, i) =>
                numbers[currentColor] === i && (
                  <motion.h1
                    key={i}
                    className="text-[200px] font-semibold"
                    initial={{
                      y: "100%",
                      opacity: 0.5,
                      color: colors[numbers[currentColor]].text
                    }}
                    animate={{
                      y: "0",
                      opacity: 1,
                      color: colors[numbers[currentColor]].text
                    }}
                    exit={{
                      y: "-100%",
                      opacity: 0
                    }}
                    transition={{
                      delay: 0.2,
                      duration: 0.8,
                      bounce: 0.2,
                      type: "spring"
                    }}
                  >
                    Aa
                  </motion.h1>
                )
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default ExploringColorsPage;
