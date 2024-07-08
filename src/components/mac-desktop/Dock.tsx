"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

const Dock = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const { clientY } = event;
      const screenHeight = window.innerHeight;
      const threshold = 10; // Threshold in pixels from the bottom

      if (screenHeight - clientY <= threshold || isMouseOver) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMouseOver]);

  return (
    <AnimatePresence>
      {isAtBottom && (
        <motion.div
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          exit={{ y: "110%" }}
          style={{ x: "-50%" }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="fixed bottom-0 left-1/2 -translate-x-1/2 pb-2 select-none"
          onMouseOver={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
        >
          <div className="bg-white/5 backdrop-blur-md rounded-2xl px-3 pt-2 pb-3 flex items-center justify-between gap-4 border border-white/20">
            {/* <div className="h-12 aspect-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Finder"
                role="img"
                viewBox="0 0 512 512"
              >
                <rect width={512} height={512} rx="15%" fill="url(#a)" />
                <defs>
                  <linearGradient id="a" x2={0} y1="100%">
                    <stop offset={0} stopColor="#1e73f2" />
                    <stop offset={1} stopColor="#19d3fd" />
                  </linearGradient>
                  <linearGradient id="b" x2={0} y1="100%">
                    <stop offset={0} stopColor="#dbe9f4" />
                    <stop offset={1} stopColor="#f7f6f6" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#b)"
                  d="M435.2 0H274.4c-21.2 49.2-59.2 129.6-60.8 283.4a9.9 9.9 0 0010 10.1h58.7a9.9 9.9 0 019.9 10.2A933.3 933.3 0 00311.3 512h123.9a76.8 76.8 0 0076.8-76.8V76.8A76.8 76.8 0 00435.2 0z"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeWidth={20}
                  d="M371 149v34m-229-34v34m263.4 147.2a215.2 215.2 0 01-298.8 0"
                />
              </svg>
            </div>

            <div className="h-12 aspect-square bg-white flex items-center justify-center rounded-lg">
              <svg
                width={40}
                height={40}
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <path
                  style={{ fill: "#1e8e3e" }}
                  d="M256,386.648c-25.6,0-49.434-7.062-70.621-21.186c-21.186-14.124-37.076-31.779-47.669-53.848
    L31.779,128C9.71,167.724,0,210.979,0,256c0,64.441,21.186,120.055,62.676,167.724s93.572,75.917,155.366,85.628l74.152-128.883
    C285.131,383.117,271.89,386.648,256,386.648"
                />
                <path
                  style={{ fill: "#d93025" }}
                  d="M175.669,150.069c23.834-18.538,50.317-26.483,80.331-26.483h219.807
    c-22.952-38.841-53.848-67.09-92.69-89.159C344.276,11.476,301.903,0,256,0c-39.724,0-77.683,8.828-112.11,25.6
    S76.8,67.09,53.848,98.869L128,220.69C135.062,192.441,151.834,168.607,175.669,150.069"
                />
                <path
                  style={{ fill: "#fcc934" }}
                  d="M492.579,159.779H344.276c25.6,25.6,43.255,59.145,43.255,96.221
    c0,27.366-7.945,52.083-22.952,75.034L258.648,512c69.738-0.883,129.766-25.6,179.2-75.917S512,325.738,512,256
    C512,223.338,506.703,188.91,492.579,159.779"
                />
                <path
                  style={{ fill: "#1a73e8" }}
                  d="M256,158.897c52.966,0,97.103,44.138,97.103,97.103S308.966,353.103,256,353.103
    S158.897,308.966,158.897,256S203.034,158.897,256,158.897"
                />
              </svg>
            </div>

            <div className="h-12 aspect-square flex items-center justify-center rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                // width={40}
                // height={40}
              >
                <script xmlns type="text/javascript" />
                <path
                  fill="#1ed760"
                  d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8Z"
                />
                <path d="M406.6 231.1c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3zm-31 76.2c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm-26.9 65.6c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4z" />
              </svg>
            </div>

            <div className="h-12 aspect-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 600 600"
              >
                <script xmlns type="text/javascript" />
                <linearGradient
                  id="a"
                  x1="-137.5424"
                  x2="-133.9618"
                  y1="785.878"
                  y2="197.7213"
                  gradientTransform="matrix(1 0 0 -1 435.7924 798.4074)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#5df777" />
                  <stop offset={1} stopColor="#0abc28" />
                </linearGradient>
                <path
                  fill="url(#a)"
                  d="M137.7 0h324.6C538.6 0 600 61.4 600 137.7v324.6c0 76.3-61.4 137.7-137.7 137.7H137.7C61.4 600 0 538.6 0 462.3V137.7C0 61.4 61.4 0 137.7 0z"
                  fill="#0abc28"
                />
                <path
                  fill="#fff"
                  d="M91.5 227.3v146.1c0 31.9 25.9 57.7 57.7 57.7H325c31.9 0 57.7-25.9 57.7-57.7V227.3c0-31.9-25.9-57.7-57.7-57.7H149.3c-31.9-.1-57.8 25.8-57.8 57.7zm379.3-39.1-66.2 54.6c-5.9 4.9-9.3 12.1-9.3 19.7v75.6c0 7.6 3.3 14.7 9.1 19.6l66.2 55.6c15.1 12.6 38 1.9 38-17.7V206c.1-19.5-22.7-30.3-37.8-17.8z"
                />
              </svg>
            </div>

            <div className="h-12 aspect-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Artwork"
                x="0px"
                y="0px"
                width={48}
                height={48}
                viewBox="0 0 361 361"
                style={{ enableBackground: "new 0 0 361 361" }}
                xmlSpace="preserve"
              >
                <script xmlns type="text/javascript" />
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n\t.st0{fill-rule:evenodd;clip-rule:evenodd;fill:url(#SVGID_1_);}\n\t.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}\n"
                  }}
                />
                <g id="Layer_5"></g>
                <g>
                  <linearGradient
                    id="SVGID_1_"
                    gradientUnits="userSpaceOnUse"
                    x1={180}
                    y1="358.6047"
                    x2={180}
                    y2="7.7586"
                  >
                    <stop offset={0} style={{ stopColor: "#FA233B" }} />
                    <stop offset={1} style={{ stopColor: "#FB5C74" }} />
                  </linearGradient>
                  <path
                    className="st0"
                    d="M360,112.61c0-4.3,0-8.6-0.02-12.9c-0.02-3.62-0.06-7.24-0.16-10.86c-0.21-7.89-0.68-15.84-2.08-23.64   c-1.42-7.92-3.75-15.29-7.41-22.49c-3.6-7.07-8.3-13.53-13.91-19.14c-5.61-5.61-12.08-10.31-19.15-13.91   c-7.19-3.66-14.56-5.98-22.47-7.41c-7.8-1.4-15.76-1.87-23.65-2.08c-3.62-0.1-7.24-0.14-10.86-0.16C255.99,0,251.69,0,247.39,0   H112.61c-4.3,0-8.6,0-12.9,0.02c-3.62,0.02-7.24,0.06-10.86,0.16C80.96,0.4,73,0.86,65.2,2.27c-7.92,1.42-15.28,3.75-22.47,7.41   c-7.07,3.6-13.54,8.3-19.15,13.91c-5.61,5.61-10.31,12.07-13.91,19.14c-3.66,7.2-5.99,14.57-7.41,22.49   c-1.4,7.8-1.87,15.76-2.08,23.64c-0.1,3.62-0.14,7.24-0.16,10.86C0,104.01,0,108.31,0,112.61v134.77c0,4.3,0,8.6,0.02,12.9   c0.02,3.62,0.06,7.24,0.16,10.86c0.21,7.89,0.68,15.84,2.08,23.64c1.42,7.92,3.75,15.29,7.41,22.49c3.6,7.07,8.3,13.53,13.91,19.14   c5.61,5.61,12.08,10.31,19.15,13.91c7.19,3.66,14.56,5.98,22.47,7.41c7.8,1.4,15.76,1.87,23.65,2.08c3.62,0.1,7.24,0.14,10.86,0.16   c4.3,0.03,8.6,0.02,12.9,0.02h134.77c4.3,0,8.6,0,12.9-0.02c3.62-0.02,7.24-0.06,10.86-0.16c7.89-0.21,15.85-0.68,23.65-2.08   c7.92-1.42,15.28-3.75,22.47-7.41c7.07-3.6,13.54-8.3,19.15-13.91c5.61-5.61,10.31-12.07,13.91-19.14   c3.66-7.2,5.99-14.57,7.41-22.49c1.4-7.8,1.87-15.76,2.08-23.64c0.1-3.62,0.14-7.24,0.16-10.86c0.03-4.3,0.02-8.6,0.02-12.9V112.61   z"
                  />
                </g>
                <g id="Glyph_2_">
                  <g>
                    <path
                      className="st1"
                      d="M254.5,55c-0.87,0.08-8.6,1.45-9.53,1.64l-107,21.59l-0.04,0.01c-2.79,0.59-4.98,1.58-6.67,3    c-2.04,1.71-3.17,4.13-3.6,6.95c-0.09,0.6-0.24,1.82-0.24,3.62c0,0,0,109.32,0,133.92c0,3.13-0.25,6.17-2.37,8.76    c-2.12,2.59-4.74,3.37-7.81,3.99c-2.33,0.47-4.66,0.94-6.99,1.41c-8.84,1.78-14.59,2.99-19.8,5.01    c-4.98,1.93-8.71,4.39-11.68,7.51c-5.89,6.17-8.28,14.54-7.46,22.38c0.7,6.69,3.71,13.09,8.88,17.82    c3.49,3.2,7.85,5.63,12.99,6.66c5.33,1.07,11.01,0.7,19.31-0.98c4.42-0.89,8.56-2.28,12.5-4.61c3.9-2.3,7.24-5.37,9.85-9.11    c2.62-3.75,4.31-7.92,5.24-12.35c0.96-4.57,1.19-8.7,1.19-13.26l0-116.15c0-6.22,1.76-7.86,6.78-9.08c0,0,88.94-17.94,93.09-18.75    c5.79-1.11,8.52,0.54,8.52,6.61l0,79.29c0,3.14-0.03,6.32-2.17,8.92c-2.12,2.59-4.74,3.37-7.81,3.99    c-2.33,0.47-4.66,0.94-6.99,1.41c-8.84,1.78-14.59,2.99-19.8,5.01c-4.98,1.93-8.71,4.39-11.68,7.51    c-5.89,6.17-8.49,14.54-7.67,22.38c0.7,6.69,3.92,13.09,9.09,17.82c3.49,3.2,7.85,5.56,12.99,6.6c5.33,1.07,11.01,0.69,19.31-0.98    c4.42-0.89,8.56-2.22,12.5-4.55c3.9-2.3,7.24-5.37,9.85-9.11c2.62-3.75,4.31-7.92,5.24-12.35c0.96-4.57,1-8.7,1-13.26V64.46    C263.54,58.3,260.29,54.5,254.5,55z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </div>

            <div className="h-12 aspect-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24.26 24.26"
              >
                <script xmlns type="text/javascript" />
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".cls-1{fill:url(#linear-gradient);}.cls-2{fill:#f9f9f9;}"
                    }}
                  />
                  <linearGradient
                    id="linear-gradient"
                    x1="12.13"
                    y1="14.65"
                    x2="12.13"
                    y2="38.73"
                    gradientTransform="matrix(1, 0, 0, -1, 0, 38.73)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0} stopColor="#111" />
                    <stop offset={1} stopColor="#333" />
                  </linearGradient>
                </defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="UK-US">
                    <path
                      className="cls-1"
                      d="M13.39,0h5.1a11.54,11.54,0,0,1,1.59.14,5.09,5.09,0,0,1,1.44.48,4.72,4.72,0,0,1,1.23.89,4.84,4.84,0,0,1,.89,1.22,5.14,5.14,0,0,1,.47,1.45,10.15,10.15,0,0,1,.14,1.58c0,.25,0,.5,0,.75V17.74c0,.25,0,.5,0,.75a10.38,10.38,0,0,1-.14,1.59,5.07,5.07,0,0,1-.47,1.44,4.79,4.79,0,0,1-2.12,2.12,5.07,5.07,0,0,1-1.44.47,10.17,10.17,0,0,1-1.59.14H5.77a10.15,10.15,0,0,1-1.58-.14,5,5,0,0,1-1.45-.47,4.84,4.84,0,0,1-1.22-.89,4.72,4.72,0,0,1-.89-1.23,5.09,5.09,0,0,1-.48-1.44A11.82,11.82,0,0,1,0,18.49c0-.25,0-.5,0-.75V6.52c0-.25,0-.5,0-.75A11.54,11.54,0,0,1,.15,4.19,5.15,5.15,0,0,1,.63,2.74,4.89,4.89,0,0,1,2.74.63,5,5,0,0,1,4.19.15,11.54,11.54,0,0,1,5.77,0h7.62"
                    />
                    <path
                      id="_tv"
                      data-name="  tv"
                      className="cls-2"
                      d="M6.82,9.11a2,2,0,0,1,.48-1.4A2,2,0,0,1,8.64,7a2,2,0,0,1-.47,1.45A1.66,1.66,0,0,1,6.82,9.11Zm2.5,2.73a2.07,2.07,0,0,1,1-1.73,2.13,2.13,0,0,0-1.66-.9c-.75,0-1.38.43-1.74.43s-.9-.41-1.49-.4a2.24,2.24,0,0,0-1.88,1.14c-.8,1.38-.21,3.44.57,4.56.38.56.84,1.17,1.44,1.15s.79-.37,1.48-.37.89.37,1.49.36,1-.56,1.4-1.12a4.82,4.82,0,0,0,.62-1.28A2,2,0,0,1,9.32,11.84ZM19.8,9.67l-1.58,5.1h0l-1.57-5.1H15.29L17.53,16h1.34l2.24-6.35ZM13.39,8.15H12.13V9.67H11.2v1h.93v3.69c0,1.22.49,1.71,1.75,1.71A4,4,0,0,0,14.6,16V15l-.43,0c-.54,0-.78-.26-.78-.81V10.67h1.22v-1H13.39Z"
                    />
                  </g>
                </g>
              </svg>
            </div> */}

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="h-12 aspect-square bg-white flex items-center justify-center rounded-lg">
                    <Image
                      src={"/mac/react-2.svg"}
                      width={40}
                      height={40}
                      alt="react-logo"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>React</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="h-12 aspect-square bg-white flex items-center justify-center rounded-lg">
                    <Image
                      src={"/mac/next-js.svg"}
                      width={40}
                      height={40}
                      alt="react-logo"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>NextJS</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="h-12 aspect-square bg-white flex items-center justify-center rounded-lg">
                    <Image
                      src={"/mac/tailwind-css-2.svg"}
                      width={40}
                      height={40}
                      alt="react-logo"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tailwind CSS</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="h-12 aspect-square bg-white flex items-center justify-center rounded-lg">
                    <Image
                      src={"/mac/framer-motion.svg"}
                      width={32}
                      height={32}
                      alt="react-logo"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Framer Motion</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="h-12 aspect-square bg-white flex items-center justify-center rounded-lg">
                    <Image
                      src={"/mac/prisma-3.svg"}
                      width={32}
                      height={32}
                      alt="react-logo"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Prisma</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="h-12 aspect-square bg-white flex items-center justify-center rounded-lg">
                    <Image
                      src={"/mac/typescript.svg"}
                      width={32}
                      height={32}
                      alt="react-logo"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Typescript</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="h-12 aspect-square bg-white flex items-center justify-center rounded-lg">
                    <Image
                      src={"/mac/visual-studio-code-1.svg"}
                      width={40}
                      height={40}
                      alt="react-logo"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Visual Studio Code</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="h-12 aspect-square bg-black flex items-center justify-center rounded-lg">
                    <Image
                      src={"/mac/figma-icon.svg"}
                      width={22}
                      height={22}
                      alt="react-logo"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Figma</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dock;
