"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { services, process } from "@/mockdata/services";
import "@/styles/services.css";

// ─────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────
function ServicesGrid({
  activeId,
  setActiveId,
}: {
  activeId: string;
  setActiveId: (id: string) => void;
}) {
  const s = services.find((x) => x.id === activeId) || services[0];

  return (
    <>
      {/* Tabs */}
      <div className="sv-tabs">
        {services.map((svc) => (
          <button
            key={svc.id}
            className={`sv-tab ${activeId === svc.id ? "active" : ""}`}
            style={
              {
                "--tab-color": svc.accent,
                "--tab-dim": `${svc.accent}33`,
                "--tab-bg": `${svc.accent}12`,
              } as CSSProperties
            }
            onClick={() => setActiveId(svc.id)}
          >
            <span className="sv-tab-dot" style={{ background: svc.accent }} />
            {svc.label}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div
        className="sv-panel"
        style={
          {
            "--s-accent": s.accent,
            "--s-dim": `${s.accent}33`,
            "--s-bg": `${s.accent}10`,
          } as CSSProperties
        }
      >
        {/* Main */}
        <div className="sv-panel-main" data-icon={s.icon}>
          <div className="sv-panel-icon">{s.icon}</div>
          <div className="sv-panel-tagline">{s.tagline}</div>
          <div className="sv-panel-title">{s.title}</div>
          <p className="sv-panel-desc">{s.desc}</p>
          <div className="sv-panel-tags">
            {s.tags.map((t) => (
              <span key={t} className="sv-panel-tag">
                {t}
              </span>
            ))}
          </div>
          <a href="/contact" className="sv-panel-cta">
            Démarrer un projet <span style={{ fontSize: 16 }}>→</span>
          </a>
        </div>

        {/* Side */}
        <div className="sv-panel-side">
          {/* Points */}
          <div className="sv-points">
            <div className="sv-points-title">Ce qu'on livre</div>
            {s.points.map((p) => (
              <div key={p} className="sv-point">
                <span className="sv-point-dot" />
                {p}
              </div>
            ))}
          </div>

          {/* Stat */}
          <div className="sv-stat-card">
            <div className="sv-stat-val">
              {s.stat.val}
              <span>{s.stat.unit}</span>
            </div>
            <div className="sv-stat-label">{s.stat.label}</div>
          </div>
        </div>
      </div>
    </>
  );
}

function ProcessSection() {
  return (
    <div className="sv-process">
      <div className="sv-section-label">Notre méthode</div>
      <div className="sv-process-grid">
        {process.map((p) => (
          <div key={p.step} className="sv-proc-card">
            <span className="sv-proc-num">{p.step}</span>
            <div className="sv-proc-step">{p.step}</div>
            <div className="sv-proc-title">{p.title}</div>
            <p className="sv-proc-desc">{p.desc}</p>
            <span className="sv-proc-dur">{p.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CTA() {
  return (
    <div className="sv-cta">
      <span className="sv-cta-deco">→</span>
      <div className="sv-cta-left">
        <div className="sv-cta-tag">
          <span className="sv-cta-tag-dot" />
          Nouvelle mission
        </div>
        <h3 className="sv-cta-h">
          Une équipe produit complète,
          <br />
          <em>prête à livrer.</em>
        </h3>
        <p className="sv-cta-sub">
          Discovery, design, build, launch tout le cycle en une seule équipe.
          Réponse sous 24h.
        </p>
      </div>
      <div className="sv-cta-right">
        <a href="/contact" className="sv-cta-btn">
          Planifier un call →
        </a>
        <a href="mailto:hello@manoutech.com" className="sv-cta-ghost">
          <svg
            width="13"
            height="13"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x=".7"
              y="2.7"
              width="12.6"
              height="8.6"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M1 3.5l6 4.5 6-4.5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
          hello@manoutech.com
        </a>
        <span className="sv-cta-note">Réponse garantie sous 24h</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────
export default function ServicesPage() {
  const [activeId, setActiveId] = useState("web");

  return (
    <>
      <div className="sv-root">
        <div className="sv-bg-grid" />
        <div className="sv-orb sv-orb-a" />
        <div className="sv-orb sv-orb-b" />

        <div className="sv-inner">
          {/* ── HERO ── */}
          <div className="sv-hero">
            <h1 className="sv-h1">
              Des équipes produit
              <br />
              <em>complètes, prêtes à livrer.</em>
            </h1>
            <p className="sv-sub">
              Nous prenons en charge le cycle complet discovery, design
              system, développement, QA, analytics, déploiement et suivi
              post-lancement.
            </p>
            <div className="sv-sprint-badge">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="7"
                  cy="7"
                  r="6.5"
                  stroke="#242675"
                  strokeWidth="1.2"
                />
                <path
                  d="M7 4v3.5l2 2"
                  stroke="#242675"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
              Sprints de <span>2 semaines</span> · équipe senior uniquement ·
              réponse sous <span>24h</span>
            </div>
          </div>

          {/* ── SERVICES TABS ── */}
          <div className="sv-section-label">Nos offres</div>
          <ServicesGrid activeId={activeId} setActiveId={setActiveId} />

          {/* ── PROCESS ── */}
          <ProcessSection />

          {/* ── CTA ── */}
          <CTA />
        </div>
      </div>
    </>
  );
}
