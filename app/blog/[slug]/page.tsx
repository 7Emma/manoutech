import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/components/Mdx";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath.replace("blog/", "") }));
}

export function generateMetadata({ params }: { params: Params }) {
  const post = allPosts.find((p) => p._raw.flattenedPath === `blog/${params.slug}`);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: { params: Params }) {
  const post = allPosts.find((p) => p._raw.flattenedPath === `blog/${params.slug}`);
  if (!post) return notFound();
  return (
    <article className="space-y-6">
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
        {new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short", year: "numeric" }).format(
          new Date(post.date),
        )}
      </p>
      <h1 className="text-4xl font-semibold text-white">{post.title}</h1>
      <p className="text-lg text-slate-200">{post.excerpt}</p>
      <Mdx code={post.body.code} />
    </article>
  );
}
