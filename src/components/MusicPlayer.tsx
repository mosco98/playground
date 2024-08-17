"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import AnimatedMusic from "./AnimatedMusic";

const MusicPlayer = () => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-white rounded-xl px-5 relative"
      onMouseOver={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <AnimatePresence>
        {isCardHovered && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute inset-x-0 bg-white bottom-[90%] px-5 py-3 rounded-t-xl text-black flex items-center justify-between text-[15px] tracking-tight"
          >
            <p>Hackers Incorporated</p>

            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between gap-6 relative z-20 bg-white py-4">
        <AnimatedMusic isPlaying={!isCardHovered}>
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2931 2931"
            className="w-6 h-6"
          >
            <style dangerouslySetInnerHTML={{ __html: ".st0{fill:#2ebd59}" }} />
            <path
              className="st0"
              d="M1465.5 0C656.1 0 0 656.1 0 1465.5S656.1 2931 1465.5 2931 2931 2274.9 2931 1465.5C2931 656.2 2274.9.1 1465.5 0zm672.1 2113.6c-26.3 43.2-82.6 56.7-125.6 30.4-344.1-210.3-777.3-257.8-1287.4-141.3-49.2 11.3-98.2-19.5-109.4-68.7-11.3-49.2 19.4-98.2 68.7-109.4C1242.1 1697.1 1721 1752 2107.3 1988c43 26.5 56.7 82.6 30.3 125.6zm179.3-398.9c-33.1 53.8-103.5 70.6-157.2 37.6-393.8-242.1-994.4-312.2-1460.3-170.8-60.4 18.3-124.2-15.8-142.6-76.1-18.2-60.4 15.9-124.1 76.2-142.5 532.2-161.5 1193.9-83.3 1646.2 194.7 53.8 33.1 70.8 103.4 37.7 157.1zm15.4-415.6c-472.4-280.5-1251.6-306.3-1702.6-169.5-72.4 22-149-18.9-170.9-91.3-21.9-72.4 18.9-149 91.4-171 517.7-157.1 1378.2-126.8 1922 196 65.1 38.7 86.5 122.8 47.9 187.8-38.5 65.2-122.8 86.7-187.8 48z"
            />
          </svg>
        </AnimatedMusic>

        <button className="hover:bg-gray-100 rounded-lg w-8 aspect-square flex items-center justify-center transition-all duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M208,47.88V208.12a16,16,0,0,1-24.43,13.43L64,146.77V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0v69.23L183.57,34.45A15.95,15.95,0,0,1,208,47.88Z" />
          </svg>
        </button>

        <button className="hover:bg-gray-100 rounded-lg w-8 aspect-square flex items-center justify-center transition-all duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z" />
          </svg>
        </button>

        <button className="hover:bg-gray-100 rounded-lg w-8 aspect-square flex items-center justify-center transition-all duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M208,40V216a8,8,0,0,1-16,0V146.77L72.43,221.55A15.95,15.95,0,0,1,48,208.12V47.88A15.95,15.95,0,0,1,72.43,34.45L192,109.23V40a8,8,0,0,1,16,0Z" />
          </svg>
        </button>

        <button
          className="hover:bg-gray-100 rounded-lg w-8 aspect-square flex items-center justify-center transition-all duration-300 ease-in-out"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M160,32.25V223.69a8.29,8.29,0,0,1-3.91,7.18,8,8,0,0,1-9-.56l-65.57-51A4,4,0,0,1,80,176.16V79.84a4,4,0,0,1,1.55-3.15l65.57-51a8,8,0,0,1,10,.16A8.27,8.27,0,0,1,160,32.25ZM60,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H60a4,4,0,0,0,4-4V84A4,4,0,0,0,60,80Zm126.77,20.84a8,8,0,0,0-.72,11.3,24,24,0,0,1,0,31.72,8,8,0,1,0,12,10.58,40,40,0,0,0,0-52.88A8,8,0,0,0,186.74,100.84Zm40.89-26.17a8,8,0,1,0-11.92,10.66,64,64,0,0,1,0,85.34,8,8,0,1,0,11.92,10.66,80,80,0,0,0,0-106.66Z" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{
              height: 0,
              paddingBottom: 0,
              opacity: 0.5
            }}
            animate={{
              height: 36,
              paddingBottom: 6,
              opacity: 1
            }}
            exit={{
              height: 0,
              paddingBottom: 0,
              opacity: 0,
              y: -10
            }}
            transition={{ duration: 0.35, type: "spring" }}
            className="flex items-center justify-center overflow-hidden"
          >
            <div className="h-1 w-full bg-black"></div>

            <div className="w-6 aspect-square rounded-full white border border-grey-200"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MusicPlayer;
