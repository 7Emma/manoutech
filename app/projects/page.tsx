import CTA from "@/components/CTA";
import { allProjects } from "contentlayer/generated";
import Link from "next/link";
import type { CSSProperties } from "react";
import "@/styles/projectsList.css";

const industryAccents = {
  Fintech:    { color: "#242675", dim: "rgba(77,166,255,.25)", bg: "rgba(77,166,255,.08)" },
  Healthtech: { color: "#242675", dim: "rgba(78,201,176,.25)", bg: "rgba(78,201,176,.08)" },
  Industrie:  { color: "#a78bfa", dim: "rgba(167,139,250,.25)", bg: "rgba(167,139,250,.08)" },
};

const accent = (ind: string) => industryAccents[ind as keyof typeof industryAccents] || { color: "#242675", dim: "rgba(78,201,176,.25)", bg: "rgba(78,201,176,.08)" };

export default function ProjectsPage() {
  const projects = [...allProjects].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <div className="pg-root">
        <div className="pg-bg-grid"/>
        <div className="pg-orb pg-orb-a"/><div className="pg-orb pg-orb-b"/>

        <div className="pg-inner">

          {/* Hero */}
          <div className="plist-hero">
            <div className="pg-eyebrow"><span className="pg-dot"/>Réalisations</div>
            <h1 className="plist-h1">Des produits <em>qui livrent.</em></h1>
            <p className="plist-sub">
              MVP véloces, plateformes scalables, équipes clientes autonomisées — chaque projet est une collaboration mesurable.
            </p>

            <div className="plist-stats">
              {[
                { v: "80+", u: "projets",   l: "livrés en production" },
                { v: "<6",  u: "semaines",  l: "time-to-market moyen" },
                { v: "NPS", u: "65",        l: "clients récurrents"   },
              ].map((s) => (
                <div key={s.l} className="plist-stat">
                  <div className="plist-stat-v">{s.v}<span>{s.u}</span></div>
                  <div className="plist-stat-l">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="pg-divider">Cas clients sélectionnés</div>
          <div className="plist-grid">
            {projects.map((project) => {
              const slug = project._raw.flattenedPath.replace("projects/", "");
              const a = accent(project.industry);
              return (
                <Link
                  key={project._id}
                  href={`/projects/${slug}`}
                  className="plc"
                  style={{ "--ac": a.color, "--ad": a.dim, "--ab": a.bg } as CSSProperties}
                >
                  <div className="plc-top">
                    <span className="plc-ind">{project.industry}</span>
                    <span className="plc-date">{project.date.slice(0, 7)}</span>
                  </div>
                  <h3 className="plc-title">{project.title}</h3>
                  <p className="plc-summary">{project.summary}</p>
                  <div className="plc-impact">{project.impact}</div>
                  <div className="plc-stack">
                    {project.stack.map((t) => (
                      <span key={t} className="plc-tag">{t}</span>
                    ))}
                  </div>
                  <span className="plc-link">Voir le cas client →</span>
                </Link>
              );
            })}
          </div>

          <CTA />
        </div>
      </div>
    </>
  );
}
