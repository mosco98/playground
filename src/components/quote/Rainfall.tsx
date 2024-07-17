"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const Rainfall = () => {
  const makeItRain = () => {
    const frontRow = document.querySelector(".rain.front-row");
    const backRow = document.querySelector(".rain.back-row");

    // Clear out everything
    if (frontRow) frontRow.innerHTML = "";
    if (backRow) backRow.innerHTML = "";

    let increment = 0;
    let drops = "";
    let backDrops = "";

    while (increment < 100) {
      // Couple random numbers to use for various randomizations
      const randoHundo = Math.floor(Math.random() * 98) + 1; // Random number between 98 and 1
      const randoFiver = Math.floor(Math.random() * 4) + 2; // Random number between 5 and 2
      increment += randoFiver;

      // Add in a new raindrop with various randomizations to certain CSS properties
      drops += `<div class="drop" style="left: ${increment}%; bottom: ${
        randoFiver + randoFiver - 1 + 100
      }%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
                  <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                  <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                </div>`;
      backDrops += `<div class="drop" style="right: ${increment}%; bottom: ${
        randoFiver + randoFiver - 1 + 100
      }%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
                      <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                      <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                    </div>`;
    }

    if (frontRow) frontRow.innerHTML = drops;
    if (backRow) backRow.innerHTML = backDrops;
  };

  // const handleToggle = (className: string) => {
  //   document.body.classList.toggle(className);
  //   const toggleElement = document.querySelector(`.${className}.toggle`);
  //   if (toggleElement) toggleElement.classList.toggle("active");
  //   makeItRain();
  // };

  useEffect(() => {
    makeItRain();
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="rain front-row"></div>
      <div className="rain back-row"></div>
    </motion.div>
  );
};

export default Rainfall;
