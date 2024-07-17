"use client";

import { cn } from "@/lib/utils";

interface SunshineProps {
  className?: string;
}

const Sunshine = ({ className }: SunshineProps) => {
  return (
    <div className={cn("sun", className)}>
      <div className="ray_box">
        <div className="ray ray1" />
        <div className="ray ray2" />
        <div className="ray ray3" />
        <div className="ray ray4" />
        <div className="ray ray5" />
        <div className="ray ray6" />
        <div className="ray ray7" />
        <div className="ray ray8" />
        <div className="ray ray9" />
        <div className="ray ray10" />
      </div>
    </div>
  );
};

export default Sunshine;
