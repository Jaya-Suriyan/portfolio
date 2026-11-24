import { profile } from "@/data/profile";
import { Section } from "./Section";

const glance = [
  { label: "Focus", value: "Generative AI and full stack web applications" },
  { label: "Stacks", value: "MERN and PERN, with Python for AI work" },
  { label: "Clients", value: "Eli Lilly, Tata Consumer Products, Hospital Association of Southern California" },
  { label: "Languages", value: profile.spokenLanguages.join(", ") },
];

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="space-y-5 text-lg leading-relaxed text-pretty">
        {profile.about.map((paragraph, i) => (
          <p key={i} className={i === 0 ? "text-fg" : "text-muted"}>
            {paragraph}
          </p>
        ))}
      </div>

      <dl className="mt-10 grid gap-x-8 gap-y-5 border-t border-line pt-8 sm:grid-cols-2">
        {glance.map((item) => (
          <div key={item.label}>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">{item.label}</dt>
            <dd className="mt-1 text-sm leading-relaxed">{item.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
