"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimate } from "framer-motion";
import { useState } from "react";

const ClerkLikeToggle = () => {
  const [checked, setChecked] = useState(false);

  const [scope, animate] = useAnimate();

  const handleToggle = async () => {
    setChecked((prev) => !prev);

    await animate(
      "#handle",
      {
        width: "100%"
      },
      { duration: 0.2 }
    );

    await animate(
      scope.current,
      {
        justifyContent: checked ? "flex-start" : "flex-end"
      },
      { duration: 0.2 }
    );

    await animate(
      "#handle",
      {
        width: "28px"
      },
      { duration: 0.2 }
    );
  };

  return (
    <div className="h-screen grid place-items-center">
      <motion.div
        className={cn(
          "w-[80px] h-10 rounded-3xl p-1.5 cursor-pointer bg-zinc-900 transition-all duration-300 ease-in-out flex items-center overflow-hidden relative",
          checked && "bg-purple-900"
        )}
        onClick={handleToggle}
        transition={{ duration: 0.3, type: "spring" }}
        ref={scope}
        id="thumb"
      >
        <motion.div
          className="h-full bg-white rounded-full w-7"
          layout
          id="handle"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default ClerkLikeToggle;
