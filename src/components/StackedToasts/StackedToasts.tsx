"use client";

import { v4 } from "uuid";
import Toasts from "./Toasts";
import { useToastsContext } from "./ToastsProvider";

const StackedToasts = () => {
  const { toasts, toast } = useToastsContext();

  return (
    <>
      <div className="min-h-screen grid place-items-center">
        <div className=" flex items-center gap-4">
          <button
            className="text-[13px] bg-green-500 text-white px-4 h-10 rounded-lg hover:opacity-80 transition-all duration-300 ease-in-out"
            onClick={() =>
              toast({
                id: v4(),
                title: "We are proud!",
                description: "Congratulations on joining the winning team."
              })
            }
          >
            Show success toast
          </button>

          <button
            className="text-[13px] bg-red-500 text-white px-4 h-10 rounded-lg hover:opacity-80 transition-all duration-300 ease-in-out"
            onClick={() =>
              toast({
                id: v4(),
                title: "Something went wrong!",
                description: "An error occured. Please try again.",
                variant: "failure"
              })
            }
          >
            Show failure toast
          </button>
        </div>
      </div>

      {!!toasts.length && <Toasts />}
    </>
  );
};

export default StackedToasts;
