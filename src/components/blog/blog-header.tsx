"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export function BlogHeader({ postCount }: { postCount: number }) {
  const { language } = useLanguage();
  const english = language === "en";

  return (
    <>
      <Link className="back-link" href="/"><ArrowLeft aria-hidden="true" /> {english ? "Back to portfolio" : "Volver al portfolio"}</Link>
      <header className="blog-header">
        <p className="eyebrow">~/writing</p>
        <h1>{english ? "Technical notes" : "Notas técnicas"}</h1>
        <p>{english ? "Learnings, experiments and open questions about backend, AI agents, cloud and Rust." : "Aprendizajes, experimentos y preguntas abiertas sobre backend, agentes de AI, cloud y Rust."}</p>
        <div className="blog-stat"><strong>{postCount}</strong><span>{english ? "published articles" : "artículos publicados"}</span></div>
      </header>
    </>
  );
}
