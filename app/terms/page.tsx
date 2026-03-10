"use client";

import { useState } from "react";
import "@/styles/terms.css";

const sectionIcons = {
  objet: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /><path d="M12 6v6m3-3H9" /></svg>`,
  services: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 11l3 3L22 4" /></svg>`,
  pi: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20" /><circle cx="12" cy="12" r="10" /></svg>`,
  responsabilite: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7v5c0 8 10 12 10 12s10-4 10-12V7l-10-5z" /><path d="M12 11l-2 2 4 4 6-6" /></svg>`,
  confidentialite: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>`,
  droit: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18" /><path d="M8 6v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" /></svg>`,
};

const sections = [
  {
    id: "objet",
    icon: sectionIcons.objet,
    title: "Objet & acceptation",
    entries: [
      { sub: "Objet", text: "Les présentes conditions régissent l'accès et l'utilisation du site manoutech.com ainsi que les services d'information présentés. Elles ne se substituent pas aux contrats de prestation conclus séparément." },
      { sub: "Acceptation", text: "L'accès au site vaut acceptation pleine et entière des présentes conditions. Si vous n'acceptez pas ces termes, nous vous invitons à ne pas utiliser le site." },
      { sub: "Mise à jour", text: "Manoutech se réserve le droit de modifier ces conditions à tout moment. La date de mise à jour en haut de page fait foi. L'utilisation continue du site après modification vaut acceptation des nouvelles conditions." },
    ],
  },
  {
    id: "services",
    icon: sectionIcons.services,
    title: "Nature des services",
    entries: [
      { sub: "Site vitrine", text: "Le site manoutech.com est un site de présentation. Les informations publiées ont un caractère indicatif et ne constituent pas une offre contractuelle." },
      { sub: "Prestations", text: "Les missions de développement, design, data et conseil font l'objet de contrats distincts précisant périmètre, planning, budget, livrables et droits de propriété intellectuelle." },
      { sub: "Devis & estimations", text: "Tout devis ou estimation communiqué par email ou formulaire est valable 30 jours. Il ne devient contractuellement engageant qu'après signature d'un bon de commande ou d'un contrat de prestation." },
    ],
  },
  {
    id: "pi",
    icon: sectionIcons.pi,
    title: "Propriété intellectuelle",
    entries: [
      { sub: "Contenu du site", text: "L'ensemble du contenu du site (textes, visuels, code, marque Manoutech) est protégé par le droit d'auteur et appartient à Manoutech Corp. Toute reproduction sans autorisation écrite est interdite." },
      { sub: "Livrables clients", text: "Les droits sur les livrables produits dans le cadre d'une mission (code, designs, documents) sont transférés au client à compter du paiement intégral, selon les modalités précisées au contrat." },
      { sub: "Outils & framework", text: "Les outils, bibliothèques et frameworks open-source utilisés restent soumis à leurs licences respectives. Manoutech ne cède aucun droit sur ces composants tiers." },
    ],
  },
  {
    id: "responsabilite",
    icon: sectionIcons.responsabilite,
    title: "Responsabilité & garanties",
    entries: [
      { sub: "Contenu « tel quel »", text: "Le site et ses informations sont fournis sans garantie d'exhaustivité, d'exactitude ou d'adéquation à un usage particulier. Manoutech ne saurait être tenu responsable d'une décision prise sur la base d'informations publiées sur le site." },
      { sub: "Disponibilité", text: "Manoutech s'efforce d'assurer la disponibilité du site mais ne peut garantir un accès ininterrompu. Des maintenances ponctuelles peuvent suspendre l'accès sans préavis." },
      { sub: "Liens externes", text: "Le site peut contenir des liens vers des sites tiers. Manoutech n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu." },
    ],
  },
  {
    id: "confidentialite",
    icon: sectionIcons.confidentialite,
    title: "Données & confidentialité",
    entries: [
      { sub: "Renvoi à la politique", text: "La collecte et le traitement des données personnelles sont décrits dans notre Politique de confidentialité, accessible depuis le pied de page. Elle fait partie intégrante des présentes conditions." },
      { sub: "Cookies", text: "Le site utilise uniquement des cookies techniques strictement nécessaires au fonctionnement et un outil d'analytics sans cookie tiers (Plausible). Aucun consentement n'est requis pour ces traitements." },
      { sub: "Confidentialité des échanges", text: "Tout échange précontractuel (emails, devis, appels) est traité de manière confidentielle par Manoutech et ne sera pas divulgué à des tiers sans votre accord." },
    ],
  },
  {
    id: "droit",
    icon: sectionIcons.droit,
    title: "Droit applicable & litiges",
    entries: [
      { sub: "Droit applicable", text: "Les présentes conditions sont régies par le droit français. Tout litige relatif à leur interprétation ou exécution relève de la compétence exclusive des tribunaux de Paris." },
      { sub: "Médiation", text: "En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire. Manoutech s'engage à répondre à toute demande de médiation dans un délai de 15 jours." },
      { sub: "Contact légal", text: "Pour toute question juridique ou notification officielle, écrivez à : legal@manoutech.com ou à l'adresse du siège social indiquée dans les mentions légales." },
    ],
  },
];

