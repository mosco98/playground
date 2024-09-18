"use client";

import * as Slider from "@radix-ui/react-slider";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform
} from "framer-motion";
import { ElementRef, useRef, useState } from "react";

const decay = (value: number, max: number) => {
  const entry = value / max;
  const sigmoid = 2 / (1 + Math.exp(-entry)) - 1;

  return sigmoid * max;
};

const AppleControlsPage = () => {
  const [volume, setVolume] = useState(50);
  const [region, setRegion] = useState<"top" | "middle" | "bottom">("middle");

  const sliderRef = useRef<ElementRef<typeof Slider.Root>>(null);

  const clientY = useMotionValue(0);
  const overflow = useMotionValue(0);

  useMotionValueEvent(clientY, "change", (latest) => {
    if (sliderRef.current) {
      const { top, bottom } = sliderRef.current.getBoundingClientRect();

      let newOverflow;

      if (latest < top) {
        setRegion("top");
        newOverflow = top - latest;
      } else if (latest > bottom) {
        setRegion("bottom");
        newOverflow = latest - bottom;
      } else {
        setRegion("middle");
        newOverflow = 0;
      }

      overflow.jump(decay(newOverflow!, 50));
    }
  });

  return (
    <div className="h-screen grid place-content-center">
      <div>
        <motion.div className="h-[300px] w-[90px]">
          <Slider.Root
            value={[volume]}
            onValueChange={([value]) => setVolume(value)}
            orientation="vertical"
            onPointerMove={(e) => {
              if (e.buttons > 0) {
                clientY.set(e.clientY);
              }
            }}
            onLostPointerCapture={() => {
              animate(overflow, 0, {
                type: "spring",
                bounce: 0.5,
                duration: 0.8
              });
            }}
            className="cursor-grab"
            ref={sliderRef}
          >
            <motion.div
              style={{
                scaleY: useTransform(() => {
                  if (sliderRef.current) {
                    const { height: sliderHeight } =
                      sliderRef.current.getBoundingClientRect();

                    return (sliderHeight + overflow.get()) / sliderHeight;
                  }
                }),
                transformOrigin: region === "top" ? "bottom" : "top",
                borderRadius: "32px"
              }}
              className="h-full w-full overflow-hidden"
            >
              <Slider.Track className="relative h-full w-full bg-[#242424] flex">
                <Slider.Range className="absolute h-full w-full bg-white" />

                <div className="relative z-50 w-fit mx-auto self-end mb-8">
                  <svg
                    width={40}
                    height={28}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-1/2 -translate-y-1/2 -left-1.5 rotate-2"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.292891 0.292891C0.683421 -0.0976303 1.31658 -0.0976303 1.70711 0.292891L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L0.292891 1.70711C-0.0976303 1.31658 -0.0976303 0.683421 0.292891 0.292891Z"
                      fill="black"
                      mask="url(#pathMask)"
                    />

                    <mask id="pathMask">
                      <motion.rect
                        x="0"
                        y="0"
                        width="0"
                        height="40"
                        fill="white"
                        initial={{ width: volume === 0 ? 40 : 0 }}
                        animate={{ width: volume === 0 ? 40 : 0 }}
                        transition={{ ease: "easeInOut", duration: 0.3 }}
                      />
                    </mask>
                  </svg>

                  <svg
                    viewBox="0 0 26 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                  >
                    <path
                      d="M9.9916 0.975603C10.6784 0.448013 11.4957 0.0195728 12.367 0.388083C13.2302 0.753183 13.5076 1.63267 13.6274 2.49785C13.7502 3.38459 13.7502 4.60557 13.7502 6.12365V11.8794C13.7502 13.3975 13.7502 14.6185 13.6274 15.5052C13.5076 16.3704 13.2302 17.2499 12.367 17.615C11.4957 17.9835 10.6784 17.5551 9.9916 17.0275C9.2892 16.488 8.3966 15.5765 7.34667 14.5044C6.80721 13.9535 6.44921 13.6873 6.08663 13.5374C5.72221 13.3868 5.27914 13.3229 4.50619 13.3229C3.83768 13.3229 3.23963 13.3229 2.78679 13.2758C2.31184 13.2265 1.87088 13.1191 1.47421 12.8485C0.718399 12.3328 0.429169 11.5777 0.319569 10.8838C0.237849 10.3663 0.247229 9.7981 0.254789 9.3405V8.6626C0.247229 8.205 0.237849 7.6368 0.319569 7.1193C0.429169 6.42536 0.718399 5.67029 1.47421 5.15462C1.87088 4.88398 2.31184 4.77657 2.78679 4.72723C3.23963 4.68019 3.83768 4.68021 4.50619 4.68023C5.27914 4.68023 5.72221 4.61628 6.08663 4.46563C6.44922 4.31574 6.80717 4.04954 7.34663 3.49869C8.39658 2.42655 9.2892 1.51511 9.9916 0.975603Z"
                      fill="black"
                    />
                    <motion.path
                      initial={{ opacity: volume > 0 ? 1 : 0 }}
                      animate={{ opacity: volume > 0 ? 1 : 0 }}
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.3935 5.20504C15.8325 4.87003 16.4601 4.95439 16.7951 5.39347C17.5519 6.38539 18.0001 7.6418 18.0001 9.0001C18.0001 10.3583 17.5519 11.6147 16.7951 12.6066C16.4601 13.0457 15.8325 13.1301 15.3935 12.7951C14.9544 12.4601 14.87 11.8325 15.205 11.3935C15.699 10.746 16.0001 9.9149 16.0001 9.0001C16.0001 8.0852 15.699 7.2541 15.205 6.60664C14.87 6.16756 14.9544 5.54004 15.3935 5.20504Z"
                      className="fill-black/80"
                    />
                    <motion.path
                      initial={{ opacity: volume > 30 ? 1 : 0 }}
                      animate={{ opacity: volume > 30 ? 1 : 0 }}
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.3247 3.26245C18.7321 2.8895 19.3646 2.91738 19.7376 3.32472C21.1408 4.8573 22 6.83247 22 9C22 11.1675 21.1408 13.1427 19.7376 14.6753C19.3646 15.0826 18.7321 15.1105 18.3247 14.7376C17.9174 14.3646 17.8895 13.7321 18.2625 13.3247C19.3609 12.125 20 10.621 20 9C20 7.379 19.3609 5.87497 18.2625 4.6753C17.8895 4.26796 17.9174 3.63541 18.3247 3.26245Z"
                      className="fill-black/80"
                    />
                    <motion.path
                      initial={{ opacity: volume === 100 ? 1 : 0 }}
                      animate={{ opacity: volume === 100 ? 1 : 0 }}
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.4059 1.34993C21.9151 0.852666 22.7057 0.889839 23.172 1.43296C24.926 3.4764 26 6.10996 26 9C26 11.89 24.926 14.5236 23.172 16.5671C22.7057 17.1101 21.9151 17.1473 21.4059 16.6501C20.8967 16.1528 20.8619 15.3095 21.3281 14.7663C22.7011 13.1667 23.5 11.1613 23.5 9C23.5 6.83867 22.7011 4.83329 21.3281 3.23373C20.8619 2.69061 20.8967 1.84721 21.4059 1.34993Z"
                      className="fill-black/80"
                    />
                  </svg>
                </div>
              </Slider.Track>
            </motion.div>

            <Slider.Thumb />
          </Slider.Root>
        </motion.div>
      </div>
    </div>
  );
};

export default AppleControlsPage;
