"use client";

import BlogList from "@/components/BlogList";
import { allPosts } from "contentlayer/generated";

export default function BlogPage() {
  return <BlogList limit={allPosts.length || 6} posts={allPosts} />;
}
