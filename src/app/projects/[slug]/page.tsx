import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { TagList } from "@/components/ui/tag-list";
import { getProjectBySlug, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const project = getProjectBySlug((await params).slug); return project ? { title: project.title, description: project.description, alternates: { canonical: `/projects/${project.slug}` } } : {}; }
export default async function ProjectPage({ params }: Props) {
  const project = getProjectBySlug((await params).slug); if (!project) notFound();
  const blocks = [["Problema", project.problem], ["Arquitectura", project.architecture], ["Objetivos", project.objectives], ["Decisiones técnicas", project.decisions], ["Implementado", project.implemented], ["Planeado", project.planned]] as const;
  return <article className="project-page"><div className="article-shell"><Link className="back-link" href="/#proyectos"><ArrowLeft aria-hidden="true" /> Volver a proyectos</Link><header className="article-header"><p className="eyebrow">{project.status}</p><h1>{project.title}</h1><p>{project.description}</p><TagList tags={project.technologies} /></header><div className="project-detail-grid">{blocks.map(([title, content]) => content ? <section key={title}><h2>{title}</h2>{Array.isArray(content) ? <ul>{content.map((item) => <li key={item}>{item}</li>)}</ul> : <p>{content}</p>}</section> : null)}</div></div></article>;
}
