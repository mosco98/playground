"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface HeadingTextProps {
  mv: MotionValue;
  index: number;
  text: string;
}

const HeadingText = ({ mv, index, text }: HeadingTextProps) => {
  const y = useTransform(mv, (value) => value * 1);

  return (
    <motion.span className="h-full block" style={{ y }}>
      {text}
    </motion.span>
  );
};

export default HeadingText;
