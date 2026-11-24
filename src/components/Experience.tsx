import { experience, type Engagement } from "@/data/profile";
import { Section, Tag } from "./Section";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li key={item} className="relative pl-4 text-sm leading-relaxed text-muted text-pretty">
          <span aria-hidden className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function EngagementBlock({ engagement }: { engagement: Engagement }) {
  return (
    <div className="border-l border-line pl-5">
      <p className="font-mono text-[11px] uppercase tracking-wider text-accent">{engagement.kind}</p>
      <h4 className="mt-1.5 font-medium">
        {engagement.name}
        <span className="font-normal text-muted"> · {engagement.client}</span>
      </h4>
      <Bullets items={engagement.highlights} />
      {engagement.stack?.length ? (
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${engagement.name} tech stack`}>
          {engagement.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      title="Experience"
      lead="Enterprise work for global clients in pharma, consumer goods and healthcare."
    >
      <ol className="space-y-16">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="grid gap-3 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
            <p className="whitespace-nowrap pt-1 font-mono text-xs text-muted">
              <time>{job.start}</time> – <time>{job.end}</time>
            </p>
            <div className="min-w-0">
              <h3 className="text-lg font-semibold leading-snug">
                {job.role}
                <span className="font-normal text-muted"> at {job.company}</span>
              </h3>
              <p className="mt-0.5 text-sm text-muted">{job.location}</p>

              {job.highlights?.length ? <Bullets items={job.highlights} /> : null}

              {job.engagements?.length ? (
                <div className="mt-6 space-y-8">
                  {job.engagements.map((e) => (
                    <EngagementBlock key={e.name} engagement={e} />
                  ))}
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
