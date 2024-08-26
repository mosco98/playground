"use client";

import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <div className="h-screen text-white relative">
      <motion.h1
        className="absolute top-1/2 left-1/2 text-[10rem] uppercase tracking-tighter font-black"
        style={{ y: -180, x: "-50%" }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.7 }}
        >
          Hang
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.2 }}
        >
          in
        </motion.span>
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.7 }}
        className="absolute top-1/2 left-1/2 text-[10rem] uppercase tracking-tighter font-black"
        style={{ y: -30, x: "-50%" }}
      >
        there
      </motion.h1>

      <div
        className="flex items-center flex-col h-full relative"
        style={{ perspective: 1000 }}
      >
        <motion.div
          className="w-24 aspect-square bg-white rounded-full bg-gradient-to-tr from-black to-transparent absolute"
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
          style={{ top: "calc(50% - 96px)" }}
        ></motion.div>

        <motion.div
          className="h-10 w-[500px] rounded-2xl absolute top-1/2"
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

      <motion.div
        className="w-screen h-screen bg-white fixed"
        initial={{ top: "100%" }}
        animate={{ top: 0 }}
        transition={{ delay: 5.5 }}
      ></motion.div>
    </div>
  );
};

export default LoadingPage;
