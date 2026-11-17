export type Project = {
  slug: string;
  title: string;
  status: string;
  description: string;
  technologies: readonly string[];
  note?: string;
  pipeline?: readonly string[];
  problem: string;
  objectives: readonly string[];
  architecture: string;
  decisions: readonly string[];
  implemented: readonly string[];
  planned?: readonly string[];
};

export const projects: readonly Project[] = [
  {
    slug: "story-forge",
    title: "Story Forge",
    status: "En desarrollo",
    description:
      "Proyecto para experimentar con workflows multiagente donde diferentes modelos se responsabilizan de escritura, crítica, verificación, dirección y evaluación de contenido antes de solicitar aprobación humana.",
    technologies: [
      "Python",
      "LangGraph",
      "LangChain",
      "Ollama",
      "Pydantic",
      "Local LLMs",
      "Generative AI",
    ],
    pipeline: [
      "Idea",
      "Writer",
      "Critic",
      "Fact check",
      "Rewrite",
      "Scene director",
      "Media",
      "Quality score",
      "Human approval",
    ],
    problem: "Explorar cómo dividir un flujo creativo complejo en responsabilidades verificables antes de publicar contenido.",
    objectives: ["Orquestar agentes especializados", "Incorporar revisión y verificación", "Mantener aprobación humana antes de publicar"],
    architecture: "Flujo LangGraph con escritura, crítica, verificación, dirección de escena y aprobación humana.",
    decisions: ["Estados y transiciones explícitas", "Separación entre generación, crítica y aprobación", "Modelos locales para experimentación"],
    implemented: ["Investigación de flujos multiagente", "Diseño de responsabilidades y orquestación"],
    planned: ["Síntesis de voz", "Generación multimedia", "Evaluación de calidad automatizada"],
  },
  {
    slug: "python-rust-hybrid-architecture",
    title: "Python–Rust Hybrid Architecture",
    status: "Investigación / desarrollo",
    description:
      "Proyecto experimental para estudiar una arquitectura híbrida donde Python gestione la capa de Inteligencia Artificial y orquestación, mientras Rust pueda utilizarse en componentes donde rendimiento, concurrencia o seguridad de memoria aporten una ventaja real.",
    technologies: ["Python", "Rust", "PyO3", "FastAPI", "LangGraph", "LLMs", "Docker"],
    note:
      "El objetivo no es utilizar Rust donde Python ya es suficiente, sino identificar componentes donde una arquitectura híbrida tenga beneficios medibles.",
    problem: "Identificar cuándo la complejidad adicional de dos lenguajes ofrece una ventaja medible.",
    objectives: ["Evaluar interoperabilidad", "Diseñar benchmarks representativos", "Explorar fronteras de arquitectura"],
    architecture: "Python para orquestación y experimentación; Rust para componentes acotados de rendimiento o concurrencia.",
    decisions: ["Medir antes de optimizar", "Mantener una frontera clara entre lenguajes", "Evitar Rust donde Python sea suficiente"],
    implemented: ["Investigación de alternativas de interoperabilidad"],
    planned: ["Benchmarks reproducibles", "Prototipos acotados con PyO3"],
  },
  {
    slug: "ai-logistics-assistant",
    title: "AI Logistics Assistant",
    status: "Proyecto personal / prototipo",
    description:
      "Prototipo para investigar consultas y operaciones logísticas mediante herramientas, recuperación híbrida y memoria conversacional.",
    technologies: ["Python", "LangGraph", "LLMs", "RAG", "BM25", "Embeddings", "SQLite"],
    problem: "Dar contexto a preguntas operativas combinando recuperación de información y herramientas.",
    objectives: ["Clasificación de intenciones", "Consulta de información logística", "Recuperación híbrida y memoria conversacional"],
    architecture: "Agente LangGraph con RAG híbrido mediante BM25 y embeddings, más memoria conversacional SQLite.",
    decisions: ["Reciprocal Rank Fusion", "Herramientas separadas de recuperación", "SQLite para un prototipo autocontenido"],
    implemented: ["Diseño de arquitectura y alcance del prototipo"],
    planned: ["Herramientas de cotización y seguimiento", "Evaluación de recuperación"],
  },
  {
    slug: "miltron-ai",
    title: "Miltron AI",
    status: "Planeado",
    description:
      "Asistente conversacional planeado para facilitar la evaluación del perfil profesional y sus proyectos.",
    technologies: ["FastAPI", "SSE", "Markdown", "LLMs"],
    note:
      "La interfaz se habilitará únicamente cuando exista un backend configurado; no presenta respuestas simuladas.",
    problem: "Facilitar que reclutadores y equipos técnicos consulten información relevante de forma directa y con fuentes.",
    objectives: ["Responder en español e inglés", "Explicar experiencia y proyectos", "Mostrar referencias"],
    architecture: "Interfaz desacoplada de un backend externo, preparada para SSE y un proveedor de LLM configurable.",
    decisions: ["Feature flag hasta tener backend", "Sin respuestas simuladas", "Variables de entorno para backend"],
    implemented: ["Modelo de contenido y espacio visual planificado"],
    planned: ["Chat en streaming", "Fuentes y referencias", "Rate limiting y manejo de errores"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
