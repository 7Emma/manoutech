export const plans = [
  {
    name: "Sprint MVP",
    badge: "Rapide",
    price: "15–30k€",
    cycle: "4–6 semaines",
    desc: "Pour valider un marché avec un produit présentable (demo investisseurs ou clients pilotes).",
    items: ["Scope serré et priorisé", "Design system express", "Déploiement Vercel", "Analytics & tracking de base"],
  },
  {
    name: "Produit complet",
    badge: "Le plus choisi",
    price: "30–80k€",
    cycle: "6–12 semaines",
    desc: "Produit prêt pour la mise en production avec onboarding, billing et qualité continue.",
    items: ["Auth & RBAC", "Billing Stripe", "CI/CD + QA auto", "Perf Core Web Vitals ≥ 90"],
  },
  {
    name: "Scale / R&D",
    badge: "Sur-mesure",
    price: "Budget sur devis",
    cycle: "Engagement trimestriel",
    desc: "Squad senior dédiée pour scaler, refactorer ou lancer des features complexes (data/AI).",
    items: ["Roadmap trimestrielle", "Perf & sécurité", "LLM/RAG, data pipelines", "Transfert et documentation"],
  },
];
