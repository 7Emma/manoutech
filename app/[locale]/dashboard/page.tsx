import DashboardPage from "@/components/DashboardPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ManouTech Client Dashboard",
  description: "Client portal and project tracking dashboard.",
};

export default function Dashboard() {
  return <DashboardPage />;
}
