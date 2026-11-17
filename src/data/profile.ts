import { localized, type Localized } from "@/data/localized";

export const profile = {
  name: "Milton Yamil Velazquez Montoya",
  shortName: "Milton Velazquez",
  initials: "MV",
  role: "Backend & AI Engineer",
  focus: "Python · Cloud Computing · Microservices · Generative AI",
  location: "Ciudad de México, México",
  headline: "Backend & AI Engineer",
  intro: localized(
    "Ingeniero de software con experiencia profesional desde 2023 en el diseño e implementación de sistemas backend, arquitecturas serverless y soluciones de inteligencia artificial generativa. Especializado en Python, integración de sistemas, microservicios y servicios cloud sobre AWS y Azure.",
    "Software Engineer with professional experience since 2023 designing and implementing backend systems, serverless architectures, and generative AI solutions. Specialized in Python, system integration, microservices, and cloud services on AWS and Azure.",
  ),
  about: localized(
    [
      "Soy Backend & AI Engineer con formación en Física y Matemáticas por la Escuela Superior de Física y Matemáticas del Instituto Politécnico Nacional.",
      "Desde 2023 he diseñado e implementado sistemas backend, arquitecturas serverless e integraciones para operaciones empresariales y logística, principalmente con Python, AWS y Azure.",
      "También he participado en soluciones de inteligencia artificial generativa, agentes conversacionales e integración de sistemas, cuidando mantenibilidad, observabilidad y calidad de software.",
      "Mantengo una línea activa de investigación en LangGraph, RAG, modelos locales y arquitecturas híbridas Python–Rust.",
    ],
    [
      "I am a Backend & AI Engineer with a degree in Physics and Mathematics from the Escuela Superior de Física y Matemáticas at Instituto Politécnico Nacional.",
      "Since 2023, I have designed and implemented backend systems, serverless architectures and integrations for enterprise operations and logistics, primarily with Python, AWS and Azure.",
      "I have also contributed to generative AI solutions, conversational agents and systems integration, with an emphasis on maintainability, observability and software quality.",
      "I maintain an active research track in LangGraph, RAG, local models and hybrid Python–Rust architectures.",
    ],
  ),
  linkedin:
    "https://www.linkedin.com/in/milton-yamil-velazquez-montoya-884454232",
  github: "",
  email: "",
  profileImage: "/profile.png",
  cvPath: "/Milton_Velazquez_CV.pdf",
} as const;

export type Experience = {
  company: string;
  role: string;
  roleLocalized?: Localized<string>;
  period: Localized<string>;
  location: string;
  summary: Localized<string>;
  highlights: Localized<readonly string[]>;
  technologies: readonly string[];
  focus?: Localized<string>;
};

export const experiences: readonly Experience[] = [
  {
    company: "Envíoclick | Ship Smarter",
    role: "Backend Developer",
    period: localized("Marzo 2026 – Actualidad", "March 2026 – Present"),
    location: "México",
    summary: localized(
      "Desarrollo y mantenimiento de microservicios, APIs REST y funciones serverless para operaciones logísticas, con foco en confiabilidad, rendimiento y observabilidad.",
      "Development and maintenance of microservices, REST APIs and serverless functions for logistics operations, focused on reliability, performance and observability.",
    ),
    highlights: localized([
      "Microservicios, APIs REST y funciones AWS Lambda con Python para operaciones logísticas.",
      "Integración con proveedores para cotización, generación de envíos, geocodificación y fulfillment.",
      "Reducción de la latencia de un servicio de geocodificación de 5.17 s a 0.48 s (~91%).",
      "Mecanismos de caché con MySQL y Redis, pruebas unitarias e integración, y diagnóstico con CloudWatch.",
    ], [
      "Python microservices, REST APIs and AWS Lambda functions for logistics operations.",
      "Provider integrations for quoting, shipment creation, geocoding and fulfillment.",
      "Reduced a geocoding service’s latency from 5.17 s to 0.48 s (~91%).",
      "Caching with MySQL and Redis, unit and integration testing, and CloudWatch-based incident diagnosis.",
    ]),
    technologies: [
      "Python",
      "AWS Lambda",
      "AWS S3",
      "AWS SQS",
      "CloudWatch",
      "MySQL",
      "Redis",
      "Serverless",
      "Microservices",
    ],
  },
  {
    company: "Pharma Shared Services",
    role: "Backend & AI Developer",
    period: localized("Noviembre 2023 – Marzo 2026", "November 2023 – March 2026"),
    location: "",
    summary: localized(
      "Desarrollo backend, automatización e integración de sistemas empresariales, combinando microservicios, cloud e inteligencia artificial generativa.",
      "Backend development, automation and enterprise systems integration, combining microservices, cloud and generative artificial intelligence.",
    ),
    highlights: localized([
      "Arquitectura de microservicios para un agente empresarial con Python, Azure OpenAI y Azure Functions.",
      "Componentes de un agente conversacional para Microsoft Teams y WhatsApp, para usuarios internos y clientes externos.",
      "APIs, bots e integraciones empresariales con Python, Microsoft Bot Framework y Azure.",
      "Consultas de datos en lenguaje natural, OCR de PDFs, ETL y pipelines de integración con SQL y BigQuery.",
    ], [
      "Microservices architecture for an enterprise agent using Python, Azure OpenAI and Azure Functions.",
      "Conversational-agent components for Microsoft Teams and WhatsApp, serving internal users and external customers.",
      "APIs, bots and enterprise integrations built with Python, Microsoft Bot Framework and Azure.",
      "Natural-language data queries, PDF OCR, ETL and integration pipelines with SQL and BigQuery.",
    ]),
    technologies: [
      "Python",
      "Azure Functions",
      "Azure OpenAI",
      "Microsoft Bot Framework",
      "Teams Bots",
      "WhatsApp Bots",
      "SQL",
      "BigQuery",
      "OCR",
      "Power Automate",
      "Power Apps",
      "ETL",
    ],
    focus: localized("Backend + IA + Cloud + Automatización", "Backend + AI + Cloud + Automation"),
  },
];

export const education = {
  institution: "Escuela Superior de Física y Matemáticas — IPN",
  program: "Física y Matemáticas",
  period: localized("Agosto 2018 – Enero 2023", "August 2018 – January 2023"),
  description: localized(
    "Estudios concluidos; titulación pendiente. Una formación que fortaleció el pensamiento analítico, el modelado matemático y la resolución de problemas complejos aplicados a software e inteligencia artificial.",
    "Coursework completed; degree pending. A foundation that strengthened analytical thinking, mathematical modeling and complex problem solving applied to software and artificial intelligence.",
  ),
} as const;

export const navigation = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Experiencia", href: "/#experiencia" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/#contacto" },
] as const;

export const siteConfig = {
  title: "Milton Velazquez | Backend, Cloud & AI Engineer",
  description:
    "Backend and Cloud Developer specialized in Python, APIs and cloud services, currently focused on AI Engineering, LangGraph, LLM agents and Rust.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  locale: "es_MX",
} as const;
