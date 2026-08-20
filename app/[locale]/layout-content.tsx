"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { AnimatePresence, motion } from "framer-motion";
import AIAssistantWidget from "@/components/AIAssistantWidget";

export default function RootLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  if (isDashboard) {
    return children;
  }

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex-grow w-full"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <AIAssistantWidget />
    </div>
  );
}
