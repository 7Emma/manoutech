"use client";
import { Zap, ArrowRight, Share2, AlertTriangle, Network, Code } from 'lucide-react';

import React from "react";
import Link from "next/link";

export default function EquinoxCaseStudy() {
  

  return (
    <div className="bg-background text-on-surface font-body-md antialiased overflow-x-hidden min-h-screen">
      {/* TopNavBar */}
      

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[819px] flex flex-col justify-center px-gutter max-w-container-max mx-auto overflow-hidden">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <Zap className="text-primary scale-75" />
                <span className="font-label-mono text-label-mono text-primary">
                  SaaS Analytics Platform
                </span>
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tighter leading-tight">
                Equinox SaaS Analytics:{" "}
                <span className="text-primary text-glow">
                  Real-time Data Fabric
                </span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Architecting a high-performance analytics engine capable of
                processing 2.5 billion events daily with sub-second latency for
                enterprise-grade observability.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="glass-card p-8 rounded-xl relative group overflow-hidden w-full max-w-sm border-t border-t-white/20 border-l border-l-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="font-label-mono text-label-mono text-secondary mb-2 block">
                  Key Result
                </span>
                <div className="font-display-lg text-display-lg-mobile text-on-surface leading-none mb-1">
                  40%
                </div>
                <div className="font-headline-md text-headline-md text-secondary-container mb-4">
                  Performance Increase
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Reduction in dashboard load times across global clusters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="py-section-padding-desktop px-gutter max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-4">
              <h2 className="font-headline-md text-headline-md text-on-surface sticky top-32">
                The Challenge
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-invert lg:prose-xl max-w-none">
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Equinox was struggling with a legacy monolithic infrastructure
                  that could no longer handle the exponential growth of user data.
                  Queries that previously took seconds were stretching into
                  minutes, leading to customer dissatisfaction and increased
                  churn.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="space-y-4">
                    <h4 className="font-body-md text-body-md font-bold text-on-surface flex items-center gap-2">
                      <AlertTriangle className="text-error" />{" "}
                      Scale Constraints
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      The existing PostgreSQL instances were hitting physical
                      hardware limits, causing frequent indexing bottlenecks
                      during peak hours.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-body-md text-body-md font-bold text-on-surface flex items-center gap-2">
                      <AlertTriangle className="text-error" />{" "}
                      Latency Issues
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Global users experienced high jitter due to poor edge
                      caching strategies and inefficient data serialization
                      protocols.
                    </p>
                  </div>
                </div>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden glass-card relative">
                <img
                  className="w-full h-full object-cover opacity-60"
                  alt="Legacy Infrastructure Visualization"
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-label-mono text-label-mono bg-surface-container-highest/80 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                    Legacy Infrastructure Visualization
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution Section */}
        <section className="py-section-padding-desktop bg-surface-container-lowest border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 blur-[120px] -z-10"></div>
          <div className="px-gutter max-w-container-max mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
              <div className="lg:col-span-4">
                <h2 className="font-headline-md text-headline-md text-on-surface sticky top-32">
                  The Solution
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-12">
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Our team implemented a distributed event-streaming architecture
                  using Rust and Apache Pulsar. This &quot;Data Fabric&quot; approach
                  allowed for asynchronous processing and massive horizontal
                  scaling.
                </p>

                {/* Bento Grid Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-card p-8 rounded-xl md:col-span-2">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                      <h3 className="font-headline-md text-headline-md text-primary">
                        Technical Strategy
                      </h3>
                      <div className="flex gap-2">
                        <span className="font-label-mono text-label-mono bg-surface-container px-3 py-1 rounded border border-white/10">
                          Rust
                        </span>
                        <span className="font-label-mono text-label-mono bg-surface-container px-3 py-1 rounded border border-white/10">
                          K8s
                        </span>
                        <span className="font-label-mono text-label-mono bg-surface-container px-3 py-1 rounded border border-white/10">
                          gRPC
                        </span>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest rounded-lg p-6 font-label-mono text-label-mono overflow-x-auto border border-white/5">
                      <pre className="text-on-surface-variant">
                        <span className="text-secondary">
                          // Distributed Event Processor in Rust
                        </span>
                        <br />
                        <span className="text-primary">async fn</span>{" "}
                        <span className="text-tertiary">process_stream</span>
                        (payload: Payload) -&gt; Result&lt;(), Error&gt; {"{"}
                        <br />
                        {"    "}
                        <span className="text-primary">let</span> serialized =
                        serde_json::to_vec(&amp;payload)?;
                        <br />
                        {"    "}
                        <span className="text-primary">let</span> producer =
                        client.producer().topic(
                        <span className="text-on-secondary-container">
                          "events"
                        </span>
                        ).build()?;
                        <br />
                        <br />
                        {"    "}producer.send(serialized).
                        <span className="text-primary">await</span>?;
                        <br />
                        {"    "}
                        <span className="text-on-surface-variant">Ok</span>(())
                        <br />
                        {"}"}
                      </pre>
                    </div>
                  </div>
                  <div className="glass-card p-6 rounded-xl flex flex-col gap-4">
                    <Network className="text-secondary text-4xl" />
                    <h4 className="font-body-lg text-body-lg font-bold text-on-surface">
                      Distributed Mesh
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Replaced the monolith with a gRPC-powered microservices mesh
                      for localized data processing.
                    </p>
                  </div>
                  <div className="glass-card p-6 rounded-xl flex flex-col gap-4">
                    <Zap className="text-secondary text-4xl" />
                    <h4 className="font-body-lg text-body-lg font-bold text-on-surface">
                      Edge Computation
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Utilized WebAssembly at the edge to pre-filter and aggregate
                      data before it reaches the core.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-section-padding-desktop px-gutter max-w-container-max mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex justify-center mb-4">
              <Code className="text-primary text-6xl opacity-30" />
            </div>
            <blockquote className="font-headline-md text-headline-md md:text-display-lg-mobile text-on-surface italic leading-tight">
              &quot;ManouTech didn&apos;t just build a new dashboard; they rebuilt
              our entire data philosophy. Our engineering velocity has tripled
              since the migration.&quot;
            </blockquote>
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary p-1">
                <img
                  className="w-full h-full object-cover rounded-full"
                  alt="Marcus Thorne"
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
                />
              </div>
              <div>
                <div className="font-body-lg text-body-lg font-bold text-on-surface">
                  Marcus Thorne
                </div>
                <div className="font-label-mono text-label-mono text-on-surface-variant">
                  CTO, Equinox Systems
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Result Section */}
        <section className="py-section-padding-desktop px-gutter max-w-container-max mx-auto border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-4">
              <h2 className="font-headline-md text-headline-md text-on-surface sticky top-32">
                The Result
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="glass-card p-6 rounded-xl border-l-4 border-l-primary">
                  <div className="font-display-lg text-headline-md text-on-surface">
                    0.2s
                  </div>
                  <div className="font-label-mono text-label-mono text-on-surface-variant">
                    Avg Latency
                  </div>
                </div>
                <div className="glass-card p-6 rounded-xl border-l-4 border-l-secondary">
                  <div className="font-display-lg text-headline-md text-on-surface">
                    99.99%
                  </div>
                  <div className="font-label-mono text-label-mono text-on-surface-variant">
                    Uptime SLA
                  </div>
                </div>
                <div className="glass-card p-6 rounded-xl border-l-4 border-l-tertiary">
                  <div className="font-display-lg text-headline-md text-on-surface">
                    3.5x
                  </div>
                  <div className="font-label-mono text-label-mono text-on-surface-variant">
                    Data Throughput
                  </div>
                </div>
              </div>
              <div className="prose prose-invert lg:prose-xl max-w-none">
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Beyond the technical metrics, Equinox successfully launched
                  three new data-intensive product lines that were previously
                  impossible on their old architecture. The system now
                  autonomously handles traffic spikes during global financial
                  events without manual intervention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project Navigation */}
        <section className="pt-section-padding-desktop pb-section-padding-desktop/2 bg-surface-container relative">
          <div className="px-gutter max-w-container-max mx-auto">
            <Link
              className="group block relative overflow-hidden rounded-2xl glass-card p-12 transition-all duration-500 hover:scale-[0.99] border-none"
              href="/projects/vertex"
            >
              <div className="absolute inset-0 -z-10">
                <img
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  alt="Next Project"
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                <div className="space-y-4">
                  <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest">
                    Next Project
                  </span>
                  <h3 className="font-display-lg text-display-lg-mobile md:text-headline-md text-on-surface leading-none">
                    Vertex Crypto Exchange
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                    Engineering a zero-lag trading core for the next generation of
                    decentralized finance.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-primary group-hover:translate-x-4 transition-transform duration-500">
                  <span className="font-body-lg text-body-lg font-bold">
                    View Case Study
                  </span>
                  <ArrowRight className="text-4xl" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-white/5 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter max-w-container-max mx-auto px-gutter py-section-padding-desktop">
          <div className="col-span-2">
            <div className="font-display-lg text-headline-md text-on-surface mb-4 font-extrabold">
              ManouTech
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs mb-8">
              High-end software engineering for visionaries and enterprises.
            </p>
            <div className="flex gap-4">
              <Link
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/10 transition-colors"
                href="#"
              >
                <Zap className="text-primary scale-75" />
              </Link>
              <Link
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/10 transition-colors"
                href="#"
              >
                <Share2 className="text-primary scale-75" />
              </Link>
              <Link
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/10 transition-colors"
                href="#"
              >
                <Zap className="text-primary scale-75" />
              </Link>
            </div>
          </div>
          <div>
            <h5 className="font-label-mono text-label-mono text-primary mb-6">
              Company
            </h5>
            <ul className="space-y-4">
              <li>
                <Link
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="/projects"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-mono text-label-mono text-primary mb-6">
              Legal
            </h5>
            <ul className="space-y-4">
              <li>
                <Link
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-4 lg:col-span-2 pt-8 lg:pt-0 border-t border-white/5 lg:border-none">
            <h5 className="font-label-mono text-label-mono text-primary mb-6">
              Subscribe
            </h5>
            <div className="flex gap-2">
              <input
                className="bg-surface-container border-none rounded-lg flex-grow text-on-surface focus:ring-1 focus:ring-primary"
                placeholder="Email address"
                type="email"
              />
              <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-bold">
                Join
              </button>
            </div>
            <p className="mt-8 font-body-md text-body-md text-on-surface-variant opacity-60">
              © 2024 ManouTech Systems. Engineered for Excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
