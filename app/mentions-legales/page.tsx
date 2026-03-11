"use client";

import { Fragment, useState } from "react";
import "@/styles/terms.css";

const SectionIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    editeur: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/>
        <path d="M9 7h6M9 11h6M9 15h4"/>
      </svg>
    ),
    contact: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <circle cx="9" cy="10" r="1" fill="currentColor"/>
        <circle cx="12" cy="10" r="1" fill="currentColor"/>
        <circle cx="15" cy="10" r="1" fill="currentColor"/>
      </svg>
    ),
    hebergement: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M2 17h20M6 20h12"/>
        <circle cx="6" cy="9" r="1.5" fill="currentColor"/>
        <circle cx="12" cy="9" r="1.5" fill="currentColor"/>
        <circle cx="18" cy="9" r="1.5" fill="currentColor"/>
      </svg>
    ),
    pi: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M2 12h20"/>
        <circle cx="12" cy="12" r="10"/>
      </svg>
    ),
    donnees: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7v10M7 12h10"/>
      </svg>
    ),
    responsabilite: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        <path d="M10 14l2 2 4-4"/>
      </svg>
    ),
    droit: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L5 8v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-7-6z"/>
        <path d="M9 13h6"/>
      </svg>
    ),
  };
  return icons[type] || null;
};

const sections = [
  {
    id: "editeur",
    icon: "editeur",
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
    icon: "contact",
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
    icon: "hebergement",
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
    icon: "pi",
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
    icon: "donnees",
    title: "Données personnelles & cookies",
    entries: [
      { sub: "Responsable de traitement", text: "Manoutech Corp., représentée par son Président, est responsable du traitement des données collectées sur ce site." },
      { sub: "DPO", text: "Le Délégué à la Protection des Données (DPO) est joignable à : dpo@manoutech.com." },
      {
        sub: "Politique de confidentialité",
        text: "Le détail des traitements, durées de conservation, droits des personnes et base légale est disponible dans notre Politique de confidentialité accessible depuis le pied de page.",
      },
      { sub: "Cookies", text: "Ce site utilise uniquement des cookies techniques strictement nécessaires et un outil d'analytics sans cookie tiers (Plausible Analytics). Aucun consentement n'est requis." },
    ],
  },
  {
    id: "responsabilite",
    icon: "responsabilite",
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
    icon: "droit",
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

const HighlightIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    building: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="2" width="18" height="20" rx="2"/>
        <path d="M9 2v20M15 2v20M3 8h18M3 14h18"/>
        <rect x="5" y="5" width="2" height="2"/>
        <rect x="9" y="5" width="2" height="2"/>
        <rect x="13" y="5" width="2" height="2"/>
        <rect x="17" y="5" width="2" height="2"/>
      </svg>
    ),
    location: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5" fill="currentColor"/>
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2c0 0-3 6-3 10s1.34 10 3 10 3-6 3-10S12 2 12 2z"/>
      </svg>
    ),
    scale: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 20h10M12 3v14M3 20h18"/>
        <path d="M9 7l-2 4h2M15 7l2 4h-2M12 11v6"/>
      </svg>
    ),
  };
  return icons[type] || null;
};

