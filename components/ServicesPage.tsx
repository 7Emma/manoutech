"use client";
import { Terminal, ArrowRight, Network, ShieldCheck, Database, Check } from 'lucide-react';

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  

  return (
    <div className="bg-surface font-body-md text-on-surface selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden min-h-screen">
      {/* TopNavBar */}
      

      <main className="relative">
        {/* Hero Section */}
        <section className="relative pt-48 pb-24 overflow-hidden px-gutter">
          <div className="glow-effect -top-24 -left-24"></div>
          <div className="glow-effect top-1/2 -right-24"></div>
          <div className="max-w-container-max mx-auto relative z-10">
            <div className="max-w-3xl">
              <span className="font-label-mono text-label-mono text-primary-container tracking-widest uppercase mb-4 block">
                Our Expertise
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg leading-tight mb-8">
                Expertise tailored to{" "}
                <span className="text-primary-container">your vision</span>.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl">
                We engineer high-performance digital ecosystems that empower
                market leaders. Our technical rigor meets creative intuition to
                solve complex modern challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Service Grid */}
        <section className="py-section-padding-desktop px-gutter bg-surface-container-low">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Web Development */}
              <div className="glass-card p-8 rounded-xl group hover:border-primary/40 transition-all duration-300">
                <div className="mb-6 w-12 h-12 bg-primary-container/20 flex items-center justify-center rounded-lg">
                  <Terminal className="text-primary-container" />
                </div>
                <h3 className="font-headline-md text-headline-md mb-4">
                  Web Development
                </h3>
                <p className="text-on-surface-variant font-body-md text-body-md mb-8">
                  High-concurrency platforms built with modern architectures. We
                  prioritize performance, scalability, and technical SEO in every
                  line of code.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all"
                >
                  Learn More{" "}
                  <ArrowRight />
                </Link>
              </div>

              {/* Mobile Apps */}
              <div className="glass-card p-8 rounded-xl group hover:border-primary/40 transition-all duration-300">
                <div className="mb-6 w-12 h-12 bg-secondary-container/20 flex items-center justify-center rounded-lg">
                  <Network className="text-secondary" />
                </div>
                <h3 className="font-headline-md text-headline-md mb-4">
                  Mobile Apps
                </h3>
                <p className="text-on-surface-variant font-body-md text-body-md mb-8">
                  Native and cross-platform experiences that leverage hardware
                  capabilities. Fluid animations and offline-first data
                  management.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all"
                >
                  Learn More{" "}
                  <ArrowRight />
                </Link>
              </div>

              {/* AI Automation */}
              <div className="glass-card p-8 rounded-xl group hover:border-primary/40 transition-all duration-300">
                <div className="mb-6 w-12 h-12 bg-tertiary-container/20 flex items-center justify-center rounded-lg">
                  <ShieldCheck className="text-tertiary" />
                </div>
                <h3 className="font-headline-md text-headline-md mb-4">
                  AI Automation
                </h3>
                <p className="text-on-surface-variant font-body-md text-body-md mb-8">
                  Integrating Large Language Models and custom neural networks to
                  optimize operations and automate decision-making pipelines.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all"
                >
                  Learn More{" "}
                  <ArrowRight />
                </Link>
              </div>

              {/* UI/UX Design */}
              <div className="glass-card p-8 rounded-xl group hover:border-primary/40 transition-all duration-300">
                <div className="mb-6 w-12 h-12 bg-primary-container/20 flex items-center justify-center rounded-lg">
                  <Database className="text-primary-container" />
                </div>
                <h3 className="font-headline-md text-headline-md mb-4">
                  UI/UX Design
                </h3>
                <p className="text-on-surface-variant font-body-md text-body-md mb-8">
                  Human-centric interfaces that reduce cognitive load. We focus
                  on interaction design, accessibility, and high-fidelity
                  prototyping.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all"
                >
                  Learn More{" "}
                  <ArrowRight />
                </Link>
              </div>

              {/* Custom Solutions */}
              <div className="glass-card p-8 rounded-xl group hover:border-primary/40 transition-all duration-300 lg:col-span-2">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <div className="mb-6 w-12 h-12 bg-secondary-container/20 flex items-center justify-center rounded-lg">
                      <Network className="text-secondary" />
                    </div>
                    <h3 className="font-headline-md text-headline-md mb-4">
                      Custom Solutions
                    </h3>
                    <p className="text-on-surface-variant font-body-md text-body-md mb-8">
                      Bespoke software for niche requirements. From legacy
                      migrations to novel hardware integrations, we handle the
                      unconventional.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all"
                    >
                      Explore Consulting{" "}
                      <ArrowRight />
                    </Link>
                  </div>
                  <div className="hidden md:block w-1/3 aspect-video rounded-lg overflow-hidden border border-white/10">
                    <img
                      className="w-full h-full object-cover"
                      alt="Circuit board"
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-section-padding-desktop px-gutter overflow-hidden">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-container/10 blur-[100px] rounded-full"></div>
              <img
                className="rounded-xl border border-white/10 relative z-10 w-full h-auto"
                alt="Engineers collaborating"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
              />
            </div>
            <div>
              <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md mb-12">
                Technical Excellence <br />
                <span className="text-primary">is our baseline</span>.
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center">
                    <Check className="text-primary text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">
                      Performance First
                    </h4>
                    <p className="text-on-surface-variant text-body-md">
                      We optimize for core web vitals and latency, ensuring your
                      platform scales to millions without friction.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center">
                    <Check className="text-primary text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">
                      Security Architecture
                    </h4>
                    <p className="text-on-surface-variant text-body-md">
                      End-to-end encryption and robust authentication layers built
                      into the foundation of every product.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center">
                    <Check className="text-primary text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Agile Methodology</h4>
                    <p className="text-on-surface-variant text-body-md">
                      Transparent delivery cycles with bi-weekly updates and
                      continuous integration pipelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-section-padding-desktop px-gutter">
          <div className="max-w-container-max mx-auto">
            <div className="relative overflow-hidden rounded-3xl p-12 lg:p-24 bg-surface-container-high border border-white/5 text-center">
              <div className="absolute inset-0 opacity-20"></div>
              <div className="relative z-10">
                <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">
                  Ready to build the future?
                </h2>
                <p className="text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">
                  Schedule a technical discovery session with our lead architects
                  to discuss your project requirements.
                </p>
                <button className="bg-primary-container text-on-primary-container px-10 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-transform shadow-lg shadow-primary-container/20">
                  Book Free Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}
