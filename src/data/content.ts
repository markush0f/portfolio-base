export const profile = {
  name: "Markus Abramian",
  role: "Desarrollador full stack",
  email: "markus@ejemplo.com",
  github: "https://github.com/markush0f",
  linkedin: "https://www.linkedin.com/",
  location: "Remoto",
};

export const projects = [
  {
    id: "01",
    year: "2025",
    kind: "SaaS",
    title: "Norte",
    text: "Panel de analítica para equipos de producto. Dashboards en tiempo real, permisos por rol y export a CSV.",
    tags: ["Astro", "React", "TypeScript"],
    href: "https://github.com/markush0f",
    link: "Repositorio",
  },
  {
    id: "02",
    year: "2024",
    kind: "API",
    title: "Relay",
    text: "API de webhooks con reintentos, firma HMAC y cola de eventos. Entrega media de 180 ms.",
    tags: ["Node", "Redis", "Postgres"],
    href: "https://github.com/markush0f",
    link: "Repositorio",
  },
  {
    id: "03",
    year: "2024",
    kind: "Producto",
    title: "Campo",
    text: "App para técnicos de campo: offline-first, fotos y partes de trabajo que se sincronizan al volver la red.",
    tags: ["React", "SQLite", "Tailwind"],
    href: "https://github.com/markush0f",
    link: "Demo",
  },
];

export const jobs = [
  {
    role: "Desarrollador · producto propio",
    time: "2024 — ahora",
    text: "Interfaces, APIs y deploys. Prioridad: código legible y páginas rápidas.",
  },
  {
    role: "Full stack · proyectos a medida",
    time: "2022 — 2024",
    text: "Auth, paneles y landings. Del brief a producción en ciclos cortos.",
  },
  {
    role: "Base",
    time: "2021 — 2022",
    text: "HTML, CSS y JavaScript. Ahí aprendí a cuidar el detalle visual.",
  },
];

export const skills = [
  { label: "Lenguajes", value: "TypeScript, SQL, JavaScript" },
  { label: "Frontend", value: "React, Astro, Tailwind" },
  { label: "Motion", value: "Anime.js, CSS" },
  { label: "Práctica", value: "Componentes, accesibilidad, CI" },
];
