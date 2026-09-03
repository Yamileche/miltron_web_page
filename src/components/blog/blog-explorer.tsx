"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { BlogPostMeta } from "@/lib/blog";

type BlogExplorerProps = {
  posts: BlogPostMeta[];
  tags: string[];
};

export function BlogExplorer({ posts, tags }: BlogExplorerProps) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("Todos");

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("es");
    return posts.filter((post) => {
      const matchesTitle = post.title.toLocaleLowerCase("es").includes(normalized);
      const matchesTag = activeTag === "Todos" || post.tags.includes(activeTag);
      return matchesTitle && matchesTag;
    });
  }, [activeTag, posts, query]);

  return (
    <>
      <div className="blog-controls">
        <label className="search-field">
          <Search aria-hidden="true" />
          <span className="sr-only">Buscar por título</span>
          <input
            type="search"
            placeholder="Buscar por título…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <div className="tag-filters" aria-label="Filtrar por tema">
          {["Todos", ...tags].map((tag) => (
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
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>{post.readingTime} min</span>
            </div>
            <div>
              <h2>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p>{post.description}</p>
              <ul className="post-tags" aria-label="Temas">
                {post.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <Link className="post-arrow" href={`/blog/${post.slug}`} aria-label={`Leer ${post.title}`}>
              ↗
            </Link>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <p className="empty-state">No encontré artículos con esos filtros.</p>
      ) : null}
    </>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
