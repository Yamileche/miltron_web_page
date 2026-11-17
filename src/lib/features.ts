export const features = {
  miltronAi: process.env.NEXT_PUBLIC_MILTRON_AI_ENABLED === "true" && Boolean(process.env.NEXT_PUBLIC_MILTRON_AI_API_URL),
} as const;
