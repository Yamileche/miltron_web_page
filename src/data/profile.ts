export const profile = {
  name: "Milton Yamil Velazquez Montoya",
  shortName: "Milton Velazquez",
  initials: "MV",
  role: "Backend / Cloud Developer",
  focus: "AI Engineering",
  location: "Ciudad de México, México",
  headline: "Backend / Cloud Developer · AI Engineering",
  intro:
    "Desarrollo servicios backend, integraciones y sistemas cloud principalmente con Python. Actualmente estoy profundizando en agentes de Inteligencia Artificial, LLMs, Rust y arquitecturas híbridas orientadas a construir software más eficiente y robusto.",
  about: [
    "Soy desarrollador Backend/Cloud con formación en Física y Matemáticas por la Escuela Superior de Física y Matemáticas del Instituto Politécnico Nacional.",
    "Mi trabajo se centra principalmente en desarrollo backend con Python, construcción e integración de APIs, servicios cloud, bases de datos y automatización.",
    "En paralelo estoy enfocando mi crecimiento profesional hacia AI Engineering, especialmente agentes basados en LLMs, RAG, LangGraph y ejecución local de modelos.",
    "También estoy aprendiendo Rust para comprender mejor sistemas de bajo nivel, ownership, concurrencia y rendimiento, y explorar arquitecturas híbridas Python–Rust.",
  ],
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
  period: string;
  location: string;
  summary: string;
  highlights: readonly string[];
  technologies: readonly string[];
  focus?: string;
};

export const experiences: readonly Experience[] = [
  {
    company: "Envíoclick | Ship Smarter",
    role: "Backend Developer",
    period: "Marzo 2026 – Actualidad",
    location: "México",
    summary:
      "Desarrollo y mantenimiento de servicios backend e integraciones para procesos logísticos, con atención a la confiabilidad, el procesamiento de datos y la observabilidad.",
    highlights: [
      "Construcción y mantenimiento de servicios backend y APIs REST.",
      "Integración con proveedores logísticos, carriers internacionales y APIs externas.",
      "Procesamiento y validación de información de envíos y automatización de procesos.",
      "Debugging y observabilidad mediante logs cloud, pruebas unitarias y mocks de servicios externos.",
    ],
    technologies: [
      "Python",
      "Flask",
      "AWS Lambda",
      "CloudWatch",
      "MySQL",
      "Redis",
      "SQLAlchemy",
      "Docker",
      "CI/CD",
    ],
  },
  {
    company: "Pharma Shared Services",
    role: "Software Developer — Backend & Automation",
    period: "Noviembre 2023 – Marzo 2026",
    location: "",
    summary:
      "Experiencia enfocada en desarrollo backend, automatización de procesos e integración de sistemas empresariales, combinando software, cloud e Inteligencia Artificial.",
    highlights: [
      "Desarrollo de servicios backend con Python y diseño de APIs para integrar diferentes sistemas.",
      "Desarrollo de bots empresariales para Microsoft Teams mediante Microsoft Bot Framework.",
      "Integración de soluciones conversacionales con servicios externos, modelos de OpenAI y flujos para WhatsApp.",
      "Automatización de procesos de negocio con Power Automate y desarrollo de soluciones internas con Power Apps.",
      "Construcción y mantenimiento de procesos ETL, pipelines de datos e integraciones entre plataformas.",
      "Participación en deployments, infraestructura, DevOps y automatización de procesos operativos.",
    ],
    technologies: [
      "Python",
      "REST APIs",
      "Microsoft Bot Framework",
      "Teams Bots",
      "WhatsApp Bots",
      "OpenAI APIs",
      "Power Automate",
      "Power Apps",
      "ETLs",
      "Data Pipelines",
      "Microsoft Azure",
      "DevOps",
    ],
    focus: "Backend + Automatización + Cloud + Inteligencia Artificial",
  },
];

export const education = {
  institution: "Escuela Superior de Física y Matemáticas — IPN",
  program: "Física y Matemáticas",
  period: "2018 – 2023",
  description:
    "Una formación que fortaleció mi pensamiento analítico y la forma en que abordo problemas complejos en software e Inteligencia Artificial.",
} as const;

export const navigation = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Experiencia", href: "/#experiencia" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Tecnologías", href: "/#tecnologias" },
  { label: "Aprendizaje", href: "/#aprendizaje" },
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
