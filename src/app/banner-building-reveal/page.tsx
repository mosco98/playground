"use client";

import { motion } from "framer-motion";

const BannerBuildingRevealPage = () => {
  const cursorVariants = {
    initial: {
      offsetDistance: "0%",
      y: 200,
      x: 100,
      opacity: 0
    },
    animate: {
      offsetDistance: "100%",
      y: 0,
      x: 0,
      opacity: 1
    }
  };

  return (
    <div className="bg-black min-h-screen grid place-content-center font-geist overflow-hidden">
      <div className="flex items-center gap-4">
        <motion.div
          className="p-2 relative"
          initial={"initial"}
          animate={"animate"}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          style={{
            offsetPath:
              "path('M-334 507C-21 390 0 281 20 225 37 100 23 49 0 0')",
            offsetRotate: "0deg",
            offsetAnchor: "left top",
            zIndex: 100
          }}
          variants={cursorVariants}
        >
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2, duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 border border-[#0057ff] bg-[#0057ff]/20"
            style={{ zIndex: 50 }}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="flex items-center text-white gap-2"
          >
            <p className="text-3xl font-medium">Next.js</p>
            <span className="border rounded-md px-[3px] py-px">CONF24</span>
          </motion.div>

          <motion.div
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{ x: -350, y: 250, opacity: 0 }}
            transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
            style={{ zIndex: 100 }}
            className="absolute left-20 -mt-6"
          >
            <svg
              className="w-11 h-11 fill-red-500"
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

            <div className="bg-red-500 text-white w-fit rounded-xl py-2 px-3 font-medium text-xl ml-8 -mt-1">
              <p>conf</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="p-2 relative"
          initial={"initial"}
          animate={"animate"}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          style={{
            offsetPath:
              "path('M326 197C143 156 151 162 82 115 51 81 33 66 0 0')",
            offsetRotate: "0deg",
            offsetAnchor: "left top",
            zIndex: 100
          }}
          variants={cursorVariants}
        >
          <motion.div
            className="absolute inset-0 border border-[#0057ff] bg-[#0057ff]/20"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2, duration: 0.3, ease: "easeInOut" }}
            style={{ zIndex: 50 }}
          ></motion.div>

          <motion.p
            className="text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
          >
            Join us for{" "}
            <span className="text-white font-medium">Next.js Conf</span> on{" "}
            <span className="text-white font-medium">Oct 24.</span>
          </motion.p>

          <motion.div
            className="absolute left-48 -mt-6"
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{ x: 100, y: 250, opacity: 0 }}
            transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
            style={{ zIndex: 100 }}
          >
            <svg
              className="w-11 h-11 fill-green-500"
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

            <div className="bg-green-500 text-white w-fit rounded-xl py-2 px-3 font-medium text-xl ml-8 -mt-1">
              <p>is</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="p-2 relative"
          initial={"initial"}
          animate={"animate"}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
          style={{
            offsetPath: "path('M 800 -100 Q 500 200 244 0')",
            offsetRotate: "0deg",
            offsetAnchor: "right top",
            zIndex: 100
          }}
          variants={cursorVariants}
        >
          <motion.div
            className="absolute inset-0 border border-[#0057ff] bg-[#0057ff]/20"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2.2, duration: 0.3, ease: "easeInOut" }}
            style={{ zIndex: 50 }}
          ></motion.div>

          <motion.button
            className="bg-white text-black h-14 font-medium text-2xl px-6 rounded-3xl flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9 }}
          >
            Register now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path
                d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"
                strokeWidth={4}
              />
            </svg>
          </motion.button>

          <motion.div
            className="absolute top-1/2 left-1/2 -mt-2 -ml-5"
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{ x: 400, y: -10, opacity: 0 }}
            transition={{ delay: 2.2, duration: 1, ease: "easeInOut" }}
            style={{ zIndex: 100 }}
          >
            <svg
              className="w-11 h-11 fill-blue-500"
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

            <div className="bg-blue-500 text-white w-fit rounded-xl py-2 px-3 font-medium text-xl ml-8 -mt-1">
              <p>here</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BannerBuildingRevealPage;
