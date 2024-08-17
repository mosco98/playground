"use client";

import { motion } from "framer-motion";

const FineCardPage = () => {
  return (
    <section className="overflow-hidden" style={{ perspective: 1000 }}>
      <motion.div
        className="h-80 bg-gradient-to-t from-green-500/5 to-black"
        style={{ rotateX: 120 }}
      ></motion.div>
    </section>
  );
};

export default FineCardPage;
