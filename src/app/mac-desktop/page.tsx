"use client";

import Dock from "@/components/mac-desktop/Dock";
import StageManager from "@/components/mac-desktop/StageManager";
import TopNavigation from "@/components/mac-desktop/TopNavigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { format } from "date-fns";
import { useRef, useState } from "react";

const MacDesktopPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const date = new Date();

  const dayNameShort = format(date, "EEE");

  const dayNumber = format(date, "d");

  const monthNameShort = format(date, "MMM");

  const audioRef = useRef<HTMLAudioElement>(null);

  // useEffect(() => {
  //   const audio = audioRef.current;

  //   if (audio) {
  //     audio.play();
  //   }
  // }, []);

  return (
    <>
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

      <AnimatePresence initial={false}>
        {!isLoaded && (
          <motion.div
            className="fixed h-screen w-screen bg-black top-0 left-0 grid place-items-center text-white"
            style={{ zIndex: 10000000 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.5
              }
            }}
            transition={{ duration: 0.3 }}
          >
            {/* <audio src="/mac/mac-startup-sound.mp3" ref={audioRef} autoPlay /> */}

            <div className="flex flex-col items-center justify-center">
              {/* <p>Hello there</p> */}

              <div className="w-[200px] h-1 bg-zinc-700 rounded-lg relative overflow-hidden">
                <AnimatePresence>
                  {!isLoaded && (
                    <motion.div
                      className="absolute h-full bg-white"
                      animate={{
                        width: [
                          "10%",
                          "25%",
                          "35%",
                          "50%",
                          "80%",
                          "92%",
                          "100%"
                        ]
                      }}
                      exit={{
                        opacity: 0,
                        transition: { delay: 0, duration: 0.3 }
                      }}
                      transition={{ duration: 5 }}
                      onAnimationComplete={() => setIsLoaded(true)}
                    ></motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MacDesktopPage;
