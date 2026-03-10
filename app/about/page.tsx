"use client";

import { useState } from "react";
import { pillars, kpis, timeline } from "@/mockdata/about";
import "@/styles/about.css";

export default function AboutPage() {
  const [activeYear, setActiveYear] = useState("2024");

  return (
    <>
      <div className="ab-root">
        <div className="ab-grid" />
        <div className="ab-orb ab-orb-a" />
        <div className="ab-orb ab-orb-b" />

        <div className="ab-inner">
          {/* ── HERO ── */}
          <div className="ab-hero">
            <div className="ab-eyebrow">
              <span className="ab-dot" />
              Studio produit &amp; data · Paris
            </div>
            <h1 className="ab-h1">
              Nous construisons des produits
              <br />
              <em>qui convertissent.</em>
            </h1>
            <p className="ab-intro">
              Fondée en 2023, Manoutech Corp est une startup technologique
              spécialisée dans la conception et le développement de solutions
              numériques. Nous créons des applications web, mobiles et des
              plateformes innovantes pour aider les entreprises et les
              entrepreneurs à accélérer leur transformation digitale.
            </p>

            {/* KPIs inline */}
            <div className="ab-kpis">
              {kpis.map((k) => (
                <div key={k.value} className="ab-kpi">
                  <div className="ab-kpi-val">
                    {k.value}
                    <span>{k.unit}</span>
                  </div>
                  <div className="ab-kpi-label">{k.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── PILLARS ── */}
          <div className="ab-pillars">
            <div className="ab-section-label">Nos engagements</div>
            <div className="ab-pillars-grid">
              {pillars.map((p) => (
                <div key={p.title} className="ab-card">
                  <span className="ab-card-icon">{p.icon}</span>
                  <div className="ab-card-title">{p.title}</div>
                  <div className="ab-card-desc">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── TIMELINE ── */}
          <div className="ab-timeline">
            <div className="ab-section-label">Notre histoire</div>
            <div className="ab-tl-tabs">
              {timeline.map((t) => (
                <button
                  key={t.year}
                  className={`ab-tl-tab ${activeYear === t.year ? "active" : ""}`}
                  onClick={() => setActiveYear(t.year)}
                >
                  {t.year}
                </button>
              ))}
            </div>
            {timeline
              .filter((t) => t.year === activeYear)
              .map((t) => (
                <div key={t.year} className="ab-tl-content">
                  <div className="ab-tl-year-big">{t.year}</div>
                  <div className="ab-tl-body">
                    <div className="ab-tl-title">{t.title}</div>
                    <div className="ab-tl-desc">{t.desc}</div>
                  </div>
                </div>
              ))}
          </div>

          {/* ── CTA ── */}
          <div className="ab-cta">
            <div className="ab-cta-left">
              <div className="ab-cta-title">Travaillons ensemble.</div>
              <div className="ab-cta-sub">
                Un projet en tête ? On répond sous 24h.
              </div>
            </div>
            <div className="ab-cta-btns">
              <a href="/contact" className="ab-btn-primary">
                Démarrer un projet →
              </a>
              <a href="/projects" className="ab-btn-ghost">
                Voir nos projets
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
