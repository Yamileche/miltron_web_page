import { ArrowDown, ArrowRight, Github, Linkedin, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { TagList } from "@/components/ui/tag-list";

const heroSkills = ["Python", "FastAPI", "AI Agents", "LangGraph", "Azure", "AWS", "Rust"];

export function Hero() {
  return (
    <section className="hero section" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="availability">
            <span aria-hidden="true" />
            Construyendo y aprendiendo desde CDMX
          </p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-role">{profile.headline}</p>
          <p className="hero-intro">{profile.intro}</p>

          <TagList tags={heroSkills} compact />

          <div className="hero-actions">
            <Link className="button button--primary" href="/#proyectos">
              Ver proyectos <ArrowDown aria-hidden="true" />
            </Link>
            <Link className="button button--secondary" href="/blog">
              Leer blog <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="social-links" aria-label="Perfiles profesionales">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin aria-hidden="true" /> LinkedIn
            </a>
            {profile.github ? (
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github aria-hidden="true" /> GitHub
              </a>
            ) : null}
            <span>
              <MapPin aria-hidden="true" /> {profile.location}
            </span>
          </div>
        </div>

        <div className="hero-aside" aria-label="Perfil técnico">
          <div className="terminal-card">
            <div className="terminal-bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <small>profile.sh</small>
            </div>
            {profile.profileImage ? (
              <div className="profile-image-wrap">
                <Image
                  src={profile.profileImage}
                  alt={`Fotografía profesional de ${profile.name}`}
                  width={420}
                  height={420}
                  priority
                  sizes="(max-width: 760px) 75vw, 360px"
                />
              </div>
            ) : (
              <div className="profile-monogram" aria-hidden="true">
                <span>{profile.initials}</span>
                <div className="orbit orbit--one" />
                <div className="orbit orbit--two" />
              </div>
            )}
            <div className="terminal-lines">
              <p><span>$</span> whoami</p>
              <p className="terminal-output">milton</p>
              <p><span>$</span> focus</p>
              <p className="terminal-output">backend · cloud · ai · rust<span className="cursor" aria-hidden="true" /></p>
            </div>
          </div>
          <p className="hero-aside-note">software engineer / continuous learner</p>
        </div>
      </div>
    </section>
  );
}
