import { localized, type Localized } from "@/data/localized";

export type EngineeringHighlight = {
  id: string;
  eyebrow: Localized<string>;
  title: Localized<string>;
  description: Localized<string>;
  tags: readonly string[];
};

export const engineeringHighlights: readonly EngineeringHighlight[] = [
  {
    id: "performance",
    eyebrow: localized("Performance Engineering", "Performance Engineering"),
    title: localized("91% menos latencia en geocodificación", "91% lower geocoding latency"),
    description: localized("Optimización de un servicio de geocodificación de 5.17 s a 0.48 s mediante mejoras de integración y caché.", "Optimized a geocoding service from 5.17 s to 0.48 s through integration and caching improvements."),
    tags: ["Python", "MySQL", "Redis", "AWS"],
  },
  {
    id: "ai",
    eyebrow: localized("Production AI", "Production AI"),
    title: localized("Agentes conversacionales empresariales", "Enterprise conversational agents"),
    description: localized("Arquitectura de microservicios con Azure OpenAI y Azure Functions, integrada con Microsoft Teams y WhatsApp.", "Microservices architecture with Azure OpenAI and Azure Functions, integrated with Microsoft Teams and WhatsApp."),
    tags: ["Azure OpenAI", "Azure Functions", "Teams", "WhatsApp"],
  },
  {
    id: "cloud",
    eyebrow: localized("Cloud Engineering", "Cloud Engineering"),
    title: localized("AWS y Azure en sistemas productivos", "AWS and Azure in production systems"),
    description: localized("Servicios serverless, integraciones distribuidas y operación de sistemas cloud para necesidades empresariales.", "Serverless services, distributed integrations and cloud-system operations for enterprise needs."),
    tags: ["AWS Lambda", "S3", "SQS", "Azure"],
  },
  {
    id: "integrations",
    eyebrow: localized("Backend Integrations", "Backend Integrations"),
    title: localized("Integración y automatización de procesos", "Systems integration and automation"),
    description: localized("APIs empresariales, operaciones logísticas, procesamiento de documentos y consultas de datos.", "Enterprise APIs, logistics operations, document processing and data queries."),
    tags: ["REST APIs", "OCR", "ETL", "BigQuery"],
  },
];
