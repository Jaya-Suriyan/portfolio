import { profile } from "@/data/profile";
import { ContactForm } from "./ContactForm";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import { Section } from "./Section";

export function Contact() {
  const channels = [
    ...(profile.email ? [{ label: profile.email, href: `mailto:${profile.email}`, icon: MailIcon, external: false }] : []),
    { label: "LinkedIn", href: profile.links.linkedin, icon: LinkedInIcon, external: true },
    { label: "GitHub", href: profile.links.github, icon: GitHubIcon, external: true },
  ];

  return (
    <Section id="contact" index="06" title="Contact">
      <h3 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Let&apos;s build something useful.</h3>
      <p className="mt-4 max-w-xl leading-relaxed text-muted text-pretty">
        Hiring for a full stack or Generative AI role, or have a project in mind? Send a message and I&apos;ll get back
        to you.
      </p>

      <ul className="mt-8 flex flex-wrap gap-3">
        {channels.map(({ label, href, icon: Icon, external }) => (
          <li key={href}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-fg"
            >
              <Icon width={16} height={16} />
              {label}
              {external ? <ArrowUpRightIcon className="text-muted" /> : null}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <ContactForm />
      </div>
    </Section>
  );
}
