"use client";

import { useEffect, useState } from "react";
import { adminService } from "@/lib/services/admin";
import { messagesService } from "@/lib/services/messages";
import { newsletterService } from "@/lib/services/newsletter";
import { blogService } from "@/lib/services/blog";
import { sparks } from "../page-mock-data";
import Sparkline from "./Sparkline";

const sparkMax = (arr: number[]) => Math.max(...arr);

export default function DashboardContent() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState({
    totalMessages: 0,
    unreadMessages: 0,
    subscribers: 0,
    messagesThisMonth: 0,
    blog: { published: 0, drafts: 0, total: 0 },
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await adminService.dashboard();
        setStats(res.data);
      } catch (err) {
        // Fallback: compute from other endpoints if RPC not available
        try {
          const [{ data: msgs }] = await Promise.all([
            messagesService.list({ limit: 1000 }),
          ]);

          const totalMessages = msgs.length;
          const unreadMessages = msgs.filter((m) => !m.read && !m.archived).length;
          const messagesThisMonth = msgs.filter((m) => {
            const d = new Date(m.created_at);
            const now = new Date();
            return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth() && !m.archived;
          }).length;

          const subsRes = await newsletterService.list(1000, 0);
          const subscribers = subsRes.data.length;

          const blogRes = await blogService.list(1000, 0);
          const published = blogRes.data.filter((b) => b.status === "published").length;
          const drafts = blogRes.data.filter((b) => b.status === "draft").length;

          setStats({
            totalMessages,
            unreadMessages,
            messagesThisMonth,
            subscribers,
            blog: { published, drafts, total: published + drafts },
          });
        } catch (fallbackErr) {
          setError(
            fallbackErr instanceof Error
              ? fallbackErr.message
              : "Erreur de chargement"
          );
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const STATS = {
    totalMessages: stats.totalMessages,
    unreadMessages: stats.unreadMessages,
    subscribers: stats.subscribers,
    drafts: stats.blog.drafts,
    articles: stats.blog.total,
  };

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
      {loading && <div style={{ padding: 12, color: "#7A7F84" }}>Chargement des stats…</div>}
      {error && <div style={{ padding: 12, color: "#dc2626" }}>Erreur: {error}</div>}
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
