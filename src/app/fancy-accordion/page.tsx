"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const FAQS = [
  {
    id: 1,
    title: "What is Streamline Pro?",
    content:
      "Streamline Pro is a cutting-edge project management tool designed to help teams organize tasks, streamline workflows, and boost productivity through intuitive features and real-time collaboration.",
    isFav: true
  },
  {
    id: 2,
    title: "How does Streamline Pro work?",
    content:
      "Streamline Pro works by allowing you to create and manage tasks, set deadlines, assign team members, and track progress all in one place. Simply sign up, create a project, and start adding tasks. Your team members can collaborate in real-time, making it easy to keep everyone on the same page."
  },
  {
    id: 3,
    title: "How do I get started with Streamline Pro?",
    content:
      "Getting started is easy! Just sign up with your email, choose a plan, and you can start creating your first project in minutes. Once you're in, you can invite team members, set up your tasks, and begin collaborating right away."
  },
  {
    id: 4,
    title: "Is there a free trial available?",
    content:
      "Yes, we offer a 14-day free trial so you can explore all the features of Streamline Pro before making a commitment. Sign up now to get started with your trial and see how Streamline Pro can transform your workflow.",
    isStar: true
  },
  {
    id: 5,
    title: "Can I upgrade or downgrade my plan later?",
    content:
      "Absolutely! You can upgrade or downgrade your plan at any time from your account settings. We offer flexible plans to suit teams of all sizes, and our customer support team is always here to help you make the switch."
  }
];

const FancyCarousel = () => {
  const [active, setActive] = useState<number | undefined>();

  const handleSelect = (id: number) => {
    if (active === id) {
      setActive(undefined);
    } else {
      setActive(id);
    }
  };

  return (
    <div className="min-h-screen w-screen grid place-items-center bg-white px-5">
      <div className="md:w-[500px] w-full">
        <h1 className="text-center mb-14 text-4xl text-[#0D0D0D] font-semibold tracking-tight">
          FAQ
        </h1>

        <div className="px-6 text-sm mb-3">
          <p>Every day, 9:01 AM</p>
        </div>
        <div className="space-y-3 w-full">
          {FAQS.map((faq) => (
            <AccordionItem
              key={faq.id}
              {...faq}
              isActive={faq.id === active}
              onSelect={() => handleSelect(faq.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FancyCarousel;

interface AccordionItemProps {
  isActive: boolean;
  title: string;
  content: string;
  onSelect: () => void;
  isFav?: boolean;
  isStar?: boolean;
}

const AccordionItem = ({
  isActive,
  title,
  content,
  onSelect,
  isFav = false,
  isStar = false
}: AccordionItemProps) => {
  return (
    <div className="space-y-2 text-sm md:text-[15px] w-full">
      <button
        className={cn(
          "flex items-center gap-2 message group",
          isActive && "active"
        )}
        onClick={onSelect}
      >
        <div
          className={cn(
            "bg-gray-100 text-[#0D0D0D] px-6 py-4 rounded-3xl font-medium relative transition-all duration-200 ease-in-out group-hover:text-blue-400 group-hover:bg-blue-50",
            isActive && "bg-blue-50 text-blue-400"
          )}
        >
          <p className="text-left">{title}</p>

          {isFav && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={cn(
                "w-7 h-7 absolute -top-3 right-0 rotate-12 fill-red-400 group-hover:fill-red-500 transition-all duration-200 ease-in-out",
                isActive && "fill-red-500"
              )}
              viewBox="0 0 256 256"
            >
              <path d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z" />
            </svg>
          )}

          {isStar && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={cn(
                "w-7 h-7 absolute -left-3 top-0 -rotate-12 fill-yellow-400 group-hover:fill-yellow-500 transition-all duration-200 ease-in-out",
                isActive && "fill-yellow-500"
              )}
              viewBox="0 0 256 256"
            >
              <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
            </svg>
          )}
        </div>

        <span
          className={cn(
            "w-4 aspect-square flex items-center justify-center rounded-full relative border-[1.1px] border-[#0D0D0D] transition-all duration-200 ease-in-out group-hover:bg-blue-400 group-hover:border-blue-400",
            isActive && "bg-blue-400 border-blue-400"
          )}
        >
          <span
            className={cn(
              "block w-1.5 h-px bg-[#0D0D0D] group-hover:bg-white transition-all duration-200 ease-in-out",
              isActive && "bg-white"
            )}
          ></span>

          <motion.span
            initial={{ rotate: !isActive ? "90deg" : "0deg" }}
            animate={{ rotate: !isActive ? "90deg" : "0deg" }}
            transition={{ ease: "easeInOut", duration: 0.1 }}
            className={cn(
              "block w-1.5 h-px bg-[#0D0D0D] absolute group-hover:bg-white transition-all duration-200 ease-in-out",
              isActive && "bg-white"
            )}
          ></motion.span>
        </span>
      </button>

      <motion.div
        initial={{ height: !isActive ? 0 : "auto" }}
        animate={{ height: !isActive ? 0 : "auto" }}
        className="flex items-center justify-end gap-2 overflow-hidden md:max-w-[75%] max-w-full relative ml-auto"
      >
        <div>
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { delay: 0.4, duration: 0.3, ease: "easeInOut" }
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-blue-400 text-white p-4 rounded-t-3xl rounded-bl-3xl"
              >
                <p className="leading-6">{content}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
