"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ThemeSwitchPage = () => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    if (!showBackdrop) return;

    let timeout = setTimeout(() => {
      if (theme === "light") {
        setTheme("dark");
      } else {
        setTheme("light");
      }

      setShowBackdrop(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [theme, showBackdrop]);

  const handleThemeSwitch = () => {
    setShowBackdrop(true);
  };

  return (
    <div
      className={cn(
        "min-h-screen transition-all duration-200 ease-in-out",
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      )}
    >
      <div className="max-w-[700px] mx-auto relative flex flex-col">
        <div
          className={cn(
            "sticky top-0 flex-shrink-0 flex justify-end py-3 z-50 transition-all duration-200 ease-in-out",
            theme === "dark" ? "bg-black" : "bg-white"
          )}
        >
          <button onClick={handleThemeSwitch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={cn(
                "w-6 h-6 transition-all duration-200 ease-in-out",
                theme === "dark" ? "text-white" : "text-black"
              )}
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z" />
            </svg>
          </button>
        </div>

        <div className="py-4 relative">
          <AnimatePresence>
            {showBackdrop && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                // exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={cn(
                  "absolute inset-0 backdrop-blur-[2px]",
                  theme === "dark" ? "bg-black/30" : "bg-white/30"
                )}
                style={{ scale: 1, zIndex: 10000 }}
              ></motion.div>
            )}
          </AnimatePresence>

          <p
            className={cn(
              "transition-all duration-200 ease-in-out",
              showBackdrop ? "scale-[0.98]" : "scale-100"
            )}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            minima temporibus tempora velit nisi incidunt iste. Quasi assumenda
            atque officiis nihil, praesentium enim saepe quos temporibus alias,
            delectus, sunt sequi? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aperiam, ab facilis sunt porro autem illum
            praesentium voluptates, labore quisquam amet aliquid, perferendis
            possimus quas inventore suscipit necessitatibus hic unde.
            Recusandae! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Ipsa tempore fugit, ducimus earum eum molestiae soluta maiores
            modi beatae est cumque reiciendis at culpa laudantium blanditiis.
            Voluptate reiciendis ipsam dolor. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro praesentium amet vel
            perspiciatis! Amet illo laborum ea, nisi illum impedit consectetur
            totam maiores magni necessitatibus molestiae? Suscipit
            necessitatibus iste laboriosam. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Expedita doloribus tempora ipsam, amet
            nisi consectetur inventore quam architecto ipsa dicta, officiis,
            neque dolore totam necessitatibus autem. Ipsam odit aspernatur
            natus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
            nulla? Distinctio, aliquam labore? Laudantium non, excepturi tenetur
            officiis aut dolor debitis exercitationem aperiam quis illo
            assumenda, sint consequatur est vero. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maxime, laborum? Earum rerum ea id ex
            sed sint totam ullam, sequi distinctio maxime? Eius esse adipisci
            veritatis ducimus illo reprehenderit harum. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ab modi nesciunt alias? Magni,
            quod officia. Nobis quos velit non blanditiis iste aperiam maiores.
            Eum rem modi esse corporis commodi accusantium! Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Impedit accusamus earum
            officia provident placeat. Culpa, odio earum voluptatibus, a aperiam
            dolor inventore laborum fugit, ab dolorum voluptates officia. Harum,
            dolores! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Placeat deserunt minima aliquid impedit dolore explicabo dolores ad
            sunt consequatur quisquam eum voluptatem doloribus consequuntur
            quibusdam soluta omnis iusto, veniam sit! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nesciunt dolores voluptatum ratione
            perspiciatis quisquam, provident reprehenderit earum amet ipsum
            temporibus error qui, itaque officia magni, omnis asperiores atque
            sint. Ipsam. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Rerum dolore ipsum consequuntur libero molestias beatae
            laborum ab tempora fugit quam. Accusantium asperiores dicta totam
            excepturi. Quo omnis eligendi excepturi dolorum! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Autem ullam sit amet natus.
            Magni, quis soluta tenetur quo natus repellat cumque quasi molestias
            culpa corporis perferendis, quia omnis eos reprehenderit! Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Numquam magnam
            fugit amet corrupti iusto ad, laudantium labore praesentium
            assumenda hic eius harum. Voluptatem nesciunt totam reiciendis
            mollitia consectetur possimus itaque. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Odit tempora quia ducimus dolores aut
            nostrum iusto eaque facilis quo cumque, libero perferendis suscipit
            sit! Quibusdam libero dolorum consectetur odio ducimus. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Ipsum soluta vel
            adipisci! Minima omnis, at ad nulla consequatur quis cupiditate
            pariatur molestias eveniet? Odit quod ea, similique incidunt amet
            veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores exercitationem minus labore blanditiis quod praesentium
            natus sunt! Itaque in optio sequi odit debitis architecto! Vel
            assumenda impedit sed illum ea. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Eaque eius molestias explicabo debitis
            doloremque aperiam ipsum quidem, similique rem qui praesentium
            perferendis tempora neque vel temporibus commodi dolorem quam
            consectetur? Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolor voluptate optio ratione ea aliquam. Ad necessitatibus ea
            aliquid nulla a voluptates dignissimos minus, repudiandae, esse,
            natus assumenda explicabo dicta dolor. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quibusdam nulla possimus reprehenderit
            animi. Praesentium deleniti amet quasi id adipisci architecto nulla,
            excepturi accusamus fugit! Modi itaque officiis deleniti suscipit
            praesentium! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Eius exercitationem, optio, ratione ullam reprehenderit
            aperiam doloremque odio blanditiis, suscipit vitae quam hic maxime
            reiciendis perferendis minus ipsum. Placeat, quod reiciendis. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Adipisci facere
            corporis error! Adipisci placeat perferendis iste, at voluptatem
            fuga est ea alias, maiores eaque ratione corrupti corporis porro eos
            voluptatibus? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Nulla aperiam distinctio perspiciatis ipsum, ex earum!
            Accusamus doloremque iusto deserunt ducimus sequi? Maxime quaerat,
            atque explicabo esse quas odit sequi soluta! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Et vitae voluptatibus
            accusantium. Nihil eveniet officia accusamus sunt, nemo nisi labore
            aut enim accusantium dolorem aliquid. Illum, in! Repellendus,
            adipisci distinctio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitchPage;
