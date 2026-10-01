import { useEffect, useRef } from "react";
import { animate, createScope, stagger } from "animejs";
import { jobs, profile, projects, skills } from "../data/content";

export default function Site() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !root.current) return;

    const scope = createScope({ root }).add(() => {
      animate(".reveal", {
        opacity: [0, 1],
        y: [28, 0],
        delay: stagger(70),
        duration: 900,
        ease: "outQuad",
      });

      animate(".project-card", {
        opacity: [0, 1],
        y: [36, 0],
        delay: stagger(120, { start: 280 }),
        duration: 1000,
        ease: "outQuad",
      });

      animate(".stat", {
        opacity: [0, 1],
        scale: [0.96, 1],
        delay: stagger(90, { start: 500 }),
        duration: 700,
        ease: "outQuad",
      });
    });

    return () => scope.revert();
  }, []);

  return (
    <div ref={root}>
      <header className="sticky top-0 z-20 border-b border-transparent bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex w-[min(1080px,calc(100%-8vw))] items-center gap-6 py-4">
          <a href="#inicio" className="text-lg font-semibold tracking-tight">
            MA<span className="text-accent">.</span>
          </a>
          <nav className="ml-auto hidden gap-6 text-sm text-muted md:flex">
            <a className="hover:text-ink" href="#proyectos">Proyectos</a>
            <a className="hover:text-ink" href="#experiencia">Experiencia</a>
            <a className="hover:text-ink" href="#sobre">Sobre mí</a>
            <a className="hover:text-ink" href="#contacto">Contacto</a>
          </nav>
          <a className="hidden rounded-full border border-line px-3.5 py-1.5 text-sm md:inline" href="#contacto">
            Hablemos
          </a>
        </div>
      </header>

      <main className="mx-auto w-[min(1080px,calc(100%-8vw))]">
        <section id="inicio" className="pb-12 pt-20">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {profile.role} · disponible
          </p>
          <h1 className="reveal mt-4 max-w-[14ch] font-serif text-5xl leading-[0.98] font-normal md:text-7xl">
            Construyo productos web claros, rápidos y con criterio.
          </h1>
          <p className="reveal mt-6 max-w-xl text-lg text-muted">
            Soy {profile.name}. Diseño y programo interfaces y APIs que se pueden mantener:
            de la idea al deploy, con TypeScript y atención al detalle.
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            <a className="rounded-full bg-accent px-4 py-3 text-sm font-semibold text-accent-ink" href="#proyectos">
              Ver proyectos
            </a>
            <a className="rounded-full border border-line px-4 py-3 text-sm" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
          <ul className="mt-14 grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3">
            {[["4+", "años construyendo"], ["Astro", "React + Tailwind"], ["TS", "stack principal"]].map(([n, label]) => (
              <li key={label} className="stat">
                <strong className="block font-serif text-3xl font-normal">{n}</strong>
                <span className="text-sm text-muted">{label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="proyectos" className="py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Trabajo seleccionado</p>
          <h2 className="mt-2 font-serif text-4xl font-normal md:text-5xl">Proyectos</h2>
          <div className="mt-8 grid gap-4">
            {projects.map((project) => (
              <article key={project.id} className="project-card rounded-2xl border border-line bg-soft p-6">
                <div className="flex justify-between text-sm text-muted">
                  <span>{project.id}</span>
                  <span>{project.kind} · {project.year}</span>
                </div>
                <h3 className="mt-2 text-2xl">{project.title}</h3>
                <p className="mt-2 max-w-2xl text-muted">{project.text}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-line px-2.5 py-1 text-xs">{tag}</li>
                  ))}
                </ul>
                <a className="mt-4 inline-block text-sm text-accent" href={project.href}>{project.link} →</a>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" className="py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Trayectoria</p>
          <h2 className="mt-2 font-serif text-4xl font-normal md:text-5xl">Experiencia</h2>
          <ol className="mt-6">
            {jobs.map((job) => (
              <li key={job.role} className="grid gap-2 border-t border-line py-5 md:grid-cols-[1fr_auto] md:gap-8">
                <div>
                  <h3 className="text-lg">{job.role}</h3>
                  <p className="mt-1 text-muted">{job.text}</p>
                </div>
                <time className="text-sm text-muted">{job.time}</time>
              </li>
            ))}
          </ol>
        </section>

        <section id="sobre" className="grid gap-10 py-16 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Sobre mí</p>
            <h2 className="mt-2 font-serif text-4xl font-normal md:text-5xl">Código que se puede leer dentro de seis meses.</h2>
            <p className="mt-4 text-muted">Me interesa el producto tanto como la implementación: entender el problema, recortar alcance y dejar algo que otro desarrollador pueda continuar.</p>
            <p className="mt-3 text-muted">Basado en {profile.location}. Stack de esta página: Astro, React, TypeScript, Tailwind y Anime.js.</p>
          </div>
          <ul>
            {skills.map((skill) => (
              <li key={skill.label} className="grid gap-1 border-t border-line py-3.5">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{skill.label}</span>
                <span>{skill.value}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="contacto" className="py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Contacto</p>
          <h2 className="mt-2 max-w-[16ch] font-serif text-4xl font-normal md:text-5xl">¿Tienes un producto que construir?</h2>
          <p className="mt-4 max-w-lg text-muted">Escríbeme con el contexto. Respondo en uno o dos días laborables.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="rounded-full bg-accent px-4 py-3 text-sm font-semibold text-accent-ink" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="rounded-full border border-line px-4 py-3 text-sm" href={profile.github}>GitHub</a>
            <a className="rounded-full border border-line px-4 py-3 text-sm" href={profile.linkedin}>LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex w-[min(1080px,calc(100%-8vw))] justify-between gap-4 border-t border-line py-8 text-sm text-muted">
        <span>© 2026 {profile.name}</span>
        <span>Astro · React · Tailwind · Anime.js</span>
      </footer>
    </div>
  );
}
