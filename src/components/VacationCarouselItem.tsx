"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface VacationCarouselItemProps {
  imagesLength: number;
  index: number;
  width: number;
  image: string;
  currentIndex: number;
  direction: number;
}

const VacationCarouselItem = ({
  imagesLength,
  index,
  width,
  image,
  currentIndex,
  direction
}: VacationCarouselItemProps) => {
  return (
    <motion.div className="h-full relative flex-shrink-0" style={{ width }}>
      <Image src={image} fill alt="" className="object-cover" />
    </motion.div>
  );
};

export default VacationCarouselItem;
