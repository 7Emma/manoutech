export const STATS = {
  totalMessages: 24,
  unreadMessages: 7,
  subscribers: 12,
  articles: 5,
  drafts: 2,
  views: 6841,
};

export const RECENT_MESSAGES = [
  {
    id: "1",
    name: "Alex Fontaine",
    email: "alex@fintech.io",
    subject: "Projet SaaS B2B",
    time: "Il y a 12 min",
    read: false,
  },
  {
    id: "2",
    name: "Marie Dupont",
    email: "marie@startup.fr",
    subject: "Demande de devis MVP",
    time: "Il y a 1h",
    read: false,
  },
  {
    id: "3",
    name: "Thomas Martin",
    email: "thomas@agency.com",
    subject: "Partenariat design",
    time: "Il y a 3h",
    read: false,
  },
  {
    id: "4",
    name: "Sara Leroy",
    email: "sara@saas.co",
    subject: "Question stack technique",
    time: "Hier, 16h30",
    read: true,
  },
  {
    id: "5",
    name: "Yann Bernard",
    email: "yann@corp.fr",
    subject: "Audit infrastructure",
    time: "Hier, 09h15",
    read: true,
  },
];

export const ACTIVITY = [
  {
    icon: "◉",
    text: "Nouveau message de Alex Fontaine",
    sub: "Projet SaaS B2B",
    time: "12 min",
    accent: "#4da6ff",
  },
  {
    icon: "⬡",
    text: "Nouvel abonné newsletter",
    sub: "marie@startup.fr",
    time: "1h",
    accent: "#4ec9b0",
  },
  {
    icon: "▲",
    text: "Article mis en brouillon",
    sub: "RAG en production : pièges",
    time: "3h",
    accent: "#a78bfa",
  },
  {
    icon: "◉",
    text: "2 nouveaux messages",
    sub: "thomas@agency.com + 1",
    time: "Hier",
    accent: "#4da6ff",
  },
  {
    icon: "⬡",
    text: "3 nouvelles inscriptions newsletter",
    sub: "Blog · Accueil · Contact",
    time: "Avant-hier",
    accent: "#4ec9b0",
  },
];

export const sparks = {
  messages: [3, 5, 2, 7, 4, 6, 7],
  subscribers: [1, 2, 1, 3, 2, 1, 3],
  articles: [0, 1, 0, 1, 0, 2, 1],
  views: [820, 640, 990, 1100, 880, 1250, 1161],
};
