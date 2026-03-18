"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return children;
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main className="w-full px-4 md:px-6 lg:px-8 py-16">{children}</main>
      <Footer />
    </div>
  );
}
