"use client";

import { motion } from "framer-motion";

const CircularProgressBar = ({ progress }: { progress: number }) => {
  // Ensure progress is between 0 and 100
  const normalizedProgress = Math.max(0, Math.min(progress, 100));

  const progressValue = `conic-gradient(orange ${
    normalizedProgress * 3.6
  }deg, #ddd ${normalizedProgress * 3.6}deg 360deg)`;

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <motion.div
        className="absolute w-full h-full rounded-full progress"
        style={{
          background: progressValue
        }}
        initial={{ rotate: -90 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 0.5 }}
      />
      {/* <div className="relative text-lg font-bold">{normalizedProgress}%</div> */}
    </div>
  );
};

export default CircularProgressBar;
