"use client";

import { useState, useEffect } from "react";
import "@/styles/admin/newsletter.css";
import { newsletterAPI } from "@/lib/admin-api";
import { Icons } from "@/lib/icons";

function fmt(d: string | Date) {
  return new Intl.DateTimeFormat("fr-FR",{day:"2-digit",month:"short",year:"numeric"}).format(new Date(d));
}
function fmtFull(d: string | Date) {
  return new Intl.DateTimeFormat("fr-FR",{day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(d));
}

const PER_PAGE = 8;
const MONTHS = ["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"];

export default function NewsletterPage() {
  const [subs, setSubs]           = useState<any[]>([]);
  const [search, setSearch]       = useState("");
  const [filter, setFilter]       = useState("Tous");
  const [selected, setSelected]   = useState(new Set());
  const [page, setPage]           = useState(1);
  const [copied, setCopied]       = useState(false);
  const [toast, setToast]         = useState<string | null>(null);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2800);
  };

  // Load subscribers on mount and when dependencies change
  useEffect(() => {
    setPage(1); // Reset to page 1 when search/filter changes
  }, [search, filter]);

  useEffect(() => {
    loadSubscribers();
  }, [page]);

  const loadSubscribers = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await newsletterAPI.getSubscribers(PER_PAGE, (page - 1) * PER_PAGE);
      setSubs(result.data || []);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Erreur inconnue";
      setError(errorMsg);
      showToast(`Erreur: ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  // Filter (local filtering on current page)
  const filtered = subs.filter(s => {
    const q = search.toLowerCase();
    const matchQ = s.email.toLowerCase().includes(q);
    const matchF = filter === "Tous" || (filter === "Actifs" && s.subscribed);
    return matchQ && matchF;
  });

  const pageSubs   = filtered;
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));

  // Stats
  const active = subs.filter(s => s.subscribed).length;
  const rate   = subs.length ? Math.round((active/subs.length)*100) : 0;

  // Chart: subs per month (last 6 months)
  const now = new Date();
  const chartData = Array.from({length:6},(_,i)=>{
    const d = new Date(now.getFullYear(), now.getMonth()-5+i, 1);
    const count = subs.filter(s => {
      const sd = new Date(s.created_at);
      return sd.getMonth()===d.getMonth() && sd.getFullYear()===d.getFullYear();
    }).length;
    return { label: MONTHS[d.getMonth()], count };
  });
  const maxCount = Math.max(...chartData.map(d=>d.count), 1);

  // Select
  const allPageSelected = pageSubs.length > 0 && pageSubs.every(s => selected.has(s.id));
  const toggleAll = () => {
    const ns = new Set(selected);
    if (allPageSelected) pageSubs.forEach(s => ns.delete(s.id));
    else pageSubs.forEach(s => ns.add(s.id));
    setSelected(ns);
  };
  const toggleOne = (id: string) => {
    const ns = new Set(selected);
    ns.has(id) ? ns.delete(id) : ns.add(id);
    setSelected(ns);
  };

  // Bulk delete
  const bulkDelete = async () => {
    try {
      const idsToDelete = Array.from(selected) as string[];
      await newsletterAPI.bulkDeleteSubscribers(idsToDelete);
      setSubs(ss => ss.filter(s => !selected.has(s.id)));
      showToast(`${selected.size} abonné(s) supprimé(s)`);
      setSelected(new Set());
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Erreur inconnue";
      showToast(`Erreur: ${errorMsg}`);
    }
  };

  // Copy emails
  const copyEmails = () => {
    const emails = filtered
      .filter(s => s.status === "active")
      .map(s => s.email).join("\n");
    navigator.clipboard?.writeText(emails).catch(()=>{});
    setCopied(true);
    showToast(`${active} emails copiés dans le presse-papier`);
    setTimeout(()=>setCopied(false), 2500);
  };

  // Email parts
  const splitEmail = (e: string) => {
    const [user, domain] = e.split("@");
    return { user, domain: "@"+domain };
  };

  return (
    <>
      <div className="nl-root">
        <div className="nl-bg-grid"/>
        <div className="nl-orb-a"/>

        <div className="nl-inner">

          {/* ── TOP BAR ── */}
          <div className="nl-topbar">
            <div>
              <div className="nl-breadcrumb">
                <span>Admin</span><span className="nl-breadcrumb-sep">›</span>
                <span className="nl-breadcrumb-cur">Newsletter</span>
              </div>
              <h1 className="nl-h1">Abonnés <em>newsletter</em></h1>
            </div>
            <button className={`nl-export-btn ${copied?"copied":""}`} onClick={copyEmails}>
              {copied
                ? <><span>{Icons.check}</span> Emails copiés</>
                : <><span>{Icons.copy}</span> Exporter les emails</>
              }
            </button>
          </div>

          {/* ── STATS ── */}
          <div className="nl-stats">
            {[
              { val:subs.length,  label:"Total abonnés",    color:"#4ec9b0" },
              { val:active,       label:"Actifs",            color:"#4ec9b0" },
              { val:search ? filtered.length : subs.length, label:search ? "Résultats" : "Chargés", color:"#4da6ff" },
              { val:`${rate}%`,   label:"Taux actif", color:"#4da6ff" },
            ].map(s => (
              <div key={s.label} className="nl-stat">
                <span className="nl-stat-val" style={{color:s.color}}>{s.val}</span>
                <span className="nl-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* ── CHART ── */}
          <div className="nl-chart-card">
            <div className="nl-chart-title">Inscriptions — 6 derniers mois</div>
            <div className="nl-chart">
              {chartData.map(d => (
                <div key={d.label} className="nl-bar-wrap">
                  <span className="nl-bar-val">{d.count > 0 ? d.count : ""}</span>
                  <div className="nl-bar" style={{height:`${Math.max(8,(d.count/maxCount)*100)}%`}} title={`${d.count} inscriptions`}/>
                  <span className="nl-bar-label">{d.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── TOOLBAR ── */}
          <div className="nl-toolbar">
            <div className="nl-search-wrap">
              <span className="nl-search-icon">{Icons.search}</span>
              <input className="nl-search" placeholder="Rechercher un email…"
                value={search} onChange={e=>{setSearch(e.target.value);setPage(1);}}/>
            </div>
            <div className="nl-filter-row">
              {["Tous","Actifs","Désabonnés"].map(f=>(
                <button key={f} className={`nl-filter ${filter===f?"active":""}`}
                  onClick={()=>{setFilter(f);setPage(1);}}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* ── TABLE ── */}
          <div className="nl-table-wrap">

            {/* Bulk bar */}
            {selected.size > 0 && (
              <div className="nl-bulk">
                <span className="nl-bulk-count">{selected.size} sélectionné(s)</span>
                <button className="nl-bulk-btn" onClick={()=>{
                  const emails = [...selected].map(id=>subs.find(s=>s.id===id)?.email).filter(Boolean).join("\n");
                  navigator.clipboard?.writeText(emails).catch(()=>{});
                  showToast("Emails sélectionnés copiés");
                }}>{Icons.copy} Copier sélection</button>
                <button className="nl-bulk-btn nl-bulk-del" onClick={bulkDelete}>{Icons.trash} Supprimer</button>
                <button className="nl-bulk-btn" style={{marginLeft:"auto"}} onClick={()=>setSelected(new Set())}>{Icons.close} Annuler</button>
              </div>
            )}

            {pageSubs.length === 0 ? (
              <div className="nl-empty">
                <div className="nl-empty-icon">📭</div>
                <div className="nl-empty-title">
                  {search ? `Aucun résultat pour « ${search} »` : "Aucun abonné"}
                </div>
                <p className="nl-empty-sub">Les nouvelles inscriptions apparaîtront ici.</p>
              </div>
            ) : (
              <table className="nl-table">
                <thead>
                  <tr className="nl-thead-row">
                     <th className="nl-th nl-th-check">
                       <input type="checkbox" className="nl-checkbox"
                         checked={allPageSelected} onChange={toggleAll}/>
                     </th>
                     <th className="nl-th">Email</th>
                     <th className="nl-th nl-th-date">Inscription</th>
                     <th className="nl-th">Actions</th>
                   </tr>
                </thead>
                <tbody>
                  {pageSubs.map(s => {
                       const { user, domain } = splitEmail(s.email);
                       return (
                         <tr key={s.id} className={`nl-tr ${selected.has(s.id)?"selected":""}`}>
                           <td className="nl-td nl-td-check">
                             <input type="checkbox" className="nl-checkbox"
                               checked={selected.has(s.id)} onChange={()=>toggleOne(s.id)}/>
                           </td>
                           <td className="nl-td">
                             <a href={`mailto:${s.email}`} className="nl-email">
                               <span>{user}</span>
                               <span className="nl-email-domain">{domain}</span>
                             </a>
                           </td>
                           <td className="nl-td nl-td-date">
                             <span className="nl-date" title={fmtFull(s.created_at)}>{fmt(s.created_at)}</span>
                           </td>
                        <td className="nl-td">
                          <div className="nl-actions">
                            <button className="nl-action" onClick={()=>{
                              navigator.clipboard?.writeText(s.email).catch(()=>{});
                              showToast(`${s.email} copié`);
                            }} title="Copier email">{Icons.copy}</button>
                            <button className="nl-action nl-action-del" onClick={async ()=>{
                              try {
                                await newsletterAPI.deleteSubscriber(s.id);
                                setSubs(ss=>ss.filter(x=>x.id!==s.id));
                                showToast("Abonné supprimé");
                                setSelected(sel=>{const n=new Set(sel);n.delete(s.id);return n;});
                              } catch (err) {
                                const errorMsg = err instanceof Error ? err.message : "Erreur inconnue";
                                showToast(`Erreur: ${errorMsg}`);
                              }
                            }} title="Supprimer">{Icons.trash}</button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>

          {/* ── PAGINATION ── */}
          {filtered.length > PER_PAGE && (
            <div className="nl-pagination">
              <span className="nl-pag-info">
                {(page-1)*PER_PAGE+1}–{Math.min(page*PER_PAGE,filtered.length)} sur {filtered.length}
              </span>
              <div className="nl-pag-btns">
                <button className="nl-pag-btn" disabled={page===1} onClick={()=>setPage(p=>p-1)}>← Préc.</button>
                {Array.from({length:totalPages},(_,i)=>i+1).map(n=>(
                  <button key={n} className={`nl-pag-btn ${page===n?"active":""}`} onClick={()=>setPage(n)}>{n}</button>
                ))}
                <button className="nl-pag-btn" disabled={page===totalPages} onClick={()=>setPage(p=>p+1)}>Suiv. →</button>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ── TOAST ── */}
      {toast && <div className="nl-toast">{Icons.checkCircle} {toast}</div>}
    </>
  );
}