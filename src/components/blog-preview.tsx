import { ArrowRight, Clock3 } from "lucide-react";
import Link from "next/link";
import { formatPostDate, getAllPosts } from "@/lib/blog";
import { SectionHeading } from "@/components/ui/section-heading";

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="section" id="blog">
      <div className="container">
        <SectionHeading
          eyebrow="06 / Blog técnico"
          title="Notas desde el proceso."
          description="Lo que aprendo sobre Rust, agentes, backend y arquitectura, explicado mientras lo construyo."
        />
        <div className="blog-preview-grid">
          {posts.map((post, index) => (
            <article className="blog-preview-card" key={post.slug}>
              <div className="blog-preview-meta">
                <span>#{String(index + 1).padStart(2, "0")}</span>
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              </div>
              <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
              <p>{post.description}</p>
              <ul className="post-tags" aria-label="Temas">
                {post.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <Link className="read-link" href={`/blog/${post.slug}`}>
                <Clock3 aria-hidden="true" /> {post.readingTime} min <span>Leer ↗</span>
              </Link>
            </article>
          ))}
        </div>
        <Link className="all-posts-link" href="/blog">Ver todos los artículos <ArrowRight aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
