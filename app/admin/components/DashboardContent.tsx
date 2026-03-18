"use client";

import { STATS, sparks } from "../page-mock-data";
import Sparkline from "./Sparkline";

const sparkMax = (arr: number[]) => Math.max(...arr);

export default function DashboardContent() {
  const kpis = [
    {
      id: "messages",
      icon: "◉",
      label: "Messages",
      val: STATS.unreadMessages,
      sub: `${STATS.unreadMessages} non lus · ${STATS.totalMessages} total`,
      accent: "#4da6ff",
      trend: "+3",
      href: "messages",
      spark: sparks.messages,
    },
    {
      id: "subscribers",
      icon: "⬡",
      label: "Abonnés",
      val: STATS.subscribers,
      sub: "newsletter actifs",
      accent: "#4ec9b0",
      trend: "+3",
      href: "newsletter",
      spark: sparks.subscribers,
    },
    {
      id: "articles",
      icon: "▲",
      label: "Articles",
      val: STATS.articles,
      sub: `${STATS.drafts} brouillons`,
      accent: "#a78bfa",
      trend: "±0",
      href: "blog",
      spark: sparks.articles,
    },
    {
      id: "views",
      icon: "◈",
      label: "Vues totales",
      val: "6.8k",
      sub: "ce mois · +18%",
      accent: "#fb923c",
      trend: "+18%",
      href: "blog",
      spark: sparks.views,
    },
  ];

  const quickActions = [
    {
      icon: "◉",
      label: "Messages",
      sub: "Consulter",
      accent: "#4da6ff",
      href: "messages",
    },
    {
      icon: "⬡",
      label: "Newsletter",
      sub: "Abonnés",
      accent: "#4ec9b0",
      href: "newsletter",
    },
    {
      icon: "▲",
      label: "Nouvel article",
      sub: "Rédiger",
      accent: "#a78bfa",
      href: "blog/new",
    },
    {
      icon: "◈",
      label: "Voir le site",
      sub: "manoutech.com",
      accent: "#fb923c",
      href: "/",
    },
  ];

  return (
    <div>
      <h2 className="al-dash-h">
        Bonjour, <em>Admin</em> 👋
      </h2>
      <div className="al-kpi-grid">
        {kpis.map((k) => (
          <div
            key={k.label}
            className="al-kpi"
            style={{
              "--kpi-c": k.accent,
              "--kpi-bg": k.accent + "11",
              "--kpi-dim": k.accent + "30",
              "--kpi-glow": k.accent + "0d",
            } as React.CSSProperties}
          >
            <div className="al-kpi-left">
              <div className="al-kpi-val" style={{ color: k.accent }}>
                {k.val}
              </div>
              <div className="al-kpi-label">{k.label}</div>
            </div>
            <div
              className="al-kpi-icon"
              style={{
                background: `${k.accent}11`,
                border: `1px solid ${k.accent}33`,
                color: k.accent,
              }}
            >
              {k.icon}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          marginBottom: 16,
          fontSize: 10.5,
          fontWeight: 600,
          letterSpacing: ".16em",
          textTransform: "uppercase",
          color: "rgba(110,150,200,.4)",
        }}
      >
        Accès rapides
      </div>
      <div className="al-quick-grid">
        {quickActions.map((s) => (
          <div
            key={s.label}
            className="al-quick-card"
            style={{
              "--act-c": s.accent,
              "--act-bg": s.accent + "11",
              "--act-dim": s.accent + "33",
            } as React.CSSProperties}
          >
            <div
              className="al-kpi-icon al-quick-icon"
              style={{
                background: `${s.accent}11`,
                border: `1px solid ${s.accent}33`,
                color: s.accent,
              }}
            >
              {s.icon}
            </div>
            <div>
              <div className="al-quick-label">{s.label}</div>
              <div className="al-quick-sub">{s.sub}</div>
            </div>
            <span className="al-quick-arrow">→</span>
          </div>
        ))}
      </div>
    </div>
  );
}
