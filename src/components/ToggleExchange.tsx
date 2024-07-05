"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ToggleExchange = () => {
  const [active, setActive] = useState<"dollar" | "euro">("dollar");

  const headerPb = 16;

  const totalBalanceVariants = {
    big: {
      x: "-50%",
      left: "50%",
      top: "47%",
      // fontSize: "36px",
      paddingRight: 14
    },
    small: {
      x: "0%",
      right: "0%",
      top: "31%",
      // fontSize: "18px",
      paddingRight: 14
    }
  };

  return (
    <div className="w-[320px]">
      <div
        className="border-[0.5px] border-[#7D7D7D]/50 rounded-lg p-3.5 shadow-[#7D7D7D]/10 shadow-md cursor-pointer relative overflow-hidden"
        onClick={() => setActive("euro")}
      >
        <motion.div
          className={cn(
            "flex items-center justify-between relative",
            active !== "euro" && "border-transparent"
          )}
          initial={{
            paddingBottom: active === "euro" ? headerPb : 0
          }}
          animate={{
            paddingBottom: active === "euro" ? headerPb : 0
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <div className="absolute w-full bottom-0 overflow-hidden h-[0.5px]">
            <motion.div
              initial={{
                y: active === "euro" ? 0 : -1
              }}
              animate={{
                y: active === "euro" ? 0 : -1
              }}
              className="w-full h-full bg-[#7D7D7D]/50"
              transition={{ duration: 0.25, ease: "easeInOut" }}
            ></motion.div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-blue-500 text-white rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M190,192.33a8,8,0,0,1-.63,11.3A80,80,0,0,1,56.4,152H40a8,8,0,0,1,0-16H56V120H40a8,8,0,0,1,0-16H56.4A80,80,0,0,1,189.34,52.37,8,8,0,0,1,178.66,64.3,64,64,0,0,0,72.52,104H136a8,8,0,0,1,0,16H72v16h48a8,8,0,0,1,0,16H72.52a64,64,0,0,0,106.14,39.71A8,8,0,0,1,190,192.33Z" />
              </svg>
            </div>

            <div>
              <h1 className="text-white font-medium">Euro</h1>
              <p className="text-sm mt-px">10,000 EUR</p>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {active === "euro" && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
                style={{ x: 0 }}
                className="bg-[#7D7D7D]/10 text-xs px-3 py-1.5 rounded-2xl font-medium absolute right-0"
              >
                Use max
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="text-center flex flex-col items-center justify-center"
          initial={{
            height: active === "euro" ? 150 : 0
          }}
          animate={{
            height: active === "euro" ? 150 : 0
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {active === "euro" ? (
            <motion.div
              layoutId="euro-total"
              className="font-medium"
              transition={{ layout: { duration: 0.25, ease: "easeInOut" } }}
            >
              <motion.span className="text-white" style={{ fontSize: "36px" }}>
                $20
              </motion.span>
            </motion.div>
          ) : (
            <motion.div
              layoutId="euro-total"
              className="font-medium text-white absolute top-6 right-3.5"
              transition={{ layout: { duration: 0.25, ease: "easeInOut" } }}
              style={{ fontSize: "18px" }}
            >
              $20
            </motion.div>
          )}

          {active === "euro" ? (
            <motion.div
              layoutId="euro-content"
              initial={{
                opacity: active === "euro" ? 1 : 0
              }}
              animate={{
                opacity: active === "euro" ? 1 : 0
              }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex items-center justify-center gap-2.5 mt-1"
            >
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M190,192.33a8,8,0,0,1-.63,11.3A80,80,0,0,1,56.4,152H40a8,8,0,0,1,0-16H56V120H40a8,8,0,0,1,0-16H56.4A80,80,0,0,1,189.34,52.37,8,8,0,0,1,178.66,64.3,64,64,0,0,0,72.52,104H136a8,8,0,0,1,0,16H72v16h48a8,8,0,0,1,0,16H72.52a64,64,0,0,0,106.14,39.71A8,8,0,0,1,190,192.33Z" />
                </svg>
              </div>

              <p>1€ = 1,800$</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M117.66,170.34a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L72,188.69V48a8,8,0,0,1,16,0V188.69l18.34-18.35A8,8,0,0,1,117.66,170.34Zm96-96-32-32a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L168,67.31V208a8,8,0,0,0,16,0V67.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z" />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              layoutId="euro-content"
              className="absolute top-6 right-3.5"
            ></motion.div>
          )}
        </motion.div>
      </div>

      <div className="w-8 h-8 bg-[#0D0D0D] rounded-full flex items-center justify-center border-[0.5px] border-[#7D7D7D]/50 -my-1.5 z-10 relative mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
        </svg>
      </div>

      <div
        className="border-[0.5px] border-[#7D7D7D]/50 rounded-lg p-3.5 shadow-[#7D7D7D]/10 shadow-md cursor-pointer relative overflow-hidden"
        onClick={() => setActive("dollar")}
      >
        <motion.div
          className={cn(
            "flex items-center justify-between relative",
            active !== "dollar" && "border-transparent"
          )}
          initial={{
            paddingBottom: active === "dollar" ? headerPb : 0
          }}
          animate={{
            paddingBottom: active === "dollar" ? headerPb : 0
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <div className="absolute w-full bottom-0 overflow-hidden h-[0.5px]">
            <motion.div
              initial={{
                y: active === "dollar" ? 0 : -1
              }}
              animate={{
                y: active === "dollar" ? 0 : -1
              }}
              className="w-full h-full bg-[#7D7D7D]/50"
              transition={{ duration: 0.25, ease: "easeInOut" }}
            ></motion.div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-green-500 text-white rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z" />
              </svg>
            </div>

            <div>
              <h1 className="text-white font-medium">Dollar</h1>
              <p className="text-sm mt-px">130,000 USD</p>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {active === "dollar" && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
                style={{ x: 0 }}
                className="bg-[#7D7D7D]/10 text-xs px-3 py-1.5 rounded-2xl font-medium absolute right-0"
              >
                Use max
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="text-center flex flex-col items-center justify-center"
          initial={{
            height: active === "dollar" ? 150 : 0
          }}
          animate={{
            height: active === "dollar" ? 150 : 0
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {active === "dollar" ? (
            <motion.div
              layoutId="dollar-total"
              className="font-medium"
              transition={{ layout: { duration: 0.25, ease: "easeInOut" } }}
            >
              <motion.span className="text-white" style={{ fontSize: "36px" }}>
                $140
              </motion.span>
            </motion.div>
          ) : (
            <motion.div
              layoutId="euro-total"
              className="font-medium text-white absolute top-6 right-3.5"
              transition={{ layout: { duration: 0.25, ease: "easeInOut" } }}
              style={{ fontSize: "18px" }}
            >
              $140
            </motion.div>
          )}

          {active === "dollar" ? (
            <motion.div
              layoutId="dollar-content"
              initial={{
                opacity: active === "dollar" ? 1 : 0
              }}
              animate={{
                opacity: active === "dollar" ? 1 : 0
              }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex items-center justify-center gap-2.5 mt-1"
            >
              <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z" />
                </svg>
              </div>

              <p>1$ = 1,800€</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M117.66,170.34a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L72,188.69V48a8,8,0,0,1,16,0V188.69l18.34-18.35A8,8,0,0,1,117.66,170.34Zm96-96-32-32a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L168,67.31V208a8,8,0,0,0,16,0V67.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z" />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              layoutId="dollar-content"
              className="absolute top-6 right-3.5"
            ></motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ToggleExchange;
