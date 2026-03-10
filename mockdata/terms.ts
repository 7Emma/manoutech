export const sections = [
  {
    id: "collecte",
    title: "Données collectées",
    icon: "◈",
    content: [
      { subtitle: "Formulaire de contact", text: "Nom, adresse email, société, rôle, budget estimé et description du projet — uniquement pour répondre à votre demande et établir un devis." },
      { subtitle: "Newsletter", text: "Adresse email uniquement, collectée avec consentement explicite. Désabonnement en un clic à tout moment." },
      { subtitle: "Données de navigation", text: "Métriques anonymisées (pages vues, temps sur site, source de trafic) via un outil respectueux de la vie privée, sans cookies tiers." },
    ],
  },
  {
    id: "utilisation",
    title: "Utilisation des données",
    icon: "◉",
    content: [
      { subtitle: "Réponse aux demandes", text: "Vos données de contact servent exclusivement à vous répondre et à conduire la relation commerciale si un projet se concrétise." },
      { subtitle: "Amélioration du service", text: "Les métriques agrégées et anonymisées nous permettent d'améliorer le contenu et la performance du site. Aucun profilage individuel n'est effectué." },
      { subtitle: "Communication", text: "Si vous avez souscrit à la newsletter, nous vous envoyons des articles et mises à jour sur nos méthodes et réalisations. Jamais de contenu promotionnel tiers." },
    ],
  },
  {
    id: "retention",
    title: "Rétention & suppression",
    icon: "⬡",
    content: [
      { subtitle: "Durée de conservation", text: "Les données de contact sont conservées 3 ans après le dernier échange, conformément aux obligations légales françaises en matière de prospection B2B." },
      { subtitle: "Suppression sur demande", text: "Vous pouvez demander la suppression de vos données à tout moment. Nous procédons sous 30 jours et vous confirmons par email." },
      { subtitle: "Données newsletter", text: "Supprimées immédiatement à la désinscription. Aucune archive n'est conservée après désabonnement." },
    ],
  },
  {
    id: "partage",
    title: "Partage & sous-traitants",
    icon: "▲",
    content: [
      { subtitle: "Zéro revente", text: "Manoutech ne vend, ne loue et ne cède jamais vos données à des tiers à des fins commerciales. Aucune donnée n'est partagée avec des régies publicitaires." },
      { subtitle: "Sous-traitants techniques", text: "Nous faisons appel à des prestataires pour l'hébergement (Vercel), l'emailing transactionnel (Resend) et l'analytics (Plausible). Tous sont RGPD-conformes et soumis à DPA." },
      { subtitle: "Transferts hors UE", text: "Aucun transfert de données personnelles hors Union Européenne n'est effectué sans garanties adéquates (clauses contractuelles types UE)." },
    ],
  },
  {
    id: "droits",
    title: "Vos droits",
    icon: "◎",
    content: [
      { subtitle: "Accès & portabilité", text: "Vous pouvez demander une copie de toutes les données que nous détenons vous concernant, dans un format lisible par machine." },
      { subtitle: "Rectification", text: "Toute donnée inexacte peut être corrigée sur simple demande par email." },
      { subtitle: "Opposition & limitation", text: "Vous pouvez vous opposer au traitement de vos données ou en demander la limitation à tout moment, sans justification requise." },
    ],
  },
  {
    id: "securite",
    title: "Sécurité",
    icon: "⬟",
    content: [
      { subtitle: "Chiffrement", text: "Toutes les communications sont chiffrées en transit (TLS 1.3). Les données au repos sont chiffrées (AES-256) sur nos serveurs d'hébergement." },
      { subtitle: "Accès restreint", text: "Seuls les membres de l'équipe ayant un besoin légitime accèdent aux données de contact. Les accès sont journalisés et audités trimestriellement." },
      { subtitle: "Incident de sécurité", text: "En cas de violation de données, vous serez notifié dans les 72h conformément à l'article 33 du RGPD, ainsi que la CNIL le cas échéant." },
    ],
  },
];

export const rights = [
  { label: "Accès", icon: "→" },
  { label: "Rectification", icon: "→" },
  { label: "Suppression", icon: "→" },
  { label: "Portabilité", icon: "→" },
  { label: "Opposition", icon: "→" },
  { label: "Limitation", icon: "→" },
];
