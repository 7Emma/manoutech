"use client";
import { Search, ArrowRight } from 'lucide-react';

import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function InsightsPage() {
  const searchInputRef = useRef<HTMLInputElement>(null);

  

  return (
    <div className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      

      <main className="pt-24 pb-section-padding-desktop">
        {/* Hero Featured Section */}
        <section className="max-w-container-max mx-auto px-gutter mb-20 relative">
          <div className="glow-effect -top-20 -left-20"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-7 z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-primary-container/20 text-primary font-label-mono text-label-mono mb-6 uppercase tracking-wider">
                Featured Insight
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6">
                Architecting the Next Era of Distributed Systems
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl">
                A deep dive into how modern orchestration layers are redefining
                scalability for enterprise-grade SaaS applications. Exploring
                latency, resilience, and the future of edge computing.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                  <img
                    className="w-full h-full object-cover"
                    alt="Alex Rivera"
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
                  />
                </div>
                <div>
                  <p className="font-body-md text-body-md font-semibold text-on-surface">
                    Alex Rivera
                  </p>
                  <p className="font-label-mono text-xs text-on-surface-variant">
                    Lead Systems Architect • 12 min read
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative group">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10 glass-card">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Distributed Systems Architecture"
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 blur-3xl -z-10 group-hover:bg-primary/40 transition-all"></div>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="max-w-container-max mx-auto px-gutter mb-12 sticky top-20 z-40">
          <div className="flex flex-col md:flex-row justify-between items-center bg-surface-container-low/90 backdrop-blur-md p-4 rounded-2xl border border-white/5 gap-4">
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-body-md text-sm whitespace-nowrap">
                All Insights
              </button>
              <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-sm whitespace-nowrap">
                Tech
              </button>
              <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-sm whitespace-nowrap">
                Design
              </button>
              <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-sm whitespace-nowrap">
                Strategy
              </button>
            </div>
            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" />
              <input
                ref={searchInputRef}
                className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary rounded-full pl-12 pr-6 py-3 font-body-md text-sm text-on-surface placeholder:text-on-surface-variant/50 outline-none"
                placeholder="Search articles..."
                type="text"
              />
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <article className="glass-card rounded-2xl overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Keyboard backlighting"
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-primary font-label-mono text-[10px] uppercase border border-white/10">
                    Tech
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="font-label-mono text-xs text-on-surface-variant mb-3">
                  Oct 12, 2024
                </p>
                <h3 className="font-headline-md text-xl text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  The Rust Revolution: Why We&apos;re Porting Our Core Engines
                </h3>
                <p className="font-body-md text-on-surface-variant mb-6 line-clamp-3">
                  Performance is no longer optional. Learn why memory safety and
                  zero-cost abstractions are becoming the foundation of our new
                  development stack.
                </p>
                <Link
                  href="/insights/rust-revolution"
                  className="inline-flex items-center gap-2 text-primary font-body-md font-semibold hover:gap-4 transition-all"
                >
                  Read Post{" "}
                  <ArrowRight className="text-sm" />
                </Link>
              </div>
            </article>

            {/* Card 2 */}
            <article className="glass-card rounded-2xl overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="UI/UX design workspace"
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-secondary font-label-mono text-[10px] uppercase border border-white/10">
                    Design
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="font-label-mono text-xs text-on-surface-variant mb-3">
                  Oct 08, 2024
                </p>
                <h3 className="font-headline-md text-xl text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  Micro-interactions: The Secret to High-Retention Apps
                </h3>
                <p className="font-body-md text-on-surface-variant mb-6 line-clamp-3">
                  How subtle animations and haptic feedback loops create an
                  emotional connection between users and their digital interfaces.
                </p>
                <Link
                  href="/insights/micro-interactions"
                  className="inline-flex items-center gap-2 text-primary font-body-md font-semibold hover:gap-4 transition-all"
                >
                  Read Post{" "}
                  <ArrowRight className="text-sm" />
                </Link>
              </div>
            </article>

            {/* Card 3 */}
            <article className="glass-card rounded-2xl overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Meeting room"
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-tertiary font-label-mono text-[10px] uppercase border border-white/10">
                    Strategy
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="font-label-mono text-xs text-on-surface-variant mb-3">
                  Sep 30, 2024
                </p>
                <h3 className="font-headline-md text-xl text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  Bridging the Gap: CTO to CEO Communication
                </h3>
                <p className="font-body-md text-on-surface-variant mb-6 line-clamp-3">
                  How to translate technical debt and architectural choices into
                  business value and long-term ROI for stakeholders.
                </p>
                <Link
                  href="/insights/cto-ceo-communication"
                  className="inline-flex items-center gap-2 text-primary font-body-md font-semibold hover:gap-4 transition-all"
                >
                  Read Post{" "}
                  <ArrowRight className="text-sm" />
                </Link>
              </div>
            </article>

            {/* Card 4 */}
            <article className="glass-card rounded-2xl overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Server room"
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-primary font-label-mono text-[10px] uppercase border border-white/10">
                    Tech
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="font-label-mono text-xs text-on-surface-variant mb-3">
                  Sep 25, 2024
                </p>
                <h3 className="font-headline-md text-xl text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  Serverless at Scale: Challenges and Solutions
                </h3>
                <p className="font-body-md text-on-surface-variant mb-6 line-clamp-3">
                  Moving beyond simple functions. Real-world architectural patterns
                  for large-scale serverless deployments in global markets.
                </p>
                <Link
                  href="/insights/serverless-scale"
                  className="inline-flex items-center gap-2 text-primary font-body-md font-semibold hover:gap-4 transition-all"
                >
                  Read Post{" "}
                  <ArrowRight className="text-sm" />
                </Link>
              </div>
            </article>

            {/* Card 5 */}
            <article className="glass-card rounded-2xl overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Abstract shapes"
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-secondary font-label-mono text-[10px] uppercase border border-white/10">
                    Design
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="font-label-mono text-xs text-on-surface-variant mb-3">
                  Sep 18, 2024
                </p>
                <h3 className="font-headline-md text-xl text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  The Aesthetics of Technical Clarity
                </h3>
                <p className="font-body-md text-on-surface-variant mb-6 line-clamp-3">
                  Why minimalism is the superior choice for high-data dashboards
                  and developer interfaces. Lessons from the best in the industry.
                </p>
                <Link
                  href="/insights/technical-clarity"
                  className="inline-flex items-center gap-2 text-primary font-body-md font-semibold hover:gap-4 transition-all"
                >
                  Read Post{" "}
                  <ArrowRight className="text-sm" />
                </Link>
              </div>
            </article>

            {/* Card 6 */}
            <article className="glass-card rounded-2xl overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Tablet showing timelines"
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-tertiary font-label-mono text-[10px] uppercase border border-white/10">
                    Strategy
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="font-label-mono text-xs text-on-surface-variant mb-3">
                  Sep 12, 2024
                </p>
                <h3 className="font-headline-md text-xl text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  Scaling Teams Without Diluting Quality
                </h3>
                <p className="font-body-md text-on-surface-variant mb-6 line-clamp-3">
                  Engineering management strategies for growing from 10 to 100
                  engineers while maintaining a culture of excellence and
                  craftsmanship.
                </p>
                <Link
                  href="/insights/scaling-teams"
                  className="inline-flex items-center gap-2 text-primary font-body-md font-semibold hover:gap-4 transition-all"
                >
                  Read Post{" "}
                  <ArrowRight className="text-sm" />
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="max-w-container-max mx-auto px-gutter mt-section-padding-desktop">
          <div className="relative overflow-hidden rounded-3xl p-12 lg:p-20 bg-surface-container-low border border-white/10">
            <div className="glow-effect -bottom-40 -right-40"></div>
            <div className="max-w-2xl relative z-10">
              <h2 className="font-display-lg text-headline-md md:text-display-lg-mobile text-on-surface mb-6">
                Stay ahead of the stack.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
                Get the latest insights on engineering architecture, design
                systems, and product strategy delivered directly to your inbox. No
                spam, just technical excellence.
              </p>
              <form
                className="flex flex-col sm:flex-row gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  className="flex-grow bg-surface-container-lowest border-white/10 focus:ring-1 focus:ring-primary rounded-xl px-6 py-4 font-body-md text-on-surface placeholder:text-on-surface-variant/40"
                  placeholder="Enter your work email"
                  type="email"
                />
                <button className="bg-primary text-on-primary font-body-md font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-transform duration-200 shadow-lg shadow-primary/20">
                  Subscribe Now
                </button>
              </form>
              <p className="font-label-mono text-[10px] text-on-surface-variant/50 mt-4">
                Join 2,500+ CTOs and product leads reading our weekly digest.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
