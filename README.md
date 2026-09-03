# Portfolio de Milton Velazquez

Portfolio profesional construido con Next.js, TypeScript y App Router. Incluye tema claro/oscuro, contenido editable, proyectos, aprendizaje continuo y blog técnico basado en Markdown/MDX.

## Desarrollo local

```bash
npm install
npm run dev
```

Antes de desplegar:

```bash
npm run typecheck
npm run lint
npm run build
```

## Contenido editable

- Perfil, enlaces, fotografía y CV: `src/data/profile.ts`
- Proyectos: `src/data/projects.ts`
- Tecnologías: `src/data/skills.ts`
- Cursos y learning log: `src/data/learning.ts`

### Publicar un artículo

Crea un archivo `.mdx` en `content/blog/`. El índice y el sitemap lo detectan automáticamente.

```yaml
---
title: "Título del artículo"
description: "Resumen breve."
date: "2026-09-03"
tags:
  - Python
  - Learning
published: true
---
```

Usa `published: false` para mantener un borrador fuera del sitio. El contenido admite Markdown, tablas, links y bloques de código con lenguaje (por ejemplo, un fence con `python`).

### Fotografía, CV y enlaces

1. Coloca la fotografía en `public/profile.jpg`.
2. En `src/data/profile.ts`, cambia `profileImage` a `"/profile.jpg"`.
3. Coloca el CV en `public/Milton_Velazquez_CV.pdf`.
4. Cambia `cvPath` a `"/Milton_Velazquez_CV.pdf"` para mostrar el botón.
5. Completa `github` y `email`; los enlaces permanecen ocultos mientras estén vacíos.

## SEO y Vercel

Configura `NEXT_PUBLIC_SITE_URL` con el dominio final, sin slash al final. Esa URL se usa para canonical, Open Graph, `robots.txt` y `sitemap.xml`.

Vercel detecta Next.js automáticamente; no requiere configuración adicional.
