import { Outfit, JetBrains_Mono, Geist } from "next/font/google";

export const fontSans = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const fontHeading = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});
