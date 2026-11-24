import { skills } from "@/data/profile";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" index="04" title="Skills">
      <dl className="divide-y divide-line border-y border-line">
        {skills.map((group) => (
          <div key={group.label} className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr] sm:gap-8">
            <dt className="pt-1 font-mono text-[11px] uppercase tracking-wider text-muted">{group.label}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-2 gap-y-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-md bg-card px-2.5 py-1 text-sm ring-1 ring-inset ring-line">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
