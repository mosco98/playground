"use client";

const TopNavigation = () => {
  return (
    <div className="bg-white fixed top-0 left-0 w-full z-50 text-xs px-7 py-1.5 text-black flex items-center justify-between">
      <div className="flex items-center gap-6">
        <p className="font-semibold">Moses Enyinnaya</p>
        <p>Frontend Developer</p>
      </div>

      <div className="flex items-center gap-6">
        <button>Github</button>
        <button>LinkedIn</button>
        <button>X</button>
        <button>Email</button>
        <button>Resume</button>
      </div>
    </div>
  );
};

export default TopNavigation;
