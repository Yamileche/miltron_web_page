import { ArrowRight, FlaskConical } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagList } from "@/components/ui/tag-list";

export function Projects() {
  return (
    <section className="section section--muted" id="proyectos">
      <div className="container">
        <SectionHeading
          eyebrow="03 / Proyectos"
          title="Experimentos que convierten ideas en sistemas."
          description="Trabajo personal y conceptual alrededor de agentes, modelos locales y arquitecturas híbridas."
        />
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={index === 0 ? "project-card project-card--featured" : "project-card"} key={project.title}>
              <div className="project-card-top">
                <p className="project-number">0{index + 1}</p>
                <p className="status-badge"><span aria-hidden="true" /> {project.status}</p>
              </div>
              <FlaskConical className="project-icon" aria-hidden="true" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.pipeline ? (
                <div className="pipeline" aria-label="Flujo conceptual">
                  {project.pipeline.map((step, stepIndex) => (
                    <span key={step}>{step}{stepIndex < project.pipeline!.length - 1 ? <ArrowRight aria-hidden="true" /> : null}</span>
                  ))}
                </div>
              ) : null}
              {project.note ? <p className="project-note">{`// ${project.note}`}</p> : null}
              <TagList tags={project.technologies} compact />
            </article>
          ))}
        </div>
        <p className="projects-footnote">
          Estos proyectos documentan mi proceso de aprendizaje. Las notas técnicas viven en el <Link href="/blog">blog <ArrowRight aria-hidden="true" /></Link>.
        </p>
      </div>
    </section>
  );
}
