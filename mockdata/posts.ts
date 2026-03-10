import type { PostLite } from "@/types/content";

export const mockPosts: PostLite[] = [
  {
    _id: "1",
    slug: "mvp-6-semaines",
    title: "Comment livrer un MVP en 6 semaines sans sacrifier la qualité",
    excerpt:
      "Discovery express, design system minimal, sprints courts : notre méthode éprouvée pour aller vite sans accumuler de dette technique dès le premier jour.",
    date: "2024-03-18",
    category: "Méthode",
    readTime: "7 min",
    url: "/blog/mvp-6-semaines",
  },
  {
    _id: "2",
    slug: "rag-llm-production",
    title: "RAG en production : les pièges que personne ne mentionne",
    excerpt:
      "Chunking, reranking, hallucinations silencieuses, coûts cachés — retour d'expérience sur 8 projets LLM déployés en environnement réel.",
    date: "2024-02-27",
    category: "Data / AI",
    readTime: "11 min",
    url: "/blog/rag-llm-production",
  },
  {
    _id: "3",
    slug: "design-system-react-native",
    title: "Design system partagé web ↔ mobile : retour d'expérience",
    excerpt:
      "Un seul design system pour Next.js et React Native — comment on a réduit le temps de développement feature de 40% sur un projet healthtech.",
    date: "2024-01-14",
    category: "Design",
    readTime: "9 min",
    url: "/blog/design-system-react-native",
  },
  {
    _id: "4",
    slug: "core-web-vitals-saas",
    title: "Core Web Vitals sur un SaaS B2B : guide pratique 2024",
    excerpt:
      "LCP, INP, CLS — métriques souvent négligées sur les apps internes. Pourtant elles impactent directement la perception de qualité et la rétention.",
    date: "2023-12-05",
    category: "Perf",
    readTime: "8 min",
    url: "/blog/core-web-vitals-saas",
  },
  {
    _id: "5",
    slug: "product-ops-startup",
    title: "Product Ops pour une startup de 10 personnes : par où commencer",
    excerpt:
      "OKRs, instrumentation, rituels agiles — ce qui est utile dès l'early stage et ce qui peut attendre. Guide pragmatique sans bullshit.",
    date: "2023-11-20",
    category: "Méthode",
    readTime: "6 min",
    url: "/blog/product-ops-startup",
  },
  {
    _id: "6",
    slug: "postgres-edge-serverless",
    title: "Postgres + Edge functions : architecture pour 0 à 100k users",
    excerpt:
      "Neon, PlanetScale, Supabase, Vercel Edge — comparatif honnête des stacks serverless pour scaler sans réécrire toute l'infra à 50k MAU.",
    date: "2023-10-30",
    category: "Tech",
    readTime: "12 min",
    url: "/blog/postgres-edge-serverless",
  },
];
