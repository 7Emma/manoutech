"use client";

import React from "react";
import Link from "next/link";
import { Share2, AtSign, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-white/5 w-full mt-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter max-w-container-max mx-auto px-gutter py-section-padding-desktop">
        <div className="col-span-2">
          <h2 className="font-display-lg text-headline-md text-on-surface dark:text-on-surface mb-6">
            ManouTech
          </h2>
          <p className="text-on-surface-variant max-w-xs mb-8">
            Engineered for Excellence. Providing cutting-edge software solutions
            for global enterprises and visionaries.
          </p>
          <div className="flex gap-4">
            <Share2 className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors" />
            <AtSign className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors" />
            <Terminal className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-on-surface">Company</h4>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors text-body-md font-body-md"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors text-body-md font-body-md"
            href="/projects"
          >
            Case Studies
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors text-body-md font-body-md"
            href="/about"
          >
            About Us
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-on-surface">Legal</h4>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors text-body-md font-body-md"
            href="#"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors text-body-md font-body-md"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors text-body-md font-body-md"
            href="#"
          >
            Security
          </Link>
        </div>
        <div className="col-span-2">
          <h4 className="font-bold text-on-surface mb-4">Newsletter</h4>
          <p className="text-sm text-on-surface-variant mb-4">
            Get technical insights and project updates.
          </p>
          <form className="flex gap-2">
            <input
              className="bg-surface-container px-4 py-2 rounded-lg border-none focus:ring-1 focus:ring-primary text-sm flex-grow text-on-surface"
              placeholder="Email address"
              type="email"
            />
            <button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-bold text-sm">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-gutter py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant text-sm font-body-md">
          © {new Date().getFullYear()} ManouTech Systems. Engineered for Excellence.
        </p>
        <div className="flex gap-8">
          <span className="flex items-center gap-2 text-xs font-label-mono text-on-surface-variant">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>{" "}
            SYSTEM STATUS: OPERATIONAL
          </span>
        </div>
      </div>
    </footer>
  );
}
