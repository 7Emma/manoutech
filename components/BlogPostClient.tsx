"use client";

import { useState } from "react";

export default function BlogPostClient() {
  const [readPct, setReadPct] = useState(0);

  return (
    <aside className="bp-sidebar">
      {/* Progress */}
      <div className="bp-progress-card">
        <div className="bp-progress-label">
          <span>Progression</span>
          <span>{readPct}%</span>
        </div>
        <div className="bp-progress-track">
          <div className="bp-progress-fill" style={{ width: `${readPct}%` }} />
        </div>
      </div>

      {/* Share */}
      <div className="bp-share">
        <div className="bp-share-title">Partager</div>
        <div className="bp-share-btns">
          {[
            { label: "LinkedIn", icon: "in" },
            { label: "Twitter / X", icon: "𝕏" },
            { label: "Copier le lien", icon: "🔗" },
          ].map((s) => (
            <a key={s.label} href="#" className="bp-share-btn">
              <span style={{ fontSize: 13, opacity: 0.7 }}>{s.icon}</span>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
