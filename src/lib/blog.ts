import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIRECTORY = path.join(process.cwd(), "content", "blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
  readingTime: number;
  translation?: {
    title: string;
    description: string;
  };
};

export type BlogPost = BlogPostMeta & {
  content: string;
  translation?: BlogPostMeta["translation"] & { content: string };
};

function readingMinutes(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 210));
}

function parsePost(fileName: string): BlogPost {
  const slug = fileName.replace(/\.mdx?$/, "");
  const source = fs.readFileSync(path.join(BLOG_DIRECTORY, fileName), "utf8");
  const { data, content } = matter(source);

  if (!data.title || !data.description || !data.date) {
    throw new Error(`El artículo "${fileName}" requiere title, description y date.`);
  }

  const translationPath = path.join(BLOG_DIRECTORY, "en", fileName);
  const translation = fs.existsSync(translationPath)
    ? matter(fs.readFileSync(translationPath, "utf8"))
    : undefined;

  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    date: String(data.date),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    published: data.published !== false,
    readingTime: readingMinutes(content),
    content,
    translation: translation && translation.data.title && translation.data.description
      ? {
          title: String(translation.data.title),
          description: String(translation.data.description),
          content: translation.content,
        }
      : undefined,
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIRECTORY)) return [];

  return fs
    .readdirSync(BLOG_DIRECTORY)
    .filter((fileName) => /\.mdx?$/.test(fileName))
    .map(parsePost)
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  if (!/^[a-z0-9-]+$/.test(slug)) return undefined;
  return getAllPosts().find((post) => post.slug === slug);
}

export function getAllPostMetadata(): BlogPostMeta[] {
  return getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
    tags: post.tags,
    published: post.published,
    readingTime: post.readingTime,
    translation: post.translation
      ? { title: post.translation.title, description: post.translation.description }
      : undefined,
  }));
}

export function getAdjacentPosts(slug: string) {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);

  return {
    newer: index > 0 ? posts[index - 1] : undefined,
    older: index >= 0 && index < posts.length - 1 ? posts[index + 1] : undefined,
  };
}

export function getAllTags() {
  return [...new Set(getAllPosts().flatMap((post) => post.tags))].sort((a, b) =>
    a.localeCompare(b, "es"),
  );
}

export function formatPostDate(date: string, locale = "es-MX") {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
