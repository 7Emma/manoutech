"use client";

import { useState } from "react";
import "@/styles/projectCards.css";

const projects = [
  {
    id: "fintech",
    category: "SaaS · Fintech",
    title: "Plateforme SaaS B2B Fintech",
    result:
      "MVP livré en 5 semaines, 3 grands comptes signés dès le lancement commercial.",
    stack: ["Next.js", "Node", "Postgres", "Stripe"],
    metric: "+42%",
    metricLabel: "conversion demo → contrat",
    accent: "#242675",
    icon: "◈",
    details: [
      "5 semaines de build",
      "3 grands comptes signés",
      "Pipeline Stripe intégré",
      "Multi-tenant ready",
    ],
  },
  {
    id: "mobile",
    category: "Mobile · Santé",
    title: "App mobile santé",
    result:
      "Lancement simultané iOS & Android, 50 000 utilisateurs actifs mensuels en 2 mois.",
    stack: ["React Native", "Expo", "Supabase"],
    metric: "50k",
    metricLabel: "MAU en 2 mois",
    accent: "#3E4347",
    icon: "◉",
    details: [
      "NPS 67",
      "Crash rate <0.2%",
      "iOS + Android D1",
      "RGPD santé compliant",
    ],
  },
  {
    id: "data",
    category: "Data · AI",
    title: "Copilot data équipes terrain",
    result:
      "Réduction de 30% du temps de saisie et du volume de tickets support L1.",
    stack: ["Next.js", "LLM", "RAG", "OpenSearch"],
    metric: "−30%",
    metricLabel: "support L1",
    accent: "#7A7F84",
    icon: "⬡",
    details: [
      "-30% support L1",
      "+18% satisfaction",
      "RAG sur docs internes",
      "Déploiement edge",
    ],
  },
];

const categories = ["Tous", "SaaS · Fintech", "Mobile · Santé", "Data · AI"];

export default function ProjectCards() {
  const [filter, setFilter] = useState("Tous");
  const [active, setActive] = useState(null);

  const visible =
    filter === "Tous"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>

      <section className="pj-root">
        {/* Header */}
        <div className="pj-header">
          <div>
            <div className="pj-eyebrow">
              <span className="pj-dot" />
              Cas clients
            </div>
            <h2 className="pj-h2">
              Impact <em>mesurable.</em>
            </h2>
          </div>
          <div className="pj-filters">
            {categories.map((c) => (
              <button
                key={c}
                className={`pj-filter ${filter === c ? "active" : ""}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="pj-grid">
          {visible.map((p, i) => {
            const isOpen = active === p.id;
            return (
              <article
                key={p.id}
                className={`pj-card ${isOpen ? "open" : ""}`}
                style={{
                  "--card-accent": p.accent,
                  "--card-accent-dim": p.accent + "33",
                  "--card-accent-bg": p.accent + "12",
                }}
                onClick={() => setActive(isOpen ? null : p.id)}
              >
                <span className="pj-num">{String(i + 1).padStart(2, "0")}</span>

                <div className="pj-top">
                  <div className="pj-icon-wrap">{p.icon}</div>
                  <div className="pj-metric">
                    <span className="pj-metric-val">{p.metric}</span>
                    <span className="pj-metric-lbl">{p.metricLabel}</span>
                  </div>
                </div>

                <div className="pj-cat">{p.category}</div>
                <div className="pj-title">{p.title}</div>
                <div className="pj-result">{p.result}</div>

                <div className="pj-stack">
                  {p.stack.map((t) => (
                    <span key={t} className="pj-tag">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Expandable details */}
                <div className={`pj-details ${isOpen ? "open" : ""}`}>
                  <div className="pj-details-inner">
                    {p.details.map((d) => (
                      <div key={d} className="pj-detail-item">
                        {d}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pj-toggle">
                  <span>{isOpen ? "Réduire" : "Voir les détails"}</span>
                  <span className={`pj-toggle-arrow ${isOpen ? "open" : ""}`}>
                    ▾
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="pj-cta">
          <p className="pj-cta-txt">
            <strong>Vous avez un projet similaire ?</strong>
            <br />
            On vous répond avec une estimation sous 24h.
          </p>
          <a href="/contact" className="pj-btn">
            Démarrer un projet →
          </a>
        </div>
      </section>
    </>
  );
}
