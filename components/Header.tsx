"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/wordmark.png";
import "../styles/header.css";
const links = [
  { href: "/about", label: "À propos" },
  { href: "/equipe", label: "Équipe" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projets" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function LogoMark() {
  return (
    <div style={{
      width: 38, height: 38, borderRadius: 10, flexShrink: 0,
      background: "var(--brand-dark-blue)",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 2px 12px rgba(var(--brand-dark-blue-rgb), 0.45)",
    }}>
      <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="4" fill="white" opacity="0.95"/>
        <path d="M11 2L11 6M11 16L11 20M2 11L6 11M16 11L20 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4.9 4.9L7.8 7.8M14.2 14.2L17.1 17.1M17.1 4.9L14.2 7.8M7.8 14.2L4.9 17.1"
          stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      </svg>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>


      <header className={`mnt-header ${scrolled ? "scrolled" : "top"}`}>
        <div className="mnt-inner">

          {/* Logo */}
          <Link href="/" className="mnt-logo">
            <Image src={logo} alt="Manoutech" className="h-9 w-auto" priority />
          </Link>

          {/* Nav desktop */}
          <nav className="mnt-nav">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={active === link.href ? "active" : ""}
                onClick={() => setActive(link.href)}
              >
                {link.label}
                {link.label === "Services" && <span className="mnt-badge">new</span>}
              </Link>
            ))}
          </nav>

          {/* CTA + Burger */}
          <div className="mnt-cta">
            <Link href="/contact" className="mnt-btn-primary">
              Parler à un expert →
            </Link>
            <button
              className={`mnt-burger ${mobileOpen ? "open" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span/><span/><span/>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`mnt-mobile-menu ${mobileOpen ? "open" : ""}`}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
              <span className="arrow">→</span>
            </Link>
          ))}
          <div className="mnt-mobile-divider"/>
          <Link href="/contact" className="mnt-mobile-cta" onClick={() => setMobileOpen(false)}>
            Parler à un expert →
          </Link>
        </div>
      </header>
    </>
  );
}
