"use client";

import { Activity, Bot, CloudCog, PlugZap } from "lucide-react";
import { engineeringHighlights } from "@/data/highlights";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagList } from "@/components/ui/tag-list";

const icons = [Activity, Bot, CloudCog, PlugZap];

export function EngineeringHighlights() {
  const { language } = useLanguage();
  const english = language === "en";

  return (
    <section className="section section--muted" id="logros">
      <div className="container">
        <SectionHeading
          eyebrow={english ? "03 / Engineering highlights" : "03 / Logros de ingeniería"}
          title={english ? "Results grounded in production work." : "Resultados respaldados por trabajo en producción."}
          description={english ? "Selected outcomes across performance, AI, cloud and integrations." : "Resultados seleccionados en rendimiento, IA, cloud e integraciones."}
        />
        <div className="highlights-grid">
          {engineeringHighlights.map((highlight, index) => {
            const Icon = icons[index];
            return (
              <article className="highlight-card" key={highlight.id}>
                <div className="highlight-card__top"><Icon aria-hidden="true" /><p className="card-label">{highlight.eyebrow[language]}</p></div>
                <h3>{highlight.title[language]}</h3>
                <p>{highlight.description[language]}</p>
                {highlight.id === "performance" ? <div className="latency-comparison" aria-label={english ? "Latency reduced from 5.17 seconds to 0.48 seconds" : "Latencia reducida de 5.17 segundos a 0.48 segundos"}><span style={{ "--value": "100%" } as React.CSSProperties}>5.17s <small>{english ? "before" : "antes"}</small></span><span style={{ "--value": "9.3%" } as React.CSSProperties}>0.48s <small>{english ? "after" : "después"}</small></span></div> : null}
                <TagList tags={highlight.tags} compact />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
