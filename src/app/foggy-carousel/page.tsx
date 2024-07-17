"use client";

import FoggyCarousel from "@/components/FoggyCarousel/FoggyCarousel";

const FoggyCarouselPage = () => {
  return (
    <div className="bg-[#F6F1D1] min-h-screen text-black">
      <div className="">
        <nav className="flex items-center justify-between py-4 container">
          <h1 className="flex flex-col text-xl font-semibold">
            <span>Foggy</span>
            <span>Carousel</span>
          </h1>

          <div className="text-sm flex items-center gap-12 font-medium">
            <button>Menu</button>
            <button>News</button>
          </div>
        </nav>

        <div className="text-center flex flex-col items-center justify-center py-16 container">
          <h1 className="text-6xl tracking-tighter font-semibold">
            Brewed to perfection
          </h1>
          <p className="text-lg mt-4">
            Your perfect spot for coffee, pastries, and more.
          </p>

          <button className="bg-black text-white h-12 px-8 py-2 flex items-center justify-center text-sm font-medium rounded-3xl mt-6 hover:opacity-85 transition-all duration-300 ease-in-out">
            Explore menu
          </button>
        </div>

        <FoggyCarousel />
      </div>
    </div>
  );
};

export default FoggyCarouselPage;
