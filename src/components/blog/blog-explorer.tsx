"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { BlogPostMeta } from "@/lib/blog";
import { useLanguage } from "@/components/language-provider";

type BlogExplorerProps = {
  posts: BlogPostMeta[];
  tags: string[];
};

export function BlogExplorer({ posts, tags }: BlogExplorerProps) {
  const { language } = useLanguage();
  const english = language === "en";
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("Todos");

  useEffect(() => {
    setActiveTag(english ? "All" : "Todos");
  }, [english]);

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("es");
    return posts.filter((post) => {
      const title = english && post.translation ? post.translation.title : post.title;
      const matchesTitle = title.toLocaleLowerCase(english ? "en" : "es").includes(normalized);
      const matchesTag = activeTag === (english ? "All" : "Todos") || post.tags.includes(activeTag);
      return matchesTitle && matchesTag;
    });
  }, [activeTag, english, posts, query]);

  return (
    <>
      <div className="blog-controls">
        <label className="search-field">
          <Search aria-hidden="true" />
          <span className="sr-only">{english ? "Search by title" : "Buscar por título"}</span>
          <input
            type="search"
            placeholder={english ? "Search by title…" : "Buscar por título…"}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <div className="tag-filters" aria-label={english ? "Filter by topic" : "Filtrar por tema"}>
          {[(english ? "All" : "Todos"), ...tags].map((tag) => (
            <button
              type="button"
              key={tag}
              className={activeTag === tag ? "filter-chip filter-chip--active" : "filter-chip"}
              onClick={() => setActiveTag(tag)}
              aria-pressed={activeTag === tag}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="post-list">
        {filteredPosts.map((post) => (
          <article className="post-row" key={post.slug}>
            <div className="post-row-meta">
              <time dateTime={post.date}>{formatDate(post.date, english)}</time>
              <span>{post.readingTime} {english ? "min read" : "min"}</span>
            </div>
            <div>
              <h2>
                <Link href={`/blog/${post.slug}`}>{english && post.translation ? post.translation.title : post.title}</Link>
              </h2>
              <p>{english && post.translation ? post.translation.description : post.description}</p>
              <ul className="post-tags" aria-label={english ? "Topics" : "Temas"}>
                {post.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <Link className="post-arrow" href={`/blog/${post.slug}`} aria-label={`${english ? "Read" : "Leer"} ${english && post.translation ? post.translation.title : post.title}`}>
              ↗
            </Link>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <p className="empty-state">{english ? "No articles matched those filters." : "No encontré artículos con esos filtros."}</p>
      ) : null}
    </>
  );
}

function formatDate(date: string, english: boolean) {
  return new Intl.DateTimeFormat(english ? "en-US" : "es-MX", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
