"use client";

import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/components/language-provider";

export function Contact() {
  const { language } = useLanguage();
  const english = language === "en";
  return (
    <section className="section contact-section" id="contacto">
      <div className="container contact-grid">
        <SectionHeading eyebrow={english ? "07 / Contact" : "07 / Contacto"} title={english ? "Let’s build something interesting." : "Construyamos algo interesante."} />
        <div>
          <p className="contact-copy">
            {english ? "Want to talk about backend, Artificial Intelligence, cloud or an interesting project? You can reach me through LinkedIn." : "¿Quieres hablar sobre backend, Inteligencia Artificial, cloud o algún proyecto interesante? Puedes contactarme por LinkedIn."}
          </p>
          <div className="contact-links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin aria-hidden="true" /><span>LinkedIn<small>{english ? "Let’s connect" : "Conectemos"}</small></span><ArrowUpRight aria-hidden="true" />
            </a>
            {profile.github ? (
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github aria-hidden="true" /><span>GitHub<small>Ver código</small></span><ArrowUpRight aria-hidden="true" />
              </a>
            ) : null}
            {profile.email ? (
              <a href={`mailto:${profile.email}`}>
                <Mail aria-hidden="true" /><span>Email<small>{profile.email}</small></span><ArrowUpRight aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
