"use client";

import { Fragment, useState } from "react";
import "@/styles/terms.css";

const sections = [
  {
    id: "editeur",
    icon: "◈",
    title: "Éditeur du site",
    entries: [
      { sub: "Raison sociale", text: "Manoutech Corp. SAS — Société par Actions Simplifiée au capital de 10 000 €." },
      { sub: "Siège social", text: "12 rue de la Paix, 75002 Paris, France." },
      {
        sub: "Immatriculation",
        text: "RCS Paris B 123 456 789 — SIRET : 123 456 789 00012 — APE : 6201Z (Programmation informatique).",
      },
      { sub: "TVA intracommunautaire", text: "FR 12 123456789" },
      { sub: "Représentant légal", text: "M. Mamadou Diallo, Président." },
    ],
  },
  {
    id: "contact",
    icon: "◉",
    title: "Contact",
    entries: [
      { sub: "Email général", text: "hello@manoutech.com — Réponse sous 24h en jours ouvrés." },
      { sub: "Email légal", text: "legal@manoutech.com — Pour toute notification officielle, mise en demeure ou demande RGPD." },
      { sub: "Téléphone", text: "+33 (0)1 23 45 67 89 — Disponible du lundi au vendredi, 9h–18h CET." },
      { sub: "Adresse postale", text: "Manoutech Corp. — 12 rue de la Paix, 75002 Paris, France." },
    ],
  },
  {
    id: "hebergement",
    icon: "⬡",
    title: "Hébergement",
    entries: [
      {
        sub: "Hébergeur principal",
        text: "Vercel Inc. — 340 Pine Street, Suite 1200, San Francisco, CA 94104, États-Unis. Site : vercel.com.",
      },
      {
        sub: "Infrastructure",
        text: "Le site est déployé sur le réseau edge mondial de Vercel. Les données sont répliquées dans des datacenters situés dans l'Union Européenne (région Frankfurt).",
      },
      {
        sub: "CDN & performance",
        text: "Cloudflare Inc. est utilisé comme réseau de diffusion de contenu (CDN) pour la performance et la protection contre les attaques DDoS.",
      },
    ],
  },
  {
    id: "pi",
    icon: "▲",
    title: "Propriété intellectuelle",
    entries: [
      {
        sub: "Droits réservés",
        text: "L'ensemble du contenu de ce site — textes, typographie, visuels, icônes, code source, marque Manoutech — est la propriété exclusive de Manoutech Corp. et est protégé par le Code de la propriété intellectuelle français.",
      },
      {
        sub: "Reproduction interdite",
        text: "Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, par quelque procédé que ce soit, sans l'autorisation écrite préalable de Manoutech Corp. est strictement interdite.",
      },
      { sub: "Marque", text: "« Manoutech » et le logo associé sont des marques déposées. Leur utilisation sans autorisation écrite constitue une contrefaçon passible de poursuites." },
      {
        sub: "Composants open-source",
        text: "Le site utilise des bibliothèques open-source (Next.js, React, Tailwind CSS) soumises à leurs licences respectives (MIT, Apache 2.0). Ces licences ne transfèrent aucun droit sur le contenu éditorial.",
      },
    ],
  },
  {
    id: "donnees",
    icon: "◎",
    title: "Données personnelles & cookies",
    entries: [
      { sub: "Responsable de traitement", text: "Manoutech Corp., représentée par son Président, est responsable du traitement des données collectées sur ce site." },
      { sub: "DPO", text: "Le Délégué à la Protection des Données (DPO) est joignable à : dpo@manoutech.com." },
      {
        sub: "Politique de confidentialité",
        text: "Le détail des traitements, durées de conservation, droits des personnes et base légale est disponible dans notre Politique de confidentialité accessible depuis le pied de page.",
      },
      {
        sub: "Cookies",
        text: "Ce site utilise uniquement des cookies techniques strictement nécessaires et un outil d'analytics sans cookie tiers (Plausible Analytics). Aucun consentement n'est requis.",
      },
    ],
  },
  {
    id: "responsabilite",
    icon: "⬟",
    title: "Responsabilité & liens",
    entries: [
      {
        sub: "Contenu du site",
        text: "Manoutech s'efforce de maintenir des informations exactes et à jour. Toutefois, aucune garantie d'exhaustivité ou d'adéquation à un usage particulier n'est donnée. Les informations ont un caractère indicatif.",
      },
      { sub: "Disponibilité", text: "Manoutech ne garantit pas un accès ininterrompu au site. Des interruptions techniques peuvent survenir pour maintenance, sans engager la responsabilité de l'éditeur." },
      {
        sub: "Liens hypertextes sortants",
        text: "Les liens vers des sites tiers sont fournis à titre informatif. Manoutech n'exerce aucun contrôle sur leur contenu et décline toute responsabilité quant aux informations qu'ils contiennent.",
      },
      { sub: "Liens entrants", text: "Tout lien hypertexte pointant vers le site manoutech.com doit faire l'objet d'une autorisation préalable par écrit. Les deep links (vers pages internes) sont autorisés sans accord préalable." },
    ],
  },
  {
    id: "droit",
    icon: "◆",
    title: "Droit applicable & médiation",
    entries: [
      { sub: "Droit applicable", text: "Le présent site et les présentes mentions légales sont soumis au droit français. Tout litige relatif à leur interprétation relève de la compétence exclusive des tribunaux de Paris." },
      {
        sub: "Médiation de la consommation",
        text: "Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, Manoutech propose un dispositif de médiation. Le médiateur désigné est : Medicys — 73 bd de Clichy, 75009 Paris — www.medicys.fr.",
      },
      {
        sub: "Règlement en ligne des litiges",
        text: "La Commission Européenne met à disposition une plateforme de résolution en ligne des litiges (RLL) accessible à : https://ec.europa.eu/consumers/odr.",
      },
    ],
  },
];

