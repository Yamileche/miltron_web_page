"use client";

import { ArrowRight, BookOpen, ChevronDown } from "lucide-react";
import Link from "next/link";
import { learningAreas, learningLog } from "@/data/learning";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/components/language-provider";

export function Learning() {
  const { language } = useLanguage();
  const english = language === "en";
  return (
    <section className="section section--bordered" id="aprendizaje">
      <div className="container">
        <SectionHeading
          eyebrow={english ? "05 / Continuous learning" : "05 / Aprendizaje continuo"}
          title={english ? "Learn, apply, document." : "Aprender, aplicar, documentar."}
          description={english ? "A path connecting backend and cloud with my growth toward AI Engineering and systems." : "Una trayectoria que conecta backend y cloud con mi crecimiento hacia AI Engineering y sistemas."}
        />
        <div className="learning-layout">
          <div className="learning-areas">
            {learningAreas.map((area) => (
              <article className="learning-area" key={area.title}>
                <BookOpen aria-hidden="true" />
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <ul>
                    {area.featured.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  {area.additional ? (
                    <details>
                      <summary>{english ? "See more" : "Ver más"} <ChevronDown aria-hidden="true" /></summary>
                      <ul>{area.additional.map((item) => <li key={item}>{item}</li>)}</ul>
                    </details>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
          <aside className="learning-log">
            <div className="learning-log-header">
              <p className="card-label">Recently learned</p>
              <span>learning.log</span>
            </div>
            {learningLog.map((log) => (
              <div key={log.month}>
                <time>{log.month}</time>
                <ul>{log.entries.map((entry) => <li key={entry}>→ {entry}</li>)}</ul>
              </div>
            ))}
            <Link href="/blog">{english ? "View technical notes" : "Ver notas técnicas"} <ArrowRight aria-hidden="true" /></Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
