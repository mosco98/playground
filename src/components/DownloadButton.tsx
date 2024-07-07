"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

const DownloadButton = () => {
  const [animating, setAnimating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async () => {
    const aliCart = [];
    const tofaCart = [];

    const userDetails: any = {};
    const shippingDetails: any = {};

    if (!userDetails.address) {
      // Throw error here

      return;
    }

    if (tofaCart.length > 0 && !shippingDetails) {
      // Throw error here

      return;
    }

    let promises: Promise<any>[] = [];

    if (aliCart.length > 0) {
      const aliPromise = fetch("");
      promises.push(aliPromise);
    }

    if (tofaCart.length > 0) {
      const tofaPromise = fetch("");
      promises.push(tofaPromise);
    }

    try {
      const response = await Promise.all(promises);
      console.log({ response });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      className={cn(
        "h-10 text-sm text-white font-medium flex items-center relative",
        !isOpen && "group"
      )}
    >
      <motion.button
        className={cn(
          "h-full bg-transparent py-3 px-[18px] rounded-[32px] inline-flex items-center justify-center transition-all duration-300 ease-in-out absolute w-full",
          animating && "pointer-events-none"
        )}
        onClick={() => setIsOpen(true)}
        initial={{ opacity: !isOpen ? 1 : 0, zIndex: !isOpen ? 10 : -10 }}
        animate={{ opacity: !isOpen ? 1 : 0, zIndex: !isOpen ? 10 : -10 }}
        transition={{
          delay: !isOpen ? 0.45 : 0,
          duration: 0.2,
          ease: "easeInOut"
        }}
      >
        Download Result
      </motion.button>

      <motion.button
        layout
        className={cn(
          "h-full bg-purple-600 group-hover:bg-purple-700 hover:bg-purple-700 py-3 px-[18px] inline-flex items-center justify-center transition-all duration-300 ease-in-out",
          animating && "pointer-events-none"
        )}
        animate={{
          borderTopRightRadius: !isOpen ? 0 : 32,
          borderBottomRightRadius: !isOpen ? 0 : 32
        }}
        style={{ borderTopLeftRadius: 32, borderBottomLeftRadius: 32 }}
        transition={{ stiffness: 250, duration: 0.3 }}
      >
        <motion.span
          initial={{ opacity: !isOpen ? 0 : 1 }}
          animate={{ opacity: !isOpen ? 0 : 1 }}
          transition={{ delay: isOpen ? 0.28 : 0.05, duration: 0.2 }}
          className="inline-flex items-center justify-center gap-2"
        >
          <svg
            width={16}
            height={17}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_0_2223"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={16}
              height={17}
            >
              <rect y="0.5" width={16} height={16} fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_0_2223)">
              <path
                d="M2.00033 14.4999C1.63366 14.4999 1.31977 14.3694 1.05866 14.1083C0.797548 13.8472 0.666992 13.5333 0.666992 13.1666V5.1666C0.666992 4.79993 0.797548 4.48604 1.05866 4.22493C1.31977 3.96382 1.63366 3.83326 2.00033 3.83326H4.10033L5.33366 2.49993H9.33366V3.83326H5.91699L4.70033 5.1666H2.00033V13.1666H12.667V7.16659H14.0003V13.1666C14.0003 13.5333 13.8698 13.8472 13.6087 14.1083C13.3475 14.3694 13.0337 14.4999 12.667 14.4999H2.00033ZM12.667 5.1666V3.83326H11.3337V2.49993H12.667V1.1666H14.0003V2.49993H15.3337V3.83326H14.0003V5.1666H12.667ZM7.33366 12.1666C8.16699 12.1666 8.87533 11.8749 9.45866 11.2916C10.042 10.7083 10.3337 9.99993 10.3337 9.16659C10.3337 8.33326 10.042 7.62493 9.45866 7.04159C8.87533 6.45826 8.16699 6.16659 7.33366 6.16659C6.50033 6.16659 5.79199 6.45826 5.20866 7.04159C4.62533 7.62493 4.33366 8.33326 4.33366 9.16659C4.33366 9.99993 4.62533 10.7083 5.20866 11.2916C5.79199 11.8749 6.50033 12.1666 7.33366 12.1666ZM7.33366 10.8333C6.86699 10.8333 6.47255 10.6722 6.15033 10.3499C5.8281 10.0277 5.66699 9.63326 5.66699 9.16659C5.66699 8.69993 5.8281 8.30548 6.15033 7.98326C6.47255 7.66104 6.86699 7.49993 7.33366 7.49993C7.80033 7.49993 8.19477 7.66104 8.51699 7.98326C8.83922 8.30548 9.00033 8.69993 9.00033 9.16659C9.00033 9.63326 8.83922 10.0277 8.51699 10.3499C8.19477 10.6722 7.80033 10.8333 7.33366 10.8333Z"
                fill="#FFFFFF"
              />
            </g>
          </svg>
          Image
        </motion.span>
      </motion.button>

      <motion.button
        layout
        className={cn(
          "h-full bg-purple-600 group-hover:bg-purple-700 hover:bg-purple-700 py-3 px-[18px] inline-flex items-center justify-center transition-all duration-300 ease-in-out",
          animating && "pointer-events-none"
        )}
        initial={{
          borderRadius: !isOpen ? 0 : 32,
          marginLeft: !isOpen ? -32 : 10,
          marginRight: !isOpen ? -32 : 10
        }}
        animate={{
          borderRadius: !isOpen ? 0 : 32,
          marginLeft: !isOpen ? -32 : 10,
          marginRight: !isOpen ? -32 : 10
        }}
        transition={{ stiffness: 250, duration: 0.3 }}
        onAnimationComplete={() => setAnimating(false)}
        onAnimationStart={() => setAnimating(true)}
      >
        <motion.span
          initial={{ opacity: !isOpen ? 0 : 1 }}
          animate={{ opacity: !isOpen ? 0 : 1 }}
          transition={{ delay: isOpen ? 0.3 : 0.05, duration: 0.2 }}
          className="inline-flex items-center justify-center gap-2"
        >
          <svg
            width={12}
            height={13}
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.66667 9.83333H7.33333V8.5H2.66667V9.83333ZM2.66667 7.16667H9.33333V5.83333H2.66667V7.16667ZM2.66667 4.5H9.33333V3.16667H2.66667V4.5ZM1.33333 12.5C0.966667 12.5 0.652778 12.3694 0.391667 12.1083C0.130556 11.8472 0 11.5333 0 11.1667V1.83333C0 1.46667 0.130556 1.15278 0.391667 0.891667C0.652778 0.630556 0.966667 0.5 1.33333 0.5H10.6667C11.0333 0.5 11.3472 0.630556 11.6083 0.891667C11.8694 1.15278 12 1.46667 12 1.83333V11.1667C12 11.5333 11.8694 11.8472 11.6083 12.1083C11.3472 12.3694 11.0333 12.5 10.6667 12.5H1.33333ZM1.33333 11.1667H10.6667V1.83333H1.33333V11.1667Z"
              fill="#FFFFFF"
            />
          </svg>
          PDF
        </motion.span>
      </motion.button>

      <motion.button
        layout
        className={cn(
          "h-full bg-purple-600 group-hover:bg-purple-700 hover:bg-purple-700 py-3 px-[18px] inline-flex items-center justify-center transition-all duration-300 ease-in-out",
          animating && "pointer-events-none"
        )}
        animate={{
          borderTopLeftRadius: !isOpen ? 0 : 32,
          borderBottomLeftRadius: !isOpen ? 0 : 32
        }}
        style={{ borderTopRightRadius: 32, borderBottomRightRadius: 32 }}
        transition={{ stiffness: 250, duration: 0.3 }}
        onClick={() => setIsOpen(false)}
      >
        <motion.svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: !isOpen ? 0 : 1 }}
          animate={{ opacity: !isOpen ? 0 : 1 }}
          transition={{ delay: isOpen ? 0.3 : 0.05, duration: 0.2 }}
        >
          <mask
            id="mask0_0_2233"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={16}
            height={16}
          >
            <rect width={16} height={16} fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_0_2233)">
            <path
              d="M4.26634 12.6667L3.33301 11.7333L7.06634 8.00001L3.33301 4.26668L4.26634 3.33334L7.99967 7.06668L11.733 3.33334L12.6663 4.26668L8.93301 8.00001L12.6663 11.7333L11.733 12.6667L7.99967 8.93334L4.26634 12.6667Z"
              fill="#FFFFFF"
            />
          </g>
        </motion.svg>
      </motion.button>
    </motion.div>
  );
};

export default DownloadButton;
