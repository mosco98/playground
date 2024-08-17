"use client";

import { motion } from "framer-motion";

interface AnimatedMusicProps {
  children: React.ReactNode;
  isPlaying?: boolean;
}

const AnimatedMusic = ({ children, isPlaying = true }: AnimatedMusicProps) => {
  return (
    <div className="relative">
      {isPlaying && (
        <>
          <motion.svg
            initial={{ y: 0, rotate: 0, opacity: 0, scale: 0 }}
            animate={{
              y: [-10, -35],
              opacity: [0, 0.15, 0],
              scale: [0.6, 0.85, 1]
            }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5 absolute"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M212.92,17.69a8,8,0,0,0-6.86-1.45l-128,32A8,8,0,0,0,72,56V166.08A36,36,0,1,0,88,196V62.25l112-28v99.83A36,36,0,1,0,216,164V24A8,8,0,0,0,212.92,17.69Z" />
          </motion.svg>

          <motion.svg
            initial={{ y: 0, rotate: 0, opacity: 0, scale: 0 }}
            animate={{
              y: [-10, -35],
              opacity: [0, 0.15, 0],
              scale: [0.6, 0.85, 1]
            }}
            style={{ x: 10 }}
            transition={{
              duration: 1.2,
              delay: 0.6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5 absolute"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M212.92,17.69a8,8,0,0,0-6.86-1.45l-128,32A8,8,0,0,0,72,56V166.08A36,36,0,1,0,88,196V62.25l112-28v99.83A36,36,0,1,0,216,164V24A8,8,0,0,0,212.92,17.69Z" />
          </motion.svg>

          <motion.svg
            initial={{ y: 0, rotate: 0, opacity: 0, scale: 0, x: 5 }}
            animate={{
              y: [-8, -35],
              opacity: [0, 0.15, 0],
              scale: [0.6, 0.85, 1],
              x: 20
            }}
            transition={{
              duration: 1.8,
              delay: 1,
              repeatDelay: 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5 absolute"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M212.92,17.69a8,8,0,0,0-6.86-1.45l-128,32A8,8,0,0,0,72,56V166.08A36,36,0,1,0,88,196V62.25l112-28v99.83A36,36,0,1,0,216,164V24A8,8,0,0,0,212.92,17.69Z" />
          </motion.svg>

          <motion.svg
            initial={{ y: 0, rotate: 0, opacity: 0, scale: 0, x: -2.5 }}
            animate={{
              y: -35,
              opacity: [0, 0.15, 0],
              scale: [0.6, 0.85, 1],
              x: -10
            }}
            transition={{
              duration: 1.8,
              delay: 1.8,
              repeatDelay: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5 absolute"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V50.75l69.7,20.91a8,8,0,1,0,4.6-15.32Z" />
          </motion.svg>

          <motion.svg
            initial={{ y: 0, rotate: 0, opacity: 0, scale: 0, x: 15 }}
            animate={{
              y: -35,
              opacity: [0, 0.15, 0],
              scale: [0.6, 0.85, 1],
              x: 30
            }}
            transition={{
              duration: 1.8,
              delay: 2,
              repeatDelay: 0.6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5 absolute"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V50.75l69.7,20.91a8,8,0,1,0,4.6-15.32Z" />
          </motion.svg>
        </>
      )}

      <div className="relative bg-white rounded-full">{children}</div>
    </div>
  );
};

export default AnimatedMusic;
