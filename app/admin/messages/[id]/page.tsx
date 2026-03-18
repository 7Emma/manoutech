'use client';

import { useState, useEffect } from 'react';
import { Icons } from '@/lib/icons';
import { ContactMessage } from '@/types/database';

async function fetchMessage(id: string) {
  try {
    const res = await fetch(`/api/messages/${id}`);
    if (!res.ok) throw new Error('Failed to fetch');
    const { data } = await res.json();
    return data;
  } catch (err) {
    console.error('Error fetching message:', err);
    return null;
  }
}

const BRAND = {
  primary: '#242675',
  accent: '#3E4347',
  light: '#7A7F84',
};

function fmt(d: string) {
  return new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date(d));
}

const css = `
  .md-root { font-family: 'Space Grotesk', sans-serif; background: #ffffff; min-height: 100vh; color: #0f172a; padding: 40px 32px 80px; }
  .md-inner { max-width: 900px; margin: 0 auto; }
  .md-breadcrumb { font-size: 11px; color: #7A7F84; letter-spacing: .08em; margin-bottom: 12px; display: flex; align-items: center; gap: 6px; }
  .md-breadcrumb-sep { opacity: .4; }
  .md-breadcrumb-cur { color: #242675; font-weight: 600; }
  .md-h1 { font-size: 32px; font-weight: 700; letter-spacing: -.03em; color: #242675; margin: 0 0 28px; }
  
  .md-layout { display: grid; grid-template-columns: 1fr 280px; gap: 20px; align-items: start; }
  @media (max-width: 860px) { .md-layout { grid-template-columns: 1fr; } }
  
  .md-card { background: #ffffff; border: 1px solid #cbd5e1; border-radius: 20px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); }
  
  .md-sender { display: flex; align-items: center; gap: 14px; padding: 22px 24px; border-bottom: 1px solid #f0f1f3; background: #f8fbff; }
  .md-sender-av { width: 46px; height: 46px; border-radius: 14px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Space Grotesk', sans-serif; font-size: 17px; font-weight: 700; color: white; background: linear-gradient(135deg, #242675, #3E4347); box-shadow: 0 0 0 1px rgba(36, 38, 117, 0.2); }
  .md-sender-name { font-family: 'Space Grotesk', sans-serif; font-size: 16px; font-weight: 700; color: #0f172a; letter-spacing: -.02em; }
  .md-sender-email { font-size: 13px; font-weight: 500; color: #242675; text-decoration: none; transition: color .18s; }
  .md-sender-email:hover { color: #3E4347; }
  .md-sender-company { font-family: 'Space Grotesk', sans-serif; font-size: 10px; color: #7A7F84; letter-spacing: .06em; margin-top: 2px; }
  .md-sender-right { margin-left: auto; text-align: right; }
  .md-sender-date { font-size: 12px; font-weight: 500; color: #3E4347; }
  .md-sender-date-full { font-size: 10.5px; color: #7A7F84; margin-top: 2px; }
  
  .md-msg-body { padding: 28px 26px; }
  .md-msg-label { font-size: 10px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: #7A7F84; margin-bottom: 14px; display: flex; align-items: center; gap: 10px; }
  .md-msg-label::after { content: ''; flex: 1; height: 1px; background: linear-gradient(90deg, #cbd5e1, transparent); }
  .md-msg-text { background: #f8fbff; border: 1px solid #e5e7eb; border-radius: 14px; padding: 22px; font-size: 14.5px; font-weight: 400; line-height: 1.85; color: #0f172a; white-space: pre-wrap; font-family: 'Space Grotesk', sans-serif; }
  
  .md-actions { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
  .md-action-btn { background: #f8f9fa; border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px 16px; font-family: 'Space Grotesk', sans-serif; font-size: 13px; font-weight: 500; color: #3E4347; cursor: pointer; transition: all .18s; }
  .md-action-btn:hover { background: #ffffff; border-color: #242675; color: #242675; }
  .md-action-btn.danger:hover { background: #fee2e2; border-color: #dc2626; color: #dc2626; }
  
  .md-sidebar-card { background: #ffffff; border: 1px solid #cbd5e1; border-radius: 14px; padding: 20px; margin-bottom: 16px; }
  .md-sidebar-label { font-size: 10px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: #7A7F84; margin-bottom: 12px; }
  .md-sidebar-info { font-size: 13px; color: #0f172a; word-break: break-all; }
  .md-sidebar-badge { display: inline-block; background: rgba(36,38,117,.1); color: #242675; padding: 4px 10px; border-radius: 4px; font-size: 11px; font-weight: 600; margin-top: 8px; }
  
  .md-back-btn { display: inline-flex; align-items: center; gap: 6px; font-family: 'Space Grotesk', sans-serif; font-size: 13px; font-weight: 500; color: #242675; text-decoration: none; margin-bottom: 20px; transition: gap .18s; }
  .md-back-btn:hover { gap: 10px; }
`;

