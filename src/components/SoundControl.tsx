"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const SoundControl = () => {
  const [isSoundOn, setIsSoundOn] = useState(true);
  const strokes = Array.from({ length: 7 }, (_, index) => index);

  return (
    <button
      className="h-6 flex items-center gap-[2px]"
      onClick={() => setIsSoundOn((prev) => !prev)}
    >
      {strokes.map((_stroke, i) => (
        <span
          key={i}
          className={cn(
            "w-[2px] bg-white block rounded-[10px] relative h-full sound-stroke",
            !isSoundOn && "stop"
          )}
        ></span>
      ))}
    </button>
  );
};

export default SoundControl;
