"use client";

import { AnimatePresence, motion } from "framer-motion";

interface ProgressProps {
  activeIndex: number;
  progress: number;
  totalSlides?: number;
}

const Progress = ({
  progress,
  activeIndex,
  totalSlides = 3
}: ProgressProps) => {
  const size = 56;
  const strokeWidth = 3.5;
  const gap = 3;

  const center = size / 2;
  const radius = (size - strokeWidth - 1) / 2;
  const circumference = 2 * Math.PI * radius;

  const r = circumference / totalSlides - 4;

  const strokeDashoffset = circumference * (1 - 100 / totalSlides / 100) + gap;

  const mappedProgress = Math.min(0 + (progress / 100) * r, r);

  return (
    <div style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} style={{ rotate: "155deg" }}>
        {Array.from({ length: totalSlides }).map((_, i) => {
          const rotation = (i * 360) / totalSlides;

          const dashLength = circumference - strokeWidth;

          return (
            <g key={i}>
              <circle
                cy={center}
                cx={center}
                r={radius}
                strokeWidth={strokeWidth - 0.5}
                className={
                  activeIndex > i ? "stroke-[#1d1d1f]" : "stroke-gray-300"
                }
                fill="none"
                strokeDasharray={dashLength}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transformOrigin: center
                }}
              />

              <Circle
                center={center}
                radius={radius}
                strokeWidth={strokeWidth}
                activeIndex={activeIndex}
                i={i}
                dashLength={dashLength}
                rotation={rotation}
                strokeDashoffset={strokeDashoffset}
                r={r}
                mappedProgress={mappedProgress}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default Progress;

interface CircleProps {
  center: number;
  radius: number;
  strokeWidth: number;
  activeIndex: number;
  i: number;
  dashLength: number;
  rotation: number;
  strokeDashoffset: number;
  r: number;
  mappedProgress: number;
}

const Circle = ({
  center,
  radius,
  strokeWidth,
  activeIndex,
  i,
  dashLength,
  rotation,
  strokeDashoffset,
  r,
  mappedProgress
}: CircleProps) => {
  if (activeIndex === i) {
    return (
      <AnimatePresence>
        <motion.circle
          key={i}
          cy={center}
          cx={center}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={dashLength}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: center,
            ...(activeIndex > i && { strokeDashoffset }),
            willChange: "auto"
          }}
          initial={{ stroke: "transparent" }}
          animate={{
            strokeDashoffset:
              activeIndex === i
                ? strokeDashoffset + (r - mappedProgress)
                : strokeDashoffset,
            // strokeOpacity: 1,
            stroke: "#1d1d1f"
          }}
          exit={{ strokeOpacity: 0 }}
          transition={{
            type: "spring",
            duration: 0.3,

            stroke: {
              delay: 1.1,
              duration: 0
            }
          }}
        />
      </AnimatePresence>
    );
  }

  if (activeIndex > i) {
    return (
      <AnimatePresence>
        <motion.circle
          cy={center}
          cx={center}
          r={radius}
          strokeWidth={strokeWidth - 0.8}
          stroke={"#1d1d1f"}
          fill="none"
          strokeDasharray={dashLength}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: center
          }}
          animate={{ strokeDashoffset }}
        />
      </AnimatePresence>
    );
  }

  return (
    <circle
      cy={center}
      cx={center}
      r={radius}
      strokeWidth={strokeWidth - 0.8}
      className="stroke-gray-300"
      fill="none"
      strokeDasharray={dashLength}
      strokeDashoffset={strokeDashoffset}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: center
      }}
    />
  );
};
