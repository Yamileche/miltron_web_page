"use client";

import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import { experiences } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagList } from "@/components/ui/tag-list";
import { useLanguage } from "@/components/language-provider";

export function Experience() {
  const { language } = useLanguage();
  const english = language === "en";
  const translations = [
    {
      period: "March 2026 – Present",
      location: "Mexico",
      summary: "Building and maintaining backend services and integrations for logistics processes, with attention to reliability, data processing and observability.",
      focus: undefined,
      highlights: [
        "Building and maintaining backend services and REST APIs.",
        "Integrating with logistics providers, international carriers and external APIs.",
        "Processing and validating shipment information, and automating operational processes.",
        "Debugging and observability through cloud logs, unit tests and external-service mocks.",
      ],
    },
    {
      period: "November 2023 – March 2026",
      location: "",
      summary: "Experience focused on backend development, process automation and enterprise systems integration, combining software, cloud and Artificial Intelligence.",
      focus: "Backend + Automation + Cloud + Artificial Intelligence",
      highlights: [
        "Developing backend services with Python and designing APIs to connect different systems.",
        "Developing enterprise bots for Microsoft Teams with Microsoft Bot Framework.",
        "Integrating conversational solutions with external services, OpenAI models and WhatsApp workflows.",
        "Automating business processes with Power Automate and developing internal solutions with Power Apps.",
        "Building and maintaining ETL processes, data pipelines and integrations across platforms.",
        "Contributing to deployments, infrastructure, DevOps and operational automation.",
      ],
    },
  ] as const;
  return (
    <section className="section" id="experiencia">
      <div className="container">
        <SectionHeading
          eyebrow={english ? "02 / Experience" : "02 / Experiencia"}
          title={english ? "Backend applied to real-world operations." : "Backend aplicado a operaciones reales."}
          description={english ? "Services, integrations and automation with a focus on reliability and maintainability." : "Servicios, integraciones y automatización con foco en confiabilidad y mantenibilidad."}
        />
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article className="experience-card" key={experience.company}>
              <div className="experience-rail" aria-hidden="true"><span /></div>
              <div className="experience-header">
                <div>
                  <p className="card-label">
                    <BriefcaseBusiness aria-hidden="true" />
                    {index === 0 ? (english ? "Current position" : "Posición actual") : (english ? "Previous experience" : "Experiencia anterior")}
                  </p>
                  <h3>{experience.role}</h3>
                  <p className="company-name">{experience.company}</p>
                </div>
                <div className="experience-meta">
                  <p><CalendarDays aria-hidden="true" /> {english ? translations[index]?.period : experience.period}</p>
                  {(english ? translations[index]?.location : experience.location) ? <p><MapPin aria-hidden="true" /> {english ? translations[index]?.location : experience.location}</p> : null}
                </div>
              </div>
              <p className="experience-summary">{english ? translations[index]?.summary : experience.summary}</p>
              {experience.focus ? <p className="experience-focus">{english ? translations[index]?.focus : experience.focus}</p> : null}
              <div className="experience-body">
                <ul className="check-list">
                  {(english ? translations[index]?.highlights : experience.highlights)?.map((highlight) => <li key={highlight}>{highlight}</li>)}
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
