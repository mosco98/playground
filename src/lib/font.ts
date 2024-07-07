import localFont from "next/font/local";

export const geist = localFont({
  variable: "--font-geist",
  src: [
    {
      path: "./fonts/GeistVF.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/GeistVF.ttf",
      weight: "500",
      style: "normal"
    }
  ]
});
