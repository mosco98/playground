"use client";

import { createContext, useContext, useState } from "react";

interface ToastsProviderProps {
  children: React.ReactNode;
}

export interface ToastType {
  id: string;
  variant?: "success" | "failure";
  title?: string;
  description: string;
  onClose?: () => void;
}

interface ToastsContextData {
  toasts: ToastType[];
  toast: (newToast: ToastType) => void;
}

const ToastsContext = createContext<ToastsContextData | null>(null);

export const useToastsContext = () => {
  const context = useContext(ToastsContext);

  if (!context) {
    throw new Error(
      "useToastsContext can only be be used within a ToastsProvider"
    );
  }

  return context;
};

export const ToastsProvider = ({ children }: ToastsProviderProps) => {
  const [toasts, setToasts] = useState<ToastType[]>([
    // {
    //   id: v4(),
    //   title: "Sent!",
    //   description: "Money sent. Check email for confirmation receipt.",
    //   variant: "success"
    // },
    // {
    //   id: v4(),
    //   title: "Sent!",
    //   description: "Money sent. Check email for confirmation receipt!!!!",
    //   variant: "success"
    // },
    // {
    //   id: v4(),
    //   title: "Sent!",
    //   description: "Money sent. Check email for confirmation receipt!!!!",
    //   variant: "success"
    // }
  ]);

  const toast = (newToast: ToastType) => {
    setToasts((prevToasts) => {
      // let newToasts: any = [...prevToasts];

      // if (prevToasts.length === 3) {
      //   newToasts = prevToasts.slice(1);
      // }

      return [...prevToasts, newToast];
    });
  };

  const value = {
    toasts,
    toast
  };

  return (
    <ToastsContext.Provider value={value}>{children}</ToastsContext.Provider>
  );
};
