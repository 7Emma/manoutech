"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { adminService } from "@/lib/services/admin";

import "@/styles/admin/login.css";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError("Veuillez saisir votre mot de passe.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      await adminService.login(password);
      setSuccess(true);
      setTimeout(() => router.push("/admin"), 1500);
    } catch (err) {
      setAttempts((a) => a + 1);
      setError(
        err instanceof Error
          ? err.message || "Mot de passe incorrect. Vérifiez vos identifiants."
          : "Mot de passe incorrect. Vérifiez vos identifiants.",
      );
      setLoading(false);
    }
  };

  return (
    <div className="lg-root">
      {/* ── LEFT: Image ── */}
      <div className="lg-left">
        <Image
          src="https://plus.unsplash.com/premium_photo-1661302846246-e8faef18255d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRtaW58ZW58MHx8MHx8fDA%3D"
          alt="Admin background"
          fill
          className="lg-left-img"
          priority
          unoptimized
        />
        <div className="lg-left-overlay" />
        <div className="lg-left-content">
          <div className="lg-left-badge">
            <span className="lg-left-badge-dot" />
            Espace sécurisé
          </div>
          <h2 className="lg-left-title">
            Tableau de
            <br />
            bord Admin
          </h2>
          <p className="lg-left-sub">
            Gérez votre contenu, vos messages et votre communauté depuis un seul
            endroit.
          </p>
          <div className="lg-left-pills">
            <div className="lg-pill">Contenu</div>
            <div className="lg-pill">Messages</div>
            <div className="lg-pill">Blog</div>
            <div className="lg-pill">Newsletter</div>
          </div>
        </div>
      </div>

      {/* ── RIGHT: Form ── */}
      <div className="lg-right">
        <div className="lg-card">
          {/* Logo */}
          <div className="lg-logo">
            <div className="lg-mark">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="4" fill="white" opacity=".95" />
                <path
                  d="M11 2L11 6M11 16L11 20M2 11L6 11M16 11L20 11"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4.9 4.9L7.8 7.8M14.2 14.2L17.1 17.1M17.1 4.9L14.2 7.8M7.8 14.2L4.9 17.1"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  opacity=".55"
                />
              </svg>
            </div>
            <div className="lg-name">
              Manou<span>Tech</span>
            </div>
            <div className="lg-panel-tag">Admin Panel</div>
          </div>

          {/* Divider */}
          <div className="lg-divider-line">
            <span className="lg-divider-text">Accès sécurisé</span>
          </div>

          {success ? (
            /* ── SUCCESS ── */
            <div className="lg-success">
              <div className="lg-success-icon">{Icons.check}</div>
              <div className="lg-success-title">Connecté !</div>
              <p className="lg-success-sub">
                Redirection vers le tableau de bord…
              </p>
              <div className="lg-progress-bar">
                <div className="lg-progress-fill" />
              </div>
            </div>
          ) : (
            /* ── FORM ── */
            <form onSubmit={handleSubmit}>
              <label className="lg-label" htmlFor="pwd">
                Mot de passe
              </label>
              <div className="lg-input-wrap">
                <span className="lg-input-icon">{Icons.lock}</span>
                <input
                  id="pwd"
                  type={showPwd ? "text" : "password"}
                  className="lg-input"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  disabled={loading}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="lg-toggle-vis"
                  onClick={() => setShowPwd((v) => !v)}
                  tabIndex={-1}
                >
                  {showPwd ? Icons.eyeOff : Icons.eye}
                </button>
              </div>

              {attempts >= 2 && (
                <div className="lg-attempts">
                  {attempts} tentatives échouées
                </div>
              )}

              {error && <div className="lg-error">{error}</div>}

              <button
                type="submit"
                className="lg-btn"
                disabled={loading || !password}
              >
                {loading ? (
                  <>
                    <div className="lg-spinner" /> Vérification…
                  </>
                ) : (
                  <>Se connecter →</>
                )}
              </button>
            </form>
          )}

          {/* Footer */}
          <div className="lg-footer">
            <Link href="/" className="lg-back">
              ← Retour au site
            </Link>
            <span className="lg-secure">
              <span className="lg-secure-dot" />
              SSL · HTTPS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