export default function MessageDetailPage({ params }: { params: { id: string } }) {
  const [message, setMessage] = useState<ContactMessage | null>(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState('');

  useEffect(() => {
    (async () => {
      const msg = await fetchMessage(params.id);
      setMessage(msg);
      setLoading(false);
    })();
  }, [params.id]);

  const handleMarkRead = async () => {
    try {
      const res = await fetch(`/api/messages/${params.id}/read`, { method: 'PATCH' });
      if (!res.ok) throw new Error('Failed');
      setMessage(m => m ? { ...m, read: true } : null);
      setToast('Message marqué comme lu');
      setTimeout(() => setToast(''), 2800);
    } catch {
      setToast('Erreur');
    }
  };

  const handleDelete = async () => {
    if (!confirm('Supprimer ce message ?')) return;
    try {
      const res = await fetch(`/api/messages/${params.id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed');
      window.location.href = '/admin/messages';
    } catch {
      setToast('Erreur');
    }
  };

  if (loading) return <div className="md-root"><div className="md-inner"><p>Chargement...</p></div></div>;
  if (!message) return <div className="md-root"><div className="md-inner"><p>Message non trouvé</p></div></div>;

  return (
    <>
      <style>{css}</style>
      <div className="md-root">
        <div className="md-inner">
          <a href="/admin/messages" className="md-back-btn">← Retour aux messages</a>

          <div className="md-breadcrumb">
            <span>Admin</span>
            <span className="md-breadcrumb-sep">›</span>
            <span>Messages</span>
            <span className="md-breadcrumb-sep">›</span>
            <span className="md-breadcrumb-cur">{message.name}</span>
          </div>

          <h1 className="md-h1">Message de <em>{message.name}</em></h1>

          <div className="md-layout">
            <div className="md-card">
              <div className="md-sender">
                <div className="md-sender-av">{message.name[0]}</div>
                <div>
                  <div className="md-sender-name">{message.name}</div>
                  <a href={`mailto:${message.email}`} className="md-sender-email">{message.email}</a>
                </div>
                <div className="md-sender-right">
                  <div className="md-sender-date">{fmt(message.created_at).split(' ')[0]}</div>
                  <div className="md-sender-date-full">{fmt(message.created_at)}</div>
                </div>
              </div>

              <div className="md-msg-body">
                <div className="md-msg-label">Message</div>
                <div className="md-msg-text">{message.message}</div>

                <div className="md-actions">
                  {!message.read && (
                    <button className="md-action-btn" onClick={handleMarkRead}>{Icons.check} Marquer comme lu</button>
                  )}
                  <button className="md-action-btn danger" onClick={handleDelete}>{Icons.trash} Supprimer</button>
                </div>
              </div>
            </div>

            <div>
              <div className="md-sidebar-card">
                <div className="md-sidebar-label">Statut</div>
                <div className="md-sidebar-badge" style={{ background: message.read ? '#f0f0f0' : 'rgba(36,38,117,.1)', color: message.read ? '#7A7F84' : '#242675' }}>
                  {message.read ? 'Lu' : 'Nouveau'}
                </div>
              </div>

              <div className="md-sidebar-card">
                <div className="md-sidebar-label">ID du message</div>
                <div className="md-sidebar-info" style={{ fontSize: '11px', fontFamily: 'monospace', wordBreak: 'break-all' }}>{message.id}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {toast && <div style={{ position: 'fixed', bottom: '20px', right: '20px', background: '#10b981', color: 'white', padding: '12px 16px', borderRadius: '8px', fontSize: '13px', zIndex: 9999, display: 'flex', alignItems: 'center', gap: '8px' }}>{Icons.checkCircle} {toast}</div>}
    </>
  );
}
