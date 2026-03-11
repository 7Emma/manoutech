"use client";

import { stacks } from "@/mockdata/stack";
import { stackCss } from "@/styles/stack";

export default function StackPage() {
  return (
    <>
      <style>{stackCss}</style>
      <div className="stk-root">
        <div className="stk-grid" />
        <div className="stk-orb stk-orb-a" />
        <div className="stk-orb stk-orb-b" />

        <div className="stk-inner">
          <div className="stk-eyebrow">
            <span className="stk-dot" />
            Stack technique
          </div>
          <h1 className="stk-h1">
            La stack qui <em>livre</em> en production.
          </h1>
          <p className="stk-sub">
            Des choix modernes, maîtrisés par l’équipe. Optimisés pour la
            vitesse, la fiabilité et la maintenabilité.
          </p>

          <div className="stk-grid-list">
            {stacks.map((s) => (
              <div key={s.title} className="stk-card">
                <div className="stk-label">{s.label}</div>
                <div className="stk-title">{s.title}</div>
                <div className="stk-tags">
                  {s.tags.map((t) => (
                    <span key={t} className="stk-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="stk-note">
            Envie de détailler la stack pour votre projet ? Contactez-nous pour
            un audit express.
          </p>
        </div>
      </div>
    </>
  );
}
