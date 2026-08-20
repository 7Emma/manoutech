import EquinoxCaseStudy from "@/components/EquinoxCaseStudy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equinox SaaS Analytics | Case Study | ManouTech",
  description: "Architecting a high-performance analytics engine capable of processing 2.5 billion events daily with sub-second latency for enterprise-grade observability.",
};

export default function EquinoxPage() {
  return <EquinoxCaseStudy />;
}
