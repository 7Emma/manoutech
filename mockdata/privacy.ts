const dataIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6m3-3H9" /></svg>`;

const usageIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>`;

const retentionIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /><path d="M12.5 7H11v6l5.25 3.15" /></svg>`;

const shareIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.59 13.51l6.83 3.98" /><path d="M15.41 6.51l-6.82 3.98" /></svg>`;

const rightsIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4" /><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;

const securityIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>`;

export const privacySections = [
  {
    id: "collecte",
    title: "Données collectées",
    icon: dataIcon,
    content: [
      {
        subtitle: "Formulaire de contact",
        text: "Nom, adresse email, société, rôle, budget estimé et description du projet — uniquement pour répondre à votre demande et établir un devis.",
      },
      {
        subtitle: "Newsletter",
        text: "Adresse email uniquement, collectée avec consentement explicite. Désabonnement en un clic à tout moment.",
      },
      {
        subtitle: "Données de navigation",
        text: "Métriques anonymisées (pages vues, temps sur site, source de trafic) via un outil respectueux de la vie privée, sans cookies tiers.",
      },
    ],
  },
  {
    id: "utilisation",
    title: "Utilisation des données",
    icon: usageIcon,
    content: [
      {
        subtitle: "Réponse aux demandes",
        text: "Vos données de contact servent exclusivement à vous répondre et à conduire la relation commerciale si un projet se concrétise.",
      },
      {
        subtitle: "Amélioration du service",
        text: "Les métriques agrégées et anonymisées nous permettent d'améliorer le contenu et la performance du site. Aucun profilage individuel n'est effectué.",
      },
      {
        subtitle: "Communication",
        text: "Si vous avez souscrit à la newsletter, nous vous envoyons des articles et mises à jour. Jamais de contenu promotionnel tiers.",
      },
    ],
  },
  {
    id: "retention",
    title: "Rétention & suppression",
    icon: retentionIcon,
    content: [
      {
        subtitle: "Durée de conservation",
        text: "Les données de contact sont conservées 3 ans après le dernier échange, conformément aux obligations légales françaises.",
      },
      {
        subtitle: "Suppression sur demande",
        text: "Vous pouvez demander la suppression de vos données à tout moment. Nous procédons sous 30 jours et confirmons par email.",
      },
      {
        subtitle: "Données newsletter",
        text: "Supprimées immédiatement à la désinscription. Aucune archive n'est conservée après désabonnement.",
      },
    ],
  },
  {
    id: "partage",
    title: "Partage & sous-traitants",
    icon: shareIcon,
    content: [
      {
        subtitle: "Zéro revente",
        text: "Manoutech ne vend ni ne loue vos données. Aucun partage avec des régies publicitaires.",
      },
      {
        subtitle: "Sous-traitants techniques",
        text: "Hébergement (Vercel), email transactionnel (Resend), analytics (Plausible) — tous RGPD, DPA signées.",
      },
      {
        subtitle: "Transferts hors UE",
        text: "Aucun transfert hors UE sans garanties adéquates (CCT UE).",
      },
    ],
  },
  {
    id: "droits",
    title: "Vos droits",
    icon: rightsIcon,
    content: [
      {
        subtitle: "Accès & portabilité",
        text: "Demandez une copie de vos données dans un format lisible par machine.",
      },
      {
        subtitle: "Rectification",
        text: "Corrigez toute donnée inexacte sur simple demande.",
      },
      {
        subtitle: "Opposition & limitation",
        text: "Vous pouvez vous opposer ou limiter le traitement à tout moment.",
      },
    ],
  },
  {
    id: "securite",
    title: "Sécurité",
    icon: securityIcon,
    content: [
      {
        subtitle: "Chiffrement",
        text: "TLS 1.3 en transit, AES‑256 au repos.",
      },
      {
        subtitle: "Accès restreint",
        text: "Accès limité aux personnes habilitées, journaux audités trimestriellement.",
      },
      {
        subtitle: "Incident",
        text: "Notification en <72h en cas de violation de données, CNIL si nécessaire.",
      },
    ],
  },
];

export const privacyRights = [
  { label: "Accès", icon: "→" },
  { label: "Rectification", icon: "→" },
  { label: "Suppression", icon: "→" },
  { label: "Portabilité", icon: "→" },
  { label: "Opposition", icon: "→" },
  { label: "Limitation", icon: "→" },
];
