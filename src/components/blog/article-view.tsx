"use client";

import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import type { BlogPost } from "@/lib/blog";
import { useLanguage } from "@/components/language-provider";

type ArticleViewProps = {
  post: BlogPost;
  newer?: BlogPost;
  older?: BlogPost;
  spanishContent: ReactNode;
  englishContent?: ReactNode;
};

function formatDate(date: string, english: boolean) {
  return new Intl.DateTimeFormat(english ? "en-US" : "es-MX", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function ArticleView({ post, newer, older, spanishContent, englishContent }: ArticleViewProps) {
  const { language } = useLanguage();
  const english = language === "en";
  const localizedPost = english && post.translation ? { ...post, ...post.translation } : post;
  const titleFor = (article: BlogPost) => english && article.translation ? article.translation.title : article.title;

  return (
    <article className="article-page">
      <div className="article-shell">
        <Link className="back-link" href="/blog"><ArrowLeft aria-hidden="true" /> {english ? "All articles" : "Todos los artículos"}</Link>
        <header className="article-header">
          <ul className="post-tags" aria-label={english ? "Topics" : "Temas"}>{post.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          <h1>{localizedPost.title}</h1>
          <p>{localizedPost.description}</p>
          <div className="article-meta">
            <time dateTime={post.date}>{formatDate(post.date, english)}</time>
            <span><Clock3 aria-hidden="true" /> {post.readingTime} {english ? "min read" : "min de lectura"}</span>
          </div>
        </header>
        {english && englishContent ? englishContent : spanishContent}
        <nav className="article-navigation" aria-label={english ? "Article navigation" : "Navegación entre artículos"}>
          {older ? (
            <Link href={`/blog/${older.slug}`}>
              <span><ArrowLeft aria-hidden="true" /> {english ? "Previous" : "Anterior"}</span>
              <strong>{titleFor(older)}</strong>
            </Link>
          ) : <span />}
          {newer ? (
            <Link href={`/blog/${newer.slug}`}>
              <span>{english ? "Next" : "Siguiente"} <ArrowRight aria-hidden="true" /></span>
              <strong>{titleFor(newer)}</strong>
            </Link>
          ) : null}
        </nav>
      </div>
    </article>
  );
}
