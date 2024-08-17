"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const COLORS = [
  "#FF5733", // Bright Red
  "#33FF57", // Bright Green
  "#3357FF", // Bright Blue
  "#FF33A1", // Bright Pink
  "#33FFF1", // Bright Cyan
  "#FFA533", // Bright Orange
  "#8D33FF" // Bright Purple
  // "#FF3333", // Bright Coral
  // "#33FF8D", // Bright Mint
  // "#FF5733" // Bright Tangerine
];

const Folder = () => {
  const [selected, setSelected] = useState("");

  return (
    <div
      className="h-full w-full flex"
      style={{ justifyContent: !selected ? "center" : "space-between" }}
    >
      <motion.div
        className="h-screen relative flex items-center justify-center"
        animate={{ width: !selected ? "100%" : "50%" }}
      >
        <motion.div
          className="h-full absolute"
          animate={{ scale: !selected ? 1 : 0.75 }}
          style={{ perspective: 1000 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {COLORS.map((color, i) => {
            const hoverMarginTop = -70 + i * 10;

            const layoutProp = { layoutId: `active-${color}` };

            return (
              <motion.div
                key={i}
                className="w-[350px] aspect-square rounded-2xl absolute top-1/2 left-1/2 cursor-pointer"
                initial={{
                  y: `${-90 + i * 18}%`,
                  rotateX: 135
                }}
                animate={{
                  y: `${-90 + i * 18}%`,
                  rotateX: 135
                }}
                style={{
                  background: color,
                  zIndex: i + 1,
                  x: "-50%"
                }}
                whileHover={{
                  marginTop: hoverMarginTop
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={() => setSelected(color)}
                {...(color === selected && { ...layoutProp })}
              ></motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div className="w-1/2 h-screen flex items-center justify-center pr-20">
            <motion.div
              className="w-full aspect-video rounded-2xl"
              layoutId={`active-${selected}`}
              style={{ background: selected }}
            >
              Hello
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Folder;
