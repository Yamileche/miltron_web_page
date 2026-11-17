export type SkillGroup = {
  title: string;
  code: string;
  items: readonly string[];
};

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Backend Engineering",
    code: "01",
    items: ["Python", "FastAPI", "Flask", "REST APIs", "SQL", "Microservices", "Software Architecture", "Unit Testing", "Integration Testing"],
  },
  {
    title: "Cloud & Infrastructure",
    code: "02",
    items: ["AWS Lambda", "AWS S3", "AWS SQS", "AWS CloudWatch", "Azure Functions", "Docker", "Git", "Serverless Architecture"],
  },
  {
    title: "Artificial Intelligence",
    code: "03",
    items: ["Azure OpenAI", "OpenAI API", "LLMs", "Conversational Agents", "Microsoft Bot Framework"],
  },
  {
    title: "AI Projects & Research",
    code: "04",
    items: ["LangGraph", "LangChain", "RAG", "MCP", "Ollama", "Embeddings", "Hybrid Retrieval"],
  },
  {
    title: "Databases",
    code: "05",
    items: ["MySQL", "PostgreSQL", "Redis", "BigQuery", "SQLite"],
  },
  {
    title: "Currently Exploring",
    code: "06",
    items: ["Rust", "Hybrid Python–Rust architectures", "Advanced Agentic Systems"],
  },
];
