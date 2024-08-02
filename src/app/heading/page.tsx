"use client";

import HeadingText from "@/components/HeadingText";
import { useSpring } from "framer-motion";
import { useEffect } from "react";

const TEXTS = ["own", "build", "sell"];

const HeadingPage = () => {
  const currentIndex = useSpring(0, { bounce: 0.15 });

  useEffect(() => {
    let interval = setInterval(() => {
      const prev = currentIndex.get();

      console.log({ prev });

      currentIndex.set((prev - 64) % (64 * 3));
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="h-screen grid place-items-center">
      <div>
        <h1 className="text-6xl font-bold tracking-tight flex items-center gap-2">
          The best opportunity to{" "}
          <span className="bg-black px-2 text-center block h-16 overflow-hidden">
            {TEXTS.map((text, i) => (
              <HeadingText key={i} text={text} mv={currentIndex} index={i} />
            ))}
          </span>{" "}
          your dream.
        </h1>
      </div>
    </section>
  );
};

export default HeadingPage;
