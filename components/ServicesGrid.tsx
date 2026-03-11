import styles from "./ServicesGrid.module.css";

interface Service {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
  accent: string;
  stat: { value: string; label: string };
}

const services: Service[] = [
  {
    icon: "⬡",
    title: "Produits web",
    desc: "SaaS B2B/B2C, dashboards, back-office, APIs robustes et scalables.",
    tags: ["Next.js", "React", "Node", "Postgres", "Edge"],
    accent: "#4da6ff",
    stat: { value: "40+", label: "produits livrés" },
  },
  {
    icon: "◈",
    title: "Apps mobiles",
    desc: "Expériences mobiles React Native performantes, prêtes store.",
    tags: ["React Native", "Flutter", "Expo", "Design system"],
    accent: "#4ec9b0",
    stat: { value: "18", label: "apps en production" },
  },
  {
    icon: "◉",
    title: "Data & AI",
    desc: "Pipelines data, IA générative, copilots métier, LLM ops.",
    tags: ["Python", "LLM", "RAG", "Observabilité"],
    accent: "#a78bfa",
    stat: { value: "8", label: "projets LLM déployés" },
  },
  {
    icon: "▲",
    title: "Product Ops",
    desc: "Roadmaps, métriques, onboarding utilisateurs, growth loops.",
    tags: ["Analytics", "SEO", "Growth", "Figma"],
    accent: "#fb923c",
    stat: { value: "NPS 65", label: "moyenne clients" },
  },
  {
    icon: "◎",
    title: "DevOps & Infrastructure",
    desc: "Infrastructure cloud, CI/CD, containerisation, monitoring et sécurité.",
    tags: ["Kubernetes", "Docker", "AWS", "GitHub Actions"],
    accent: "#34d399",
    stat: { value: "99.9%", label: "uptime moyen" },
  },
];

interface HeaderProps {
  styles: { [key: string]: string };
}

const Header = ({ styles: s }: HeaderProps) => (
  <div className={s.header}>
    <div>
      <div className={s.eyebrow}>
        <span className={s.eyebrowDot} />
        Expertise
      </div>
      <h2 className={s.h2}>
        Nos offres <em className={s.h2Em}>principales</em>
      </h2>
    </div>
    <div className={s.badge}>
      <span className={s.badgeIcon}>⚡</span>
      Sprints de 2 semaines · équipe senior
    </div>
  </div>
);

interface CardProps {
  service: Service;
  index: number;
  styles: { [key: string]: string };
}

const ServiceCard = ({ service: s, index: i, styles: st }: CardProps) => {
  const accentVars = {
    "--accent-c": s.accent,
    "--accent-a": s.accent + "11",
    "--accent-b": s.accent + "22",
    "--accent-mid": s.accent + "33",
  } as React.CSSProperties;

  const cardClass = `${st.card} ${st[`card${i}`]}`;
  const isWide = i === 2;

  return (
    <div key={s.title} className={cardClass} style={accentVars}>
      <div className={st.cardLine} />
      <span className={st.cardGhost}>{s.icon}</span>

      <div className={st.cardInner}>
        {isWide ? (
          <>
            <div className={st.cardTop}>
              <div className={st.iconWrap}>{s.icon}</div>
            </div>
            <div className={st.cardContent}>
              <div className={st.cardTitle}>{s.title}</div>
              <p className={st.cardDesc}>{s.desc}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
              <div className={st.stat}>
                <span className={st.statVal}>{s.stat.value}</span>
                <span className={st.statLabel}>{s.stat.label}</span>
              </div>
              <div className={st.tags}>
                {s.tags.map((tag) => (
                  <span key={tag} className={st.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={st.cardTop}>
              <div className={st.iconWrap}>{s.icon}</div>
              <div className={st.stat}>
                <span className={st.statVal}>{s.stat.value}</span>
                <span className={st.statLabel}>{s.stat.label}</span>
              </div>
            </div>
            <div className={st.cardContent}>
              <div className={st.cardTitle}>{s.title}</div>
              <p className={st.cardDesc}>{s.desc}</p>
              <div className={st.tags}>
                {s.tags.map((tag) => (
                  <span key={tag} className={st.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

interface FooterProps {
  styles: { [key: string]: string };
}

const Footer = ({ styles: s }: FooterProps) => (
  <div className={s.footer}>
    <p className={s.footerLeft}>
      <span className={s.footerLeftStrong}>5 expertises</span> · stack moderne · livraison continue · équipe 100% senior
    </p>
    <a href="/services" className={s.ctaMore}>
      Voir toutes les offres
      <span style={{ fontSize: "16px" }}>→</span>
    </a>
  </div>
);

export default function ServicesGrid() {
  return (
    <section className={styles.root}>
      <div className={styles.gridBg} />
      <div className={styles.orbA} />
      <div className={styles.orbB} />

      <div className={styles.inner}>
        <Header styles={styles} />

        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} styles={styles} />
          ))}
        </div>

        <Footer styles={styles} />
      </div>
    </section>
  );
}
