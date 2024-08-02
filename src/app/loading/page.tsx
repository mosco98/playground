"use client";

import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <div className="min-h-screen grid place-content-center text-white">
      <div className="flex items-center flex-col" style={{ perspective: 1000 }}>
        <motion.div
          className="w-24 aspect-square bg-white rounded-full bg-gradient-to-tr from-black to-transparent"
          transition={{
            duration: 3,
            delay: 0.5,
            ease: "easeInOut"
          }}
          animate={{
            x: 250,
            y: 42,
            rotate: 360
          }}
          onAnimationComplete={() => console.log("HELLO")}
        ></motion.div>

        <motion.div
          className="h-10 w-[500px] rounded-2xl"
          style={{
            rotateX: 75,
            background: "linear-gradient(to right, #ddd, #bbb)",
            boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
            transformOrigin: "center top",
            border: "1px solid #aaa"
          }}
          animate={{
            rotateY: 10,
            transition: { duration: 1.3, type: "spring", delay: 0.5025 }
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default LoadingPage;
