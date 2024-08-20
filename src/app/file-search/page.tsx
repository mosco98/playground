"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const FileSearch = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className="min-h-screen bg-white relative"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="w-[250px] aspect-square bg-blue-500 absolute top-1/2 cursor-pointer z-50"
        initial={{
          left: selected ? "10%" : "50%",
          scale: selected ? 0.8 : 1
          // rotateX: selected ? 0 : 135
        }}
        animate={{
          left: selected ? "10%" : "50%",
          scale: selected ? 0.8 : 1
          // rotateX: selected ? 0 : 135
        }}
        style={{ x: "-50%", y: "-30%", rotateX: selected ? 0 : 135 }}
      ></motion.div>

      <motion.div
        className="w-[250px] aspect-square bg-red-500 absolute top-1/2 z-30 cursor-pointer"
        initial={{
          width: !selected ? 250 : 500,
          height: !selected ? 250 : 500,
          rotateX: selected ? 0 : 135
        }}
        animate={{
          width: !selected ? 250 : 500,
          height: !selected ? 250 : 500,
          rotateX: selected ? 0 : 135,
          transition: {
            delay: 0.5
          }
        }}
        style={{ x: "-50%", y: "-40%", left: "50%", rotateX: 135 }}
        whileHover={{ marginTop: !selected ? -40 : 0 }}
        onClick={() => setSelected((prev) => !prev)}
      ></motion.div>

      <motion.div
        className="w-[250px] aspect-square bg-pink-500 absolute top-1/2 cursor-pointer"
        initial={{
          left: selected ? "10%" : "50%",
          scale: selected ? 0.8 : 1
          // rotateX: selected ? 0 : 135
        }}
        animate={{
          left: selected ? "10%" : "50%",
          scale: selected ? 0.8 : 1
          // rotateX: selected ? 0 : 135
        }}
        style={{ x: "-50%", y: "-50%", rotateX: selected ? 0 : 135 }}
      ></motion.div>
    </div>
  );
};

export default FileSearch;
