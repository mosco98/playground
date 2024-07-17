"use client";

import ExploreCard from "@/components/ExploreCard";
import { motion } from "framer-motion";

const locations = [
  {
    title: "Paris",
    images: [
      "/paris-2.jpeg",
      "/paris.jpeg",
      "/paris-3.avif",
      "/paris-4.avif",
      "/paris-5.avif"
    ]
  },
  {
    title: "Dubai",
    images: [
      "/dubai.avif",
      "/dubai-2.avif",
      "/dubai-3.avif",
      "/dubai-4.avif",
      "/dubai-5.avif"
    ]
  },
  {
    title: "Santorini",
    images: [
      "/santorini.webp",
      "/santorini-2.avif",
      "/santorini-3.avif",
      "/santorini-4.avif",
      "/santorini-5.avif"
    ]
  }
];

const VacationPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen bg-white text-black grid place-items-center"
    >
      <div>
        <div>
          <h1 className="text-4xl font-semibold tracking-tight font-geist">
            Select destination
          </h1>

          <p className="mt-1 tracking-tight">Choose a holiday location</p>
        </div>

        <div className="mt-6 w-[700px] grid grid-cols-3 gap-4">
          {locations.map((location, i) => (
            <ExploreCard key={i} {...location} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default VacationPage;
