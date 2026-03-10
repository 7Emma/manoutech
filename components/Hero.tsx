"use client";

import { useState, useEffect, useRef, Fragment } from "react";
import "../styles/hero.css";

const steps = [
  {
    icon: "◈",
    label: "Discovery",
    desc: "Cadrage produit & parcours utilisateur",
    duration: "J1–3",
  },
  {
    icon: "◉",
    label: "Design",
    desc: "Design system express + maquettes haute fidélité",
    duration: "J4–8",
  },
  {
    icon: "⬡",
    label: "Build",
    desc: "MVP Next.js + API Node/Edge + CI/CD Vercel",
    duration: "J9–30",
  },
  {
    icon: "◎",
    label: "Launch",
    desc: "Analytics, performance, SEO — prêt à convertir",
    duration: "J31–42",
  },
];

const stats = [
  { value: "< 6", unit: "semaines", label: "time-to-market" },
  { value: "40+", unit: "projets", label: "livrés" },
  { value: "98%", unit: "on-time", label: "delivery rate" },
];

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return inView;
}

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);
  const [tick, setTick] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    const id = setInterval(() => {
      setTick((t) => t + 1);
      setActiveStep((s) => (s + 1) % steps.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero-root" ref={ref}>
        <div className="hero-grid" />
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
        <div className="hero-scan" />

        <div className="hero-inner">
          {/* ── LEFT ── */}
          <div>
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Studio produit &amp; data · Paris
            </div>

            <h1 className="hero-h1">
              Vos produits web,
              <br />
              mobile &amp; data <br />
              <em>en quelques semaines.</em>
            </h1>

            <p className="hero-sub">
              Manoutech conçoit, développe et déploie des expériences digitales
              ambitieuses : SaaS, apps mobiles, plateformes data/AI. Une équipe
              senior, des sprints courts, des livrables qui convertissent.
            </p>

            <div className="hero-btns">
              <a href="/contact" className="btn-primary">
                Démarrer un projet <span className="btn-arrow">→</span>
              </a>
              <a href="/projects" className="btn-secondary">
                Voir nos projets <span className="btn-arrow">→</span>
              </a>
            </div>

            <div className="hero-stats">
              {stats.map((s, i) => (
                <Fragment key={s.label}>
                  {i > 0 && <div className="stat-divider" />}
                  <div className="stat">
                    <div className="stat-val">
                      {s.value}
                      <span>{s.unit}</span>
                    </div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="hero-panel">
            <div className="panel-header">
              <div className="panel-title">Roadmap projet</div>
              <div className="panel-badge">
                <span className="badge-blink" />
                En cours
              </div>
            </div>

            <div className="timeline">
              {steps.map((step, idx) => (
                <div
                  key={step.label}
                  className={`step-item ${activeStep === idx ? "active" : ""}`}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-content">
                    <div className="step-top">
                      <div className="step-name">{step.label}</div>
                      <div className="step-dur">{step.duration}</div>
                    </div>
                    <div className="step-desc">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="panel-progress">
              <div className="progress-label">
                <span>Progression type</span>
                <span>
                  {Math.round(((activeStep + 1) / steps.length) * 100)}%
                </span>
              </div>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    width: `${((activeStep + 1) / steps.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="panel-stack">
              {[
                "Next.js",
                "React Native",
                "Node",
                "Postgres",
                "Vercel",
                "AI/ML",
              ].map((t) => (
                <span className="stack-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}
