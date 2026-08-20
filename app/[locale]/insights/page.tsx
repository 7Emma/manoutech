import InsightsPage from "@/components/InsightsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | ManouTech Systems",
  description: "Get the latest insights on engineering architecture, design systems, and product strategy.",
};

export default function Insights() {
  return <InsightsPage />;
}
