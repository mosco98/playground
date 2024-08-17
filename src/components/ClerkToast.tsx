"use client";

import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { v4 } from "uuid";
import FixedElementPortal from "./StackedToasts/FixedElementPortal";
import { useToastsContext } from "./StackedToasts/ToastsProvider";

const ClerkToast = () => {
  const { toast, toasts } = useToastsContext();

  const [ref, bounds] = useMeasure({ offsetSize: true });

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed bottom-10 w-full flex items-center justify-end gap-2.5 px-4">
        <button
          className="text-white bg-black h-9 text-sm px-4 rounded-2xl border border-black"
          onClick={() => {
            toast({
              id: v4(),
              title: "We are proud!",
              description: "Congratulations on joining the winning team."
            });
          }}
        >
          Action
        </button>
        <button
          className="text-white bg-black h-9 text-sm px-4 rounded-2xl border border-black"
          onClick={() => {
            toast({
              id: v4(),
              title: "We are proud!",
              description: "Congratulations on joining the winning team.",
              variant: "failure"
            });
          }}
        >
          Muted
        </button>
      </div>

      <div className="container pt-20 space-y-6">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt cum
          consequuntur, iure vero tenetur illum molestias earum perspiciatis
          similique corrupti, officia velit, odit rerum quae totam nulla?
          Aperiam, delectus tenetur! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quasi, quod fuga! Sint, illum. Doloribus ex impedit
          odit ipsum aperiam error nemo eaque, eius, nisi facilis corporis, quas
          nostrum voluptatem tempora? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nulla repellendus dolore qui veritatis vitae.
          Adipisci error alias necessitatibus ratione. Voluptatum laborum
          adipisci corrupti cum neque laboriosam velit, esse quia aut. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          voluptatum, eligendi accusantium nihil provident culpa modi adipisci
          molestias porro similique non inventore consectetur a est dicta ex
          sequi veniam quod. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Nulla minus est molestias sapiente illo sunt officia aspernatur,
          delectus, porro expedita ipsa quia architecto excepturi similique.
          Repellat sint quo sequi ratione!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt cum
          consequuntur, iure vero tenetur illum molestias earum perspiciatis
          similique corrupti, officia velit, odit rerum quae totam nulla?
          Aperiam, delectus tenetur! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quasi, quod fuga! Sint, illum. Doloribus ex impedit
          odit ipsum aperiam error nemo eaque, eius, nisi facilis corporis, quas
          nostrum voluptatem tempora? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nulla repellendus dolore qui veritatis vitae.
          Adipisci error alias necessitatibus ratione. Voluptatum laborum
          adipisci corrupti cum neque laboriosam velit, esse quia aut. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          voluptatum, eligendi accusantium nihil provident culpa modi adipisci
          molestias porro similique non inventore consectetur a est dicta ex
          sequi veniam quod. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Nulla minus est molestias sapiente illo sunt officia aspernatur,
          delectus, porro expedita ipsa quia architecto excepturi similique.
          Repellat sint quo sequi ratione!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt cum
          consequuntur, iure vero tenetur illum molestias earum perspiciatis
          similique corrupti, officia velit, odit rerum quae totam nulla?
          Aperiam, delectus tenetur! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quasi, quod fuga! Sint, illum. Doloribus ex impedit
          odit ipsum aperiam error nemo eaque, eius, nisi facilis corporis, quas
          nostrum voluptatem tempora? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nulla repellendus dolore qui veritatis vitae.
          Adipisci error alias necessitatibus ratione. Voluptatum laborum
          adipisci corrupti cum neque laboriosam velit, esse quia aut. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          voluptatum, eligendi accusantium nihil provident culpa modi adipisci
          molestias porro similique non inventore consectetur a est dicta ex
          sequi veniam quod. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Nulla minus est molestias sapiente illo sunt officia aspernatur,
          delectus, porro expedita ipsa quia architecto excepturi similique.
          Repellat sint quo sequi ratione!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt cum
          consequuntur, iure vero tenetur illum molestias earum perspiciatis
          similique corrupti, officia velit, odit rerum quae totam nulla?
          Aperiam, delectus tenetur! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quasi, quod fuga! Sint, illum. Doloribus ex impedit
          odit ipsum aperiam error nemo eaque, eius, nisi facilis corporis, quas
          nostrum voluptatem tempora? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nulla repellendus dolore qui veritatis vitae.
          Adipisci error alias necessitatibus ratione. Voluptatum laborum
          adipisci corrupti cum neque laboriosam velit, esse quia aut. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          voluptatum, eligendi accusantium nihil provident culpa modi adipisci
          molestias porro similique non inventore consectetur a est dicta ex
          sequi veniam quod. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Nulla minus est molestias sapiente illo sunt officia aspernatur,
          delectus, porro expedita ipsa quia architecto excepturi similique.
          Repellat sint quo sequi ratione!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt cum
          consequuntur, iure vero tenetur illum molestias earum perspiciatis
          similique corrupti, officia velit, odit rerum quae totam nulla?
          Aperiam, delectus tenetur! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quasi, quod fuga! Sint, illum. Doloribus ex impedit
          odit ipsum aperiam error nemo eaque, eius, nisi facilis corporis, quas
          nostrum voluptatem tempora? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nulla repellendus dolore qui veritatis vitae.
          Adipisci error alias necessitatibus ratione. Voluptatum laborum
          adipisci corrupti cum neque laboriosam velit, esse quia aut. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          voluptatum, eligendi accusantium nihil provident culpa modi adipisci
          molestias porro similique non inventore consectetur a est dicta ex
          sequi veniam quod. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Nulla minus est molestias sapiente illo sunt officia aspernatur,
          delectus, porro expedita ipsa quia architecto excepturi similique.
          Repellat sint quo sequi ratione!
        </p>
      </div>

      {!!toasts.length && (
        <FixedElementPortal>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-screen w-screen fixed bg-white/50 top-0 pointer-events-none z-50"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="z-50 fixed bottom-0 pb-6 left-1/2 -translate-x-1/2 flex flex-col gap-4"
              ref={ref}
            >
              <motion.div
                animate={{ height: bounds.height ? bounds.height + 30 : 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.2,
                  ease: "easeInOut"
                }}
                style={{ x: "-50%" }}
                className="absolute w-[580px] radial-blur left-1/2 bottom-0"
              ></motion.div>

              {toasts.map((t) => (
                <motion.div
                  initial={{ scale: 0.95, y: 50, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.2,
                    ease: "easeInOut"
                  }}
                  key={t.id}
                  className="w-[420px] bg-[#0B0A09] text-white px-4 py-2.5 rounded-2xl flex items-center justify-center text-[15px] relative z-50 shadow-xl"
                  layout
                >
                  <div className="flex items-center gap-2 flex-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z" />
                    </svg>

                    <p className="flex-1">This is a toast message</p>
                  </div>

                  {t.variant !== "failure" && (
                    <button className="h-8 px-3 rounded-2xl flex items-center justify-center bg-[#392D32]">
                      Action
                    </button>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </FixedElementPortal>
      )}
    </div>
  );
};

export default ClerkToast;
