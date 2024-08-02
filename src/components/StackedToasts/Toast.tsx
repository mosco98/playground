"use client";

import type { ToastType } from "./ToastsProvider";

interface ToastProps extends ToastType {}

const Toast = ({ id, description, title, variant }: ToastProps) => {
  return <div className="w-[350px] text-white p-4 bg-red-200">Toast</div>;
};

export default Toast;
