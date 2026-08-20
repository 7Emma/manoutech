import PricingPage from "@/components/PricingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | ManouTech Systems",
  description: "Transparent software engineering tiers designed for your current velocity and future ambitions.",
};

export default function Pricing() {
  return <PricingPage />;
}
