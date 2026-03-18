import { Message, MessageNavigation } from "@/types/message";

export const MOCK_MESSAGE: Message = {
  id: "msg_01jk2n8x4p",
  name: "Alex Fontaine",
  email: "alex.fontaine@fintech.io",
  company: "Fintech Corp",
  subject: "Projet SaaS B2B — Demande de devis",
  message: `Bonjour,

Je suis CPO chez Fintech Corp, une startup série A basée à Paris. Nous développons une plateforme de gestion de trésorerie pour PME et cherchons un partenaire technique pour accélérer notre roadmap Q2 2024.

Nos besoins principaux :
— Refonte complète du dashboard (React / Next.js)
— API de synchronisation bancaire temps réel
— Module de reporting avancé avec exports PDF/Excel

Notre budget est de l'ordre de 60–80k€ pour un MVP solide livrable en 6–8 semaines.

Seriez-vous disponible pour un appel de 30 min cette semaine ou la semaine prochaine ?

Cordialement,
Alex Fontaine
CPO — Fintech Corp`,
  created_at: "2024-03-18T09:24:00Z",
  read: true,
  archived: false,
  service: "Produits web",
  budget: "60–80k€",
};

export const PREV_NEXT: MessageNavigation = {
  prev: { id: "msg_prev", name: "Marie Dupont", subject: "Demande de devis MVP" },
  next: { id: "msg_next", name: "Thomas Martin", subject: "Partenariat design" },
};
