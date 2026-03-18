'use client';

import { useState, useEffect } from 'react';
import { Icons } from '@/lib/icons';
import '@/styles/admin/notifications.css';

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

// ─────────────────────────────────────────
// Mock notifications data
// ─────────────────────────────────────────
const mockNotifications = [
  {
    id: '1',
    title: 'Nouveau message reçu',
    message: 'Vous avez reçu un nouveau message de contact.',
    type: 'message',
    read: false,
    created_at: new Date(Date.now() - 5 * 60000).toISOString(),
  },
  {
    id: '2',
    title: 'Newsletter inscrite',
    message: 'Un nouvel utilisateur sest inscrit à la newsletter.',
    type: 'newsletter',
    read: false,
    created_at: new Date(Date.now() - 15 * 60000).toISOString(),
  },
  {
    id: '3',
    title: 'Mise à jour système',
    message: 'Une nouvelle version est disponible.',
    type: 'system',
    read: true,
    created_at: new Date(Date.now() - 2 * 3600000).toISOString(),
  },
  {
    id: '4',
    title: 'Certificat SSL renouvelé',
    message: 'Votre certificat SSL a été renouvelé avec succès.',
    type: 'security',
    read: true,
    created_at: new Date(Date.now() - 24 * 3600000).toISOString(),
  },
  {
    id: '5',
    title: 'Sauvegarde complète',
    message: 'La sauvegarde quotidienne sest déroulée sans erreur.',
    type: 'backup',
    read: true,
    created_at: new Date(Date.now() - 3 * 24 * 3600000).toISOString(),
  },
];

