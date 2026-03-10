"use client";

import { useState, type FormEvent } from "react";
import { Lock, CheckCircle, Mail, AlertCircle, Globe, Zap, Target } from "lucide-react";
import { budgets, services, perks, faqs } from "@/mockdata/contact";
import "@/styles/contact.css";

function getPerkIcon(iconName: string) {
  const icons: Record<string, React.ReactNode> = {
    globe: <Globe size={20} />,
    zap: <Zap size={20} />,
    target: <Target size={20} />,
  };
  return icons[iconName] || <Globe size={20} />;
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [budget, setBudget] = useState<string>("30-80k");
  const [selected, setSelected] = useState<string[]>([]);

  const toggleService = (s: string) => setSelected((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = { ...Object.fromEntries(fd.entries()), budget, services: selected };
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent")
    return (
      <div className="ct-sent">
        <div className="ct-sent-icon">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <circle cx="15" cy="15" r="14" stroke="#4ec9b0" strokeWidth="1.5" />
            <path d="M9 15.5l4.5 4.5 8.5-9" stroke="#4ec9b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="ct-sent-h">Message reçu !</h3>
        <p className="ct-sent-p">On revient vers vous sous 24h avec un plan d'action et une première estimation.</p>
        <a href="/projects" className="ct-sent-btn">
          Voir nos projets →
        </a>
      </div>
    );

  return (
    <form onSubmit={handleSubmit} className="ct-form">
      <div>
        <div className="ct-form-title">Votre projet</div>
        <p className="ct-form-sub">Partagez vos objectifs on revient avec un plan concret.</p>
      </div>

      <div className="ct-row-2">
        {[
          { name: "name", label: "Nom complet", type: "text", ph: "Alex Martin" },
          { name: "email", label: "Email", type: "email", ph: "vous@startup.com" },
        ].map((f) => (
          <div key={f.name} className="ct-field">
            <label className="ct-label" htmlFor={f.name}>
              {f.label}
            </label>
            <input id={f.name} name={f.name} type={f.type} required placeholder={f.ph} className="ct-input" />
          </div>
        ))}
      </div>

      <div className="ct-row-2">
        {[
          { name: "company", label: "Entreprise", ph: "Acme Inc." },
          { name: "role", label: "Votre rôle", ph: "CPO, CTO, Founder…" },
        ].map((f) => (
          <div key={f.name} className="ct-field">
            <label className="ct-label" htmlFor={f.name}>
              {f.label} <span className="ct-opt">optionnel</span>
            </label>
            <input id={f.name} name={f.name} type="text" placeholder={f.ph} className="ct-input" />
          </div>
        ))}
      </div>

      <div className="ct-field">
        <div className="ct-label">
          Type de projet <span className="ct-opt">plusieurs choix</span>
        </div>
        <div className="ct-chips">
          {services.map((s) => (
            <button
              key={s}
              type="button"
              className={`ct-chip ${selected.includes(s) ? "on" : ""}`}
              onClick={() => toggleService(s)}
              >
              {selected.includes(s) && <CheckCircle size={14} className="ct-chip-icon" />}
              {s}
              </button>
          ))}
        </div>
      </div>

      <div className="ct-field">
        <div className="ct-label">Budget estimé</div>
        <div className="ct-budgets">
          {budgets.map((b) => (
            <button
              key={b.value}
              type="button"
              className={`ct-budget ${budget === b.value ? "on" : ""}`}
              onClick={() => setBudget(b.value)}
              >
              <span className="ct-budget-v">{b.label}</span>
              <span className="ct-budget-d">{b.desc}</span>
              {budget === b.value && <CheckCircle size={16} className="ct-budget-icon" />}
              </button>
          ))}
        </div>
      </div>

      <div className="ct-field">
        <label className="ct-label" htmlFor="message">
          Décrivez votre projet
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Produit web, mobile, data… objectifs, contraintes, échéances."
          className="ct-input ct-textarea"
        />
      </div>

      <button type="submit" disabled={status === "loading"} className="ct-submit">
        {status === "loading" ? <span className="ct-spinner" /> : <>Envoyer le message <Mail size={16} className="ct-submit-icon" /></>}
      </button>

      {status === "error" && (
        <div className="ct-error">
          <AlertCircle size={14} className="ct-error-icon" />
          Erreur — réessayez ou écrivez à{" "}
          <a href="mailto:hello@manoutech.com" className="ct-error-link">
            hello@manoutech.com
          </a>
        </div>
      )}
      <p className="ct-privacy"><Lock size={14} className="ct-privacy-icon" />Vos données ne sont jamais partagées. Réponse garantie sous 24h.</p>
    </form>
  );
}

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <div className="ct-root">
        <div className="ct-bg-grid" />
        <div className="ct-orb ct-orb-a" />
        <div className="ct-orb ct-orb-b" />

        <div className="ct-inner">
          <div className="ct-hero">
            <div className="ct-eyebrow">
              <span className="ct-dot" />
              Réponse sous 24h
            </div>
            <h1 className="ct-h1">
              Discutons de
              <br />
              <em>votre projet.</em>
            </h1>
            <p className="ct-sub">
              Partagez vos objectifs, contraintes et échéances. On revient avec un plan d'action et une première estimation sans engagement.
            </p>
          </div>

          <div className="ct-grid">
            <div className="ct-form-wrap">
              <ContactForm />
            </div>

            <div className="ct-side">
              <div className="ct-info-card">
                <div className="ct-info-title">Pourquoi travailler avec nous</div>
                <div className="ct-perks">
                   {perks.map((p) => (
                     <div key={p.title} className="ct-perk">
                       <div className="ct-perk-icon">{getPerkIcon(p.icon)}</div>
                       <div>
                         <div className="ct-perk-name">{p.title}</div>
                         <div className="ct-perk-desc">{p.desc}</div>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>

              <div className="ct-direct">
                <div className="ct-direct-title">Contact direct</div>
                <div className="ct-direct-links">
                  {[
                    { href: "mailto:hello@manoutech.com", label: "hello@manoutech.com", sub: "Email — réponse <24h" },
                    { href: "https://linkedin.com", label: "LinkedIn", sub: "Studio Manoutech" },
                    { href: "https://cal.com", label: "Réserver un call", sub: "30 min · sans engagement" },
                  ].map((l) => (
                    <a key={l.label} href={l.href} className="ct-direct-link">
                      <div className="ct-dl-icon">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="6" stroke="#4ec9b0" strokeWidth="1.2" />
                          <path d="M4.5 7h5M7 4.5l2.5 2.5-2.5 2.5" stroke="#4ec9b0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <div className="ct-dl-label">{l.label}</div>
                        <div className="ct-dl-sub">{l.sub}</div>
                      </div>
                      <span className="ct-dl-arrow">→</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="ct-response-badge">
                <span className="ct-rb-dot" />
                <span className="ct-rb-text">
                  Temps de réponse moyen : <strong>moins de 4h</strong> en semaine
                </span>
              </div>
            </div>
          </div>

          <div className="ct-perks-row">
            {perks.map((p) => (
              <div key={p.title} className="ct-perk-card">
                <div className="ct-pk-icon">{getPerkIcon(p.icon)}</div>
                <div className="ct-pk-title">{p.title}</div>
                <p className="ct-pk-desc">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="ct-faq">
            <div className="ct-faq-divider">Questions fréquentes</div>
            <div className="ct-faq-list">
              {faqs.map((f, i) => (
                <div key={i} className={`ct-faq-item ${openFaq === i ? "open" : ""}`}>
                  <button className="ct-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {f.q}
                    <span className="ct-faq-chevron">▾</span>
                  </button>
                  <div className={`ct-faq-a ${openFaq === i ? "open" : ""}`}>
                    <div className="ct-faq-a-inner">{f.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
