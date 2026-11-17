"use client";

import { ArrowUpRight } from "lucide-react";
import { currentlyLearning } from "@/data/learning";
import { education, profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/components/language-provider";

export function About() {
  const { language } = useLanguage();
  const english = language === "en";
  const about = profile.about[language];
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
            <span>{education.period[language]}</span>
          </div>
          <p>{education.description[language]}</p>
        </div>
      </div>
    </section>
  );
}
