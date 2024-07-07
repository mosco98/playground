"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface VercelNavLinkProps {
  text: string;
  isActive?: boolean;
}

const VercelNavLink = ({ text, isActive = false }: VercelNavLinkProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      className="px-3 py-1.5 rounded-sm relative h-8 flex items-center justify-center font-geist"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <motion.span
        className="relative z-10 text-sm"
        animate={{
          color:
            !isHover && !isActive ? "rgb(136, 136, 136)" : "rgb(237, 237, 237)"
        }}
        transition={{ duration: 0.15 }}
        style={{
          color: isActive ? "rgb(237, 237, 237)" : "rgb(136, 136, 136)"
        }}
      >
        {text}
      </motion.span>

      <AnimatePresence>
        {isHover && (
          <motion.span
            layout
            layoutId="nav-link-hover-pill"
            className="bg-white/20 absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            style={{ borderRadius: 2, background: "rgba(237, 237, 237, 0.05)" }}
          ></motion.span>
        )}
      </AnimatePresence>

      {isActive && (
        <span
          className="absolute w-full h-px top-full mt-1.5"
          style={{ background: "rgb(237, 237, 237)" }}
        ></span>
      )}
    </button>
  );
};

export default VercelNavLink;
