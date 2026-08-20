"use client";
import { CheckCircle2, Ban, ChevronDown } from 'lucide-react';

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function PricingPage() {
  const [faqs, setFaqs] = useState<{ [key: number]: boolean }>({
    0: false,
    1: false,
    2: false,
  });

  const toggleFaq = (index: number) => {
    setFaqs((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      

      <main className="relative pt-32 overflow-hidden">
        {/* Atmospheric Glow Backgrounds */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] glow-indigo-bg opacity-30 -z-10 blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] glow-indigo-bg opacity-20 -z-10 blur-[120px]"></div>

        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-gutter text-center mb-24">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-surface-container-low mb-6">
            <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest">
              Pricing &amp; Models
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 leading-none">
            Engineering for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
              Scale and Precision
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Transparent software engineering tiers designed for your current
            velocity and future ambitions. No hidden overhead, just pure
            technical excellence.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-3 gap-8 mb-section-padding-desktop">
          {/* Tier 1: MVP (Startup) */}
          <div className="glass-card p-8 rounded-xl flex flex-col hover:border-white/20 transition-all duration-300">
            <div className="mb-8">
              <h3 className="font-headline-md text-headline-md mb-2">MVP</h3>
              <p className="font-body-md text-on-surface-variant">
                Best for founders validating early products and proof-of-concepts.
              </p>
            </div>
            <div className="mb-8">
              <span className="text-[48px] font-bold text-on-surface leading-none">
                $12k
              </span>
              <span className="text-on-surface-variant font-body-md">
                /project
              </span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary text-[20px]" />
                <span className="text-body-md">Agile MVP Blueprint</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary text-[20px]" />
                <span className="text-body-md">Frontend + Core Logic</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary text-[20px]" />
                <span className="text-body-md">Cloud Setup (AWS/GCP)</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface/40">
                <Ban className="text-[20px]" />
                <span className="text-body-md line-through">
                  Auto-scaling Infrastructure
                </span>
              </li>
            </ul>
            <button className="w-full py-4 border border-white/10 rounded-lg font-semibold hover:bg-white/5 transition-all">
              Start Startup Journey
            </button>
          </div>

          {/* Tier 2: Scale (Architecture) */}
          <div className="relative glass-card p-8 rounded-xl flex flex-col border-primary/50 shadow-[0_0_40px_rgba(192,193,255,0.1)] scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary-container px-4 py-1 rounded-full font-label-mono text-[12px] uppercase font-bold">
              Recommended
            </div>
            <div className="mb-8">
              <h3 className="font-headline-md text-headline-md mb-2 text-primary">
                Scale
              </h3>
              <p className="font-body-md text-on-surface-variant">
                Optimized for growing companies needing robust, modular systems.
              </p>
            </div>
            <div className="mb-8">
              <span className="text-[48px] font-bold text-on-surface leading-none">
                $28k
              </span>
              <span className="text-on-surface-variant font-body-md">
                /quarter
              </span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-primary text-[20px]" />
                <span className="text-body-md">Advanced Microservices</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-primary text-[20px]" />
                <span className="text-body-md">Auto-scaling Kubernetes</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-primary text-[20px]" />
                <span className="text-body-md">CI/CD Pipeline Design</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-primary text-[20px]" />
                <span className="text-body-md">24/7 Priority Support</span>
              </li>
            </ul>
            <button className="w-full py-4 bg-primary-container text-on-primary-container rounded-lg font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
              Upgrade to Scale
            </button>
          </div>

          {/* Tier 3: Custom (Enterprise) */}
          <div className="glass-card p-8 rounded-xl flex flex-col hover:border-white/20 transition-all duration-300">
            <div className="mb-8">
              <h3 className="font-headline-md text-headline-md mb-2">
                Enterprise
              </h3>
              <p className="font-body-md text-on-surface-variant">
                High-compliance, bespoke solutions for complex organizations.
              </p>
            </div>
            <div className="mb-8">
              <span className="text-[48px] font-bold text-on-surface leading-none">
                Custom
              </span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-tertiary text-[20px]" />
                <span className="text-body-md">SOC2 &amp; HIPAA Compliance</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-tertiary text-[20px]" />
                <span className="text-body-md">Legacy Modernization</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-tertiary text-[20px]" />
                <span className="text-body-md">Dedicated Engineering Squad</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-tertiary text-[20px]" />
                <span className="text-body-md">Architecture Consulting</span>
              </li>
            </ul>
            <button className="w-full py-4 border border-white/10 rounded-lg font-semibold hover:bg-white/5 transition-all">
              Contact Enterprise
            </button>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="max-w-container-max mx-auto px-gutter mb-section-padding-desktop">
          <h2 className="font-headline-md text-headline-md text-center mb-12">
            Detailed Feature Matrix
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-6 font-label-mono text-on-surface-variant uppercase tracking-widest text-sm">
                    Capabilities
                  </th>
                  <th className="py-6 px-6 font-headline-md text-body-lg text-primary text-center">
                    MVP
                  </th>
                  <th className="py-6 px-6 font-headline-md text-body-lg text-secondary text-center">
                    Scale
                  </th>
                  <th className="py-6 px-6 font-headline-md text-body-lg text-tertiary text-center">
                    Custom
                  </th>
                </tr>
              </thead>
              <tbody className="font-body-md divide-y divide-white/5">
                <tr>
                  <td className="py-6 text-on-surface">Cloud Architecture</td>
                  <td className="py-6 text-center text-on-surface-variant">
                    Single Region
                  </td>
                  <td className="py-6 text-center text-on-surface-variant">
                    Multi-Region HA
                  </td>
                  <td className="py-6 text-center text-on-surface-variant">
                    Global Mesh
                  </td>
                </tr>
                <tr>
                  <td className="py-6 text-on-surface">Data Throughput</td>
                  <td className="py-6 text-center text-on-surface-variant">
                    Up to 10k/day
                  </td>
                  <td className="py-6 text-center text-on-surface-variant">
                    Unlimited Burst
                  </td>
                  <td className="py-6 text-center text-on-surface-variant">
                    Hpc / Real-time
                  </td>
                </tr>
                <tr>
                  <td className="py-6 text-on-surface">SLA Guarantee</td>
                  <td className="py-6 text-center text-on-surface-variant">
                    99.5%
                  </td>
                  <td className="py-6 text-center text-on-surface-variant">
                    99.9%
                  </td>
                  <td className="py-6 text-center text-on-surface-variant">
                    99.99%
                  </td>
                </tr>
                <tr>
                  <td className="py-6 text-on-surface">Code Ownership</td>
                  <td className="py-6 text-center text-on-surface-variant">
                    Full Transfer
                  </td>
                  <td className="py-6 text-center text-on-surface-variant">
                    Full Transfer
                  </td>
                  <td className="py-6 text-center text-on-surface-variant">
                    IP Exclusivity
                  </td>
                </tr>
                <tr>
                  <td className="py-6 text-on-surface">Security Audit</td>
                  <td className="py-6 text-center text-on-surface-variant">—</td>
                  <td className="py-6 text-center text-on-surface-variant">
                    Quarterly
                  </td>
                  <td className="py-6 text-center text-on-surface-variant">
                    Monthly Pentest
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ: Billing Focused */}
        <section className="max-w-[800px] mx-auto px-gutter mb-section-padding-desktop">
          <h2 className="font-headline-md text-headline-md text-center mb-12">
            Billing &amp; Operations FAQ
          </h2>
          <div className="space-y-6">
            <div
              className="glass-card p-6 rounded-lg cursor-pointer group"
              onClick={() => toggleFaq(0)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-body-lg text-body-lg font-semibold group-hover:text-primary transition-colors">
                  How does the quarterly billing work for the Scale tier?
                </h4>
                <ChevronDown className="text-primary" />
              </div>
              <p
                className={`mt-4 text-on-surface-variant ${
                  faqs[0] ? "block" : "hidden"
                }`}
              >
                Our Scale tier is billed upfront every 90 days. This allows us to
                dedicate a specialized team of senior engineers and DevOps
                specialists to your codebase, ensuring high architectural integrity
                without monthly renegotiations.
              </p>
            </div>
            <div
              className="glass-card p-6 rounded-lg cursor-pointer group"
              onClick={() => toggleFaq(1)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-body-lg text-body-lg font-semibold group-hover:text-primary transition-colors">
                  Are there any surprise infrastructure costs?
                </h4>
                <ChevronDown className="text-primary" />
              </div>
              <p
                className={`mt-4 text-on-surface-variant ${
                  faqs[1] ? "block" : "hidden"
                }`}
              >
                We manage the engineering, but cloud infrastructure (AWS/Azure) is
                billed directly to your company account. We optimize your setup
                during the build phase to ensure minimal waste—typically reducing
                cloud burn by 15-20%.
              </p>
            </div>
            <div
              className="glass-card p-6 rounded-lg cursor-pointer group"
              onClick={() => toggleFaq(2)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-body-lg text-body-lg font-semibold group-hover:text-primary transition-colors">
                  Can I downgrade or pause my plan?
                </h4>
                <ChevronDown className="text-primary" />
              </div>
              <p
                className={`mt-4 text-on-surface-variant ${
                  faqs[2] ? "block" : "hidden"
                }`}
              >
                Yes. After the initial commitment period (1 quarter for Scale), you
                can transition to a maintenance-only retainer or pause development
                with 30 days notice. All IP remains yours.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter max-w-container-max mx-auto px-gutter py-section-padding-desktop">
          <div className="col-span-2">
            <div className="font-display-lg text-headline-md text-on-surface dark:text-on-surface mb-6 font-extrabold">
              ManouTech
            </div>
            <p className="text-on-surface-variant font-body-md max-w-xs mb-8">
              Architecting high-performance digital ecosystems for the world&apos;s
              most ambitious tech teams.
            </p>
            <div className="text-on-surface-variant font-body-md">
              © 2024 ManouTech Systems. Engineered for Excellence.
            </div>
          </div>
          <div className="space-y-4">
            <h5 className="text-primary font-bold">Services</h5>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  System Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  Cloud Migrations
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  DevOps
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-primary font-bold">Company</h5>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/projects"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-primary font-bold">Legal</h5>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
