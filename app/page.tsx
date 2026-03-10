"use client";

import BlogList from "@/components/BlogList";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import ProjectCards from "@/components/ProjectCards";
import ServicesGrid from "@/components/ServicesGrid";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl space-y-20">
      <Hero />
      <ServicesGrid />
      <ProjectCards />
      <BlogList />
      <CTA />
    </div>
  );
}
