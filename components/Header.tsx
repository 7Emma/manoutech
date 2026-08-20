"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-sm">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-gutter py-4">
        <div className="flex items-center gap-2">
          <Link href="/">
            <span className="font-display-lg text-[24px] tracking-tighter text-on-surface font-extrabold cursor-pointer">
              ManouTech
            </span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/services"
            className="text-on-surface-variant dark:text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-300"
          >
            {t("services")}
          </Link>
          <Link
            href="/about"
            className="text-on-surface-variant dark:text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-300"
          >
            {t("about")}
          </Link>
          <Link
            href="/projects"
            className="text-on-surface-variant dark:text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-300"
          >
            {t("projects")}
          </Link>
          <Link
            href="/insights"
            className="text-on-surface-variant dark:text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-300"
          >
            {t("insights")}
          </Link>
          <Link
            href="/pricing"
            className="text-on-surface-variant dark:text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-300"
          >
            {t("pricing")}
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 bg-surface-container-low rounded-full p-1 border border-white/5">
            <Link 
              href="/" 
              locale="en" 
              className="px-3 py-1 rounded-full text-xs font-semibold uppercase hover:bg-surface-container-high transition-colors"
            >
              EN
            </Link>
            <Link 
              href="/" 
              locale="fr" 
              className="px-3 py-1 rounded-full text-xs font-semibold uppercase hover:bg-surface-container-high transition-colors"
            >
              FR
            </Link>
          </div>
          <button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-[0_0_15px_rgba(128,131,255,0.2)]">
            {t("start")}
          </button>
        </div>
      </div>
    </nav>
  );
}
