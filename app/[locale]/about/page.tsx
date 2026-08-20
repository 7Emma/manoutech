import AboutPage from "@/components/AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | ManouTech Systems",
  description: "Bridging the gap between vision and code. We don't just build software; we engineer digital legacies.",
};

export default function About() {
  return <AboutPage />;
}
