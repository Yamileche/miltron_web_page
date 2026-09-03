import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import { experiences } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagList } from "@/components/ui/tag-list";

export function Experience() {
  return (
    <section className="section" id="experiencia">
      <div className="container">
        <SectionHeading
          eyebrow="02 / Experiencia"
          title="Backend aplicado a operaciones reales."
          description="Servicios, integraciones y automatización con foco en confiabilidad y mantenibilidad."
        />
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article className="experience-card" key={experience.company}>
              <div className="experience-rail" aria-hidden="true"><span /></div>
              <div className="experience-header">
                <div>
                  <p className="card-label">
                    <BriefcaseBusiness aria-hidden="true" />
                    {index === 0 ? "Posición actual" : "Experiencia anterior"}
                  </p>
                  <h3>{experience.role}</h3>
                  <p className="company-name">{experience.company}</p>
                </div>
                <div className="experience-meta">
                  <p><CalendarDays aria-hidden="true" /> {experience.period}</p>
                  {experience.location ? <p><MapPin aria-hidden="true" /> {experience.location}</p> : null}
                </div>
              </div>
              <p className="experience-summary">{experience.summary}</p>
              {experience.focus ? <p className="experience-focus">{experience.focus}</p> : null}
              <div className="experience-body">
                <ul className="check-list">
                  {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <TagList tags={experience.technologies} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
