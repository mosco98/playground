"use client";

import ClerkToast from "@/components/ClerkToast";
import { ToastsProvider } from "@/components/StackedToasts/ToastsProvider";

const ClerkToastPage = () => {
  return (
    <ToastsProvider>
      <ClerkToast />
    </ToastsProvider>
  );
};

export default ClerkToastPage;
