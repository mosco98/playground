"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FormEvent, useState } from "react";
import useMeasure from "react-use-measure";
import { v4 } from "uuid";

const DEFAULT_COMMENTS = [
  {
    id: "1",
    name: "Mike",
    time: "13 hours ago",
    message:
      "Is it just me, or is the font size on this page designed for ants?",
    avatar: "/avatar.jpg"
  }
];

const CommentReplyPage = () => {
  const [messageInputValue, setMessageInputValue] = useState("");
  const [comments, setComments] = useState(DEFAULT_COMMENTS);
  const [nextId, setNextId] = useState(v4());

  const [ref, bounds] = useMeasure({ offsetSize: true });

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!messageInputValue) return;

    const newComment = {
      id: nextId,
      name: "Moses",
      time: "now",
      message: messageInputValue,
      avatar: "/me.jpg"
    };

    setComments((prev) => [...prev, newComment]);

    setMessageInputValue("");
    setNextId(v4());
  };

  return (
    <div className="min-h-screen bg-white grid place-content-center">
      <div
        className="w-[550px] relative flex flex-col justify-between"
        // style={{ height: bounds.height }}
      >
        <motion.div>
          <div className="bg-[#0D0D0D] rounded-3xl p-1.5">
            <div className="rounded-3xl bg-[#7D7D7D]/30 p-3 flex items-center justify-between">
              <div className="flex items-center gap-1.5 font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M132,24A100.11,100.11,0,0,0,32,124v84a16,16,0,0,0,16,16h84a100,100,0,0,0,0-200ZM88,140a12,12,0,1,1,12-12A12,12,0,0,1,88,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,132,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,176,140Z" />
                </svg>

                <p className="text-white/60 text-[15px]">Comment</p>
              </div>

              <div className="flex items-center gap-4">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                  </svg>
                </button>

                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
                  </svg>
                </button>
              </div>
            </div>

            <motion.div
              animate={{ height: bounds.height ? bounds.height : "auto" }}
              transition={{
                type: "spring",
                bounce: 0.15,
                duration: 0.25
              }}
            >
              <motion.div
                layout
                className="py-4 space-y-6"
                // transition={{ type: "spring", bounce: 0.15, }}
                ref={ref}
              >
                {comments.map((comment) => (
                  <motion.div
                    key={comment.id}
                    className="space-y-2 p-2"
                    layoutId={`comment-${comment.id}`}
                    transition={{ ease: "easeInOut" }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 aspect-square rounded-full relative overflow-hidden">
                        <Image
                          className="object-cover"
                          src={comment.avatar}
                          fill
                          alt=""
                        />
                      </div>

                      <AnimatePresence>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="flex items-center gap-4"
                          key={comment.id}
                        >
                          <p className="text-white font-medium">
                            {comment.name}
                          </p>

                          <p className="text-xs">{comment.time}</p>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <motion.p
                      className="opacity-0"
                      layoutId={`comment-${comment.id}-message`}
                      transition={{ duration: 0 }}
                    ></motion.p>

                    <AnimatePresence>
                      <motion.p
                        initial={{ x: 30 }}
                        animate={{ x: 0 }}
                        className="text-white/70"
                        key={comment.id}
                        transition={{
                          type: "spring",
                          bounce: 0.15
                          // delay: 0.05
                        }}
                      >
                        {comment.message}
                      </motion.p>
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <div className="flex-shrink-0 px-3 mt-1">
          <form onSubmit={handleFormSubmit}>
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                layout="preserve-aspect"
                layoutId={`comment-${nextId}`}
                className="bg-[#0D0D0D] flex items-center justify-between relative"
                style={{ padding: 8, borderRadius: 32 }}
                key={nextId}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              >
                <div className="w-10 aspect-square rounded-full flex-shrink-0 relative overflow-hidden">
                  <Image className="object-cover" src={"/me.jpg"} fill alt="" />
                </div>

                <motion.div
                  layout="position"
                  layoutId={`comment-${nextId}-message`}
                  className="flex-1"
                >
                  <input
                    className="w-full h-10 bg-transparent outline-none px-3 text-white placeholder:text-[#7D7D7D]/70"
                    placeholder="Reply"
                    value={messageInputValue}
                    onChange={(e) => setMessageInputValue(e.target.value)}
                    autoFocus
                  />
                </motion.div>

                <motion.button
                  className="h-10 text-sm font-medium flex-shrink-0 disabled:bg-[#7D7D7D]/30 disabled:text-inherit bg-purple-600 text-white px-4 rounded-3xl transition-all duration-200 ease-in-out"
                  disabled={!messageInputValue}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Send
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentReplyPage;
