"use client";

import { useState, useEffect } from "react";
import "@/styles/admin/blog.css";
import { blogAPI } from "@/lib/admin-api";
import { Icons } from "@/lib/icons";

function fmt(d: string | Date) {
  return new Intl.DateTimeFormat("fr-FR",{day:"2-digit",month:"short",year:"numeric"}).format(new Date(d));
}

const FILTERS = ["Tous","Publié","Brouillon"];
const CATS    = ["Toutes catégories","Méthode","Data / AI","Design","Tech","Perf"];

export default function AdminBlogPage() {
  const [posts, setPosts]           = useState<any[]>([]);
  const [search, setSearch]         = useState("");
  const [filter, setFilter]         = useState("Tous");
  const [catFilter, setCatFilter]   = useState("Toutes catégories");
  const [toDelete, setToDelete]     = useState<any>(null);
  const [page, setPage]             = useState(1);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState<string | null>(null);
  const [toast, setToast]           = useState<string | null>(null);
  const PER_PAGE = 5;

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2800);
  };

  // Load articles on mount and when dependencies change
  useEffect(() => {
    setPage(1); // Reset to page 1 when search/filter changes
  }, [search, filter, catFilter]);

  useEffect(() => {
    loadArticles();
  }, [page, filter]);

  const loadArticles = async () => {
    try {
      setLoading(true);
      setError(null);
      const status = filter === "Tous" ? undefined : (filter === "Publié" ? "published" : "draft");
      const result = await blogAPI.getArticles(PER_PAGE, (page - 1) * PER_PAGE, status);
      setPosts(result.data || []);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Erreur inconnue";
      setError(errorMsg);
      showToast(`Erreur: ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  // Local filtering on current page
  const filtered = posts.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase())
                     || p.slug.toLowerCase().includes(search.toLowerCase());
    return matchSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const pagePosts  = filtered.slice((page-1)*PER_PAGE, page*PER_PAGE);

  const doDelete = async () => {
    if (!toDelete) return;
    try {
      await blogAPI.deleteArticle(toDelete.id);
      setPosts(ps => ps.filter(p => p.id !== toDelete.id));
      showToast("Article supprimé");
      setToDelete(null);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Erreur inconnue";
      showToast(`Erreur: ${errorMsg}`);
    }
  };

  const stats = [
    { val: posts.length,                                     label: "Articles chargés" },
    { val: posts.filter(p=>p.status==="published").length,   label: "Publiés" },
    { val: posts.filter(p=>p.status==="draft").length,       label: "Brouillons" },
    { val: filtered.length,                                  label: "Résultats" },
  ];

  return (
    <>
      <div className="ab-root">
        <div className="ab-grid-bg"/>
        <div className="ab-orb-a"/>

        <div className="ab-inner">

          {/* ── TOP BAR ── */}
          <div className="ab-topbar">
            <div>
              <div className="ab-breadcrumb">
                <span>Admin</span><span className="ab-breadcrumb-sep">›</span>
                <span className="ab-breadcrumb-active">Blog</span>
              </div>
              <h1 className="ab-h1">Gestion du <em>blog</em></h1>
            </div>
            <a href="/admin/blog/new" className="ab-new-btn">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v12M1 7h12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Nouvel article
            </a>
          </div>

          {/* ── STATS ── */}
          <div className="ab-stats">
            {stats.map(s => (
              <div key={s.label} className="ab-stat">
                <span className="ab-stat-val">{s.val}</span>
                <span className="ab-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* ── TOOLBAR ── */}
          <div className="ab-toolbar">
            <div className="ab-search-wrap">
              <span className="ab-search-icon">{Icons.search}</span>
              <input
                className="ab-search"
                placeholder="Rechercher un article…"
                value={search}
                onChange={e => { setSearch(e.target.value); setPage(1); }}
              />
            </div>
            <div className="ab-filter-btns">
              {FILTERS.map(f => (
                <button key={f} className={`ab-filter ${filter===f?"active":""}`}
                  onClick={() => { setFilter(f); setPage(1); }}>
                  {f}
                </button>
              ))}
            </div>
            <div className="ab-filter-btns">
              <select
                style={{
                  background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.08)",
                  borderRadius:8, padding:"8px 12px", fontFamily:"'DM Sans',sans-serif",
                  fontSize:12, color:"rgba(140,180,235,.7)", outline:"none", cursor:"pointer",
                }}
                value={catFilter}
                onChange={e => { setCatFilter(e.target.value); setPage(1); }}
              >
                {CATS.map(c => <option key={c} value={c} style={{background:"#0d1625"}}>{c}</option>)}
              </select>
            </div>
          </div>

          {/* ── TABLE ── */}
          <div className="ab-table-wrap">
            {pagePosts.length === 0 ? (
              <div className="ab-empty">
                <div className="ab-empty-icon">✏️</div>
                <div className="ab-empty-title">Aucun article trouvé</div>
                <p className="ab-empty-sub">
                  {search ? `Aucun résultat pour « ${search} »` : "Créez votre premier article pour commencer."}
                </p>
                {!search && (
                  <a href="/admin/blog/new" className="ab-new-btn" style={{marginTop:8}}>
                    + Créer un article
                  </a>
                )}
              </div>
            ) : (
              <table className="ab-table">
                <thead>
                  <tr className="ab-thead-row">
                     <th className="ab-th">Article</th>
                     <th className="ab-th">Statut</th>
                     <th className="ab-th">Date</th>
                     <th className="ab-th">Actions</th>
                   </tr>
                </thead>
                <tbody>
                  {pagePosts.map(p => (
                       <tr key={p.id} className="ab-tr">

                         {/* Title */}
                         <td className="ab-td">
                           <div className="ab-title-cell">
                             <span className="ab-title">{p.title}</span>
                             <span className="ab-slug">/{p.slug}</span>
                           </div>
                         </td>

                         {/* Status */}
                         <td className="ab-td">
                           <span className={`ab-status ab-status-${p.status}`}>
                             <span className="ab-status-dot"/>
                             {p.status === "published" ? "Publié" : "Brouillon"}
                           </span>
                         </td>

                         {/* Date */}
                         <td className="ab-td">
                           <span className="ab-meta-date">{fmt(p.created_at || p.updated_at)}</span>
                         </td>

                        {/* Actions */}
                        <td className="ab-td">
                          <div className="ab-actions">
                            <a href={`/blog/${p.slug}`} target="_blank" rel="noopener noreferrer" className="ab-action">
                              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path d="M1 10L10 1M10 1H4M10 1V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                              </svg>
                              Voir
                            </a>
                            <a href={`/admin/blog/${p.slug}`} className="ab-action">
                              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path d="M7.5 1.5l2 2L3 10H1V8L7.5 1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                              </svg>
                              Éditer
                            </a>
                            <button className="ab-action ab-action-del" onClick={() => setToDelete(p)}>
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                              </svg>
                            </button>
                          </div>
                        </td>
                        </tr>
                        ))}
                        </tbody>
                        </table>
                        )}
          </div>

          {/* ── PAGINATION ── */}
          {filtered.length > PER_PAGE && (
            <div className="ab-pagination">
              <span className="ab-pag-info">
                {(page-1)*PER_PAGE+1}–{Math.min(page*PER_PAGE,filtered.length)} sur {filtered.length} articles
              </span>
              <div className="ab-pag-btns">
                <button className="ab-pag-btn" disabled={page===1} onClick={()=>setPage(p=>p-1)}>← Préc.</button>
                {Array.from({length:totalPages},(_,i)=>i+1).map(n=>(
                  <button key={n} className={`ab-pag-btn ${page===n?"active":""}`} onClick={()=>setPage(n)}>{n}</button>
                ))}
                <button className="ab-pag-btn" disabled={page===totalPages} onClick={()=>setPage(p=>p+1)}>Suiv. →</button>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ── DELETE MODAL ── */}
      {toDelete && (
        <div className="ab-modal-overlay" onClick={()=>setToDelete(null)}>
          <div className="ab-modal" onClick={e=>e.stopPropagation()}>
            <div className="ab-modal-icon" style={{ fontSize: '32px', color: '#dc2626' }}>{Icons.trash}</div>
            <div className="ab-modal-h">Supprimer cet article ?</div>
            <p className="ab-modal-sub">
              « {toDelete.title} » sera définitivement supprimé.
              Cette action est irréversible.
            </p>
            <div className="ab-modal-btns">
              <button className="ab-modal-cancel" onClick={()=>setToDelete(null)}>Annuler</button>
              <button className="ab-modal-del" onClick={doDelete}>Supprimer</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}