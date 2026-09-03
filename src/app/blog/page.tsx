import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlogExplorer } from "@/components/blog/blog-explorer";
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
        <Link className="back-link" href="/"><ArrowLeft aria-hidden="true" /> Volver al portfolio</Link>
        <header className="blog-header">
          <p className="eyebrow">~/writing</p>
          <h1>Notas técnicas</h1>
          <p>
            Aprendizajes, experimentos y preguntas abiertas sobre backend, agentes de AI, cloud y Rust.
          </p>
          <div className="blog-stat"><strong>{posts.length}</strong><span>artículos publicados</span></div>
        </header>
        <BlogExplorer posts={posts} tags={tags} />
      </div>
    </div>
  );
}
