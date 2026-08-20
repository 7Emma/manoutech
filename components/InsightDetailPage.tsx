"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Share2, Bookmark, CheckCircle2, Terminal } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function InsightDetailPage({ slug }: { slug: string }) {
  // Mock data based on the slug to show dynamic behavior
  const title = slug.includes("rust") 
    ? "The Rust Revolution: Why We're Porting Our Core Engines"
    : slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="bg-background min-h-screen pt-32 pb-section-padding-desktop">
      <div className="max-w-4xl mx-auto px-gutter">
        {/* Navigation & Actions */}
        <div className="flex justify-between items-center mb-12">
          <Link 
            href="/insights" 
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-body-md font-medium"
          >
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <div className="flex gap-4">
            <button className="p-2 rounded-full border border-white/10 text-on-surface-variant hover:text-primary hover:border-primary/50 transition-all">
              <Bookmark size={18} />
            </button>
            <button className="p-2 rounded-full border border-white/10 text-on-surface-variant hover:text-primary hover:border-primary/50 transition-all">
              <Share2 size={18} />
            </button>
          </div>
        </div>

        <FadeIn direction="up">
          {/* Header */}
          <header className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-label-mono text-[10px] uppercase border border-white/10">
                Tech Architecture
              </span>
              <span className="font-label-mono text-xs text-on-surface-variant">
                Oct 12, 2024 • 12 min read
              </span>
            </div>
            <h1 className="font-display-lg text-4xl md:text-6xl text-on-surface mb-8 leading-tight">
              {title}
            </h1>
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
                  Lead Systems Architect
                </p>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-16 border border-white/10 glass-card p-2 relative">
             <div className="glow-effect -top-20 -left-20"></div>
            <img
              className="w-full h-full object-cover rounded-2xl relative z-10"
              alt="Cover Image"
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000"
            />
          </div>

          {/* Content Body */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display-lg prose-p:text-on-surface-variant prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            <p className="text-xl leading-relaxed mb-8">
              Performance is no longer optional. In an era where milliseconds dictate user retention and infrastructure costs are under constant scrutiny, the languages we choose to build our foundational systems matter more than ever.
            </p>
            
            <h2 className="text-3xl font-headline-md mt-12 mb-6 text-on-surface">The Limits of the Old Paradigm</h2>
            <p className="mb-6">
              For years, we relied on high-level languages with garbage collection for rapid iteration. While this served us well during our growth phase, scaling to millions of concurrent connections exposed the hidden costs: unpredictable GC pauses, massive memory footprints, and concurrency models that led to subtle race conditions.
            </p>

            <div className="glass-card p-6 rounded-2xl my-10 border-l-4 border-l-primary flex gap-4">
              <Terminal className="text-primary shrink-0" />
              <p className="text-sm font-label-mono text-on-surface-variant m-0">
                "We didn't just want a faster language; we needed a language that made it impossible to write data races."
              </p>
            </div>

            <h2 className="text-3xl font-headline-md mt-12 mb-6 text-on-surface">Why Rust?</h2>
            <p className="mb-6">
              The decision to adopt Rust wasn't taken lightly. The learning curve is steep, and it requires a fundamental shift in how engineers think about memory ownership and lifetimes. However, the benefits have been transformational:
            </p>

            <ul className="space-y-4 mb-8 list-none pl-0">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                <span><strong className="text-on-surface">Zero-Cost Abstractions:</strong> We can write highly expressive code without paying a runtime performance penalty.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                <span><strong className="text-on-surface">Fearless Concurrency:</strong> The borrow checker guarantees thread safety at compile time. Data races are literally impossible to compile.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                <span><strong className="text-on-surface">Predictable Performance:</strong> No garbage collector means flat p99 latencies, crucial for our real-time trading APIs.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-headline-md mt-12 mb-6 text-on-surface">The Migration Strategy</h2>
            <p className="mb-6">
              We didn't rewrite everything at once. We started by identifying our most CPU-intensive microservices—specifically our real-time websocket router and our cryptographic signing service. By rewriting these bottlenecks in Rust and exposing them via FFI (Foreign Function Interface) or gRPC, we achieved a <strong>400% increase in throughput</strong> and a <strong>60% reduction in memory usage</strong>.
            </p>
            <p>
              This is just the beginning. As our team's proficiency grows, Rust is becoming the default choice for all new mission-critical infrastructure at ManouTech.
            </p>
          </div>

          {/* Author Footer */}
          <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10">
                <img
                  className="w-full h-full object-cover"
                  alt="Alex Rivera"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
                />
              </div>
              <div>
                <p className="font-headline-md text-xl text-on-surface">Alex Rivera</p>
                <p className="font-body-md text-on-surface-variant">Lead Systems Architect @ ManouTech</p>
              </div>
            </div>
            <button className="px-6 py-3 rounded-full bg-surface-container text-on-surface-variant hover:bg-white hover:text-black font-semibold transition-colors">
              Follow on Twitter
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
