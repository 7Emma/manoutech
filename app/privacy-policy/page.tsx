"use client";

import { useState } from "react";
import { privacySections, privacyRights } from "@/mockdata/privacy";
import "@/styles/terms.css";

export default function PrivacyPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="pp-root">
      <div className="pp-bg-grid" />
      <div className="pp-orb pp-orb-a" />
      <div className="pp-orb pp-orb-b" />

      <div className="pp-inner">
        <div className="pp-hero">
          <div className="pp-eyebrow">
            <span className="pp-dot" />
            Légal · RGPD
          </div>
          <h1 className="pp-h1">Politique de confidentialité</h1>
          <p className="pp-sub">
            Manoutech collecte uniquement les données nécessaires pour répondre
            à vos demandes. Aucune donnée n'est revendue. Rétention limitée au
            strict nécessaire.
          </p>
          <div className="pp-meta">
            {[
              { label: "Dernière mise à jour : janvier 2026" },
              { label: "Responsable : Manoutech Corp." },
              { label: "DPO : hello@manoutech.com" },
            ].map((m) => (
              <span key={m.label} className="pp-meta-item">
                <span className="pp-meta-dot" />
                {m.label}
              </span>
            ))}
          </div>
        </div>

        <div className="pp-rights-wrapper">
          <div className="pp-rights-label">
            Vos droits garantis
          </div>
          <div className="pp-rights-row">
            {privacyRights.map((r) => (
              <span key={r.label} className="pp-right-chip">
                {r.label}
              </span>
            ))}
          </div>
        </div>

        <div className="pp-sections">
          {privacySections.map((s, i) => (
            <div
              key={s.id}
              className={`pp-section ${open === i ? "open" : ""}`}
            >
              <button
                className="pp-section-header"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="pp-section-icon" dangerouslySetInnerHTML={{ __html: s.icon }} />
                <span className="pp-section-title">{s.title}</span>
                <span className="pp-section-count">0{s.content.length}</span>
                <span className="pp-chevron">▾</span>
              </button>
              <div className={`pp-section-body ${open === i ? "open" : ""}`}>
                <div className="pp-section-inner">
                  <div className="pp-section-divider" />
                  {s.content.map((c) => (
                    <div key={c.subtitle} className="pp-entry">
                      <div className="pp-entry-title">{c.subtitle}</div>
                      <p className="pp-entry-text">{c.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pp-contact">
          <div className="pp-contact-left">
            <div className="pp-contact-tag">
              <span className="pp-ct-dot" />
              Une question ?
            </div>
            <div className="pp-contact-h">Exercer vos droits.</div>
            <p className="pp-contact-sub">
              Pour toute demande d'accès, rectification ou suppression — on
              répond sous 30 jours.
            </p>
          </div>
          <div className="pp-contact-links">
            <a href="mailto:hello@manoutech.com" className="pp-contact-btn">
              Contacter le DPO →
            </a>
            <a href="/contact" className="pp-contact-ghost">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 6h8M6 2l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Formulaire de contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
