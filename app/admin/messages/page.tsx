'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Icons } from '@/lib/icons';
import '@/styles/admin/messages.css';
import { ContactMessage } from '@/types/database';

// ─────────────────────────────────────────
// Fetch messages from Supabase
// ─────────────────────────────────────────
async function fetchMessages() {
  try {
    const res = await fetch('/api/messages?limit=1000');
    if (!res.ok) throw new Error('Failed to fetch');
    const { data } = await res.json();
    return data || [];
  } catch (err) {
    console.error('Error fetching messages:', err);
    return [];
  }
}

// ─────────────────────────────────────────
// Brand colors (from globals.css)
// ─────────────────────────────────────────
const BRAND = {
  primary: '#242675',      // Dark blue
  accent: '#3E4347',       // Dark gray
  light: '#7A7F84',        // Light gray
};

// ─────────────────────────────────────────
// Helper functions
// ─────────────────────────────────────────
function fmt(d: string) {
  return new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(d));
}

function fmtFull(d: string) {
  return new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date(d));
}

function timeAgo(d: string) {
  const diff = (Date.now() - new Date(d).getTime()) / 1000;
  if (diff < 3600) return `Il y a ${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `Il y a ${Math.floor(diff / 3600)}h`;
  if (diff < 604800) return `Il y a ${Math.floor(diff / 86400)}j`;
  return fmt(d);
}
 

const FILTERS = ['Tous', 'Non lus', 'Lus', 'Archivés'];
const PER_PAGE = 10;

// ─────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────
export default function MessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Tous');
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [toDelete, setToDelete] = useState<null | 'bulk' | ContactMessage>(null);
  const [toast, setToast] = useState('');

  // Fetch messages on mount
  useEffect(() => {
    fetchMessages().then(data => {
      setMessages(data);
      setLoading(false);
    });
  }, []);

  // Auto-hide toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(''), 2000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = (msg: string) => setToast(msg);

  // Filter logic
  const filtered = messages.filter(m => {
    let pass = true;

    // Search filter
    if (search) {
      const q = search.toLowerCase();
      pass = pass && (
        m.name.toLowerCase().includes(q) ||
        m.email.toLowerCase().includes(q) ||
        m.message.toLowerCase().includes(q)
      );
    }

    // Status filter
    if (filter === 'Non lus') pass = pass && !m.read && !m.archived;
    else if (filter === 'Lus') pass = pass && m.read && !m.archived;
    else if (filter === 'Archivés') pass = pass && m.archived;
    else pass = pass && !m.archived;

    return pass;
  });

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const pageItems = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const total = messages.filter(m => !m.archived).length;
  const unread = messages.filter(m => !m.read && !m.archived).length;

  const allSel = pageItems.length > 0 && pageItems.every(m => selected.has(m.id));
  const toggleAll = () => {
    if (allSel) setSelected(new Set());
    else setSelected(new Set(pageItems.map(m => m.id)));
  };
  const toggleOne = (id: string) => {
    const ns = new Set(selected);
    if (ns.has(id)) ns.delete(id);
    else ns.add(id);
    setSelected(ns);
  };

  const markRead = (id: string) => {
    setMessages(ms => ms.map(m => m.id === id ? { ...m, read: true } : m));
    showToast('Message marqué comme lu');
  };
  const archiveOne = (id: string) => {
    setMessages(ms => ms.map(m => m.id === id ? { ...m, archived: true } : m));
    showToast('Message archivé');
  };
  const doDelete = () => {
    const ids = toDelete === 'bulk' ? selected : new Set([toDelete?.id]);
    setMessages(ms => ms.filter(m => !ids.has(m.id)));
    setSelected(new Set());
    setToDelete(null);
    showToast(ids.size > 1 ? `${ids.size} messages supprimés` : 'Message supprimé');
  };
  const bulkRead = () => {
    setMessages(ms => ms.map(m => selected.has(m.id) ? { ...m, read: true } : m));
    showToast(`${selected.size} messages marqués comme lus`);
    setSelected(new Set());
  };

  if (loading) return <div style={{ padding: '40px' }}>Chargement...</div>;

  return (
    <>
      <div className="mp-root">
        <div className="mp-inner">
          {/* TOP BAR */}
          <div className="mp-topbar">
            <div className="mp-breadcrumb">
              <span>Admin</span>
              <span className="mp-breadcrumb-sep">›</span>
              <span className="mp-breadcrumb-cur">Messages</span>
            </div>
            <h1 className="mp-h1">Messages entrants</h1>
          </div>

          {/* STATS */}
          <div className="mp-stats">
            {[
              { val: total, label: 'Total actifs', color: BRAND.primary },
              { val: unread, label: 'Non lus', color: '#f59e0b' },
              { val: messages.filter(m => m.read && !m.archived).length, label: 'Lus', color: '#10b981' },
              { val: messages.filter(m => m.archived).length, label: 'Archivés', color: BRAND.light },
            ].map(s => (
              <div key={s.label} className="mp-stat">
                <div className="mp-stat-val" style={{ color: s.color }}>{s.val}</div>
                <div className="mp-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* TOOLBAR */}
          <div className="mp-toolbar">
            <div className="mp-search-wrap">
              <span className="mp-search-icon">{Icons.search}</span>
              <input
                className="mp-search"
                placeholder="Rechercher un message, nom, email…"
                value={search}
                onChange={e => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
            </div>
            <div className="mp-filters">
              {FILTERS.map(f => (
                <button
                  key={f}
                  className={`mp-filter ${filter === f ? 'active' : ''}`}
                  onClick={() => {
                    setFilter(f);
                    setPage(1);
                  }}
                >
                  {f}
                  {f === 'Non lus' && unread > 0 ? ` (${unread})` : ''}
                </button>
              ))}
            </div>
          </div>

          {/* TABLE */}
          <div className="mp-table-wrap">
            {selected.size > 0 && (
              <div className="mp-bulk">
                <span className="mp-bulk-count">{selected.size} sélectionné(s)</span>
                <button className="mp-bulk-btn" onClick={bulkRead}>
                  {Icons.check} Marquer lus
                </button>
                <button className="mp-bulk-btn mp-bulk-del" onClick={() => setToDelete('bulk')}>
                  {Icons.trash} Supprimer
                </button>
                <button className="mp-bulk-btn" style={{ marginLeft: 'auto' }} onClick={() => setSelected(new Set())}>
                  {Icons.close} Annuler
                </button>
              </div>
            )}

            {pageItems.length === 0 ? (
              <div className="mp-empty">
                <div className="mp-empty-icon" style={{ fontSize: '32px', color: '#242675' }}>{Icons.messageSquare}</div>
                <div className="mp-empty-title">
                  {search ? `Aucun résultat pour « ${search} »` : 'Aucun message'}
                </div>
                <p className="mp-empty-sub">Les nouveaux messages apparaîtront ici.</p>
              </div>
            ) : (
              <table className="mp-table">
                <thead>
                  <tr className="mp-thead-row">
                    <th className="mp-th mp-th-chk">
                      <input type="checkbox" className="mp-chk" checked={allSel} onChange={toggleAll} />
                    </th>
                    <th className="mp-th" style={{ width: 4 }} />
                    <th className="mp-th">Expéditeur</th>
                    <th className="mp-th">Sujet & aperçu</th>
                    <th className="mp-th" style={{ width: '12%' }}>Statut</th>
                    <th className="mp-th" style={{ width: '10%' }}>Date</th>
                    <th className="mp-th">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pageItems.map(m => (
                    <tr key={m.id} className={`mp-tr ${!m.read ? 'unread' : ''} ${selected.has(m.id) ? 'selected' : ''}`}>
                      <td className="mp-td mp-td-chk">
                        <input
                          type="checkbox"
                          className="mp-chk"
                          checked={selected.has(m.id)}
                          onChange={() => toggleOne(m.id)}
                          onClick={e => e.stopPropagation()}
                        />
                      </td>

                      {!m.read && (
                        <td className="mp-td" style={{ padding: '14px 4px 14px 0' }}>
                          <div className="mp-unread-bar" />
                        </td>
                      )}
                      {m.read && <td className="mp-td" style={{ padding: '14px 4px 14px 0' }} />}

                      <td className="mp-td">
                        <div className="mp-sender">
                          <div className={`mp-av ${!m.read ? 'mp-av-unread' : 'mp-av-read'}`}>
                            {m.name[0]}
                          </div>
                          <div>
                            <div className="mp-sender-name">{m.name}</div>
                            <a href={`mailto:${m.email}`} className="mp-sender-email" onClick={e => e.stopPropagation()}>
                              {m.email}
                            </a>
                          </div>
                        </div>
                      </td>

                      <td className="mp-td">
                         <Link href={`/admin/messages/${m.id}`} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                           <div className="mp-subject">{m.message.substring(0, 50)}</div>
                           <div className="mp-excerpt">{m.message}</div>
                         </Link>
                       </td>

                      <td className="mp-td">
                        <span className={`mp-status ${m.read ? 'mp-status-read' : 'mp-status-new'}`}>
                          <span className="mp-status-dot" />
                          {m.read ? 'Lu' : 'Nouveau'}
                        </span>
                      </td>

                      <td className="mp-td">
                        <span className="mp-time" title={fmtFull(m.created_at)}>
                          {timeAgo(m.created_at)}
                        </span>
                      </td>

                      <td className="mp-td">
                        <div className="mp-actions">
                          {!m.read && (
                            <button
                              className="mp-action"
                              onClick={e => {
                                e.stopPropagation();
                                markRead(m.id);
                              }}
                              title="Marquer comme lu"
                            >
                              {Icons.check}
                            </button>
                          )}
                          {!m.archived && (
                            <button
                              className="mp-action"
                              onClick={e => {
                                e.stopPropagation();
                                archiveOne(m.id);
                              }}
                              title="Archiver"
                            >
                              {Icons.archive}
                            </button>
                          )}
                          <button
                            className="mp-action mp-action-del"
                            onClick={e => {
                              e.stopPropagation();
                              setToDelete(m);
                            }}
                            title="Supprimer"
                          >
                            {Icons.trash}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* PAGINATION */}
          {filtered.length > PER_PAGE && (
            <div className="mp-pagination">
              <span>
                {(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, filtered.length)} sur {filtered.length}
              </span>
              <div className="mp-pag-btns">
                <button className="mp-pag-btn" disabled={page === 1} onClick={() => setPage(p => p - 1)}>
                  ← Préc.
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                  <button
                    key={n}
                    className={`mp-pag-btn ${page === n ? 'active' : ''}`}
                    onClick={() => setPage(n)}
                  >
                    {n}
                  </button>
                ))}
                <button className="mp-pag-btn" disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>
                  Suiv. →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* DELETE MODAL */}
      {toDelete && (
        <div className="mp-overlay" onClick={() => setToDelete(null)}>
          <div className="mp-modal" onClick={e => e.stopPropagation()}>
            <div className="mp-modal-icon" style={{ fontSize: '32px', color: '#dc2626' }}>{Icons.trash}</div>
            <div className="mp-modal-h">
              {toDelete === 'bulk' ? `Supprimer ${selected.size} messages ?` : 'Supprimer ce message ?'}
            </div>
            <p className="mp-modal-sub">
              {toDelete === 'bulk'
                ? `Les ${selected.size} messages sélectionnés seront définitivement supprimés.`
                : `Le message de "${(toDelete as ContactMessage).name}" sera définitivement supprimé.`}
              Cette action est irréversible.
            </p>
            <div className="mp-modal-btns">
              <button className="mp-modal-cancel" onClick={() => setToDelete(null)}>
                Annuler
              </button>
              <button className="mp-modal-del" onClick={doDelete}>
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && <div className="mp-toast">{Icons.checkCircle} {toast}</div>}
    </>
  );
}
