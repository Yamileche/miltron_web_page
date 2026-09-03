import { About } from "@/components/about";
import { BlogPreview } from "@/components/blog-preview";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Learning } from "@/components/learning";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { profile, siteConfig } from "@/data/profile";

export default function HomePage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteConfig.url,
    jobTitle: profile.role,
    address: { "@type": "PostalAddress", addressLocality: "Ciudad de México", addressCountry: "MX" },
    sameAs: [profile.linkedin, profile.github].filter(Boolean),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Learning />
      <BlogPreview />
      <Contact />
    </>
  );
}
