import { credentials, education } from "@/data/profile";
import { Section } from "./Section";

export function Credentials() {
  return (
    <Section id="credentials" index="05" title="Education & certifications">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-wider text-muted">Education</h3>
          <ul className="mt-5 space-y-6">
            {education.map((e) => (
              <li key={e.degree}>
                <p className="font-medium leading-snug">{e.degree}</p>
                <p className="mt-1 text-sm text-muted">
                  {e.school} · <time>{e.year}</time>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-wider text-muted">Certifications</h3>
          <ul className="mt-5 space-y-6">
            {credentials.map((c) => (
              <li key={c.name}>
                <p className="font-medium leading-snug">{c.name}</p>
                <p className="mt-1 text-sm text-muted">
                  {c.issuer}
                  {c.date ? (
                    <>
                      {" "}
                      · <time>{c.date}</time>
                    </>
                  ) : null}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
