"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import VacationCarousel from "./VacationCarousel";

interface ExploreCardProps {
  title: string;
  images: string[];
}

const ExploreCard = ({ images, title }: ExploreCardProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-w-full">
      {!expanded && (
        <>
          <motion.div
            className="h-72 relative max-w-full flex flex-col gap-1 group cursor-pointer"
            onClick={() => setExpanded(true)}
          >
            <motion.div
              className="relative w-full flex-1 overflow-hidden"
              layoutId={`${title.toLowerCase().split(" ").join("-")}-photo`}
              style={{
                aspectRatio: "1/1",
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
                borderBottomLeftRadius: "6px",
                borderBottomRightRadius: "6px"
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                bounce: 0,
                delay: 0.5
              }}
            >
              <Image
                src={images[selectedImage]}
                fill
                alt=""
                className="object-cover aspect-square group-hover:scale-110 transition-all duration-300 ease-in-out"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10, transition: { delay: 0 } }}
              transition={{ duration: 0.3, type: "spring", delay: 0.6 }}
              className="bg-black rounded-t-[6px] rounded-b-[16px] px-4 py-3 text-white flex items-center justify-between overflow-hidden"
            >
              <div className="h-auto overflow-hidden pr-2">
                <motion.p
                  className="font-medium tracking-tight font-geist"
                  layoutId={`${title.toLowerCase().split(" ").join("-")}-title`}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    bounce: 0,
                    delay: 0.485
                  }}
                  style={{ fontSize: "15px" }}
                >
                  {title}
                </motion.p>
              </div>

              <motion.button
                className="text-xs text-white/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1.1, duration: 0.3, type: "spring" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-all duration-300 ease-in-out"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </>
      )}

      <AnimatePresence mode="wait">
        {expanded && (
          <motion.div
            exit={{ transition: { delay: 0.5 } }}
            className="fixed h-screen w-screen top-0 left-0 z-50"
            onClick={() => setExpanded(false)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.5 } }}
              className="text-5xl mb-4 font-bold tracking-tighter absolute h-screen w-screen bg-white/40 backdrop-blur-xl"
            ></motion.div>

            <div
              className="w-[500px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.h1
                className="text-5xl font-black tracking-tight font-geist"
                layoutId={`${title.toLowerCase().split(" ").join("-")}-title`}
                transition={{ duration: 0.6, type: "spring" }}
              >
                {title}
              </motion.h1>

              <motion.div
                className="w-[500px] h-72 relative overflow-hidden mt-4"
                layoutId={`${title.toLowerCase().split(" ").join("-")}-photo`}
                style={{ borderRadius: "16px", aspectRatio: "1/1" }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <motion.div className="relative w-full h-full">
                  <VacationCarousel
                    images={images}
                    updateCurrent={(index) => setSelectedImage(index)}
                  />
                </motion.div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.25 } }}
                exit={{ opacity: 0 }}
                className="mt-4 tracking-tight"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                exercitationem, voluptates numquam, voluptatibus expedita rem
                consequatur iure adipisci recusandae repellat, sit ratione
                quaerat laborum qui ducimus sunt quasi iste tempora. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Corrupti eius
                ratione fuga eaque nesciunt, sed, nihil quas expedita dicta
                earum debitis natus magni officiis facere dolor eum neque
                possimus laborum! Lorem ipsum dolor sit, amet consectetur
                adipisicing elit.
              </motion.p>

              <div className="flex justify-end mt-8">
                <motion.button
                  className="text-sm font-medium h-8 px-3 rounded-lg backdrop-blur-md inline-flex items-center gap-1.5 bg-gray-200 group"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
                  exit={{ opacity: 0 }}
                >
                  Explore
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-all duration-300 ease-in-out"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExploreCard;
