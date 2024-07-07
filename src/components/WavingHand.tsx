"use client";

import { motion } from "framer-motion";

const WavingHand = () => {
  return (
    <motion.span
      initial={{ rotate: 0 }}
      whileInView={{
        rotate: [0, 20, -20, 20, -20, 0],
        transition: {
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1
        }
      }}
      style={{
        display: "inline-block"
      }}
    >
      🖐🏽
    </motion.span>
  );
};

export default WavingHand;
