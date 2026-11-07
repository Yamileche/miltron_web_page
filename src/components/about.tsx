"use client";

import { ArrowUpRight } from "lucide-react";
import { currentlyLearning } from "@/data/learning";
import { education, profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/components/language-provider";

export function About() {
  const { language } = useLanguage();
  const english = language === "en";
  const about = english ? [
    "I am a Backend/Cloud developer with a degree in Physics and Mathematics from the Escuela Superior de Física y Matemáticas at Instituto Politécnico Nacional.",
    "My work focuses on Python backend development, building and integrating APIs, cloud services, databases and automation.",
    "Alongside that work, I am growing toward AI Engineering, especially LLM-based agents, RAG, LangGraph and local model execution.",
    "I am also learning Rust to better understand low-level systems, ownership, concurrency and performance, and to explore hybrid Python–Rust architectures.",
  ] : profile.about;
  return (
    <section className="section section--bordered" id="sobre-mi">
      <div className="container">
        <SectionHeading eyebrow={english ? "01 / About" : "01 / Sobre mí"} title={english ? "Strong foundations. Constant curiosity." : "Fundamentos sólidos. Curiosidad constante."} />
        <div className="about-grid">
          <div className="about-copy">
            {about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <aside className="learning-now-card">
            <p className="card-label">{english ? "Currently learning" : "Actualmente aprendiendo"}</p>
            <ul>
              {currentlyLearning.map((item) => (
                <li key={item}><ArrowUpRight aria-hidden="true" /> {item}</li>
              ))}
            </ul>
          </aside>
        </div>
        <div className="education-strip">
          <div>
            <p className="card-label">{english ? "Education" : "Formación académica"}</p>
            <h3>{education.institution}</h3>
          </div>
          <div>
            <p>{education.program}</p>
            <span>{education.period}</span>
          </div>
          <p>{english ? "A foundation that strengthened my analytical thinking and the way I approach complex problems in software and Artificial Intelligence." : education.description}</p>
        </div>
      </div>
    </section>
  );
}
