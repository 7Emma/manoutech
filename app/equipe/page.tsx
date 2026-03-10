"use client";

import { useState } from "react";
import { members, filters } from "@/mockdata/equipe";
import "@/styles/equipe.css";

export default function TeamPage() {
   const [active, setActive] = useState("Tous");
   const [hovered, setHovered] = useState<string | null>(null);

   const filtered = active === "Tous"
     ? members
     : members.filter(m => m.tags.some(t => t === active || t.startsWith(active)));

   return (
     <>

      <div className="tm-root">
        <div className="tm-grid"/>
        <div className="tm-orb tm-orb-a"/><div className="tm-orb tm-orb-b"/>

        <div className="tm-inner">

          {/* ── HERO ── */}
          <div className="tm-hero">
            <div className="tm-eyebrow"><span className="tm-dot"/>18 seniors · 4 pays</div>
            <h1 className="tm-h1">Une escouade senior,<br/><em>distribuée.</em></h1>
            <p className="tm-intro">
              Nous assemblons l'équipe adaptée à votre produit : discovery, design, web, mobile, data/AI,
              delivery. Chaque lead reste hands-on sur les sujets critiques pour garantir qualité et vélocité.
            </p>
          </div>

          {/* ── FILTERS ── */}
          <div className="tm-filters">
            {filters.map(f => (
              <button key={f} className={`tm-filter ${active === f ? "active" : ""}`} onClick={() => setActive(f)}>{f}</button>
            ))}
          </div>

          {/* Count */}
          <div className="tm-count">
            <span>{filtered.length} membre{filtered.length > 1 ? "s" : ""}</span>
            <div className="tm-count-line"/>
          </div>

          {/* ── CARDS ── */}
          <div className="tm-grid-cards">
            {filtered.map((m) => (
              <article
                key={m.name}
                className={`tm-card ${hovered === m.name ? "hovered" : ""}`}
                style={{
                  "--accent-color": m.color,
                  "--accent-color-dim": `${m.color}44`,
                  "--avatar-bg": `linear-gradient(135deg, ${m.color}88, ${m.color}44)`,
                  "--avatar-shadow": `${m.color}33`,
                } as React.CSSProperties}
                onMouseEnter={() => setHovered(m.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="tm-avatar-row">
                  <div className="tm-avatar" aria-label={m.name}>
                    {m.image ? <img src={m.image} alt={m.name} /> : m.initial}
                  </div>
                  <div className="tm-location">
                    <svg width="9" height="11" viewBox="0 0 10 13" fill="none">
                      <path d="M5 0C2.24 0 0 2.24 0 5c0 3.5 5 8 5 8s5-4.5 5-8C10 2.24 7.76 0 5 0z" fill="currentColor" opacity="0.6"/>
                    </svg>
                    {m.location}
                  </div>
                </div>
                <div className="tm-name">{m.name}</div>
                <div className="tm-role">{m.role}</div>
                <div className="tm-focus">{m.focus}</div>
                <div className="tm-tags">
                  {m.tags.map((t) => (
                    <span key={t} className="tm-tag">
                      {t}
                    </span>
                  ))}
                </div>
                {(m.linkedin || m.github) && (
                  <div className="tm-links">
                    {m.linkedin && (
                      <a href={m.linkedin} target="_blank" rel="noreferrer" className="tm-link">
                        <svg width="14" height="14" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
                          <path d="M100.28 448H7.4V148.9h92.88zm-46.44-338.6C24.12 109.4 0 85.28 0 56.74A56.74 56.74 0 0 1 53.83 0h.68C83.3 0 107.4 24.12 107.4 56.74c0 28.54-24.1 52.66-53.56 52.66zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.24-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.7V148.9h88.9v40.8h1.3c12.4-23.5 42.7-48.3 87.8-48.3 93.9 0 111.2 61.8 111.2 142.3V448z"/>
                        </svg>
                        LinkedIn
                      </a>
                    )}
                    {m.github && (
                      <a href={m.github} target="_blank" rel="noreferrer" className="tm-link">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.62 7.62 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                  </div>
                )}
                {m.bio && <p className="tm-bio">{m.bio}</p>}
              </article>
            ))}
          </div>

          {/* ── JOIN ── */}
          <div className="tm-join">
            <div className="tm-join-left">
              <div className="tm-join-tag"><span className="tm-join-dot"/>On recrute</div>
              <div className="tm-join-h">Rejoindre la squad.</div>
              <p className="tm-join-sub">
                Profils seniors recherchés en design, front, backend et data/AI pour des missions courtes et exigeantes.
                Écris-nous à <a href="mailto:hello@manoutech.com">hello@manoutech.com</a>
              </p>
            </div>
            <div className="tm-join-btns">
              <a href="mailto:hello@manoutech.com" className="tm-btn-primary">Postuler maintenant →</a>
              <a href="/about" className="tm-btn-ghost">En savoir plus</a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
