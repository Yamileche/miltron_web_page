import type { Metadata } from "next";
import { BlogExplorer } from "@/components/blog/blog-explorer";
import { BlogHeader } from "@/components/blog/blog-header";
import { getAllPostMetadata, getAllTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog técnico",
  description: "Notas sobre backend, Rust, agentes con LLMs, LangGraph, cloud y arquitectura de software.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog técnico | Milton Velazquez",
    description: "Aprendizajes sobre backend, AI Engineering, cloud y Rust.",
    url: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPostMetadata();
  const tags = getAllTags();

  return (
    <div className="blog-page">
      <div className="container container--narrow">
        <BlogHeader postCount={posts.length} />
        <BlogExplorer posts={posts} tags={tags} />
      </div>
    </div>
  );
}
