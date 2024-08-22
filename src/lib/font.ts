import { IBM_Plex_Mono } from "next/font/google";
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

export const ibm = IBM_Plex_Mono({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});
