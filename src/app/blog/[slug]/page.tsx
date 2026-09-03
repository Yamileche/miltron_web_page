import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/blog/markdown-content";
import { formatPostDate, getAdjacentPosts, getAllPosts, getPostBySlug } from "@/lib/blog";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: { card: "summary", title: post.title, description: post.description },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { newer, older } = getAdjacentPosts(post.slug);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: "Milton Yamil Velazquez Montoya" },
  };

  return (
    <article className="article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <div className="article-shell">
        <Link className="back-link" href="/blog"><ArrowLeft aria-hidden="true" /> Todos los artículos</Link>
        <header className="article-header">
          <ul className="post-tags" aria-label="Temas">{post.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <div className="article-meta">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span><Clock3 aria-hidden="true" /> {post.readingTime} min de lectura</span>
          </div>
        </header>
        <MarkdownContent content={post.content} />
        <nav className="article-navigation" aria-label="Navegación entre artículos">
          {older ? (
            <Link href={`/blog/${older.slug}`}>
              <span><ArrowLeft aria-hidden="true" /> Anterior</span>
              <strong>{older.title}</strong>
            </Link>
          ) : <span />}
          {newer ? (
            <Link href={`/blog/${newer.slug}`}>
              <span>Siguiente <ArrowRight aria-hidden="true" /></span>
              <strong>{newer.title}</strong>
            </Link>
          ) : null}
        </nav>
      </div>
    </article>
  );
}
