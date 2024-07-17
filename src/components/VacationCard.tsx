"use client";

import { useState } from "react";

import { motion } from "framer-motion";

interface VacationCardProps {
  title: string;
  cover: string;
}

const VacationCard = ({ title, cover }: VacationCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div className="h-72 rounded-2xl relative w-full max-w-[250px]">
      {!expanded && (
        <motion.div
          className="relative w-full h-full cursor-pointer rounded-[24px]"
          onClick={() => setExpanded(true)}
          layoutId={`${title.toLowerCase().split(" ").join("-")}-photo`}
          layout="preserve-aspect"
        >
          <motion.img
            src={cover}
            alt="paris"
            className="rounded-[24px] object-cover h-full w-full aspect-square absolute"
            // transition={{ duration: 0.35, type: "spring", bounce: 0.1 }}

            // layout="preserve-aspect"
          />
        </motion.div>
      )}

      {expanded && (
        <motion.div
          className="fixed h-screen w-screen bg-transparent top-0 left-0 flex items-center justify-center z-50"
          onClick={() => setExpanded(false)}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bg-gray-300/30 backdrop-blur-xl w-screen h-screen"
          ></motion.div>

          <motion.div
            className="z-50 w-[500px]"

            // layout="preserve-aspect"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
              exit={{ opacity: 0 }}
              className="text-5xl mb-4 font-bold tracking-tighter"
            >
              {title}
            </motion.h1>

            {expanded && (
              <motion.div
                className="relative w-full h-72 rounded-[24px]"
                layoutId={`${title.toLowerCase().split(" ").join("-")}-photo`}
              >
                <motion.img
                  src={cover}
                  alt="paris"
                  className="rounded-[24px] object-cover absolute w-full h-full"
                />
              </motion.div>
            )}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
              exit={{ opacity: 0 }}
              className="mt-4"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              exercitationem, voluptates numquam, voluptatibus expedita rem
              consequatur iure adipisci recusandae repellat, sit ratione quaerat
              laborum qui ducimus sunt quasi iste tempora. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Corrupti eius ratione fuga
              eaque nesciunt, sed, nihil quas expedita dicta earum debitis natus
              magni officiis facere dolor eum neque possimus laborum! Lorem
              ipsum dolor sit, amet consectetur adipisicing elit.
            </motion.p>
          </motion.div>
        </motion.div>
      )}

      {/* <div className="absolute h-20 left-0 bottom-0 w-full bg-gradient-to-b from-transparent to-white/30 backdrop-blur-sm"></div> */}

      {/* <div className="fixed w-screen h-screen left-0 top-0 bg-red-500"></div> */}
    </motion.div>
  );
};

export default VacationCard;
