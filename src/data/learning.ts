export type LearningArea = {
  title: string;
  description: string;
  featured: readonly string[];
  additional?: readonly string[];
};

export const learningAreas: readonly LearningArea[] = [
  {
    title: "Artificial Intelligence",
    description: "Agentes, recuperación de contexto y ejecución local de modelos.",
    featured: ["Curso para Crear Agentes de AI con LangGraph", "RAG", "Azure AI", "LLMs y modelos locales"],
  },
  {
    title: "Backend & Architecture",
    description: "Fundamentos para construir servicios mantenibles y verificables.",
    featured: ["FastAPI — Platzi", "Fundamentos de Arquitectura de Software — Platzi", "Patrones de Diseño y SOLID en Python — Platzi"],
    additional: ["Unit Testing en Python — Platzi", "Introducción al Desarrollo Backend — Platzi", "Docker Fundamentos"],
  },
  {
    title: "Rust",
    description: "Aprendizaje activo; todavía no lo presento como dominio experto.",
    featured: ["Rust básico — Platzi", "Rust Profesional — CódigoFacilito · en curso"],
  },
  {
    title: "Cloud",
    description: "Formación en fundamentos cloud e interés actual en Microsoft Azure.",
    featured: ["Google Cloud Fundamentals: Core Infrastructure", "Google Cloud Big Data & Machine Learning", "Introduction to AI and Machine Learning"],
    additional: ["Essential Infrastructure", "Core Services", "Elastic Scaling"],
  },
  {
    title: "Conocimiento complementario",
    description: "Herramientas que complementan mi especialización principal en backend.",
    featured: ["React.js", "JavaScript", "Manipulación del DOM", "Scrum Profesional"],
  },
];

export type LearningLog = {
  month: string;
  entries: readonly string[];
};

export const learningLog: readonly LearningLog[] = [
  {
    month: "Sep 2026",
    entries: [
      "Option<T> y pattern matching en Rust",
      "Structured outputs con Pydantic",
      "LangGraph StateGraph",
      "Ejecución local de modelos con Ollama",
    ],
  },
];

export const currentlyLearning = [
  "Rust",
  "LangGraph",
  "Arquitecturas de agentes AI",
  "LLMs locales",
  "RAG",
  "Azure",
  "Arquitectura de software",
  "Integración Python + Rust",
] as const;