const highlights = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    label: "SAS au capital",
    sub: "10 000 €",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    label: "Paris, France",
    sub: "RCS Paris B 123 456 789",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    label: "Hébergé sur",
    sub: "Vercel · EU region",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 6h18" />
        <path d="M8 6v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6" />
        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
        <line x1="10" y1="11" x2="10" y2="17" />
        <line x1="14" y1="11" x2="14" y2="17" />
      </svg>
    ),
    label: "Droit français",
    sub: "Tribunaux de Paris",
  },
];

export default function MentionsLegalesPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="ml-root">
      <div className="ml-bg-grid" />
      <div className="ml-orb ml-orb-a" />
      <div className="ml-orb ml-orb-b" />

      <div className="ml-inner">
        <div className="ml-hero">
          <div className="ml-eyebrow">
            <span className="ml-dot" />
            Légal · Mentions obligatoires
          </div>
          <h1 className="ml-h1">
            Mentions <em>légales</em>
          </h1>
          <p className="ml-sub">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la Confiance en l'Économie Numérique (LCEN), voici les informations légales relatives au site manoutech.com.
          </p>
          <div className="ml-meta">
            {["Mise à jour : janvier 2026", "LCEN · Art. 6 III", "Loi Informatique et Libertés"].map((m) => (
              <span key={m} className="ml-meta-pill">
                <span className="ml-meta-dot" />
                {m}
              </span>
            ))}
          </div>
        </div>

        <div className="ml-hl-grid">
          {highlights.map((h) => (
            <div key={h.label} className="ml-hl">
              <span className="ml-hl-icon">{h.icon}</span>
              <div className="ml-hl-label">{h.label}</div>
              <div className="ml-hl-sub">{h.sub}</div>
            </div>
          ))}
        </div>

        <div className="ml-siret-card">
          {[
            { label: "SIRET", val: "123 456 789 00012" },
            { label: "RCS", val: "Paris B 123 456 789" },
            { label: "APE", val: "6201Z" },
            { label: "TVA", val: "FR 12 123456789" },
            { label: "Capital", val: "10 000 €" },
          ].map((item, i, arr) => (
            <Fragment key={item.label}>
              <div className="ml-siret-item">
                <span className="ml-siret-label">{item.label}</span>
                <span className="ml-siret-val">{item.val}</span>
              </div>
              {i < arr.length - 1 && <div className="ml-siret-div" />}
            </Fragment>
          ))}
        </div>

        <div className="ml-toc">
          <div className="ml-toc-title">Sommaire</div>
          <div className="ml-toc-list">
            {sections.map((s, i) => (
              <button key={s.id} className="ml-toc-btn" onClick={() => setOpen(i)}>
                <span className="ml-toc-n">0{i + 1}</span>
                {s.title}
                <span className="ml-toc-arrow">→</span>
              </button>
            ))}
          </div>
        </div>

        <div className="ml-sections">
          {sections.map((s, i) => (
            <div key={s.id} className={`ml-section ${open === i ? "open" : ""}`}>
              <button className="ml-sec-btn" onClick={() => setOpen(open === i ? null : i)}>
                <span className="ml-sec-icon">{s.icon}</span>
                <span className="ml-sec-title">{s.title}</span>
                <span className="ml-sec-num">0{s.entries.length}</span>
                <span className="ml-chevron">▾</span>
              </button>
              <div className={`ml-body ${open === i ? "open" : ""}`}>
                <div className="ml-body-inner">
                  <div className="ml-body-rule" />
                  {s.entries.map((e) => (
                    <div key={e.sub} className="ml-entry">
                      <div className="ml-entry-sub">{e.sub}</div>
                      <p className="ml-entry-text">{e.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ml-bottom">
          <div className="ml-bottom-left">
            <div className="ml-bottom-tag">
              <span className="ml-btag-dot" />
              Contact légal
            </div>
            <div className="ml-bottom-h">Une question juridique ?</div>
            <p className="ml-bottom-sub">
              Notification officielle, demande RGPD, signalement de contenu — notre équipe légale répond sous 48h.
            </p>
          </div>
          <div className="ml-bottom-right">
            <a href="mailto:legal@manoutech.com" className="ml-btn-p">
              Écrire à l'équipe légale →
            </a>
            <a href="/privacy-policy" className="ml-btn-g">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