const FILTERS = ['Tous', 'Non lus', 'Messages', 'Système'];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Tous');
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [toDelete, setToDelete] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;

  // ─────────────────────────────────────────
  // Filtering logic
  // ─────────────────────────────────────────
  const filtered = notifications.filter(n => {
    const matchesSearch = search === '' || 
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.message.toLowerCase().includes(search.toLowerCase());

    if (filter === 'Non lus') return matchesSearch && !n.read;
    if (filter === 'Messages') return matchesSearch && (n.type === 'message' || n.type === 'newsletter');
    if (filter === 'Système') return matchesSearch && (n.type === 'system' || n.type === 'security' || n.type === 'backup');
    return matchesSearch;
  });

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const pageItems = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const unread = notifications.filter(n => !n.read).length;
  const allSel = pageItems.length > 0 && pageItems.every(m => selected.has(m.id));

  // ─────────────────────────────────────────
  // Actions
  // ─────────────────────────────────────────
  const markRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const bulkRead = () => {
    setNotifications(notifications.map(n => selected.has(n.id) ? { ...n, read: true } : n));
    setSelected(new Set());
    setToast('Marqué comme lu');
    setTimeout(() => setToast(null), 3000);
  };

  const doDelete = () => {
    if (toDelete === 'bulk') {
      setNotifications(notifications.filter(n => !selected.has(n.id)));
      setSelected(new Set());
      setToast(`${selected.size} notifications supprimées`);
    } else {
      setNotifications(notifications.filter(n => n.id !== toDelete));
      setToast('Notification supprimée');
    }
    setToDelete(null);
    setTimeout(() => setToast(null), 3000);
  };

  const toggleOne = (id: string) => {
    const newSel = new Set(selected);
    newSel.has(id) ? newSel.delete(id) : newSel.add(id);
    setSelected(newSel);
  };

  const toggleAll = () => {
    if (allSel) {
      setSelected(new Set());
    } else {
      const all = new Set(pageItems.map(m => m.id));
      setSelected(all);
    }
  };

  const getTypeBadgeClass = (type: string) => {
    const map: { [key: string]: string } = {
      message: 'np-badge-message',
      newsletter: 'np-badge-newsletter',
      system: 'np-badge-system',
      security: 'np-badge-security',
      backup: 'np-badge-backup',
    };
    return map[type] || 'np-badge-message';
  };

  const getTypeLabel = (type: string) => {
    const map: { [key: string]: string } = {
      message: 'Message',
      newsletter: 'Newsletter',
      system: 'Système',
      security: 'Sécurité',
      backup: 'Sauvegarde',
    };
    return map[type] || type;
  };

  return (
    <>
      <div className="np-root">
        <div className="np-inner">
          {/* TOP BAR */}
          <div className="np-topbar">
            <div className="np-breadcrumb">
              <span>Admin</span>
              <span className="np-breadcrumb-sep">›</span>
              <span className="np-breadcrumb-cur">Notifications</span>
            </div>
            <h1 className="np-h1">Notifications</h1>
          </div>

          {/* STATS */}
          <div className="np-stats">
            {[
              { val: notifications.length, label: 'Total', color: BRAND.primary },
              { val: unread, label: 'Non lues', color: '#f59e0b' },
              { val: notifications.filter(n => n.read).length, label: 'Lues', color: '#10b981' },
              { val: notifications.filter(n => n.type === 'system' || n.type === 'security').length, label: 'Système', color: BRAND.light },
            ].map(s => (
              <div key={s.label} className="np-stat">
                <div className="np-stat-val" style={{ color: s.color }}>{s.val}</div>
                <div className="np-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* TOOLBAR */}
          <div className="np-toolbar">
            <div className="np-search-wrap">
              <span className="np-search-icon">{Icons.search}</span>
              <input
                className="np-search"
                placeholder="Rechercher une notification…"
                value={search}
                onChange={e => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
            </div>
            <div className="np-filters">
              {FILTERS.map(f => (
                <button
                  key={f}
                  className={`np-filter ${filter === f ? 'active' : ''}`}
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

          {/* LIST */}
          <div className="np-list">
            {selected.size > 0 && (
              <div className="np-bulk">
                <span className="np-bulk-count">{selected.size} sélectionné(s)</span>
                <button className="np-bulk-btn" onClick={bulkRead}>
                  {Icons.check} Marquer lues
                </button>
                <button className="np-bulk-btn np-bulk-del" onClick={() => setToDelete('bulk')}>
                  {Icons.trash} Supprimer
                </button>
                <button className="np-bulk-btn" style={{ marginLeft: 'auto' }} onClick={() => setSelected(new Set())}>
                  {Icons.close} Annuler
                </button>
              </div>
            )}

            {pageItems.length === 0 ? (
              <div className="np-empty">
                <div className="np-empty-icon" style={{ fontSize: '32px', color: '#242675' }}>{Icons.bell}</div>
                <div className="np-empty-title">
                  {search ? `Aucun résultat pour « ${search} »` : 'Aucune notification'}
                </div>
                <p className="np-empty-sub">Les nouvelles notifications apparaîtront ici.</p>
              </div>
            ) : (
              <div>
                {pageItems.map(n => (
                  <div key={n.id} className={`np-item ${!n.read ? 'unread' : ''} ${selected.has(n.id) ? 'selected' : ''}`}>
                    {!n.read && <div className="np-unread-bar" />}
                    <input
                      type="checkbox"
                      className="np-chk"
                      checked={selected.has(n.id)}
                      onChange={() => toggleOne(n.id)}
                      onClick={e => e.stopPropagation()}
                    />
                    <div className="np-content">
                      <div className="np-header">
                        <div>
                          <h3 className="np-title">{n.title}</h3>
                          <p className="np-message">{n.message}</p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                          <span className={`np-badge ${getTypeBadgeClass(n.type)}`}>
                            {getTypeLabel(n.type)}
                          </span>
                          <span className="np-time" title={fmtFull(n.created_at)}>
                            {!n.read && <span className="np-status-dot" />}
                            {timeAgo(n.created_at)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="np-actions">
                      {!n.read && (
                        <button
                          className="np-action"
                          onClick={e => {
                            e.stopPropagation();
                            markRead(n.id);
                          }}
                          title="Marquer comme lue"
                        >
                          {Icons.check}
                        </button>
                      )}
                      <button
                        className="np-action np-action-del"
                        onClick={e => {
                          e.stopPropagation();
                          setToDelete(n.id);
                        }}
                        title="Supprimer"
                      >
                        {Icons.trash}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* PAGINATION */}
          {filtered.length > PER_PAGE && (
            <div className="np-pagination">
              <span>
                {(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, filtered.length)} sur {filtered.length}
              </span>
              <div className="np-pag-btns">
                <button className="np-pag-btn" disabled={page === 1} onClick={() => setPage(p => p - 1)}>
                  ← Préc.
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                  <button
                    key={n}
                    className={`np-pag-btn ${page === n ? 'active' : ''}`}
                    onClick={() => setPage(n)}
                  >
                    {n}
                  </button>
                ))}
                <button className="np-pag-btn" disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>
                  Suiv. →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* DELETE MODAL */}
        {toDelete && (
          <div className="np-overlay" onClick={() => setToDelete(null)}>
            <div className="np-modal" onClick={e => e.stopPropagation()}>
              <div className="np-modal-icon" style={{ fontSize: '32px', color: '#dc2626' }}>{Icons.trash}</div>
              <div className="np-modal-h">
                {toDelete === 'bulk' ? `Supprimer ${selected.size} notifications ?` : 'Supprimer cette notification ?'}
              </div>
              <p className="np-modal-sub">
                {toDelete === 'bulk'
                  ? `Les ${selected.size} notifications sélectionnées seront définitivement supprimées.`
                  : 'Cette notification sera définitivement supprimée.'}
                Cette action est irréversible.
              </p>
              <div className="np-modal-btns">
                <button className="np-modal-cancel" onClick={() => setToDelete(null)}>
                  Annuler
                </button>
                <button className="np-modal-del" onClick={doDelete}>
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TOAST */}
        {toast && <div className="np-toast">{Icons.checkCircle} {toast}</div>}
      </div>
    </>
  );
}
