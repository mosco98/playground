"use client";

import Dock from "@/components/mac-desktop/Dock";
import StageManager from "@/components/mac-desktop/StageManager";
import TopNavigation from "@/components/mac-desktop/TopNavigation";
import { motion } from "framer-motion";
import Image from "next/image";

import { format } from "date-fns";

const MacDesktopPage = () => {
  const date = new Date();

  const dayNameShort = format(date, "EEE");

  const dayNumber = format(date, "d");

  const monthNameShort = format(date, "MMM");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="h-screen w-screen overflow-hidden bg-black relative desktop select-none"
    >
      <div className="w-full pt-14 relative z-50 px-7">
        <div className="flex justify-between">
          <div>
            <div className="bg-[#171717] px-10 py-7 text-center rounded-3xl overflow-hidden shadow-md">
              <div className="flex items-center justify-center gap-2 text-3xl font-semibold">
                <p className="text-red-500">{dayNameShort}</p>
                <p>{monthNameShort}</p>
              </div>

              <h1 className="text-8xl text-white font-bold mt-1">
                {dayNumber}
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <a href="https://calvest.app" target="_blank">
              <div className="w-[80px]">
                <div className="w-full aspect-square bg-[#171717] border-2 border-white relative">
                  <Image
                    className="object-cover"
                    src={"/mac/projects/calvest.png"}
                    fill
                    alt="calvest"
                  />
                </div>

                <p className="text-white font-medium text-sm text-center mt-1">
                  Calvest app
                </p>
              </div>
            </a>

            <a href="https://resumedive.com" target="_blank">
              <div className="w-[80px]">
                <div className="w-full aspect-square bg-[#171717] border-2 border-white relative">
                  <Image
                    className="object-cover"
                    src={"/mac/projects/resume-dive.png"}
                    fill
                    alt="resume-dive"
                  />
                </div>

                <p className="text-white font-medium text-sm text-center mt-1">
                  Resume Dive
                </p>
              </div>
            </a>

            <a href="https://0xlegacy.com" target="_blank">
              <div className="w-[80px]">
                <div className="w-full aspect-square bg-[#171717] border-2 border-white relative">
                  <Image
                    className="object-cover"
                    src={"/mac/projects/0xlegacy.png"}
                    fill
                    alt="0xlegacy"
                  />
                </div>

                <p className="text-white font-medium text-sm text-center mt-1">
                  0xLegacy
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <Image
        className="object-cover"
        src={"/mac/Sonoma-wallpaper.png"}
        fill
        alt=""
        priority
      />

      <StageManager />

      <TopNavigation />

      <Dock />
    </motion.section>
  );
};

export default MacDesktopPage;