const highlights = [
  { icon: "building", label: "SAS au capital", sub: "10 000 €" },
  { icon: "location", label: "Paris, France", sub: "RCS Paris B 123 456 789" },
  { icon: "globe", label: "Hébergé sur", sub: "Vercel · EU region" },
  { icon: "scale", label: "Droit français", sub: "Tribunaux de Paris" },
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; }

  .ml-root {
    font-family: 'DM Sans', sans-serif;
    background: #ffffff; min-height: 100vh;
    color: var(--foreground); padding: 72px 32px 100px;
    position: relative;
  }
  .ml-bg-grid {
    position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background-image:
      linear-gradient(rgba(100,180,255,.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(100,180,255,.025) 1px, transparent 1px);
    background-size: 48px 48px;
  }
  .ml-orb {
    position: fixed; border-radius: 50%; filter: blur(100px);
    pointer-events: none; z-index: 0;
  }
  .ml-orb-a { width:420px; height:420px; top:-110px; right:-60px;
    background:radial-gradient(circle,rgba(167,139,250,.09) 0%,transparent 70%); }
  .ml-orb-b { width:360px; height:360px; bottom:8%; left:-70px;
    background:radial-gradient(circle,rgba(0,120,255,.08) 0%,transparent 70%); }

  .ml-inner { position:relative; z-index:1; max-width:860px; margin:0 auto; }

  /* ── HERO ── */
  .ml-hero { margin-bottom:48px; }
  .ml-eyebrow {
    display:inline-flex; align-items:center; gap:7px;
    font-size:10.5px; font-weight:500; letter-spacing:.2em; text-transform:uppercase;
    color:var(--brand-dark-blue); margin-bottom:16px;
    padding:4px 12px 4px 9px; border-radius:99px;
    border:1px solid rgba(var(--brand-dark-blue-rgb),.25); background:rgba(var(--brand-dark-blue-rgb),.07);
  }
  .ml-dot { width:5px; height:5px; border-radius:50%; background:var(--brand-dark-blue);
    animation:mlPulse 2s infinite; }
  @keyframes mlPulse { 0%,100%{opacity:1} 50%{opacity:.3} }

  .ml-h1 {
    font-family:'Syne',sans-serif;
    font-size:clamp(30px,5vw,50px); font-weight:800;
    letter-spacing:-.035em; color:var(--foreground); margin:0 0 16px; line-height:1.07;
  }
  .ml-h1 em { font-style:normal; color:transparent;
    background:linear-gradient(90deg,var(--brand-dark-blue),var(--brand-dark-gray));
    -webkit-background-clip:text; background-clip:text; }

  .ml-sub {
    font-size:15px; font-weight:300; line-height:1.75;
    color:var(--brand-dark-gray); max-width:560px; margin-bottom:22px;
  }

  /* Meta pills */
  .ml-meta { display:flex; flex-wrap:wrap; gap:8px; }
  .ml-meta-pill {
    display:flex; align-items:center; gap:6px;
    font-size:11px; color:var(--brand-dark-gray);
    background:rgba(var(--brand-dark-blue-rgb),.05); border:1px solid rgba(var(--brand-dark-blue-rgb),.1);
    padding:5px 12px; border-radius:99px;
  }
  .ml-meta-dot { width:4px; height:4px; border-radius:50%; background:var(--brand-dark-blue); }

  /* ── HIGHLIGHTS ── */
  .ml-hl-grid {
    display:grid; grid-template-columns:repeat(4,1fr); gap:10px; margin:40px 0 48px;
  }
  @media(max-width:720px){ .ml-hl-grid{grid-template-columns:repeat(2,1fr);} }
  @media(max-width:380px){ .ml-hl-grid{grid-template-columns:1fr;} }

  .ml-hl {
    background:#f9f9f9; border:1px solid rgba(var(--brand-dark-blue-rgb),.1);
    border-radius:16px; padding:18px 16px;
    transition:background .2s, border-color .2s, transform .2s;
  }
  .ml-hl:hover { background:#f0f0f0; border-color:var(--brand-dark-blue); transform:translateY(-2px); }
  .ml-hl-icon { font-size:20px; margin-bottom:10px; display:flex; align-items:center; justify-content:center; width:28px; height:28px; }
  .ml-hl-icon svg { width:100%; height:100%; color:var(--brand-dark-blue); }
  .ml-hl-label {
    font-family:'Syne',sans-serif; font-size:13px; font-weight:700;
    color:var(--foreground); margin-bottom:3px;
  }
  .ml-hl-sub { font-size:11px; font-weight:300; color:var(--brand-dark-gray); }

  /* ── TOC ── */
  .ml-toc {
    background:#f9f9f9; border:1px solid rgba(var(--brand-dark-blue-rgb),.1);
    border-radius:16px; padding:20px 22px; margin-bottom:44px;
  }
  .ml-toc-title {
    font-size:10px; font-weight:600; letter-spacing:.18em; text-transform:uppercase;
    color:var(--brand-dark-gray); margin-bottom:14px;
  }
  .ml-toc-list { display:grid; grid-template-columns:1fr 1fr; gap:4px; }
  @media(max-width:520px){ .ml-toc-list{grid-template-columns:1fr;} }
  .ml-toc-btn {
    display:flex; align-items:center; gap:9px;
    background:none; border:none; cursor:pointer; text-align:left;
    font-family:'DM Sans',sans-serif; font-size:13px; font-weight:400;
    color:var(--brand-dark-gray); padding:7px 10px; border-radius:8px;
    transition:background .15s, color .15s;
    width:100%;
  }
  .ml-toc-btn:hover { background:rgba(var(--brand-dark-blue-rgb),.05); color:var(--brand-dark-blue); }
  .ml-toc-n {
    font-family:'DM Mono',monospace; font-size:10px;
    color:var(--brand-dark-gray); width:18px; flex-shrink:0;
  }
  .ml-toc-arrow { margin-left:auto; font-size:10px; color:var(--brand-dark-gray); }

  /* ── ACCORDION ── */
  .ml-sections { display:flex; flex-direction:column; gap:10px; margin-bottom:52px; }

  .ml-section {
    background:#f9f9f9; border:1px solid rgba(var(--brand-dark-blue-rgb),.1);
    border-radius:18px; overflow:hidden; transition:border-color .25s;
  }
  .ml-section.open { border-color:var(--brand-dark-blue); }

  .ml-sec-btn {
    width:100%; background:none; border:none; cursor:pointer; text-align:left;
    padding:20px 24px; display:flex; align-items:center; gap:13px;
    transition:background .18s;
  }
  .ml-sec-btn:hover { background:rgba(var(--brand-dark-blue-rgb),.02); }

  .ml-sec-icon {
     width:34px; height:34px; border-radius:10px; flex-shrink:0;
     display:flex; align-items:center; justify-content:center;
     font-size:13px; color:var(--brand-dark-blue);
     background:rgba(var(--brand-dark-blue-rgb),.07); border:1px solid rgba(var(--brand-dark-blue-rgb),.15);
     transition:transform .25s;
   }
  .ml-sec-icon svg { width:18px; height:18px; color:var(--brand-dark-blue); }
  .ml-section.open .ml-sec-icon { transform:scale(1.07) rotate(-4deg); }

  .ml-sec-title {
    font-family:'Syne',sans-serif; font-size:15px; font-weight:700;
    color:var(--foreground); letter-spacing:-.02em; flex:1;
  }
  .ml-sec-num {
    font-family:'DM Mono',monospace; font-size:10px;
    color:var(--brand-dark-gray);
    background:rgba(var(--brand-dark-blue-rgb),.05); border:1px solid rgba(var(--brand-dark-blue-rgb),.1);
    padding:2px 7px; border-radius:99px; margin-right:6px;
  }
  .ml-chevron {
    width:20px; height:20px; border-radius:6px; flex-shrink:0;
    background:rgba(var(--brand-dark-blue-rgb),.05); border:1px solid rgba(var(--brand-dark-blue-rgb),.1);
    display:flex; align-items:center; justify-content:center;
    font-size:9px; color:var(--brand-dark-gray);
    transition:transform .28s, background .2s, color .2s, border-color .2s;
  }
  .ml-section.open .ml-chevron {
    transform:rotate(180deg);
    background:rgba(var(--brand-dark-blue-rgb),.1); border-color:var(--brand-dark-blue); color:var(--brand-dark-blue);
  }

  .ml-body {
    overflow:hidden; max-height:0; opacity:0;
    transition:max-height .38s cubic-bezier(.4,0,.2,1), opacity .3s;
  }
  .ml-body.open { max-height:600px; opacity:1; }
  .ml-body-inner {
    padding:0 24px 24px; display:flex; flex-direction:column; gap:14px;
  }
  .ml-body-rule { height:1px; background:rgba(255,255,255,.05); margin-bottom:4px; }

  .ml-entry { display:flex; flex-direction:column; gap:4px; }
  .ml-entry-sub {
    font-size:12px; font-weight:600; color:var(--brand-dark-blue);
    display:flex; align-items:center; gap:7px;
  }
  .ml-entry-sub::before {
    content:''; width:4px; height:4px; border-radius:50%;
    background:var(--brand-dark-blue); opacity:.7; flex-shrink:0;
  }
  .ml-entry-text {
    font-size:13.5px; font-weight:300; line-height:1.75;
    color:var(--brand-dark-gray); padding-left:11px;
  }
  .ml-entry-text a { color:var(--brand-dark-blue); text-decoration:none; border-bottom:1px solid rgba(var(--brand-dark-blue-rgb),.3); transition:border-color .18s; }
  .ml-entry-text a:hover { border-color:var(--brand-dark-blue); }

  /* ── SIRET CARD ── */
  .ml-siret-card {
    background:#f9f9f9; border:1px solid rgba(var(--brand-dark-blue-rgb),.1);
    border-radius:14px; padding:16px 20px; margin-bottom:44px;
    display:flex; flex-wrap:wrap; gap:20px; align-items:center;
  }
  .ml-siret-item { display:flex; flex-direction:column; gap:3px; }
  .ml-siret-label {
    font-family:'DM Mono',monospace; font-size:9.5px; font-weight:500;
    letter-spacing:.14em; text-transform:uppercase; color:var(--brand-dark-gray);
  }
  .ml-siret-val {
    font-family:'DM Mono',monospace; font-size:13px; font-weight:500;
    color:var(--brand-dark-blue); letter-spacing:.06em;
  }
  .ml-siret-div { width:1px; height:32px; background:rgba(var(--brand-dark-blue-rgb),.1); }
  @media(max-width:520px){ .ml-siret-div{display:none;} }

  /* ── BOTTOM CARD ── */
  .ml-bottom {
    background:#f9f9f9; border:1px solid rgba(var(--brand-dark-blue-rgb),.1);
    border-radius:22px; padding:36px 38px;
    display:flex; align-items:center; justify-content:space-between;
    gap:28px; flex-wrap:wrap; position:relative; overflow:hidden;
  }
  .ml-bottom::before {
    content:''; position:absolute; inset:0; pointer-events:none;
    background:radial-gradient(ellipse 55% 140% at 0% 50%,rgba(var(--brand-dark-blue-rgb),.04) 0%,transparent 65%);
  }
  .ml-bottom::after {
    content:'ML'; position:absolute; right:36px; top:50%; transform:translateY(-50%);
    font-family:'Syne',sans-serif; font-size:90px; font-weight:800;
    color:rgba(255,255,255,.025); pointer-events:none; letter-spacing:-.04em;
  }
  .ml-bottom-left { position:relative; z-index:1; }
  .ml-bottom-tag {
    display:inline-flex; align-items:center; gap:6px;
    font-size:10.5px; font-weight:500; letter-spacing:.18em; text-transform:uppercase;
    color:var(--brand-dark-blue); margin-bottom:12px;
    padding:3px 11px 3px 8px; border-radius:99px;
    border:1px solid rgba(var(--brand-dark-blue-rgb),.25); background:rgba(var(--brand-dark-blue-rgb),.07);
  }
  .ml-btag-dot { width:4px; height:4px; border-radius:50%; background:var(--brand-dark-blue); animation:mlPulse 2s infinite; }
  .ml-bottom-h {
    font-family:'Syne',sans-serif; font-size:20px; font-weight:800;
    color:var(--foreground); letter-spacing:-.03em; margin-bottom:6px;
  }
  .ml-bottom-sub { font-size:13px; font-weight:300; color:var(--brand-dark-gray); line-height:1.6; max-width:360px; }
  .ml-bottom-right { position:relative; z-index:1; display:flex; flex-direction:column; gap:10px; }
  .ml-btn-p {
    text-decoration:none; display:inline-flex; align-items:center; gap:8px;
    background:linear-gradient(90deg,var(--brand-dark-blue),var(--brand-dark-gray)); color:white;
    font-size:13.5px; font-weight:600; padding:11px 22px; border-radius:99px;
    box-shadow:0 4px 18px rgba(var(--brand-dark-blue-rgb),.3); transition:transform .18s, box-shadow .18s;
  }
  .ml-btn-p:hover { transform:translateY(-2px); box-shadow:0 8px 26px rgba(var(--brand-dark-blue-rgb),.4); }
  .ml-btn-g {
    text-decoration:none; font-size:12.5px; color:var(--brand-dark-blue);
    display:flex; align-items:center; gap:6px; transition:color .18s;
  }
  .ml-btn-g:hover { color:var(--brand-dark-gray); }
  @media(max-width:600px){ .ml-bottom{padding:28px 24px;} .ml-bottom::after{display:none;} }
`;

export default function MentionsLegalesPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <style>{css}</style>
      <div className="ml-root">
        <div className="ml-bg-grid" />
        <div className="ml-orb ml-orb-a" />
        <div className="ml-orb ml-orb-b" />

        <div className="ml-inner">

          {/* ── HERO ── */}
          <div className="ml-hero">
            <div className="ml-eyebrow"><span className="ml-dot"/>Légal · Mentions obligatoires</div>
            <h1 className="ml-h1">Mentions <em>légales</em></h1>
            <p className="ml-sub">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
              pour la Confiance en l'Économie Numérique (LCEN), voici les informations
              légales relatives au site manoutech.com.
            </p>
            <div className="ml-meta">
              {["Mise à jour : janvier 2026", "LCEN · Art. 6 III", "Loi Informatique et Libertés"].map(m => (
                <span key={m} className="ml-meta-pill"><span className="ml-meta-dot"/>{m}</span>
              ))}
            </div>
          </div>

          {/* ── HIGHLIGHTS ── */}
          <div className="ml-hl-grid">
            {highlights.map(h => (
              <div key={h.label} className="ml-hl">
                <div className="ml-hl-icon"><HighlightIcon type={h.icon} /></div>
                <div className="ml-hl-label">{h.label}</div>
                <div className="ml-hl-sub">{h.sub}</div>
              </div>
            ))}
          </div>

          {/* ── SIRET STRIP ── */}
          <div className="ml-siret-card">
            {[
              { label:"SIRET",  val:"123 456 789 00012" },
              { label:"RCS",    val:"Paris B 123 456 789" },
              { label:"APE",    val:"6201Z" },
              { label:"TVA",    val:"FR 12 123456789" },
              { label:"Capital",val:"10 000 €" },
            ].map((item, i, arr) => (
              <Fragment key={item.label}>
                <div className="ml-siret-item">
                  <span className="ml-siret-label">{item.label}</span>
                  <span className="ml-siret-val">{item.val}</span>
                </div>
                {i < arr.length - 1 && <div className="ml-siret-div"/>}
              </Fragment>
            ))}
          </div>

          {/* ── TOC ── */}
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

          {/* ── ACCORDION ── */}
          <div className="ml-sections">
            {sections.map((s, i) => (
              <div key={s.id} className={`ml-section ${open === i ? "open" : ""}`}>
                <button className="ml-sec-btn" onClick={() => setOpen(open === i ? null : i)}>
                  <span className="ml-sec-icon"><SectionIcon type={s.icon} /></span>
                  <span className="ml-sec-title">{s.title}</span>
                  <span className="ml-sec-num">0{s.entries.length}</span>
                  <span className="ml-chevron">▾</span>
                </button>
                <div className={`ml-body ${open === i ? "open" : ""}`}>
                  <div className="ml-body-inner">
                    <div className="ml-body-rule"/>
                    {s.entries.map(e => (
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

          {/* ── BOTTOM ── */}
          <div className="ml-bottom">
            <div className="ml-bottom-left">
              <div className="ml-bottom-tag"><span className="ml-btag-dot"/>Contact légal</div>
              <div className="ml-bottom-h">Une question juridique ?</div>
              <p className="ml-bottom-sub">
                Notification officielle, demande RGPD, signalement de contenu —
                notre équipe légale répond sous 48h.
              </p>
            </div>
            <div className="ml-bottom-right">
              <a href="mailto:legal@manoutech.com" className="ml-btn-p">Écrire à l'équipe légale →</a>
              <a href="/privacy-policy" className="ml-btn-g">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Politique de confidentialité
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
