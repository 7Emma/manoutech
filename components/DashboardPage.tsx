"use client";
import { LayoutDashboard, CheckSquare, FileText, Settings, TrendingUp, Wallet, ListChecks, Image, Video, MessageSquare, ArrowRight, Bell, Search, Download } from 'lucide-react';

import React, { useEffect } from "react";
import Link from "next/link";

export default function DashboardPage() {
  useEffect(() => {
    // Micro-interactions for dashboard elements
    const cards = document.querySelectorAll(".glass-card");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        (card as HTMLElement).style.transform = "translateY(-4px)";
        (card as HTMLElement).style.transition =
          "transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)";
      });
      card.addEventListener("mouseleave", () => {
        (card as HTMLElement).style.transform = "translateY(0)";
      });
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  const handleSearchClick = () => {
    alert("Opening command palette...");
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden text-on-surface font-body-md">
      {/* Sidebar Navigation */}
      <aside className="w-72 bg-surface-container-lowest border-r border-white/5 flex-col hidden lg:flex">
        <div className="p-8">
          <Link
            href="/"
            className="font-display-lg text-headline-md tracking-tighter text-on-surface font-extrabold"
          >
            ManouTech
          </Link>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary-container text-on-primary-container font-semibold transition-all duration-200"
          >
            <LayoutDashboard />
            <span className="font-body-md text-body-md">Overview</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-300"
          >
            <CheckSquare />
            <span className="font-body-md text-body-md">Tasks</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-300"
          >
            <FileText />
            <span className="font-body-md text-body-md">Documents</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-300"
          >
            <Settings />
            <span className="font-body-md text-body-md">Settings</span>
          </Link>
        </nav>
        {/* Support Module Pin */}
        <div className="p-6 border-t border-white/5">
          <div className="glass-card p-4 rounded-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/30">
                <img
                  className="w-full h-full object-cover"
                  alt="Sarah Chen"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
                />
              </div>
              <div>
                <p className="font-body-md text-body-md font-semibold text-on-surface">
                  Sarah Chen
                </p>
                <p className="font-label-mono text-[11px] text-primary">
                  Project Lead
                </p>
              </div>
            </div>
            <button className="w-full py-2 px-4 bg-surface-variant text-on-surface text-sm rounded-lg hover:bg-primary/20 transition-all">
              Message Sarah
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto relative">
        {/* Atmospheric Glow Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        {/* Top App Bar */}
        <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-xl border-b border-white/5 px-8 py-4 flex justify-between items-center">
          <div className="lg:hidden">
            <Link
              href="/"
              className="font-display-lg text-headline-md tracking-tighter text-on-surface font-extrabold"
            >
              M.
            </Link>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <div className="hidden md:block">
              <span className="font-body-md text-body-md text-on-surface-variant">
                Welcome back,
              </span>
              <span className="font-body-md text-body-md font-bold text-on-surface ml-1">
                Nexus Corp
              </span>
            </div>
            <div className="w-px h-6 bg-white/10 hidden md:block mx-2"></div>
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
              <Bell />
            </button>
            <button
              className="p-2 text-on-surface-variant hover:text-primary transition-colors"
              onClick={handleSearchClick}
            >
              <Search />
            </button>
          </div>
        </header>

        <div className="max-w-container-max mx-auto p-gutter space-y-8 pb-20">
          {/* Page Header */}
          <section className="space-y-2 mt-8">
            <h1 className="font-display-lg text-headline-md text-on-surface">
              Project Dashboard
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              CloudInfrastructure Core 2.0 • Active Development
            </p>
          </section>

          {/* Key Metrics & Status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="glass-card p-6 rounded-2xl glow-indigo-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="font-label-mono text-label-mono text-primary">
                  PROJECT PROGRESS
                </span>
                <TrendingUp className="text-primary" />
              </div>
              <div className="flex items-end justify-between">
                <span className="font-display-lg text-headline-md text-on-surface">
                  68%
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant mb-1">
                  On schedule
                </span>
              </div>
              <div className="w-full h-1.5 bg-surface-container-high rounded-full mt-4 overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: "68%" }}
                ></div>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <span className="font-label-mono text-label-mono text-secondary">
                  BILLING STATUS
                </span>
                <Wallet className="text-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="font-display-lg text-headline-md text-on-surface">
                  $12,400
                </span>
                <span className="font-label-mono text-[12px] text-on-surface-variant flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span> Next
                  invoice in 4 days
                </span>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <span className="font-label-mono text-label-mono text-tertiary">
                  TASKS PENDING
                </span>
                <ListChecks className="text-tertiary" />
              </div>
              <div className="flex flex-col">
                <span className="font-display-lg text-headline-md text-on-surface">
                  12
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant">
                  4 priority reviews required
                </span>
              </div>
            </div>
          </div>

          {/* Main Grid: Roadmap & Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Roadmap / Timeline */}
            <section className="lg:col-span-8 glass-card rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/5 flex justify-between items-center">
                <h2 className="font-headline-md text-on-surface text-xl">
                  Project Timeline
                </h2>
                <div className="flex gap-2">
                  <button className="px-3 py-1 rounded-lg text-xs font-label-mono bg-surface-container-high text-on-surface">
                    Monthly
                  </button>
                  <button className="px-3 py-1 rounded-lg text-xs font-label-mono text-on-surface-variant hover:bg-surface-container-low">
                    Weekly
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-8">
                {/* Timeline Entry */}
                <div className="relative pl-8 border-l border-white/10 space-y-4">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary ring-4 ring-primary/20"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-body-lg text-body-lg font-semibold text-on-surface">
                        Sprint 04: Backend Architecture
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Microservices implementation and API Gateway routing.
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-label-mono border border-primary/20 whitespace-nowrap self-start">
                      IN PROGRESS
                    </span>
                  </div>
                </div>
                <div className="relative pl-8 border-l border-white/10 space-y-4">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-body-lg text-body-lg font-semibold text-on-surface-variant">
                        Sprint 05: Frontend Core Shell
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant/60">
                        Dynamic routing and state management optimization.
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-on-surface-variant/40 text-[10px] font-label-mono border border-white/5 whitespace-nowrap self-start">
                      UPCOMING
                    </span>
                  </div>
                </div>
                <div className="relative pl-8 border-l border-white/10 space-y-4">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-body-lg text-body-lg font-semibold text-on-surface-variant">
                        Sprint 06: Quality Assurance
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant/60">
                        Automated testing suites and security auditing.
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-on-surface-variant/40 text-[10px] font-label-mono border border-white/5 whitespace-nowrap self-start">
                      Q3 2024
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Recent Files */}
            <section className="lg:col-span-4 space-y-gutter">
              <div className="glass-card rounded-2xl p-6">
                <h2 className="font-headline-md text-on-surface text-xl mb-6">
                  Recent Assets
                </h2>
                <div className="space-y-4">
                  {/* File Item */}
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      <FileText />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body-md text-body-md font-medium text-on-surface truncate">
                        api_spec_v2.pdf
                      </p>
                      <p className="font-label-mono text-[11px] text-on-surface-variant uppercase">
                        Shared yesterday • 2.4MB
                      </p>
                    </div>
                    <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">
                      <Download />
                    </button>
                  </div>
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary group-hover:bg-secondary/20 transition-colors">
                      <Image />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body-md text-body-md font-medium text-on-surface truncate">
                        branding_assets_final.zip
                      </p>
                      <p className="font-label-mono text-[11px] text-on-surface-variant uppercase">
                        Shared Oct 12 • 45MB
                      </p>
                    </div>
                    <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">
                      <Download />
                    </button>
                  </div>
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-tertiary group-hover:bg-tertiary/20 transition-colors">
                      <Video />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body-md text-body-md font-medium text-on-surface truncate">
                        demo_recording_s03.mp4
                      </p>
                      <p className="font-label-mono text-[11px] text-on-surface-variant uppercase">
                        Shared Oct 08 • 120MB
                      </p>
                    </div>
                    <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">
                      <Download />
                    </button>
                  </div>
                </div>
                <button className="w-full mt-6 py-3 text-sm font-label-mono text-primary border border-primary/20 rounded-xl hover:bg-primary/5 transition-colors">
                  View All Documents
                </button>
              </div>

              {/* Direct Communication Quick Card */}
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <MessageSquare className="text-6xl" />
                </div>
                <h3 className="font-body-lg text-body-lg font-bold text-on-surface mb-2">
                  Need a sync?
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-4">
                  Direct access to your dedicated lead for any blockers.
                </p>
                <button className="flex items-center gap-2 font-label-mono text-primary text-sm font-bold">
                  OPEN SECURE CHANNEL{" "}
                  <ArrowRight className="text-sm" />
                </button>
              </div>
            </section>
          </div>

          {/* Invoicing Table */}
          <section className="glass-card rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/5">
              <h2 className="font-headline-md text-on-surface text-xl">
                Billing History
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-surface-container-low">
                  <tr className="text-on-surface-variant font-label-mono text-[11px] uppercase tracking-wider">
                    <th className="px-6 py-4">Invoice ID</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Date Issued</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-label-mono text-on-surface">
                      #MT-2024-009
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[10px] font-bold bg-green-500/10 text-green-400 border border-green-500/20 uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>{" "}
                        Paid
                      </span>
                    </td>
                    <td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">
                      Oct 01, 2024
                    </td>
                    <td className="px-6 py-4 font-body-md text-body-md text-on-surface">
                      $5,200.00
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary hover:underline font-label-mono text-xs">
                        PDF
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-label-mono text-on-surface">
                      #MT-2024-010
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>{" "}
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">
                      Nov 01, 2024
                    </td>
                    <td className="px-6 py-4 font-body-md text-body-md text-on-surface">
                      $7,200.00
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary hover:underline font-label-mono text-xs">
                        Pay Now
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>

      {/* Mobile Navigation (Bottom Bar) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface/90 backdrop-blur-xl border-t border-white/10 z-50 px-6 py-3">
        <div className="flex justify-between items-center">
          <Link
            href="/dashboard"
            className="flex flex-col items-center gap-1 text-primary"
          >
            <LayoutDashboard />
            <span className="text-[10px] font-label-mono">OVERVIEW</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center gap-1 text-on-surface-variant"
          >
            <CheckSquare />
            <span className="text-[10px] font-label-mono">TASKS</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center gap-1 text-on-surface-variant"
          >
            <FileText />
            <span className="text-[10px] font-label-mono">DOCS</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center gap-1 text-on-surface-variant"
          >
            <Settings />
            <span className="text-[10px] font-label-mono">SETTINGS</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
