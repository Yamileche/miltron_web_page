import { Braces, CloudCog, Code2, Cpu, Database, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";

const icons: LucideIcon[] = [Code2, Cpu, CloudCog, Database, Wrench, Braces];

export function Skills() {
  return (
    <section className="section" id="tecnologias">
      <div className="container">
        <SectionHeading
          eyebrow="04 / Tecnologías"
          title="Herramientas organizadas por propósito."
          description="Sin porcentajes arbitrarios: tecnologías que uso y áreas en las que estoy profundizando."
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = icons[index];
            return (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-heading">
                  {Icon ? <Icon aria-hidden="true" /> : null}
                  <span>{group.code}</span>
                </div>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
