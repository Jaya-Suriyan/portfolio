import { profile } from "@/data/profile";
import { ArrowRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const facts = [
  { label: "Experience", value: `${profile.yearsOfExperience} years` },
  { label: "Role", value: profile.role },
  { label: "Company", value: profile.currentCompany },
  { label: "Based in", value: profile.city },
];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative isolate overflow-hidden">
      {/* Dotted grid that fades out toward the bottom right. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgb(var(--muted)/0.28)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_80%_70%_at_15%_10%,black,transparent_75%)]"
      />
      <div className="mx-auto max-w-page px-6 pb-20 pt-36 sm:pb-24 sm:pt-44">
        <p className="animate-rise font-mono text-xs uppercase tracking-[0.22em] text-accent">{profile.headline}</p>

        <h1
          id="hero-heading"
          className="mt-5 animate-rise text-5xl font-semibold tracking-[-0.035em] text-balance [animation-delay:80ms] sm:text-7xl"
        >
          {profile.name}
        </h1>

        <p className="mt-6 max-w-2xl animate-rise text-lg leading-relaxed text-muted text-pretty [animation-delay:160ms] sm:text-xl">
          {profile.intro}
        </p>

        <div className="mt-10 flex animate-rise flex-wrap items-center gap-3 [animation-delay:240ms]">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-accent-fg"
          >
            See my work
            <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-fg"
          >
            Get in touch
          </a>
          <div className="ml-1 flex items-center gap-1">
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full p-2.5 text-muted transition-colors hover:text-fg">
              <GitHubIcon />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full p-2.5 text-muted transition-colors hover:text-fg">
              <LinkedInIcon />
            </a>
            {profile.email ? (
              <a href={`mailto:${profile.email}`} aria-label="Email" className="rounded-full p-2.5 text-muted transition-colors hover:text-fg">
                <MailIcon />
              </a>
            ) : null}
          </div>
        </div>

        <dl className="mt-16 grid animate-rise grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line [animation-delay:320ms] sm:mt-20 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-bg px-5 py-4">
              <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">{fact.label}</dt>
              <dd className="mt-1.5 text-base font-medium sm:text-lg">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
