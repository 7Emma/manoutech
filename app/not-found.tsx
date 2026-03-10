"use client";

import { useState, useEffect } from "react";
import { quickLinks } from "@/mockdata/notFound";
import "@/styles/notFound.css";

export default function NotFound() {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown <= 0) {
      window.location.href = "/";
      return;
    }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown]);

  const pct = ((10 - countdown) / 10) * 100;

  return (
    <>
      <div className="nf-root">
        <div className="nf-grid" />
        <div className="nf-orb nf-orb-a" />
        <div className="nf-orb nf-orb-b" />
        <div className="nf-orb nf-orb-c" />
        <div className="nf-scan" />

        <div className="nf-inner">
          {/* Big glitch number */}
          <div className="nf-big" aria-hidden="true">
            404
          </div>

          {/* Status chip */}
          <div className="nf-code">
            <span className="nf-code-dot" />
            HTTP 404 · Not Found
          </div>

          {/* Title */}
          <h1 className="nf-h1">
            Page <em>introuvable.</em>
          </h1>
          <p className="nf-sub">
            Cette URL n'existe pas ou a été déplacée. Vérifiez le lien ou
            retournez à l'accueil.
          </p>

          {/* Path */}
          <div className="nf-path">
            <span>GET</span>
            <span className="nf-path-err">
              {typeof window !== "undefined"
                ? window.location.pathname
                : "/page-introuvable"}
            </span>
            <span className="nf-path-arrow">→ 404</span>
          </div>

          {/* CTAs */}
          <div className="nf-btns">
            <a href="/" className="nf-btn-primary">
              ← Retour à l'accueil
            </a>
            <a href="/contact" className="nf-btn-ghost">
              Contacter l'équipe <span className="nf-btn-arrow">→</span>
            </a>
          </div>

          {/* Quick links */}
          <div className="nf-links-label">Pages utiles</div>
          <div className="nf-links">
            {quickLinks.map((l) => (
              <a key={l.href} href={l.href} className="nf-link">
                {l.label}
              </a>
            ))}
          </div>

          {/* Countdown */}
          <div className="nf-redirect">
            <span>Redirection auto dans {countdown}s</span>
            <div className="nf-rdr-bar">
              <div className="nf-rdr-fill" style={{ width: `${pct}%` }} />
            </div>
            <button
              onClick={() => setCountdown(999)}
              className="nf-cancel-btn"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
