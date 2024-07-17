"use client";

import { cn } from "@/lib/utils";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface CarouselItemProps {
  active: number;
  index: number;
  item: string;
  mv: MotionValue;
  itemsLength: number;
  width?: number;
}

const CarouselItem = ({
  active,
  index,
  item,
  mv,
  itemsLength,
  width = 350
}: CarouselItemProps) => {
  const [xValue, setXValue] = useState(0);

  const x = useTransform(mv, (latest) => {
    let placeValue = latest % itemsLength;
    let offset = (itemsLength + index - placeValue) % itemsLength;

    let memo = offset * width;

    if (offset > itemsLength / 2) {
      memo -= itemsLength * width;
    }

    return memo;
  });

  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      setXValue(latest);
    });

    return () => unsubscribe();
  }, [x]);

  function createNumberArray() {
    let numberArray = [];
    for (let i = active - 4; i <= active + 4; i++) {
      numberArray.push(i);
    }
    return numberArray;
  }

  const visibleItems = createNumberArray();

  function distributeCarouselItems() {
    const carousels = Array.from({ length: itemsLength }, (_, index) => index);
    const length = carousels.length;
    const halfLength = Math.floor(length / 2);
    const start = (active - halfLength + length) % length;

    let result = [];
    for (let i = 0; i < length; i++) {
      result.push(carousels[(start + i) % length]);
    }

    return result;
  }

  const carouselShape = distributeCarouselItems();

  const x1 = carouselShape[0];
  const x2 = carouselShape[carouselShape.length - 1];

  console.log({ carouselShape, active, x1, x2 });

  return (
    <motion.div
      className={cn(
        "h-[500px] flex-shrink-0 flex items-center justify-center relative"
      )}
      // layoutId={`${item.toLowerCase().split("").join("-")}-${index}`}
      initial={{ scale: active === index ? 1 : 0.95, x: xValue }}
      animate={{ scale: active === index ? 1 : 0.95, x: xValue }}
      transition={
        x1 === active || x2 === active
          ? { duration: 5, type: "spring", bounce: 0.15 }
          : { duration: 2, type: "spring", bounce: 0.15 }
      }
      style={{
        zIndex: visibleItems.includes(index) ? 1000 : 1,
        position: visibleItems.includes(index) ? "relative" : "absolute"
      }}
    >
      <div
        className="absolute h-full rounded-3xl flex items-center justify-center border-2 border-[#F6F1D1] shadow-2xl shadow-[#F6F1D1]"
        style={{ width: `${width}px` }}
      >
        <motion.img
          className={cn(
            "w-full h-full object-cover z-50 rounded-2xl",
            x1 + 1 === active || (x2 + 1 === active && "opacity-0")
          )}
          src={item}
          width={width}
          height={500}
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default CarouselItem;
