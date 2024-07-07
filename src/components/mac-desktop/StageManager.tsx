"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import StageCard from "./StageCard";

const StageManager = () => {
  const [links, setLinks] = useState([""]);

  // const swapItems = (index: number) => {
  //   // Create a copy of the array
  //   let newItems = [...links];
  //   // Remove the item at the specified index
  //   const movedItem = newItems.splice(index, 1)[0];
  //   // Add the item at the end of the array
  //   newItems.push(movedItem);
  //   // Update the state with the new array
  //   setLinks(newItems);
  // };

  return (
    <>
      <motion.div
        className="fixed h-screen left-0 top-0 flex flex-col justify-center gap-5 p-2"
        style={{ perspective: "1000px", zIndex: 1000 }}
        transition={{ delay: 0.5, duration: 0.3, ease: "easeInOut" }}
        layout
      >
        {links.map((link, i) => (
          <StageCard key={i} onOpen={() => console.log("HELLO")} />
        ))}

        {/* <StageCard key={2} /> */}
      </motion.div>
    </>
  );
};

export default StageManager;
