"use client";

import { roles } from "@/mockdata/careers";
import { careersCss } from "@/styles/careers";

export default function CareersPage() {
  return (
    <>
      <style>{careersCss}</style>
      <div className="cr-root">
        <div className="cr-grid" />
        <div className="cr-orb cr-orb-a" />
        <div className="cr-orb cr-orb-b" />

        <div className="cr-inner">
          <div className="cr-eyebrow"><span className="cr-dot" />Carrières</div>
          <h1 className="cr-h1">Rejoins une squad <em>senior</em> qui ship.</h1>
          <p className="cr-sub">
            Remote-first, cycles courts, décisions rapides. Si tu aimes livrer, mesurer et améliorer en continu, on veut te parler.
          </p>

          <div className="cr-grid-cards">
            {roles.map((r) => (
              <div key={r.title} className="cr-card">
                <div className="cr-role">{r.title}</div>
                <div className="cr-loc">{r.loc}</div>
                <div className="cr-desc">{r.desc}</div>
                <div className="cr-tags">
                  {r.tags.map((t) => (
                    <span key={t} className="cr-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <a className="cr-cta" href="/contact">
                  Postuler / discuter →
                </a>
              </div>
            ))}
          </div>

          <p className="cr-note">
            Pas de rôle qui correspond ? Écris-nous quand même à <a href="mailto:hello@manoutech.com" style={{color:"#4ec9b0", textDecoration:"none"}}>hello@manoutech.com</a>.
          </p>
        </div>
      </div>
    </>
  );
}
