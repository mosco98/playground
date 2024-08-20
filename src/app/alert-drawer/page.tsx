"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const AlertDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen bg-white">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-black/50 h-screen w-screen"
            onClick={() => setIsOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="w-[320px] bg-white fixed bottom-6 left-1/2 rounded-3xl"
        initial={{ height: !isOpen ? 40 : "auto" }}
        animate={{ height: !isOpen ? 40 : "auto" }}
        style={{ x: "-50%", y: -10 }}
        transition={{ type: "spring", duration: 0.35 }}
      >
        <div className="w-[288px] mx-auto overflow-hidden h-full pt-4 pb-14">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.1 } }}
              exit={{ opacity: 0, transition: { duration: 0 } }}
            >
              <button className="absolute right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
                </svg>
              </button>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-red-500 w-9 h-9"
                viewBox="0 0 256 256"
              >
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z" />
              </svg>
            </motion.div>
          )}

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1 } }}
                exit={{ opacity: 0, transition: { duration: 0 } }}
                className="mt-3 mb-5 overflow-hidden"
              >
                <p className="text-lg text-black font-medium">Are you sure</p>

                <p className="text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  quisquam doloribus sapiente, ullam aspernatur minima placeat a
                  perspiciatis alias necessitatibus aut reprehenderit assumenda
                  minus quidem unde mollitia voluptatem. Consectetur, eum!
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center overflow-hidden absolute bottom-4 w-[288px]">
            <AnimatePresence>
              {isOpen && (
                <motion.button
                  className="h-10 bg-gray-200 rounded-2xl text-black text-sm font-medium overflow-hidden"
                  initial={{ width: 0, opacity: 0, y: 40 }}
                  animate={{ width: "50%", opacity: 1, y: 0 }}
                  exit={{ width: 0, opacity: 0, y: 40 }}
                  transition={{ ease: "easeInOut", duration: 0.2 }}
                >
                  Cancel
                </motion.button>
              )}
            </AnimatePresence>

            <motion.button
              className="h-10 bg-red-500 rounded-2xl text-white text-sm font-medium"
              initial={{
                width: isOpen ? "50%" : "100%",
                marginLeft: isOpen ? 16 : 0
              }}
              animate={{
                width: isOpen ? "50%" : "100%",
                marginLeft: isOpen ? 16 : 0
              }}
              onClick={() => setIsOpen(true)}
              transition={{ ease: "easeInOut", duration: 0.2 }}
            >
              Continue
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AlertDrawer;
