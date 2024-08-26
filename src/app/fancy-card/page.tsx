/* eslint-disable @next/next/no-img-element */
"use client";

const FancyCard = () => {
  return (
    <div className="min-h-screen grid place-content-center">
      <div className="w-[280px] h-[380px] rounded-2xl overflow-hidden relative group cursor-pointer">
        <img
          src="/house.jpg"
          alt="house"
          className="absolute h-full w-full object-cover group-hover:scale-y-110 transition-all duration-500 ease-in-out origin-bottom will-change-transform"
        />

        <div className="w-full h-full relative flex items-end overflow-hidden">
          <div className="w-full relative translate-y-1/2 group-hover:translate-y-1 transition-all duration-500 ease-in-out overflow-hidden will-change-transform">
            <div className="absolute inset-0 bg-orange-950/80"></div>
            <div className="relative px-4 pt-4 pb-7 bg-black/85 overflow-hidden">
              <div>
                <h1 className="text-white tracking-tight font-medium text-lg">
                  6 bedroom duplex
                </h1>

                <p className="text-[13px] mt-px">
                  <span className="font-medium">@carlosivestors</span> on
                  Instagram
                </p>
              </div>

              <div className="mt-8 space-y-2.5">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z" />
                  </svg>

                  <p className="text-sm pb-px font-light">Kigali, Rwanda</p>
                </div>

                <p className="text-xs text-red-700 opacity-60">
                  Oops! This property is no longer available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyCard;
