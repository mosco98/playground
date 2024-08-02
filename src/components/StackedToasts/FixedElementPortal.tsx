"use client";

import ReactDOM from "react-dom";

const FixedElementPortal = ({ children }: { children: React.ReactNode }) => {
  return ReactDOM.createPortal(
    children,
    document.body // Render the children into the body element
  );
};

export default FixedElementPortal;
