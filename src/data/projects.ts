export type Project = {
  title: string;
  status: string;
  description: string;
  technologies: readonly string[];
  note?: string;
  pipeline?: readonly string[];
};

export const projects: readonly Project[] = [
  {
    title: "AI Content Pipeline",
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
  },
  {
    title: "Python + Rust AI Architecture",
    status: "Investigación / desarrollo",
    description:
      "Proyecto experimental para estudiar una arquitectura híbrida donde Python gestione la capa de Inteligencia Artificial y orquestación, mientras Rust pueda utilizarse en componentes donde rendimiento, concurrencia o seguridad de memoria aporten una ventaja real.",
    technologies: ["Python", "Rust", "PyO3", "FastAPI", "LangGraph", "LLMs", "Docker"],
    note:
      "El objetivo no es utilizar Rust donde Python ya es suficiente, sino identificar componentes donde una arquitectura híbrida tenga beneficios medibles.",
  },
  {
    title: "Local AI Lab",
    status: "Experimentación",
    description:
      "Laboratorio personal para ejecutar modelos locales y explorar agentes, structured outputs, tool calling, RAG, workflows y generación de contenido en un entorno controlado.",
    technologies: ["Ollama", "LangGraph", "Python", "Docker", "NVIDIA GPU", "Local LLMs"],
  },
  {
    title: "Customs Classification Agent",
    status: "Concepto / experimento",
    description:
      "Exploración para convertir información no estructurada sobre un producto y su composición en datos validados y útiles para apoyar procesos de clasificación aduanal.",
    technologies: ["Python", "Pydantic", "LLMs", "Structured Outputs"],
    note:
      "La herramienta se plantea como apoyo experimental y no como sustituto de especialistas aduanales.",
  },
];
