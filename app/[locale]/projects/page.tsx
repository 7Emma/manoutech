import ProjectsPage from "@/components/ProjectsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ManouTech | Portfolio & Case Studies",
  description: "A selection of high-impact engineering projects ranging from complex AI infrastructures to seamless cross-platform mobile experiences.",
};

export default function Projects() {
  return <ProjectsPage />;
}
