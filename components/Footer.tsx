"use client";

import { useState } from "react";
import "../styles/footer.css";

const navLinks = {
  Produit: [
    { label: "Services", href: "/services" },
    { label: "Projets", href: "/projects" },
    { label: "Stack technique", href: "/stack" },
    { label: "Tarifs", href: "/pricing" },
  ],
  Entreprise: [
    { label: "À propos", href: "/about" },
    { label: "Équipe", href: "/equipe" },
    { label: "Blog", href: "/blog" },
    { label: "Carrières", href: "/careers" },
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Confidentialité", href: "/privacy-policy" },
  ],
  Contact: [
    { label: "Démarrer un projet", href: "/contact" },
    { label: "hello@manoutech.com", href: "mailto:hello@manoutech.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
  ],
};

const badges = [
  "Next.js",
  "React Native",
  "Node.js",
  "Postgres",
  "AI/ML",
  "Vercel",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (email.includes("@")) {
      setSent(true);
      setEmail("");
    }
  };

  return (
    <>
      <footer className="ft-root">
        <div className="ft-grid" />
        <div className="ft-orb ft-orb-a" />
        <div className="ft-orb ft-orb-b" />

        {/* ── CTA Banner ── */}
        <div
          className="ft-cta"
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div className="ft-cta-left">
            <div className="ft-cta-tag">
              <span className="ft-cta-dot" />
              Nouveau projet ?
            </div>
            <h2 className="ft-cta-h">
              Passons à <em>l'action</em>.
            </h2>
            <p className="ft-cta-sub">
              De l'idée au produit en production en quelques semaines.
            </p>
          </div>
          <div className="ft-cta-right">
            {sent ? (
              <p className="ft-confirm">✓ On revient vers vous sous 24h !</p>
            ) : (
              <>
                <div className="ft-input-row">
                  <input
                    className="ft-input"
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  />
                  <button className="ft-input-btn" onClick={handleSubmit}>
                    Envoyer →
                  </button>
                </div>
                <p className="ft-hint">
                  Ou écrivez directement : hello@manoutech.com
                </p>
              </>
            )}
            <a
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--brand-dark-blue)",
                color: "white",
                fontSize: 13.5,
                fontWeight: 600,
                padding: "11px 22px",
                borderRadius: 99,
                textDecoration: "none",
                width: "fit-content",
                boxShadow: "0 4px 20px rgba(var(--brand-dark-blue-rgb), 0.3)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              Démarrer un projet →
            </a>
          </div>
        </div>

        {/* ── Nav grid ── */}
        <div className="ft-main">
          {/* Brand */}
          <div>
            <a href="/" className="ft-brand-logo">
              <div className="ft-logo-mark">
                <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="4" fill="white" opacity="0.95" />
                  <path
                    d="M11 2L11 6M11 16L11 20M2 11L6 11M16 11L20 11"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4.9 4.9L7.8 7.8M14.2 14.2L17.1 17.1M17.1 4.9L14.2 7.8M7.8 14.2L4.9 17.1"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </div>
              <div className="ft-logo-text">
                Manou<span>Tech</span>
              </div>
            </a>
            <p className="ft-brand-desc">
              Studio produit &amp; data. On conçoit, code et livre des produits
              digitaux ambitieux — SaaS, mobile, AI.
            </p>
            <div className="ft-badges">
              {badges.map((b) => (
                <span key={b} className="ft-badge">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {Object.entries(navLinks).map(([title, links]) => (
            <div key={title} className="ft-nav-col">
              <div className="ft-nav-title">{title}</div>
              <ul className="ft-nav-list">
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="ft-bottom">
          <p className="ft-copy">
            © 2026 <a href="/">Manoutech Corp.</a> — Tous droits réservés.
          </p>
          <div className="ft-location">
            <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
              <circle
                cx="7"
                cy="6"
                r="2.5"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M7 1C4.24 1 2 3.24 2 6c0 3.5 5 8 5 8s5-4.5 5-8c0-2.76-2.24-5-5-5z"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>
            Paris · Europe · USA
          </div>
          <div className="ft-legal">
            <a href="/privacy-policy">Confidentialité</a>
            <a href="/terms">Conditions</a>
            <a href="/mentions-legales">Mentions légales</a>
          </div>
        </div>
      </footer>
    </>
  );
}
