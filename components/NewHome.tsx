"use client";

import React from "react";
import Image from "next/image";
import { 
  Terminal, 
  Cloud, 
  ArrowRight, 
  Search, 
  Cpu, 
  CheckCircle2, 
  Star, 
  Code2, 
  BrainCircuit, 
  Database, 
  Code, 
  Rocket, 
  Quote,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { Link } from "@/i18n/routing";
import FadeIn from "@/components/FadeIn";
import SpotlightCard from "@/components/SpotlightCard";
import { useTranslations } from "next-intl";

// --- Constantes & Données statiques ---
const TECH_STACK = [
  { label: "REACT", icon: Code2 },
  { label: "NEXT.JS", icon: Terminal },
  { label: "ARTIFICIAL INTELLIGENCE", icon: BrainCircuit },
  { label: "AWS CLOUD", icon: Cloud },
  { label: "POSTGRESQL", icon: Database },
  { label: "RUST", icon: Cpu },
];

const PROJECTS = [
  {
    title: "NeoBank Infrastructure",
    description: "Scalable core banking system with 99.99% uptime and real-time transaction processing.",
    tag: "FINTECH • MOBILE APP",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    href: "/projects/neobank",
  },
  {
    title: "Locus Intelligence",
    description: "Global supply chain optimization using proprietary machine learning models.",
    tag: "AI • LOGISTICS",
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee57d5?auto=format&fit=crop&q=80&w=2000",
    href: "/projects/locus-intelligence",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    description: "In-depth technical auditing and strategic planning to define project requirements and scalability goals.",
    icon: Search,
  },
  {
    step: "02",
    title: "Architecture",
    description: "Designing robust system blueprints and resilient cloud infrastructure built for high concurrency.",
    icon: Cpu,
  },
  {
    step: "03",
    title: "Development",
    description: "Clean, modular code built with strict type safety, unit tests, and performance-first frameworks.",
    icon: Code,
  },
  {
    step: "04",
    title: "Deployment",
    description: "Automated CI/CD pipelines, staging environments, and zero-downtime production rollouts.",
    icon: Rocket,
  },
];

const PRICING_TIERS = [
  {
    name: "Startup Sprint",
    price: "$8.5k",
    period: "/mo",
    isPopular: false,
    cta: "Select Plan",
    features: [
      "MVP Development & Scoping",
      "Cloud Infrastructure Setup",
      "Weekly Technical Reviews",
      "Direct Slack Channel Access",
    ],
  },
  {
    name: "Scale Architecture",
    price: "$15k",
    period: "/mo",
    isPopular: true,
    cta: "Launch Pod",
    features: [
      "Full-Stack Product Engineering",
      "AI Strategy & Model Integration",
      "24/7 Priority Incident Support",
      "Security & Performance Audits",
      "Automated CI/CD Pipelines",
    ],
  },
  {
    name: "Custom Enterprise",
    price: "Custom",
    period: "",
    isPopular: false,
    cta: "Contact Sales",
    features: [
      "Dedicated Engineering Squad",
      "Legacy System Modernization",
      "Strict SLA Guarantees",
      "On-Premises AI Infrastructure",
    ],
  },
];

export default function NewHome() {
  const t = useTranslations("Home");

  return (
    <div className="bg-surface font-body-md text-on-surface selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/15 blur-[140px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
          <FadeIn className="max-w-3xl" direction="up">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-medium tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                {t("badge")}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-on-surface leading-[1.1] mb-6">
              {t("title1")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-secondary">
                {t("title2")}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-on-surface-variant mb-10 max-w-2xl font-normal leading-relaxed">
              {t("subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-semibold rounded-xl hover:opacity-95 hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                {t("cta1")}
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/10 hover:bg-white/5 font-semibold rounded-xl transition-colors"
              >
                {t("cta2")}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Technologies Marquee */}
      <section className="py-8 bg-surface-container-lowest border-y border-white/5 overflow-hidden">
        <div className="flex w-full">
          <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
            {[...TECH_STACK, ...TECH_STACK].map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center gap-3 font-mono text-xs tracking-wider text-on-surface-variant/70 hover:text-on-surface transition-colors"
                >
                  <IconComponent className="w-4 h-4 text-primary" />
                  {tech.label}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Featured Projects */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Selected Engineering Work
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                Mission-critical systems, web platforms, and data infrastructure built for scale.
              </p>
            </div>
            <Link 
              href="/projects" 
              className="group inline-flex items-center gap-2 font-medium text-primary hover:underline"
            >
              View all case studies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <Link 
                key={idx} 
                href={project.href}
                className="group flex flex-col block"
              >
                <div className="relative overflow-hidden rounded-2xl mb-5 bg-surface-container-high aspect-video border border-white/5">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-mono text-white">
                      {project.tag}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                  {project.title}
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Engineering Methodology */}
      <section className="py-24 bg-surface-container-lowest border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Our Engineering Methodology
            </h2>
            <p className="text-on-surface-variant">
              A structured lifecycle prioritizing architectural integrity, speed, and continuous delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <SpotlightCard 
                  key={idx} 
                  className="p-8 rounded-2xl bg-surface-container/40 border border-white/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-on-surface-variant/40">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Engagement Models (Pricing) */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Transparent Engagements
            </h2>
            <p className="text-on-surface-variant">
              Predictable costs, agile scalability, and senior-level execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {PRICING_TIERS.map((tier, idx) => (
              <div 
                key={idx}
                className={`p-8 rounded-2xl border flex flex-col justify-between relative ${
                  tier.isPopular 
                    ? "bg-surface-container border-primary/40 shadow-xl shadow-primary/5 md:-translate-y-2" 
                    : "bg-surface-container-low border-white/5"
                }`}
              >
                {tier.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Recommended
                  </span>
                )}

                <div>
                  <h3 className="text-sm font-mono uppercase tracking-wider text-on-surface-variant mb-4">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
                    <span className="text-sm text-on-surface-variant">{tier.period}</span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-sm text-on-surface-variant">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`w-full py-3 rounded-xl font-semibold text-center transition-all ${
                    tier.isPopular
                      ? "bg-primary text-on-primary hover:opacity-90"
                      : "border border-white/10 hover:bg-white/5 text-on-surface"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Social Proof / Testimonials */}
      <section className="py-24 bg-surface-container-lowest border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-8">
                Built for High-Growth Engineering Teams
              </h2>
              <div className="relative pl-8 border-l border-primary/30 space-y-4">
                <Quote className="w-8 h-8 text-primary/40" />
                <p className="text-lg italic text-on-surface leading-relaxed">
                  &quot;ManouTech didn&apos;t just build our infrastructure; they solved critical bottlenecks that were capping our scale. Their technical rigor is exceptionally rare.&quot;
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
                      alt="Sarah Chen"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Sarah Chen</div>
                    <div className="text-xs font-mono text-on-surface-variant">CTO, CloudScale Systems</div>
                  </div>
                </div>
              </div>
            </div>

            <SpotlightCard className="p-8 sm:p-10 rounded-2xl bg-surface-container-low border border-white/5">
              <div className="flex gap-1 mb-6 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div className="text-4xl font-extrabold tracking-tight mb-2">99.8%</div>
              <div className="text-base font-semibold mb-4 text-on-surface">Client SLA Adherence Rate</div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Across 150+ production releases, our systems maintain uncompromising resilience, minimal latency, and zero unplanned downtime.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* 7. Final Call to Action */}
      <section className="py-28 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Ready to scale your architecture?
          </h2>
          <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
            Partner with a dedicated technical team that delivers clean code, high security, and high performance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/audit"
              className="px-8 py-4 bg-primary text-on-primary font-semibold rounded-xl hover:opacity-95 shadow-lg shadow-primary/20 transition-all"
            >
              Book Technical Audit
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white/10 hover:bg-white/5 font-semibold rounded-xl transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}