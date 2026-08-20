"use client";
import { ArrowRight, AtSign, Share2 } from 'lucide-react';

import React, { useState, useEffect } from "react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Equinox SaaS Analytics",
    category: "web",
    description: "Enterprise-grade financial monitoring platform processing millions of real-time transactions daily.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: 2,
    title: "NeuralStream AI",
    category: "ai",
    description: "Predictive content generation engine for global media houses, reducing production time by 40%.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2000",
    tags: ["Python", "PyTorch", "LLM"],
  },
  {
    id: 3,
    title: "Zenith Wellness App",
    category: "mobile",
    description: "Award-winning health tracking application with biometric integration and offline-first architecture.",
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=2000",
    tags: ["Flutter", "Dart", "Firebase"],
  },
  {
    id: 4,
    title: "Axis Real Estate Portal",
    category: "web",
    description: "High-fidelity 3D property visualization platform for luxury real estate developers globally.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000",
    tags: ["React", "Three.js", "WebGL"],
  },
  {
    id: 5,
    title: "SecureNode Shield",
    category: "ai",
    description: "Self-healing security infrastructure powered by machine learning for enterprise cloud clusters.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000",
    tags: ["Rust", "Go", "Kubernetes"],
  },
  {
    id: 6,
    title: "Gourmet Guide iOS",
    category: "mobile",
    description: "Premium culinary exploration app featuring hyper-local recommendations and high-speed image delivery.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=2000",
    tags: ["Swift", "SwiftUI", "GraphQL"],
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  

  return (
    <div className="bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden font-body-md min-h-screen">
      <div className="noise-overlay"></div>

      {/* Navigation Shell */}
      

      {/* Hero / Portfolio Header */}
      <header className="relative pt-40 pb-20 px-gutter overflow-hidden">
        <div className="max-w-container-max mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary font-label-mono text-label-mono mb-6">
            CASE STUDIES &amp; SOLUTIONS
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight max-w-4xl mx-auto">
            Engineering the next era of digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              excellence.
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            A selection of high-impact engineering projects ranging from complex AI
            infrastructures to seamless cross-platform mobile experiences.
          </p>

          {/* Filter UI */}
          <div className="flex flex-wrap justify-center gap-3 mb-16" id="filter-container">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full font-body-md text-body-md border border-outline/30 transition-all ${
                filter === "all" ? "active-filter border-transparent" : "text-on-surface hover:border-primary"
              }`}
            >
              All Works
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-6 py-2 rounded-full font-body-md text-body-md border border-outline/30 transition-all ${
                filter === "web" ? "active-filter border-transparent" : "text-on-surface hover:border-primary"
              }`}
            >
              Web Apps
            </button>
            <button
              onClick={() => setFilter("mobile")}
              className={`px-6 py-2 rounded-full font-body-md text-body-md border border-outline/30 transition-all ${
                filter === "mobile" ? "active-filter border-transparent" : "text-on-surface hover:border-primary"
              }`}
            >
              Mobile Experience
            </button>
            <button
              onClick={() => setFilter("ai")}
              className={`px-6 py-2 rounded-full font-body-md text-body-md border border-outline/30 transition-all ${
                filter === "ai" ? "active-filter border-transparent" : "text-on-surface hover:border-primary"
              }`}
            >
              AI Systems
            </button>
          </div>
        </div>
      </header>

      {/* Portfolio Gallery */}
      <main className="max-w-container-max mx-auto px-gutter pb-section-padding-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" id="project-grid">
          {projects
            .filter((p) => filter === "all" || p.category === filter)
            .map((project) => (
              <article
                key={project.id}
                className="project-item group transition-all duration-300 transform scale-100 opacity-100"
              >
                <div className="glass-card project-card rounded-2xl overflow-hidden cursor-pointer h-full">
                  <div className="project-image-container relative aspect-[16/10] overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      alt={project.title}
                      src={project.image}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="bg-primary text-on-primary-container px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-xl">
                        View Case Study{" "}
                        <ArrowRight className="text-sm" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-label-mono text-xs px-3 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-headline-md text-headline-md mb-2">
                      {project.title}
                    </h3>
                    <p className="text-on-surface-variant font-body-md">
                      {project.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </main>

      {/* Footer Shell */}
      
    </div>
  );
}
