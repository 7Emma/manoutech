import CTA from "@/components/CTA";
import { Mdx } from "@/components/Mdx";
import { allProjects } from "contentlayer/generated";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import "@/styles/projectDetail.css";

type Params = { slug: string };

const industryAccents = {
  Fintech:    { color: "#4da6ff", dim: "rgba(77,166,255,.25)", bg: "rgba(77,166,255,.08)" },
  Healthtech: { color: "#4ec9b0", dim: "rgba(78,201,176,.25)", bg: "rgba(78,201,176,.08)" },
  Industrie:  { color: "#a78bfa", dim: "rgba(167,139,250,.25)", bg: "rgba(167,139,250,.08)" },
};
const accent = (ind: string) => industryAccents[ind as keyof typeof industryAccents] || { color: "#4ec9b0", dim: "rgba(78,201,176,.25)", bg: "rgba(78,201,176,.08)" };

export function generateStaticParams(): Params[] {
  return allProjects.map((project) => ({ slug: project._raw.flattenedPath.replace("projects/", "") }));
}

export function generateMetadata({ params }: { params: Params }) {
  const project = allProjects.find((p) => p._raw.flattenedPath === `projects/${params.slug}`);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: { params: Params }) {
  const project = allProjects.find((p) => p._raw.flattenedPath === `projects/${params.slug}`);
  if (!project) return notFound();
  const a = accent(project.industry);

  return (
    <>
      <div className="pg-root">
        <div className="pg-bg-grid"/><div className="pg-orb pg-orb-a"/><div className="pg-orb pg-orb-b"/>
        <div className="pg-inner">

          <Link href="/projects" className="pp-back">← Tous les projets</Link>

          <div
            className="pp-hero"
            style={{
              "--ind-color": a.color,
              "--ind-dim": a.dim,
              "--ind-bg": a.bg,
            } as CSSProperties}
          >
            <div className="pp-industry">
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: a.color, display: "inline-block" }} />
              {project.industry}
            </div>

            <h1 className="pp-h1">{project.title}</h1>
            <p className="pp-summary">{project.summary}</p>

            <div className="pp-impact">
              <span className="pp-impact-icon">◎</span>
              <div>
                <div className="pp-impact-val">{project.impact}</div>
                <div className="pp-impact-lbl">Impact mesuré en production</div>
              </div>
            </div>

            <div className="pp-stack">
              {project.stack.map((t) => (
                <span key={t} className="pp-tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="pp-content">
            <Mdx code={project.body.code} />
          </div>

          <div className="pp-nav">
            <Link href="/projects" className="pp-nav-btn">← Retour aux projets</Link>
            <Link href="/contact" className="pp-nav-btn">Projet similaire ? Parlons-en →</Link>
          </div>

          <CTA />
        </div>
      </div>
    </>
  );
}
