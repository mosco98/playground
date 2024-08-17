"use client";

import { motion } from "framer-motion";

interface ProgressProps {
  activeIndex: number;
  percentage: number;
  totalSlides?: number;
}

const Progress = ({
  activeIndex,
  percentage,
  totalSlides = 3
}: ProgressProps) => {
  const stroke = 3;
  const size = 44;
  const center = size / 2;
  const r = (size - stroke) / 2;
  const gapAngle = 16; // Angle for the gap in degrees
  const segmentAngle = 360 / totalSlides - gapAngle; // Angle for each segment

  const getStroke = (i: number): string => {
    if (i === 0) {
      return "blue";
    }
    if (i === 1) {
      return "red";
    }
    return "green";
  };

  const pathVariants = {
    hidden: { pathLength: 0, stroke: "red" },
    visible: { pathLength: 1, stroke: "blue" }
  };

  return (
    <div style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <defs>
          <mask id="circle-mask">
            <rect x="0" y="0" width={size} height={size} fill="white" />
            <circle cx={center} cy={center} r={r - stroke / 2} fill="black" />
          </mask>
        </defs>

        {Array.from({ length: totalSlides }).map((_, i) => {
          const startAngle = i * (360 / totalSlides) - 90; // Start angle of each segment
          const endAngle = startAngle + segmentAngle;
          const largeArcFlag = segmentAngle > 180 ? 1 : 0;
          const x1 = center + r * Math.cos((Math.PI * startAngle) / 180);
          const y1 = center + r * Math.sin((Math.PI * startAngle) / 180);
          const x2 = center + r * Math.cos((Math.PI * endAngle) / 180);
          const y2 = center + r * Math.sin((Math.PI * endAngle) / 180);

          const pathD = `
            M ${center},${center}
            L ${x1},${y1}
            A ${r},${r} 0 ${largeArcFlag} 1 ${x2},${y2}
            Z
          `;

          return (
            <g key={i}>
              {/* Static Base Path */}
              <path
                d={pathD}
                stroke={"grey"}
                strokeWidth={stroke}
                // strokeLinecap="round"
                // strokeLinejoin="round"
                fill="none"
                mask="url(#circle-mask)"
              />

              {/* Animated Top Path */}
              <motion.path
                d={pathD}
                stroke={"red"}
                strokeWidth={stroke}
                fill="none"
                variants={pathVariants}
                // initial="hidden"
                // animate="visible"
                // strokeDasharray={`${0.5}px 1px`}
                transition={{
                  duration: 2, // Duration of the animation
                  ease: "easeInOut"
                }}
                mask="url(#circle-mask)"
                style={{ strokeDasharray: `0.2 1` }}
                pathLength={1}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default Progress;
