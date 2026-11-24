import { profile, projects, type Link, type Project, type ProjectPart } from "@/data/profile";
import { ArrowRightIcon, ArrowUpRightIcon } from "./icons";
import { Section, Tag } from "./Section";

function LinkList({ links, context }: { links: Link[]; context: string }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-fg underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            {link.label}
            <ArrowUpRightIcon />
            <span className="sr-only">: {context} (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  if (project.links.length > 0) return <LinkList links={project.links} context={project.name} />;
  if (project.repoPrivate) return <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Private repository</p>;
  return null;
}

function StackList({ name, stack }: { name: string; stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={`${name} tech stack`}>
      {stack.map((s) => (
        <Tag key={s}>{s}</Tag>
      ))}
    </ul>
  );
}

function Bullets({ items, columns = false }: { items: string[]; columns?: boolean }) {
  return (
    <ul className={columns ? "grid gap-x-8 gap-y-4 lg:grid-cols-2" : "space-y-2"}>
      {items.map((h) => (
        <li key={h} className="relative pl-4 text-sm leading-relaxed text-muted text-pretty">
          <span aria-hidden className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-accent" />
          {h}
        </li>
      ))}
    </ul>
  );
}

function StatusBadge({ status }: { status: string }) {
  return (
    <span className="rounded-full border border-accent/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
      {status}
    </span>
  );
}

function Pipeline({ steps }: { steps: string[] }) {
  return (
    <ol aria-label="Pipeline" className="flex flex-wrap items-center gap-y-2 font-mono text-[11px] sm:text-xs">
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

function PartTile({ part }: { part: ProjectPart }) {
  return (
    <li className="flex flex-col rounded-xl border border-line bg-bg p-5">
      <p className="font-mono text-[10px] uppercase tracking-wider text-accent">{part.kind}</p>
      <h4 className="mt-1.5 font-semibold">{part.name}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted text-pretty">{part.description}</p>
      <div className="mt-auto space-y-3 pt-4">
        <StackList name={part.name} stack={part.stack} />
        {part.links?.length ? <LinkList links={part.links} context={part.name} /> : null}
      </div>
    </li>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-line bg-card p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wider">
            <span className="text-accent">Featured project</span>
            {project.period ? <span className="text-muted">{project.period}</span> : null}
            {project.status ? <StatusBadge status={project.status} /> : null}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.name}</h3>
          <p className="mt-1 text-muted">{project.tagline}</p>
        </div>
        <ProjectLinks project={project} />
      </div>

      <p className="mt-5 leading-relaxed text-pretty">{project.description}</p>

      {project.role ? (
        <p className="mt-4 border-l-2 border-accent pl-3 text-sm leading-relaxed">
          <span className="font-medium">My role: </span>
          <span className="text-muted">{project.role}</span>
        </p>
      ) : null}

      {project.pipeline ? (
        <div className="mt-6">
          <Pipeline steps={project.pipeline} />
        </div>
      ) : null}

      <div className="mt-7">
        <Bullets items={project.highlights} columns />
      </div>

      {project.parts?.length ? (
        <div className="mt-8">
          <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted">What it&apos;s made of</h4>
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {project.parts.map((part) => (
              <PartTile key={part.name} part={part} />
            ))}
          </ul>
        </div>
      ) : null}

      {project.stack.length ? (
        <div className="mt-7 border-t border-line pt-6">
          <StackList name={project.name} stack={project.stack} />
        </div>
      ) : null}
    </article>
  );
}

function ProjectCard({ project, wide }: { project: Project; wide: boolean }) {
  return (
    <article className="flex flex-col rounded-2xl border border-line p-6 transition-colors hover:border-muted/50 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          {project.status ? (
            <p className="mb-2">
              <StatusBadge status={project.status} />
            </p>
          ) : null}
          <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
          <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        </div>
        <ProjectLinks project={project} />
      </div>
      <p className="mt-4 text-sm leading-relaxed text-pretty">{project.description}</p>
      <div className="mt-4">
        <Bullets items={project.highlights} columns={wide} />
      </div>
      {project.stack.length ? (
        <div className="mt-auto pt-6">
          <StackList name={project.name} stack={project.stack} />
        </div>
      ) : null}
    </article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const single = rest.length === 1;

  return (
    <Section
      id="projects"
      index="03"
      title="Projects"
      lead="Products I've built beyond client work, from database to deploy."
    >
      <div className="space-y-6">
        {featured.map((p) => (
          <FeaturedProject key={p.slug} project={p} />
        ))}
        {rest.length ? (
          <div className={single ? "grid gap-6" : "grid gap-6 lg:grid-cols-2"}>
            {rest.map((p) => (
              <ProjectCard key={p.slug} project={p} wide={single} />
            ))}
          </div>
        ) : null}
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
