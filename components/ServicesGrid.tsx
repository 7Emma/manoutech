const services = [
  {
    title: "Produits web",
    desc: "SaaS B2B/B2C, dashboards, back-office, APIs robustes.",
    tags: ["Next.js", "Node", "Postgres", "Edge"],
  },
  {
    title: "Apps mobiles",
    desc: "Expériences mobiles React Native performantes, prêtes store.",
    tags: ["React Native", "Expo", "Design system"],
  },
  {
    title: "Data & AI",
    desc: "Pipelines data, IA générative, copilots métier, LLM ops.",
    tags: ["Python", "LLM", "RAG", "Observabilité"],
  },
  {
    title: "Product Ops",
    desc: "Roadmaps, métriques, onboarding utilisateurs, growth loops.",
    tags: ["Analytics", "SEO", "Growth"],
  },
];

export default function ServicesGrid() {
  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between">
         <div>
           <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--brand-dark-blue)]">
             Expertise
           </p>
           <h2 className="text-3xl font-semibold text-black">Nos offres principales</h2>
         </div>
         <span className="text-sm text-[var(--brand-dark-gray)]">Sprints de 2 semaines · équipe senior</span>
       </div>
      <div className="grid gap-4 md:grid-cols-2">
         {services.map((service) => (
           <article
             key={service.title}
             className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:border-[var(--brand-dark-blue)]/60 hover:bg-white"
           >
             <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-dark-blue)]/0 via-[var(--brand-dark-blue)]/5 to-[var(--brand-dark-blue)]/0 opacity-0 transition group-hover:opacity-100" />
             <div className="relative space-y-3">
               <h3 className="text-xl font-semibold text-black">{service.title}</h3>
               <p className="text-sm text-[var(--brand-dark-gray)]">{service.desc}</p>
               <div className="flex flex-wrap gap-2 text-xs text-[var(--brand-dark-blue)]">
                 {service.tags.map((tag) => (
                   <span key={tag} className="rounded-full border border-[var(--brand-dark-blue)]/40 px-3 py-1">
                     {tag}
                   </span>
                 ))}
               </div>
             </div>
           </article>
         ))}
       </div>
    </section>
  );
}
