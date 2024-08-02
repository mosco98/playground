"use client";

import StackedToasts from "@/components/StackedToasts/StackedToasts";
import { ToastsProvider } from "@/components/StackedToasts/ToastsProvider";

const StackedToastsPage = () => {
  return (
    <>
      <ToastsProvider>
        <StackedToasts />
      </ToastsProvider>
    </>
  );
};

export default StackedToastsPage;
