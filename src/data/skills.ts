export type SkillGroup = {
  title: string;
  code: string;
  items: readonly string[];
};

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Backend",
    code: "01",
    items: ["Python", "FastAPI", "Flask", "SQLAlchemy", "REST APIs", "Pydantic", "Unit Testing"],
  },
  {
    title: "Artificial Intelligence",
    code: "02",
    items: ["LangGraph", "LangChain", "Ollama", "LLM Agents", "RAG", "Structured Outputs", "Tool Calling", "Local LLMs"],
  },
  {
    title: "Cloud",
    code: "03",
    items: ["Azure Functions", "Azure AI", "AWS Lambda", "CloudWatch", "SQS", "Serverless"],
  },
  {
    title: "Databases & Data",
    code: "04",
    items: ["MySQL", "PostgreSQL", "Redis", "SQL", "Polars", "Pandas"],
  },
  {
    title: "Infrastructure",
    code: "05",
    items: ["Docker", "Git", "CI/CD", "Linux"],
  },
  {
    title: "Profundizando",
    code: "06",
    items: ["Rust", "Python + Rust", "Systems Programming", "AI Engineering", "Agentic Architectures"],
  },
];
