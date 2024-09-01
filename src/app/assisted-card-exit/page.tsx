"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const AssistedCardExitPage = () => {
  const [showCursor, setShowCursor] = useState(false);
  const [isClosed, setisClosed] = useState(false);

  const cursorVariants = {
    initial: {
      offsetDistance: "0%",
      y: 200,
      x: 100
    },
    animate: {
      offsetDistance: "100%",
      y: 0,
      x: 0
    }
  };

  return (
    <div className="min-h-screen bg-black grid place-content-center font-geist overflow-hidden">
      <AnimatePresence initial={false}>
        {!isClosed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 250 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
            className="w-[627px] border border-[#7D7D7D]/15 bg-[#0D0D0D] rounded-xl shadow-sm pb-6 pt-7 relative"
          >
            <AnimatePresence>
              {showCursor && (
                <motion.div
                  className="absolute -right-[164px] top-12"
                  initial={"initial"}
                  animate={"animate"}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                  style={{
                    offsetPath: "path('M 500 100 Q 200 400 100 44')",
                    offsetRotate: "0deg",
                    zIndex: 100
                  }}
                  variants={cursorVariants}
                  onAnimationComplete={() => setisClosed(true)}
                >
                  <svg
                    className="w-11 h-11 fill-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 10.2069L3 3L10.2069 22L13.4828 13.4828L22 10.2069Z"
                      stroke="white"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div className="bg-white text-black w-fit rounded-xl p-2.5 font-medium text-xl ml-11 -mt-1">
                    <p>@meandchimso</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="text-[#fefefe] flex items-center justify-between px-7 relative">
              <div className="flex items-center gap-1.5">
                <h1 className="text-4xl font-medium">Next.js</h1>

                <div className="border border-white rounded-md px-[3px] py-1 leading-none">
                  CONF24
                </div>
              </div>

              <button
                className="w-12 aspect-square flex items-center justify-center rounded-full border border-dashed border-[#7D7D7D]/10 hover:bg-[#7D7D7D]/10 relative z-50 transition-all duration-200 ease-in-out"
                onClick={() => setShowCursor(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="white"
                  viewBox="0 0 256 256"
                >
                  <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                </svg>
              </button>
            </div>

            <div className="font-medium relative border-t border-b border-dashed py-5 mt-9 mb-7 border-[#7D7D7D]/10">
              <div className="px-7">
                <p className="text-3xl text-[#fefefe]">
                  Stream the keynote on October 24th.
                </p>
              </div>
            </div>

            <div className="px-7 relative z-50">
              <button className="h-12 px-12 bg-[#0057ff] whitespace-nowrap w-full text-white font-medium text-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-200 ease-in-out rounded-sm tracking-wider">
                GET TICKETS
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z" />
                </svg>
              </button>
            </div>

            <div className="absolute h-full border border-dashed border-[#7D7D7D]/10 top-0 left-7"></div>

            <div className="absolute h-full border border-dashed border-[#7D7D7D]/10 top-0 left-56"></div>

            <div className="absolute h-full border border-dashed border-[#7D7D7D]/10 top-0 right-[74px]"></div>

            <div className="absolute h-full border border-dashed border-[#7D7D7D]/10 top-0 right-7"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AssistedCardExitPage;
