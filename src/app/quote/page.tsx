"use client";

import Rainfall from "@/components/quote/Rainfall";
import Sunshine from "@/components/quote/Sunshine";
import { cn } from "@/lib/utils";
import { useState } from "react";

const QuotePage = () => {
  const [isRain, setIsRain] = useState(true);

  return (
    <div
      className={cn(
        "bg-black overflow-hidden relative h-screen w-screen transition-all duration-1000 delay-500 ease-in-out",
        !isRain && "bg-[#2EB5E5]"
      )}
    >
      {isRain && <Rainfall />}

      {!isRain && <Sunshine className="top-40 left-1/2 -translate-x-1/2" />}

      <div className="h-screen w-screen grid place-items-center text-white text-center relative z-50">
        <div>
          {isRain && (
            <h1 className="text-6xl font-bold mb-6">After Rainfall</h1>
          )}

          {!isRain && (
            <h1 className="text-6xl font-bold mb-6">Comes Sunshine</h1>
          )}

          <button onClick={() => setIsRain((prev) => !prev)}>
            Toggle weather
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
