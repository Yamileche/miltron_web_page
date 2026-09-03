import { ArrowUpRight } from "lucide-react";
import { currentlyLearning } from "@/data/learning";
import { education, profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section className="section section--bordered" id="sobre-mi">
      <div className="container">
        <SectionHeading eyebrow="01 / Sobre mí" title="Fundamentos sólidos. Curiosidad constante." />
        <div className="about-grid">
          <div className="about-copy">
            {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <aside className="learning-now-card">
            <p className="card-label">Actualmente aprendiendo</p>
            <ul>
              {currentlyLearning.map((item) => (
                <li key={item}><ArrowUpRight aria-hidden="true" /> {item}</li>
              ))}
            </ul>
          </aside>
        </div>
        <div className="education-strip">
          <div>
            <p className="card-label">Formación académica</p>
            <h3>{education.institution}</h3>
          </div>
          <div>
            <p>{education.program}</p>
            <span>{education.period}</span>
          </div>
          <p>{education.description}</p>
        </div>
      </div>
    </section>
  );
}
