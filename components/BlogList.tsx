"use client";

import { useState } from "react";
import { allPosts as clPosts, Post } from "contentlayer/generated";
import { mockPosts } from "@/mockdata/posts";
import "@/styles/blogList.css";
import type { PostLite } from "@/types/content";

// ─────────────────────────────────────────
// MOCK DATA (fallback si Contentlayer est vide)
// ─────────────────────────────────────────
const categories = ["Tous", "Méthode", "Data / AI", "Design", "Perf", "Tech"];

const categoryAccents: Record<string, string> = {
  Méthode: "#4da6ff",
  "Data / AI": "#a78bfa",
  Design: "#f472b6",
  Perf: "#4ec9b0",
  Tech: "#fb923c",
};

function formatDate(date: string) {
  if (!date) return "";
  const d = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) {
    // Fallback if date string already includes time/zone or is malformed
    const alt = new Date(date);
    if (Number.isNaN(alt.getTime())) return "";
    return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short", year: "numeric" }).format(alt);
  }
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short", year: "numeric" }).format(d);
}

// ─────────────────────────────────────────
// BLOG CARD
// ─────────────────────────────────────────
function BlogCard({ post, featured = false }: { post: any; featured?: boolean }) {
  const accent = categoryAccents[post.category] || "#4ec9b0";
  const vars = {
    "--cat-c": accent,
    "--cat-dim": `${accent}33`,
    "--cat-bg": `${accent}11`,
  } as React.CSSProperties;

  if (featured)
    return (
      <a href={post.url} className="bl-card-featured" style={vars}>
        <div className="bl-card-top">
          <span className="bl-cat-pill">{post.category}</span>
          <div className="bl-meta">
            <span className="bl-date">{formatDate(post.date)}</span>
            <span className="bl-read">{post.readTime}</span>
          </div>
        </div>
        <h2 className="bl-feat-title">{post.title}</h2>
        <p className="bl-feat-excerpt">{post.excerpt}</p>
        <span className="bl-read-link">
          Lire l'article <span>→</span>
        </span>
      </a>
    );

  return (
    <a href={post.url} className="bl-card" style={vars}>
      <div className="bl-card-top">
        <span className="bl-cat-pill">{post.category}</span>
        <div className="bl-meta">
          <span className="bl-date">{formatDate(post.date)}</span>
          <span className="bl-read">{post.readTime}</span>
        </div>
      </div>
      <h3 className="bl-card-title">{post.title}</h3>
      <p className="bl-card-excerpt">{post.excerpt}</p>
      <span className="bl-card-read">
        Lire l'article <span>→</span>
      </span>
    </a>
  );
}

// ─────────────────────────────────────────
// NEWSLETTER
// ─────────────────────────────────────────
function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const submit = () => {
    if (email.includes("@")) {
      setSent(true);
      setEmail("");
    }
  };

  return (
    <div className="bl-newsletter">
      <div className="bl-nl-left">
        <div className="bl-nl-tag">
          <span className="bl-nl-dot" />
          Newsletter
        </div>
        <div className="bl-nl-h">Restez dans la boucle.</div>
        <p className="bl-nl-sub">Méthode produit, retours terrain, nouveaux articles — 2× par mois.</p>
      </div>
      <div className="bl-nl-right">
        {sent ? (
          <p className="bl-nl-confirm">✓ Vous êtes abonné · à très vite !</p>
        ) : (
          <>
            <div className="bl-nl-form">
              <input
                className="bl-nl-input"
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submit()}
              />
              <button className="bl-nl-btn" onClick={submit}>
                S'abonner →
              </button>
            </div>
            <p className="bl-nl-hint">Pas de spam. Désabonnement en 1 clic.</p>
          </>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────
export default function BlogList({ limit = 6, posts }: { limit?: number; posts?: (Post | PostLite)[] }) {
  const [filter, setFilter] = useState("Tous");

  const source = posts ?? (clPosts?.length ? clPosts : mockPosts);
  const sorted = [...source].sort((a, b) => (a.date < b.date ? 1 : -1));
  const filtered = filter === "Tous" ? sorted : sorted.filter((p) => p.category === filter);
  const featured = filtered[0];
  const secondary = filtered.slice(1, 3);
  const rest = filtered.slice(3, limit);

  return (
    <>
      <div className="bl-root">
        <div className="bl-bg-grid" />
        <div className="bl-orb bl-orb-a" />
        <div className="bl-orb bl-orb-b" />

        <div className="bl-inner">
          {/* ── HERO ── */}
          <div className="bl-hero">
            <div className="bl-eyebrow">
              <span className="bl-dot" />
              Perspectives · Studio produit
            </div>
            <h1 className="bl-h1">
              Terrain, méthode,
              <br />
              <em>sans bullshit.</em>
            </h1>
            <p className="bl-sub">
              Retours d'expérience sur la product, la data, le design et l'engineering — rédigés par l'équipe qui
              livre.
            </p>
          </div>

          {/* ── FILTERS ── */}
          <div className="bl-filters-row">
            <div className="bl-filters">
              {categories.map((c) => (
                <button key={c} className={`bl-filter ${filter === c ? "active" : ""}`} onClick={() => setFilter(c)}>
                  {c}
                </button>
              ))}
            </div>
            <span className="bl-count">
              {filtered.length} article{filtered.length > 1 ? "s" : ""}
            </span>
          </div>

          {/* ── FEATURED + SECONDARY ── */}
          {featured && (
            <div className="bl-featured">
              <BlogCard post={featured} featured />
              <div className="bl-secondary-wrapper">
                {secondary.map((p) => (
                  <BlogCard key={p._id} post={p} />
                ))}
              </div>
            </div>
          )}

          {/* ── REST ── */}
          {rest.length > 0 && (
            <>
              <div className="bl-divider">Tous les articles</div>
              <div className="bl-grid">
                {rest.map((p) => (
                  <BlogCard key={p._id} post={p} />
                ))}
              </div>
            </>
          )}

          {/* ── NEWSLETTER ── */}
          <Newsletter />
        </div>
      </div>
    </>
  );
}