const highlights = [
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18" /><path d="M8 6v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>`,
    label: "Droit français",
    sub: "Tribunaux de Paris",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>`,
    label: "Données protégées",
    sub: "Voir politique RGPD",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline points="13 2 13 9 20 9" /></svg>`,
    label: "Contrats séparés",
    sub: "Pour toute mission",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>`,
    label: "Devis valables 30j",
    sub: "Hors signature",
  },
];

export default function TermsPage() {
  const [open, setOpen] = useState<number | null>(0);

  const scrollTo = (i: number) => setOpen(i);

  return (
    <>
      <div className="tc-root">
        <div className="tc-bg-grid" />
        <div className="tc-orb tc-orb-a" />
        <div className="tc-orb tc-orb-b" />

        <div className="tc-inner">
          {/* ── HERO ── */}
          <div className="tc-hero">
            <div className="tc-eyebrow"><span className="tc-dot" />Légal · CGU</div>
            <h1 className="tc-h1">Conditions <em>d'utilisation</em></h1>
            <p className="tc-sub">
              En accédant au site manoutech.com, vous acceptez les présentes conditions.
              Les prestations de service font l'objet de contrats distincts.
            </p>
            <div className="tc-meta">
              {[
                "Dernière mise à jour : janvier 2026",
                "Société : Manoutech Corp. SAS",
                "Droit applicable : droit français",
              ].map(m => (
                <span key={m} className="tc-meta-pill">
                  <span className="tc-meta-dot" />{m}
                </span>
              ))}
            </div>
          </div>

          {/* ── HIGHLIGHTS ── */}
          <div className="tc-highlights">
            {highlights.map(h => (
              <div key={h.label} className="tc-hl">
                <span className="tc-hl-icon" dangerouslySetInnerHTML={{ __html: h.icon }} />
                <div className="tc-hl-label">{h.label}</div>
                <div className="tc-hl-sub">{h.sub}</div>
              </div>
            ))}
          </div>

          {/* ── TABLE OF CONTENTS ── */}
          <div className="tc-toc">
            <div className="tc-toc-title">Sommaire</div>
            <div className="tc-toc-list">
              {sections.map((s, i) => (
                <button key={s.id} className="tc-toc-item" onClick={() => scrollTo(i)}>
                   <span className="tc-toc-n">0{i + 1}</span>
                   {s.title}
                   <span className="tc-toc-arrow">→</span>
                 </button>
              ))}
            </div>
          </div>

          {/* ── ACCORDION ── */}
          <div className="tc-sections">
            {sections.map((s, i) => (
              <div key={s.id} className={`tc-section ${open === i ? "open" : ""}`}>
                <button className="tc-section-btn" onClick={() => setOpen(open === i ? null : i)}>
                  <span className="tc-s-icon" dangerouslySetInnerHTML={{ __html: s.icon }} />
                  <span className="tc-s-title">{s.title}</span>
                  <span className="tc-s-num">0{s.entries.length}</span>
                  <span className="tc-chevron">▾</span>
                </button>
                <div className={`tc-body ${open === i ? "open" : ""}`}>
                  <div className="tc-body-inner">
                    <div className="tc-body-rule"/>
                    {s.entries.map(e => (
                      <div key={e.sub} className="tc-entry">
                        <div className="tc-entry-sub">{e.sub}</div>
                        <p className="tc-entry-text">{e.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── BOTTOM ── */}
          <div className="tc-bottom">
            <div className="tc-bottom-left">
              <div className="tc-bottom-tag"><span className="tc-btag-dot"/>Une question ?</div>
              <div className="tc-bottom-h">Besoin de précisions légales ?</div>
              <p className="tc-bottom-sub">
                Pour toute question sur les CGU ou les contrats de prestation, notre équipe répond sous 48h.
              </p>
            </div>
            <div className="tc-bottom-right">
              <a href="mailto:legal@manoutech.com" className="tc-btn-p">Contacter l'équipe →</a>
              <a href="/privacy-policy" className="tc-btn-g">
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
