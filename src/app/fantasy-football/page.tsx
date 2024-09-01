"use client";

import Image from "next/image";

const FantasyFootball = () => {
  return (
    <div className="min-h-screen bg-white grid place-content-center">
      <Image src={"/pitch.svg"} width={1000} height={1500} alt="pitch" />
    </div>
  );
};

export default FantasyFootball;
