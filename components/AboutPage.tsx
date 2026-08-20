"use client";
import { CheckCircle2, Eye, Sparkles, Globe, Terminal } from 'lucide-react';

import React from "react";
import Link from "next/link";

export default function AboutPage() {
  

  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary/30 min-h-screen">


      <main className="relative overflow-hidden pt-32">
        {/* Hero / Mission Section */}
        <section className="relative max-w-container-max mx-auto px-gutter mb-section-padding-desktop hero-mesh">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest mb-6 block">
                Our Mission
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-none mb-8">
                Bridging the gap between{" "}
                <span className="text-primary italic">vision</span> and code.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
                We don&apos;t just build software; we engineer digital legacies.
                ManouTech was founded on the belief that technical excellence
                should never be a bottleneck for innovation.
              </p>
              <div className="flex gap-4">
                <div className="p-1 rounded-full bg-white/5 border border-white/10 flex items-center pr-4 gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Marcus Nouman"
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
                    />
                  </div>
                  <span className="text-on-surface-variant font-body-md">
                    Founded by Marcus Nouman, 2018
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-square glass-card rounded-3xl overflow-hidden p-2 relative z-10">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  alt="High-end technical workspace"
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=2000"
                />
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 ambient-glow -z-0"></div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-surface-container-low py-section-padding-desktop">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center mb-16">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
                The Pillars of Our Craft
              </h2>
              <p className="text-on-surface-variant font-body-md max-w-xl mx-auto">
                Our guiding principles define every line of code we write and
                every partnership we build.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Quality */}
              <div className="glass-card p-10 rounded-3xl group hover:border-primary/50 transition-all duration-500">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="text-3xl" />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Quality
                </h3>
                <p className="text-on-surface-variant font-body-md">
                  We uphold an uncompromising standard of technical excellence,
                  ensuring every solution is performant, scalable, and secure by
                  design.
                </p>
              </div>
              {/* Transparency */}
              <div className="glass-card p-10 rounded-3xl group hover:border-primary/50 transition-all duration-500">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform">
                  <Eye className="text-3xl" />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Transparency
                </h3>
                <p className="text-on-surface-variant font-body-md">
                  Open communication is our default. We provide real-time access
                  to progress, architecture decisions, and potential hurdles.
                </p>
              </div>
              {/* Innovation */}
              <div className="glass-card p-10 rounded-3xl group hover:border-primary/50 transition-all duration-500">
                <div className="w-14 h-14 bg-tertiary/10 rounded-2xl flex items-center justify-center text-tertiary mb-8 group-hover:scale-110 transition-transform">
                  <Sparkles className="text-3xl" />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Innovation
                </h3>
                <p className="text-on-surface-variant font-body-md">
                  We don&apos;t just follow trends; we set them. We leverage
                  cutting-edge tech stacks like Rust, Go, and Next.js to solve
                  complex problems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-section-padding-desktop max-w-container-max mx-auto px-gutter">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3 sticky top-32 h-fit">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
                Our Evolution
              </h2>
              <p className="text-on-surface-variant font-body-md">
                From a solo developer&apos;s desk to a global technical
                powerhouse. A journey of relentless growth.
              </p>
            </div>
            <div className="md:w-2/3 space-y-24 relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 ml-4 md:ml-0"></div>
              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-2.5 md:-left-1.5 top-0 w-3 h-3 rounded-full bg-primary border-4 border-background ring-4 ring-primary/20"></div>
                <span className="font-label-mono text-label-mono text-primary mb-2 block">
                  2024
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Global Scale
                </h4>
                <p className="text-on-surface-variant font-body-md">
                  Expansion into 12 global markets and a team of 150+ specialist
                  engineers across 3 continents.
                </p>
              </div>
              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-2.5 md:-left-1.5 top-0 w-3 h-3 rounded-full bg-secondary border-4 border-background ring-4 ring-secondary/20"></div>
                <span className="font-label-mono text-label-mono text-secondary mb-2 block">
                  2022
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Series B &amp; Innovation Lab
                </h4>
                <p className="text-on-surface-variant font-body-md">
                  Launched our proprietary AI-assisted development framework and
                  secured key enterprise partnerships.
                </p>
              </div>
              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-2.5 md:-left-1.5 top-0 w-3 h-3 rounded-full bg-white/20 border-4 border-background ring-4 ring-white/5"></div>
                <span className="font-label-mono text-label-mono text-on-surface-variant mb-2 block">
                  2020
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-4">
                  The Pivot to Enterprise
                </h4>
                <p className="text-on-surface-variant font-body-md">
                  Successfully delivered mission-critical infrastructure for three
                  Fortune 500 companies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-section-padding-desktop bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="mb-20 text-center">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
                Engineered by Humans
              </h2>
              <p className="text-on-surface-variant font-body-md">
                Meet the architects, thinkers, and builders behind ManouTech.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Member 1 */}
              <div className="group">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 glass-card p-1">
                  <img
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    alt="Elena Vance"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                  />
                </div>
                <h4 className="font-headline-md text-[20px] text-on-surface">
                  Elena Vance
                </h4>
                <p className="text-primary font-label-mono text-sm uppercase tracking-wider">
                  Chief Technical Officer
                </p>
              </div>
              {/* Member 2 */}
              <div className="group">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 glass-card p-1">
                  <img
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    alt="David Chen"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
                  />
                </div>
                <h4 className="font-headline-md text-[20px] text-on-surface">
                  David Chen
                </h4>
                <p className="text-primary font-label-mono text-sm uppercase tracking-wider">
                  Lead Architect
                </p>
              </div>
              {/* Member 3 */}
              <div className="group">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 glass-card p-1">
                  <img
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    alt="Sarah Jenkins"
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600"
                  />
                </div>
                <h4 className="font-headline-md text-[20px] text-on-surface">
                  Sarah Jenkins
                </h4>
                <p className="text-primary font-label-mono text-sm uppercase tracking-wider">
                  Head of Design
                </p>
              </div>
              {/* Member 4 */}
              <div className="group">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 glass-card p-1">
                  <img
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    alt="Marcus Nouman"
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600"
                  />
                </div>
                <h4 className="font-headline-md text-[20px] text-on-surface">
                  Marcus Nouman
                </h4>
                <p className="text-primary font-label-mono text-sm uppercase tracking-wider">
                  Founder &amp; CEO
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-section-padding-desktop">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="glass-card rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-on-surface mb-8">
                  Ready to build the future of software?
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
                  We are always looking for visionary engineers and designers who
                  obsess over technical craft as much as we do.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button className="bg-primary text-on-primary px-10 py-4 rounded-2xl font-body-md font-bold hover:scale-105 transition-all shadow-2xl shadow-primary/20">
                    View Openings
                  </button>
                  <button className="border border-white/20 px-10 py-4 rounded-2xl font-body-md font-semibold hover:bg-white/5 transition-all">
                    Culture Handbook
                  </button>
                </div>
              </div>
              {/* Background decoration */}
              <div className="absolute -bottom-24 -left-24 w-96 h-96 ambient-glow"></div>
              <div className="absolute -top-24 -right-24 w-96 h-96 ambient-glow opacity-50"></div>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}
