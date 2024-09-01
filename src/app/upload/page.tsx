"use client";

import { AnimatePresence, motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

const UploadPage = () => {
  const [isUploadComplete, setIsUploadComplete] = useState(false);
  const [currentHeight, setCurrentHeight] = useState(19);
  const divRef = useRef<HTMLDivElement>(null);

  useAnimationFrame(() => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      const parentHeight = 250;
      const heightPercentage = (rect.height / parentHeight) * 100;
      setCurrentHeight(Math.round(heightPercentage));
    }
  });

  return (
    <div className=" min-h-screen bg-black grid place-content-center font-geist text-black font-medium">
      <motion.div
        initial={{
          height: !isUploadComplete ? 250 : 48,
          width: !isUploadComplete ? 250 : 200
        }}
        animate={{
          height: !isUploadComplete ? 250 : 48,
          width: !isUploadComplete ? 250 : 200
        }}
        layout
        className="bg-white rounded-xl overflow-hidden relative shadow-sm shadow-black text-sm cursor-pointer border-[0.5px] border-gray-200"
      >
        <p className="absolute top-6 left-6">Uploading...</p>

        <motion.div
          className="absolute w-full bg-green-400 bottom-0 p-6"
          layout
          initial={{ height: 0 }}
          ref={divRef}
          animate={{
            height: [
              "0%",
              "0%",
              "3%",
              "15%",
              "28%",
              "43%",
              "60%",
              "72%",
              "89%",
              "92%",
              "100%"
            ],
            clipPath: [
              "polygon(0 0, 100% calc(0% + 1.5vw), 100% 100%, 0 100%)",
              "polygon(0 calc(0% + 1.5vw), 100% 0, 100% 100%, 0 100%)",
              "polygon(0 0, 100% calc(0% + 1.5vw), 100% 100%, 0 100%)",
              "polygon(0 calc(0% + 1.5vw), 100% 0, 100% 100%, 0 100%)",
              "polygon(0 0, 100% calc(0% + 1.5vw), 100% 100%, 0 100%)",
              "polygon(0 calc(0% + 1.5vw), 100% 0, 100% 100%, 0 100%)",
              "polygon(0 0, 100% calc(0% + 1.5vw), 100% 100%, 0 100%)",
              "polygon(0 calc(0% + 1.5vw), 100% 0, 100% 100%, 0 100%)",
              "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            ]
          }}
          transition={{ duration: 5 }}
          onAnimationComplete={() => setIsUploadComplete(true)}
        >
          <motion.p className="text-sm text-white" layoutId="counter">
            {currentHeight}%
          </motion.p>
        </motion.div>

        <AnimatePresence>
          {isUploadComplete && (
            <>
              <motion.div
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: -10, opacity: 0 }}
                transition={{ delay: 2 }}
                className="absolute inset-0 flex items-center justify-center gap-2 text-white"
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  color="currentColor"
                  fill="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <path
                    d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 12.5L10.5 15L16 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>

                <motion.p layoutId="counter" layout="preserve-aspect">
                  Upload complete
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center gap-2 text-white bg-zinc-500 opacity-0"
              >
                <p>Continue browsing</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.5267 18L13.1187 16.5858L16.6882 13.0006L3.5 13.0006L3.5 11.0006L16.6886 11.0006L13.1186 7.41422L14.5266 6L20.5 12.0003L14.5267 18Z"
                    fill="currentColor"
                  />
                </svg>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default UploadPage;
