"use client";

import Rainfall from "@/components/quote/Rainfall";
import Sunshine from "@/components/quote/Sunshine";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <motion.div
      className={cn(
        "bg-[#2EB5E5] h-screen transition-all duration-700 ease-in-out",
        isDarkMode && "bg-black"
      )}
    >
      {isDarkMode && <Rainfall />}

      <AnimatePresence>
        {!isDarkMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
            className="top-40 left-1/2 sun"
            style={{ x: "-50%" }}
          >
            <Sunshine />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={cn(
          "flex bg-gray-200 w-[100px] rounded-3xl p-1.5 transition-all duration-500 ease-in-out relative top-1/2 left-1/2 overflow-hidden z-50 -ml-10",
          isDarkMode && "bg-white/10"
        )}
        style={{
          justifyContent: !isDarkMode ? "flex-start" : "flex-end"
          // x: "-50%"
        }}
        onClick={() => setIsDarkMode((prev) => !prev)}
      >
        <motion.span
          className={cn(
            "w-10 aspect-square rounded-full overflow-hidden relative z-10"
          )}
          layout
        >
          <span
            className={cn(
              "w-full h-full bg-black block transition-all duration-500 ease-linear",
              isDarkMode && "bg-gray-200"
            )}
          ></span>
        </motion.span>

        <AnimatePresence initial={false}>
          {!isDarkMode && (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 absolute right-4 top-1/2"
              fill="#000000"
              viewBox="0 0 256 256"
              initial={{ y: "-220%" }}
              animate={{ y: "-50%" }}
              exit={{ y: "-220%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z" />
            </motion.svg>
          )}
        </AnimatePresence>

        <AnimatePresence initial={false}>
          {isDarkMode && (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 absolute left-4 top-1/2"
              fill="#FFFFFF"
              viewBox="0 0 256 256"
              initial={{ y: "220%", scale: 0.5 }}
              animate={{ y: "-50%", scale: 1 }}
              exit={{ y: "220%", scale: 0.5 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
};

export default ThemeToggle;
