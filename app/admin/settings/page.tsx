'use client';

import { useState } from 'react';
import { Icons } from '@/lib/icons';
import '@/styles/admin/settings.css';

export default function SettingsPage() {
  const [siteName, setSiteName] = useState('Manoutech');
  const [siteEmail, setSiteEmail] = useState('contact@manoutech.com');
  const [adminEmail, setAdminEmail] = useState('admin@manoutech.com');
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [siteDescription, setSiteDescription] = useState('Agence web, mobile et data');
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2800);
    // API call would go here
  };

  return (
    <>
      <div className="st-root">
        <div className="st-inner">
          <div className="st-breadcrumb">
            <span>Admin</span>
            <span className="st-breadcrumb-sep">›</span>
            <span className="st-breadcrumb-cur">Paramètres</span>
          </div>

          <h1 className="st-h1">Paramètres du site</h1>

          {/* General Settings */}
          <div className="st-section">
            <div className="st-section-title">Général</div>

            <div className="st-group">
              <label className="st-label">Nom du site</label>
              <input
                type="text"
                className="st-input"
                value={siteName}
                onChange={e => setSiteName(e.target.value)}
              />
            </div>

            <div className="st-group">
              <label className="st-label">Description du site</label>
              <textarea
                className="st-textarea"
                value={siteDescription}
                onChange={e => setSiteDescription(e.target.value)}
                rows={3}
              />
              <p className="st-hint">Utilisée pour le SEO et les aperçus de partage</p>
            </div>
          </div>

          {/* Email Settings */}
          <div className="st-section">
            <div className="st-section-title">Email & Notifications</div>

            <div className="st-group">
              <label className="st-label">Email du site</label>
              <input
                type="email"
                className="st-input"
                value={siteEmail}
                onChange={e => setSiteEmail(e.target.value)}
              />
              <p className="st-hint">Utilisé pour envoyer les confirmations</p>
            </div>

            <div className="st-group">
              <label className="st-label">Email de l'admin</label>
              <input
                type="email"
                className="st-input"
                value={adminEmail}
                onChange={e => setAdminEmail(e.target.value)}
              />
              <p className="st-hint">Où recevoir les notifications de nouveaux messages</p>
            </div>
          </div>

          {/* Advanced Settings */}
          <div className="st-section">
            <div className="st-section-title">Avancé</div>

            <div className="st-group">
              <label className="st-label">Mode maintenance</label>
              <div className="st-toggle">
                <button
                  className={`st-switch ${maintenanceMode ? 'active' : ''}`}
                  onClick={() => setMaintenanceMode(!maintenanceMode)}
                />
                <span>{maintenanceMode ? 'Activé' : 'Désactivé'}</span>
              </div>
              <p className="st-hint">Afficher une page de maintenance pour les visiteurs</p>
            </div>

            <div className="st-info-box">
              <strong>Informations système:</strong>
              <div style={{ marginTop: '8px', fontSize: '11px' }}>
                <div>Version: 1.0.0</div>
                <div>Environnement: Production</div>
                <div>Serveur: Vercel</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="st-btn st-btn-primary" onClick={handleSave}>
              {Icons.check} Enregistrer les paramètres
            </button>
            <button className="st-btn st-btn-secondary">
              Réinitialiser
            </button>
          </div>

          {saved && (
            <div style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              background: '#10b981',
              color: 'white',
              padding: '12px 16px',
              borderRadius: '8px',
              fontSize: '13px',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              {Icons.checkCircle} Paramètres enregistrés
            </div>
          )}
        </div>
      </div>
    </>
  );
}
