import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/components/Mdx";
import BlogPostClient from "@/components/BlogPostClient";
import "@/styles/blog-post.css";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath.replace("blog/", "") }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = allPosts.find((p) => p._raw.flattenedPath === `blog/${slug}`);
  if (!post) return {};
  const url = `https://manoutech.com/blog/${slug}`;
  const ogImage = post.ogImage || "/logo.png";

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = allPosts.find((p) => p._raw.flattenedPath === `blog/${slug}`);
  
  if (!post) return notFound();

  const code = (post as any).body?.code || (post as any)._raw?.sourceCodeMdx;
  if (!code) return notFound();

  const url = `https://manoutech.com/blog/${slug}`;
  const ogImage = (post as any).ogImage || "/logo.png";

  const categoryAccents: Record<string, string> = {
    "Méthode": "#4da6ff",
    "Data / AI": "#a78bfa",
    "Design": "#f472b6",
    "Perf": "#4ec9b0",
    "Tech": "#fb923c",
  };

  const accent = categoryAccents[(post as any).category] || "#4ec9b0";
  const catVars = {
    "--cat-c": accent,
    "--cat-dim": accent + "33",
    "--cat-bg": accent + "11",
  } as React.CSSProperties;

  const formattedDate = new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(post.date));

  return (
    <div className="bp-root" style={catVars}>
      <div className="bp-inner">
        <a href="/blog" className="bp-back">← Retour au blog</a>

        <div className="bp-layout">
          {/* ── ARTICLE ── */}
          <article className="bp-article">
            {/* Meta */}
            <div className="bp-cat-row">
              <span className="bp-cat">{(post as any).category || "Article"}</span>
              <span className="bp-date">{formattedDate}</span>
              <span className="bp-read">5 min</span>
            </div>

            <h1 className="bp-h1">{post.title}</h1>
            <p className="bp-excerpt">{post.excerpt}</p>

            {/* Tags */}
            <div className="bp-tags">
              {(post as any).tags?.map((t: string) => (
                <span key={t} className="bp-tag">#{t}</span>
              ))}
            </div>

          {/* MDX body */}
          <Mdx code={code} />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: post.title,
                description: post.excerpt,
                datePublished: post.date,
                author: post.author ? { "@type": "Person", name: post.author } : undefined,
                mainEntityOfPage: url,
                image: ogImage ? [ogImage] : undefined,
              }),
            }}
          />

          {/* CTA */}
          <div className="bp-cta">
            <div className="bp-cta-left">
                <div className="bp-cta-h">Un projet en tête ?</div>
                <p className="bp-cta-sub">On répond sous 24h avec une estimation concrète.</p>
              </div>
              <a href="/contact" className="bp-btn">Démarrer un projet →</a>
            </div>
          </article>

          {/* ── SIDEBAR ── */}
          <BlogPostClient />
        </div>
      </div>
    </div>
  );
}
