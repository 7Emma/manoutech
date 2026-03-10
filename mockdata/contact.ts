import type { BudgetOption, FaqItem, Perk } from "@/types/content";

export const budgets: BudgetOption[] = [
  { value: "15-30k", label: "15–30k €", desc: "MVP ciblé" },
  { value: "30-80k", label: "30–80k €", desc: "Produit complet" },
  { value: "80k+", label: "80k+ €", desc: "Plateforme scale" },
];

export const services = [
  "Web / SaaS",
  "Mobile",
  "Data / AI",
  "Design system",
  "Audit & conseil",
];

export const perks: Perk[] = [
  {
    icon: "globe",
    title: "Europe · USA",
    desc: "Disponibles sur vos horaires, remote-first, 4 fuseaux couverts.",
  },
  {
    icon: "zap",
    title: "Kick-off en 7j",
    desc: "Démarrage rapide après signature — on ne vous fait pas attendre.",
  },
  {
    icon: "target",
    title: "Atelier cadrage 1h",
    desc: "Périmètre, risques, KPIs — clarifiés en une session avant tout devis.",
  },
];

export const faqs: FaqItem[] = [
  {
    q: "Comment se déroule la première prise de contact ?",
    a: "On répond sous 24h avec un court questionnaire de cadrage. Ensuite on propose un appel de 30–45 min pour comprendre votre projet avant toute estimation.",
  },
  {
    q: "Travaillez-vous avec des startups early-stage ?",
    a: "Oui — on adapte le scope et le budget. MVP de validation, pré-seed ou série A, on a des offres pour chaque stade de maturité.",
  },
  {
    q: "Peut-on intégrer votre équipe à une équipe existante ?",
    a: "Absolument. On intervient en renfort (staff aug) ou en squad autonome selon votre organisation. Transfert de compétences inclus.",
  },
  {
    q: "Quels sont vos délais habituels ?",
    a: "MVP en 4–6 semaines, produit complet en 2–4 mois. Tout dépend du périmètre — on est transparents dès le cadrage.",
  },
];
