import { profile, projects, type Project } from "@/data/profile";
import { ArrowRightIcon, ArrowUpRightIcon } from "./icons";
import { Section, Tag } from "./Section";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1">
      {project.links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-fg underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            {link.label}
            <ArrowUpRightIcon />
            <span className="sr-only">: {project.name} (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function StackList({ project }: { project: Project }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={`${project.name} tech stack`}>
      {project.stack.map((s) => (
        <Tag key={s}>{s}</Tag>
      ))}
    </ul>
  );
}

function Pipeline({ steps }: { steps: string[] }) {
  return (
    <ol aria-label="Streaming pipeline" className="flex flex-wrap items-center gap-y-2 font-mono text-[11px] sm:text-xs">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center">
          <span className="rounded-md border border-line bg-bg px-2.5 py-1.5">{step}</span>
          {i < steps.length - 1 ? (
            <span aria-hidden className="mx-1.5 text-accent">
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-line bg-card p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-accent">Featured project</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.name}</h3>
          <p className="mt-1 text-muted">{project.tagline}</p>
        </div>
        <ProjectLinks project={project} />
      </div>

      <p className="mt-5 leading-relaxed text-pretty">{project.description}</p>

      {project.pipeline ? (
        <div className="mt-6">
          <Pipeline steps={project.pipeline} />
        </div>
      ) : null}

      <ul className="mt-7 grid gap-x-8 gap-y-4 lg:grid-cols-2">
        {project.highlights.map((h) => (
          <li key={h} className="relative pl-4 text-sm leading-relaxed text-muted text-pretty">
            <span aria-hidden className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-accent" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-7 border-t border-line pt-6">
        <StackList project={project} />
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-2xl border border-line p-6 transition-colors hover:border-muted/50">
      <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
      <p className="mt-1 text-sm text-muted">{project.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-pretty">{project.description}</p>
      <ul className="mt-4 space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="relative pl-4 text-sm leading-relaxed text-muted text-pretty">
            <span aria-hidden className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-accent" />
            {h}
          </li>
        ))}
      </ul>
      <div className="mt-auto space-y-5 pt-6">
        <StackList project={project} />
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" index="03" title="Projects" lead="Products I've designed, built and run on my own, from database to deploy.">
      <div className="space-y-6">
        {featured.map((p) => (
          <FeaturedProject key={p.slug} project={p} />
        ))}
        <div className="grid gap-6 lg:grid-cols-2">
          {rest.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
      <a
        href={profile.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-fg"
      >
        More on GitHub
        <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
      </a>
    </Section>
  );
}
