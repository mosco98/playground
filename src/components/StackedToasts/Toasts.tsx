"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import FixedElementPortal from "./FixedElementPortal";
import { useToastsContext } from "./ToastsProvider";

const Toasts = () => {
  const { toasts } = useToastsContext();

  return (
    <FixedElementPortal>
      <div className="">
        <AnimatePresence mode="popLayout">
          {toasts.map((toast, i) => (
            <motion.div
              key={toast.id}
              className={cn(
                "fixed bottom-6 right-6 w-[350px] text-gray-200 px-4 py-3 rounded-lg border border-white/30 shadow-lg",
                toast.variant === "failure" ? "bg-red-700" : "bg-green-700"
              )}
              initial={{
                scale: 1,
                y:
                  i === toasts.length - 1
                    ? "100%"
                    : (toasts.length - i - 1) * -16
              }}
              animate={{
                scale: 1 - (toasts.length - i - 1) * 0.05,
                y: (toasts.length - i - 1) * -16,
                opacity: 1
              }}
              exit={{ opacity: 0, y: "20%" }}
              transition={{ duration: 0.65, type: "spring" }}
            >
              {toast.title && <p className="font-medium">{toast.title}</p>}
              <p className="text-sm mt-1">{toast.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </FixedElementPortal>
  );
};

export default Toasts;
