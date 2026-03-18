'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Icons } from '@/lib/icons';

async function fetchArticle(slug: string) {
  try {
    const res = await fetch(`/api/blog?slug=${slug}`);
    if (!res.ok) throw new Error('Not found');
    const { data } = await res.json();
    return data[0] || null;
  } catch {
    return null;
  }
}

const css = `
  .ab-form-root { font-family: 'Space Grotesk', sans-serif; background: #ffffff; min-height: 100vh; color: #0f172a; padding: 40px 32px 80px; }
  .ab-form-inner { max-width: 900px; margin: 0 auto; }
  .ab-breadcrumb { font-size: 11px; color: #7A7F84; letter-spacing: .08em; margin-bottom: 12px; display: flex; align-items: center; gap: 6px; }
  .ab-breadcrumb-sep { opacity: .4; }
  .ab-breadcrumb-cur { color: #242675; font-weight: 600; }
  .ab-h1 { font-size: 32px; font-weight: 700; letter-spacing: -.03em; color: #242675; margin: 0 0 28px; }
  
  .ab-form-card { background: #ffffff; border: 1px solid #cbd5e1; border-radius: 16px; padding: 28px; margin-bottom: 20px; }
  .ab-form-group { margin-bottom: 20px; }
  .ab-form-group:last-child { margin-bottom: 0; }
  .ab-label { display: block; font-size: 13px; font-weight: 600; color: #0f172a; margin-bottom: 8px; }
  .ab-input, .ab-textarea, .ab-select {
    width: 100%; padding: 10px 14px; font-family: 'Space Grotesk', sans-serif; font-size: 13px;
    color: #0f172a; background: #f8fbff; border: 1px solid #cbd5e1; border-radius: 8px;
    outline: none; transition: border-color .2s;
  }
  .ab-input:focus, .ab-textarea:focus, .ab-select:focus { border-color: #242675; background: #ffffff; }
  .ab-textarea { resize: vertical; min-height: 200px; }
  .ab-input::placeholder, .ab-textarea::placeholder { color: #7A7F84; }
  
  .ab-form-hint { font-size: 11px; color: #7A7F84; margin-top: 4px; }
  
  .ab-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  @media (max-width: 600px) { .ab-form-row { grid-template-columns: 1fr; } }
  
  .ab-form-actions { display: flex; gap: 12px; margin-top: 28px; }
  .ab-btn { padding: 12px 20px; border-radius: 8px; font-family: 'Space Grotesk', sans-serif; font-size: 13px; font-weight: 600;
    cursor: pointer; transition: all .18s; border: none; }
  .ab-btn-primary { background: #242675; color: white; }
  .ab-btn-primary:hover { background: #1a1d52; }
  .ab-btn-secondary { background: #f8f9fa; color: #3E4347; border: 1px solid #cbd5e1; }
  .ab-btn-secondary:hover { background: #ffffff; border-color: #242675; color: #242675; }
  .ab-btn-danger { background: #fee2e2; color: #dc2626; border: 1px solid #fecaca; }
  .ab-btn-danger:hover { background: #fecaca; }
  
  .ab-back-link { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 500; color: #242675; text-decoration: none; margin-bottom: 20px; transition: gap .18s; }
  .ab-back-link:hover { gap: 10px; }
`;

export default function EditBlogPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [article, setArticle] = useState<any>(null);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('draft');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      const art = await fetchArticle(params.slug);
      if (art) {
        setArticle(art);
        setTitle(art.title);
        setSlug(art.slug);
        setContent(art.content);
        setStatus(art.status);
      }
      setLoading(false);
    })();
  }, [params.slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSaving(true);

    try {
      const res = await fetch(`/api/blog/${article.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, slug, content, status }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Erreur');
      }

      router.push('/admin/blog');
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Supprimer cet article ?')) return;
    try {
      const res = await fetch(`/api/blog/${article.id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Erreur');
      router.push('/admin/blog');
    } catch {
      setError('Erreur lors de la suppression');
    }
  };

  if (loading) return <div className="ab-form-root"><div className="ab-form-inner"><p>Chargement...</p></div></div>;
  if (!article) return <div className="ab-form-root"><div className="ab-form-inner"><p>Article non trouvé</p></div></div>;

  return (
    <>
      <style>{css}</style>
      <div className="ab-form-root">
        <div className="ab-form-inner">
          <a href="/admin/blog" className="ab-back-link">← Retour au blog</a>

          <div className="ab-breadcrumb">
            <span>Admin</span>
            <span className="ab-breadcrumb-sep">›</span>
            <span>Blog</span>
            <span className="ab-breadcrumb-sep">›</span>
            <span className="ab-breadcrumb-cur">{title}</span>
          </div>

          <h1 className="ab-h1">Éditer <em>{title}</em></h1>

          <form onSubmit={handleSubmit}>
            <div className="ab-form-card">
              <div className="ab-form-group">
                <label className="ab-label">Titre</label>
                <input
                  type="text"
                  className="ab-input"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="ab-form-group">
                <label className="ab-label">URL (slug)</label>
                <input
                  type="text"
                  className="ab-input"
                  value={slug}
                  onChange={e => setSlug(e.target.value)}
                  required
                />
                <p className="ab-form-hint">Sera utilisé dans l'URL: /blog/{slug}</p>
              </div>

              <div className="ab-form-group">
                <label className="ab-label">Contenu</label>
                <textarea
                  className="ab-textarea"
                  value={content}
                  onChange={e => setContent(e.target.value)}
                  required
                />
              </div>

              <div className="ab-form-group">
                <label className="ab-label">Statut</label>
                <select className="ab-select" value={status} onChange={e => setStatus(e.target.value)}>
                  <option value="draft">Brouillon</option>
                  <option value="published">Publié</option>
                </select>
              </div>

              {error && <p style={{ color: '#dc2626', fontSize: '13px', marginBottom: '16px' }}>{Icons.alertCircle} {error}</p>}

              <div className="ab-form-actions">
                <button type="submit" className="ab-btn ab-btn-primary" disabled={saving}>
                  {saving ? 'Sauvegarde…' : `${Icons.check} Enregistrer`}
                </button>
                <button type="button" className="ab-btn ab-btn-secondary" onClick={() => router.back()}>
                  Annuler
                </button>
                <button type="button" className="ab-btn ab-btn-danger" onClick={handleDelete}>
                  {Icons.trash} Supprimer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
