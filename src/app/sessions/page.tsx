/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const SessionsPage = () => {
  const [slides, setSlides] = useState([
    {
      name: "Altay Bayindir",
      number: 1,
      img: "/mufc/altay.png"
    },

    {
      name: "Tom Heaton",
      number: 22,
      img: "/mufc/heaton.png"
    },

    {
      name: "Andre Onana",
      number: 24,
      img: "/mufc/onana.png"
    },

    {
      name: "Victor Lindelof",
      number: 2,
      img: "/mufc/lindelof.png"
    },
    {
      name: "Harry Maguire",
      number: 5,
      img: "/mufc/maguire.png"
    },
    {
      name: "Lisandro Martinez",
      number: 6,
      img: "/mufc/martinez.png"
    },
    {
      name: "Tyrell Malacia",
      number: 12,
      img: "/mufc/malacia.png"
    },
    {
      name: "Diogo Dalot",
      number: 20,
      img: "/mufc/dalot.png"
    },
    {
      name: "Luke Shaw",
      number: 23,
      img: "/mufc/shaw.png"
    },
    {
      name: "Aaron Wan-Bissaka",
      number: 29,
      img: "/mufc/wan-bissaka.png"
    },
    {
      name: "Jonny Evans",
      number: 35,
      img: "/mufc/evans.png"
    },
    {
      name: "Willy Kambwala",
      number: 53,
      img: "/mufc/kambwala.png"
    },
    {
      name: "Sofyan Amrabat",
      number: 4,
      img: "/mufc/amrabat.png"
    },
    {
      name: "Mason Mount",
      number: 7,
      img: "/mufc/mount.png"
    },
    {
      name: "Bruno Fernandes",
      number: 8,
      img: "/mufc/fernandes.png"
    },
    {
      name: "Christian Eriksen",
      number: 14,
      img: "/mufc/eriksen.png"
    },
    {
      name: "Amad",
      number: 16,
      img: "/mufc/amad.png"
    },
    {
      name: "Casemiro",
      number: 18,
      img: "/mufc/casemiro.png"
    },
    {
      name: "Facundo Pellistri",
      number: 28,
      img: "/mufc/pellistri.png"
    },
    {
      name: "Donny van de Beek",
      number: 34,
      img: "/mufc/donny.png"
    },
    {
      name: "Kobbie Mainoo",
      number: 37,
      img: "/mufc/kobbie.png"
    },
    {
      name: "Scott McTominay",
      number: 39,
      img: "/mufc/scott.png"
    },
    {
      name: "Daniel Gore",
      number: 44,
      img: "/mufc/gore.png"
    },
    {
      name: "Hannibal",
      number: 46,
      img: "/mufc/hannibal.png"
    },
    {
      name: "Marcus Rashford",
      number: 10,
      img: "/mufc/rashford.png"
    },
    {
      name: "Rasmus Hojlund",
      number: 11,
      img: "/mufc/hojlund.png"
    },
    {
      name: "Alejandro Garnacho",
      number: 17,
      img: "/mufc/garnacho.png"
    },
    {
      name: "Antony",
      number: 21,
      img: "/mufc/antony.png"
    },
    {
      name: "Jadon Sancho",
      number: 25,
      img: "/mufc/sancho.png"
    },
    {
      name: "Shola Shoretire",
      number: 47,
      img: "/mufc/shoretire.png"
    }
  ]);

  const [active, setActive] = useState(2);

  const intervalRef = useRef<any>(null);

  const handleClick = (index: number, isLoop?: boolean) => {
    let newItems = [...slides] as any;

    if (index === 1) {
      // Move the last item to the first position
      newItems = [newItems.pop(), ...newItems];

      setActive(index + 1);
    } else if (index === (isLoop ? 6 : 7)) {
      // Move the first item to the last position
      newItems = [...newItems.slice(1), newItems[0]];
      setActive(index - 1);
    } else {
      setActive(index);

      return;
    }

    setSlides(newItems);
  };

  const restartInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      handleClick(active, true);
      setActive((prev) => prev + 1);
    }, 4000);
  };

  useEffect(() => {
    restartInterval();

    return () => clearInterval(intervalRef.current);
  }, [active, slides]);

  const displayItems = useMemo(() => slides.slice(0, 9), [slides]);

  const handlePrev = () => {
    handleClick(active - 1);
    restartInterval();
  };

  const handleNext = () => {
    handleClick(active + 1);
    restartInterval();
  };

  return (
    <div className="min-h-screen grid place-items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="scale-100 md:scale-[0.90]"
      >
        <div className="flex items-center justify-end gap-3 mb-4">
          <button
            className="flex items-center justify-center bg-red-600 hover:opacity-80 transition-all duration-300 ease-in-out text-white rounded-md h-11 aspect-square"
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
            </svg>
          </button>

          <button
            className="flex items-center justify-center bg-red-600 hover:opacity-80 transition-all duration-300 ease-in-out text-white rounded-md h-11 aspect-square"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
            </svg>
          </button>
        </div>

        <div className="w-[1200px] max-w-full flex items-center justify-center flex-shrink-0 overflow-hidden bg-white p-4">
          <motion.ul
            layout
            className="h-[800px] px-0 flex justify-center w-full gap-[1%] slide-container select-none overflow-hidden"
          >
            <AnimatePresence mode="popLayout">
              {displayItems.map(
                (slide, i) =>
                  i >= 0 &&
                  i <= 8 && (
                    <motion.li
                      layoutId={slide.name.toLowerCase().split(" ").join("-")}
                      key={slide.name.toLowerCase().split(" ").join("-")}
                      className={cn(
                        "h-full relative cursor-pointer slide-item",
                        active === i && "pointer-events-none"
                      )}
                      onClick={() => handleClick(i)}
                      initial={{
                        width:
                          active === i
                            ? "48%"
                            : i === 0 || i === 8
                            ? "1%"
                            : "8%",
                        opacity: 0
                      }}
                      animate={{
                        width:
                          active === i
                            ? "48%"
                            : i === 0 || i === 8
                            ? "1%"
                            : "8%",
                        opacity: 1,
                        transition: {
                          duration: 0.8,
                          ease: [0.22, 0.61, 0.36, 1]
                        }
                      }}
                      exit={{
                        opacity: 0,
                        transition: {
                          duration: 0.6,
                          ease: [0.22, 0.61, 0.36, 1]
                        }
                      }}
                      whileHover={{
                        width: "10%",
                        transition: {
                          duration: 0.3,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <div className="absolute w-full h-full bg-transparent top-0 -left-[10px] -right-[10px]"></div>

                      <div
                        className={cn(
                          "h-full w-full relative overflow-hidden rounded-2xl transition-all duration-700 ease-in-out bg-gradient-to-b from-red-100 to-red-200"
                        )}
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-black/60 z-10 flex flex-col justify-end p-5 overflow-hidden">
                          <AnimatePresence mode="wait">
                            {active === i && (
                              <motion.div
                                key={`${slide.name
                                  .toLowerCase()
                                  .split(" ")
                                  .join("-")}-text`}
                              >
                                <motion.h1
                                  initial={{ opacity: 0 }}
                                  animate={{
                                    opacity: 1,
                                    transition: { delay: 0.25, duration: 0.4 }
                                  }}
                                  exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15 }
                                  }}
                                  transition={{
                                    duration: 0.3,
                                    ease: "easeInOut"
                                  }}
                                  className="uppercase text-white font-bold text-3xl number relative"
                                >
                                  {slide.number}
                                </motion.h1>

                                <motion.h1
                                  initial={{ opacity: 0 }}
                                  animate={{
                                    opacity: 1,
                                    transition: { delay: 0.25, duration: 0.4 }
                                  }}
                                  exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15 }
                                  }}
                                  transition={{
                                    duration: 0.3,
                                    ease: "easeInOut"
                                  }}
                                  className="uppercase text-white font-bold text-3xl mt-2.5"
                                >
                                  {slide.name}
                                </motion.h1>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <img
                          width={"590px"}
                          height={"800px"}
                          className={cn(
                            "object-cover max-w-none transition-all duration-200 ease-in-out w-[590px] h-[800px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 overflow-hidden grayscale-0",
                            active === i && "grayscale-0"
                          )}
                          src={slide.img}
                          alt=""
                        />
                      </div>
                    </motion.li>
                  )
              )}
            </AnimatePresence>
          </motion.ul>
        </div>
      </motion.div>
    </div>
  );
};

export default SessionsPage;
