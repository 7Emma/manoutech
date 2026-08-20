import ServicesPage from "@/components/ServicesPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | ManouTech Systems",
  description: "Expertise tailored to your vision.",
};

export default function Services() {
  return <ServicesPage />;
}
